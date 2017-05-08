angular.module('RDash').controller('EvolucaoCtrl', ['$scope', 'DataService', EvolucaoCtrl])

function EvolucaoCtrl($scope, DataService) {

$scope.dados = function() {
    return DataService.getItem();
};

$scope.$watch($scope.dados, function(newValue, oldValue) {

    $scope.dados = DataService.getItem();
    //desenharEvolucao($scope.dados);

    angular.forEach($scope.dados.evolucao, function(value, key) {
            desenharEvolucao(value, key);
    });

});

}

function desenharEvolucao(value, name) {

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Intervalo');
    data.addColumn('number', 'Valor');

    var i = 0;

    angular.forEach(value, function(v, k) {
        data.addRow([i++, parseFloat(v)]);
    });

    var options = {
        hAxis: {
            title: 'Time'
        },
        vAxis: {
            title: 'Popularity'
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('evolucao'+name));
    chart.draw(data, options);
}
}
