angular.module('RDash').controller('OperadorCtrl', ['$scope', 'DataService', OperadorCtrl])

function OperadorCtrl($scope, DataService) {

  $scope.dados = function() {
      return DataService.getItem();
  };

  $scope.$watch($scope.dados, function(newValue, oldValue) {

      $scope.dados = DataService.getItem();

  });

  $scope.changedValue = function (id){
      desenharTimelineLinha(id, $scope.dados);
      desenharTimelineOperador(id, $scope.dados);
  }

}

function downloadURI(uri, name) {
    var link = document.createElement("a");

    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    //after creating link you should delete dynamic link
    //clearDynamicLink(link);
}

function convertImageToCanvas(image) {
	var canvas = document.createElement("canvas");
	canvas.width = image.width;
	canvas.height = image.height;
	canvas.getContext("2d").drawImage(image, 0, 0);

	return canvas;
}

function desenharTimelineOperador(idLinha, dados) {

  google.charts.load("current", {packages:["timeline"]});
  google.charts.setOnLoadCallback(drawTimeline);

  function drawTimeline() {

      var dataTable = new google.visualization.DataTable();

      dataTable.addColumn({ type: 'string', id: 'Máquina' });
      dataTable.addColumn({ type: 'string', id: 'Job' });
      dataTable.addColumn({ type: 'string', role: 'Tarefa' });
      dataTable.addColumn({ type: 'date', id: 'Início' });
      dataTable.addColumn({ type: 'date', id: 'Fim' });

      angular.forEach(dados.distribuicao, function(value, key) {
          if (value.Linha == idLinha)
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

      var chart_div = document.getElementById('timeline-chart-operador');
      var chart = new google.visualization.Timeline(chart_div);

      chart.draw(dataTable, options);
  }

}

//------------------------------------------------------------------------------

function desenharTimelineLinha(idLinha, dados) {

    google.charts.load("current", {packages:["timeline"]});
    google.charts.setOnLoadCallback(drawTimeline);

    function drawTimeline() {

        var dataTable = new google.visualization.DataTable();

        dataTable.addColumn({ type: 'string', id: 'Máquina' });
        dataTable.addColumn({ type: 'string', id: 'Job' });
        dataTable.addColumn({ type: 'string', role: 'tooltip' });
        dataTable.addColumn({ type: 'date', id: 'Início' });
        dataTable.addColumn({ type: 'date', id: 'Fim' });


        angular.forEach(dados.distribuicao, function(value, key) {
            if (value.Linha == idLinha){
            var aux = 'Ordem ' +value.Ordem + '.' + value.IdOperacao;

            dataTable.addRow([
                value.Operador + " : " + value.Recurso,
                'Ordem ' + value.Ordem,
                aux,
                new Date(0,0,0,0,value.Inicio, 0),
                new Date(0,0,0,0,value.Fim, 0)]);
            }
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

        var chart_div = document.getElementById('timeline-chart-linha');
        var chart = new google.visualization.Timeline(chart_div);
        chart.draw(dataTable, options);
    }
}
