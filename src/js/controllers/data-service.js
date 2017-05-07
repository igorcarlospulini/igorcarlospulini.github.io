angular.module('RDash').service('DataService', [DataService])

function DataService() {
  var obj = {};

  return {
    getItem: function () {
      return obj;
    },
    setItem: function(value) {
      obj = value;
    }
  };
}

function useMaquina(idLinha, dados) {

  var maquinas = [];

    angular.forEach(dados.linhas, function(value, key) {
      if (value.Nome == idLinha) {
        var tempo = new Object();
        tempo = timeMaquina(dados, idLinha, value.Recurso);
        if (tempo.ocioso > 0 || tempo.trabalho > 0)
          maquinas.push(tempo);
      }
    });
    return maquinas;
}

//------------------------------------------------------------------------------

function timeMaquina(dados, idLinha, idMaquina) {

  var fim = 0;
  var tempo = new Object();

  tempo.maquina = idMaquina;
  tempo.ocioso = 0;
  tempo.trabalho = 0;

  angular.forEach(dados.distribuicao, function(value, key) {
    if (value.Linha == idLinha)
      if (value.Recurso == idMaquina) {
        if (parseFloat(value.Inicio) != fim && fim != 0)
          tempo.ocioso += parseFloat(value.Inicio) - fim;

        fim = parseFloat(value.Fim);
        tempo.trabalho += parseFloat(value.Fim) - parseFloat(value.Inicio);
      }
  });
  return tempo;
}

//------------------------------------------------------------------------------

function useLinhaProducao(idLinha, dados) {
  var ocioso = 0,
  fim = 0,
  maquina;

  angular.forEach(dados.distribuicao, function(value, key) {
    if (value.Linha == idLinha)
    if(maquina == value.Recurso)
    if (parseFloat(value.Inicio) != fim && fim != 0)
    ocioso += parseFloat(value.Inicio) - fim;

    fim = parseFloat(value.Fim);
    maquina = value.Recurso;
  });
  return ocioso;
}

//------------------------------------------------------------------------------

function countTempoFinal(idLinha, dados) {
  var fim = 0;
  angular.forEach(dados.distribuicao, function(value, key) {
    if (value.Linha == idLinha) {
      if (parseFloat(value.Fim) > fim) {
        fim = parseFloat(value.Fim);
      }
    }
  });
  return fim;
}
