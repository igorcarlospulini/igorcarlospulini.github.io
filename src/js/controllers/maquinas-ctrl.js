angular.module('RDash').controller('MaquinaCtrl', ['$scope', 'DataService', MaquinaCtrl]);

function MaquinaCtrl($scope, DataService) {

    $scope.dados = function() {
        return DataService.getItem();
    };

    $scope.$watch($scope.dados, function(newValue, oldValue) {

        $scope.dados = DataService.getItem();
        if (angular.equals({}, $scope.dados) == 0)
        desenharMaquinas($scope.dados);
    });
}


function desenharMaquinas(dados) {

    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        var dataarray = [['Utilização', 'Tempo']];
        var qtd = 0;

        angular.forEach(dados.recursos, function(v, k) {

            var recurso = v.Recurso;
            var trabalho = 0;

            angular.forEach(dados.distribuicao, function(value,key) {
                if (value.Recurso == recurso) {
                      trabalho += parseFloat(value.Tempo);
                }
            });

            if(trabalho > 0) {
                dataarray.push([recurso, trabalho]);
                qtd++;
            }
        });

        var data = google.visualization.arrayToDataTable(dataarray);

        var options = {
            title: 'Gráfico: Resursos/Máquinas',
            height: qtd * 80,
            fontName: 'Lato',
            fontSize: 14,
            legend: { position: 'top', maxLines: 3 },
            legendTextStyle: {
                fontName: 'Lato',
                fontSize: 12
            },
            tooltipTextStyle: {
                fontName: 'Lato',
                fontSize: 14
            }
        };

        var chart = new google.visualization.BarChart(document.getElementById('chart'));
        chart.draw(data, options);

    }
}
