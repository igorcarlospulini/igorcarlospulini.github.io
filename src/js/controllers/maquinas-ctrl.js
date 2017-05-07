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

        var dataarray = [['Utilização', 'Ocupado', 'Ocioso']];
        var qtd = 0;

        angular.forEach(dados.recursos, function(v, k) {

            var recurso = v.Recurso;
            var linha = "";
            var trabalho = 0;
            var ocioso = 0;
            var fim = 0;

            angular.forEach(dados.distribuicao, function(value,key) {
                if (value.Recurso == recurso) {
                    if(linha == value.Linha && fim != parseFloat(value.Inicio))
                    ocioso += (parseFloat(value.Inicio) - fim) * value.QtdeRecurso;

                    trabalho += (parseFloat(value.Fim) - parseFloat(value.Inicio)) * parseFloat(value.QtdeRecurso);
                    fim = parseFloat(value.Fim);
                    linha = value.Linha;
                }
            });

            if(trabalho > 0 || ocioso > 0) {
                dataarray.push([recurso, trabalho, ocioso]);
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
            colors: ['#0d3e63', '#9f9f9f'],
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
