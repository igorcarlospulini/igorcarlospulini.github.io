angular.module('RDash').controller('LinhaCtrl', ['$scope', 'DataService', LinhaCtrl]);

function LinhaCtrl($scope, DataService) {

    $scope.dados = function() {
        return DataService.getItem();
    };

    $scope.$watch($scope.dados, function(newValue, oldValue) {

        $scope.dados = DataService.getItem();
        if (angular.equals({}, $scope.dados) == 0)
        desenharLinhas($scope.dados);

    });
}

function desenharLinhas(dados) {

    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {


        var dataarray = [['Utilização', 'Total', 'Ocupado', 'Ocioso']];
        var linhas = uniqueArray(dados.distribuicao, 'Linha');

        angular.forEach(linhas, function(value, key) {
            var maquinas = useMaquina(value.Linha, dados);

            var trabalho = 0, ocioso = 0;
            angular.forEach(maquinas, function(v, k) {
                trabalho += v.trabalho;
                ocioso += v.ocioso;
            });
            dataarray.push([value.Linha, parseFloat(trabalho) + parseFloat(ocioso), trabalho, ocioso]);
        });

        var data = google.visualization.arrayToDataTable(dataarray);

        var options = {
            title: 'Gráfico: Linhas de Produção',
            height: linhas.length * 80,
            fontName: 'Lato',
            fontSize: 12,
            legend: { position: 'top', maxLines: 3 },
            legendTextStyle: {
                fontName: 'Lato',
                fontSize: 10
            },
            tooltipTextStyle: {
                fontName: 'Lato',
                fontSize: 14
            },
            chartArea: {height: '95%', width: '80%'}
        };

        var chart = new google.visualization.BarChart(document.getElementById('chart'));
        chart.draw(data, options);
    }
}

function uniqueArray(collection, keyname) {
    var output = [],
    keys = [];

    angular.forEach(collection, function(item) {
        var key = item[keyname];
        if(keys.indexOf(key) === -1) {
            keys.push(key);
            output.push(item);
        }
    });
    return output;
}

function uniqueArrayValue(collection, k1, v1, keyname) {
    var output = [],
    keys = [];

    angular.forEach(collection, function(item) {
        if(item[k1] == v1)
        var key = item[keyname];
        if(keys.indexOf(key) === -1) {
            keys.push(key);
            output.push(item);
        }
    });
    return output;
}
