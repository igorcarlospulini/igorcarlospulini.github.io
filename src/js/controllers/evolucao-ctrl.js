angular.module('RDash').directive('repeatDone', function() {
  return function(scope, element, attrs) {
      desenharEvolucao(scope.d, scope.d.Geracao);
  }
});

angular.module('RDash').controller('EvolucaoCtrl', ['$scope', 'DataService', EvolucaoCtrl])
function EvolucaoCtrl($scope, DataService) {

    $scope.dados = function() {
        return DataService.getItem();
    };

    $scope.$watch($scope.dados, function(newValue, oldValue) {
        $scope.dados = DataService.getItem();
    });

}

function desenharEvolucao(value, name) {

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    //console.log(name);

    function drawChart() {

        var data = new google.visualization.DataTable();
        data.addColumn('number', 'Intervalo');
        data.addColumn('number', 'Valor');

        var i = 1;

        angular.forEach(value, function(v, k) {
            data.addRow([i++, parseFloat(v)]);
        });

        var options = {
            hAxis: {
                title: 'Geração'
            },
            vAxis: {
                title: name
            }
        };

        var chart_div = document.getElementById('chart-' + name);
        var chart = new google.visualization.LineChart(chart_div);
        google.visualization.events.addListener(chart, 'ready', function () {
          document.getElementById('png-' + name).outerHTML =
          '<a target="_blank" href="' + chart.getImageURI() + '">Baixar Gráfico</a>';
        });
        chart.draw(data, options);

    }
}
