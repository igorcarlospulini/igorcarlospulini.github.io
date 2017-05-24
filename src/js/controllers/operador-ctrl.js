angular.module('RDash').controller('OperadorCtrl', ['$scope', 'DataService', OperadorCtrl])

function OperadorCtrl($scope, DataService) {

  $scope.dados = function() {
      return DataService.getItem();
  };

  $scope.$watch($scope.dados, function(newValue, oldValue) {

      $scope.dados = DataService.getItem();

      $scope.changedValue = function (id){
          desenharTimelineLinha(id, $scope.dados);

          var myEl = angular.element( document.querySelector( '#timeline-chart-operador' ) );
          myEl.empty();
          $scope.selectOperador = 0;

      }

      $scope.changedValueOperador = function (operador, linha) {
          desenharTimelineOperador(linha, operador, $scope.dados);
      }
  });

}

function desenharTimelineOperador(idLinha, idOperador, dados) {

  google.charts.load("current", {packages:["timeline"], 'callback': drawTimeline});
  google.charts.setOnLoadCallback(drawTimeline);

  function drawTimeline() {

      var container = document.getElementById('timeline-chart-operador');
      var material = new google.visualization.Timeline(container);
      var dataTable = new google.visualization.DataTable();

      dataTable.addColumn({ type: 'string', id: 'Máquina' });
      dataTable.addColumn({ type: 'string', id: 'Job' });
      dataTable.addColumn({ type: 'string', role: 'Tarefa' });
      dataTable.addColumn({ type: 'date', id: 'Início' });
      dataTable.addColumn({ type: 'date', id: 'Fim' });

      angular.forEach(dados.distribuicao, function(value, key) {
          if (value.Linha == idLinha && value.Operador == idOperador)
            dataTable.addRow([
                value.Operador ,
                'Job ' + value.Job,
                'Tarefa ' + value.Tarefa,
                new Date(0,0,0,0,value.Inicio, 0),
                new Date(0,0,0,0,value.Fim, 0)]);
      });

      var qtd = uniqueArrayValue(dados.distribuicao, 'Linha', idLinha, 'Recurso');

      var options = {
          height: (qtd.length - 1) * 53.5,
          timeline: { showBarLabels: false,
              rowLabelStyle: {fontName: 'Lato', fontSize: 12, color: 'black' }
          },
          hAxis: {
              format: 'H:mm',
              color: '#FFFFFF'
          }
      };

      material.draw(dataTable, options);
  }

}

//------------------------------------------------------------------------------

function desenharTimelineLinha(idLinha, dados) {

    google.charts.load("current", {packages:["timeline"], 'callback': drawTimeline});
    google.charts.setOnLoadCallback(drawTimeline);

    function drawTimeline() {

        var container = document.getElementById('timeline-chart-linha');
        var material = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();

        dataTable.addColumn({ type: 'string', id: 'Máquina' });
        dataTable.addColumn({ type: 'string', id: 'Job' });
        dataTable.addColumn({ type: 'string', role: 'Tarefa' });
        dataTable.addColumn({ type: 'date', id: 'Início' });
        dataTable.addColumn({ type: 'date', id: 'Fim' });

        angular.forEach(dados.distribuicao, function(value, key) {
            if (value.Linha == idLinha)
            dataTable.addRow([
                value.Operador + " : " + value.Recurso,
                'Job ' + value.Job,
                'Tarefa ' + value.Tarefa,
                new Date(0,0,0,0,value.Inicio, 0),
                new Date(0,0,0,0,value.Fim, 0)]);
        });

        var qtd = uniqueArrayValue(dados.distribuicao, 'Linha', idLinha, 'Recurso');

        var options = {
            height: (qtd.length - 1) * 53.5,
            timeline: { showBarLabels: false,
                rowLabelStyle: {fontName: 'Lato', fontSize: 12, color: 'black' }
            },
            hAxis: {
                format: 'H:mm',
                color: '#FFFFFF'
            }
        };

        material.draw(dataTable, options);
    }
}
