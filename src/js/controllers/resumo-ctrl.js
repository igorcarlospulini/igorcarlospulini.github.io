angular.module('RDash').controller('ResumoCtrl', ['$scope', 'DataService', ResumoCtrl])

function ResumoCtrl($scope, DataService) {

    $scope.dados = function() {
        return DataService.getItem();
    };

    $scope.$watch($scope.dados, function(newValue, oldValue) {

        $scope.dados = DataService.getItem();

        $scope.changedValue = function (id){
            var maquinas = useMaquina(id, $scope.dados);
            desenharTimeline(id, $scope.dados);
            desenharPieMaquina(maquinas);
            desenharColumnMaquina(maquinas);
        }
    });
}


//------------------------------------------------------------------------------

function desenharPieMaquina(dados) {

    google.charts.load('current', {'packages':['corechart'], 'callback': drawPie});
    google.charts.setOnLoadCallback(drawPie);

    function drawPie() {

        var dataarray = [['Utilização', 'Tempo']];

        var ocioso = 0, trabalho = 0;

        angular.forEach(dados, function(value, key) {
            ocioso += value.ocioso;
            trabalho += value.trabalho;
        });

        dataarray.push(['Ocupado', trabalho]);
        dataarray.push(['Ocioso', ocioso]);

        var data = google.visualization.arrayToDataTable(dataarray);

        var options = {
            title: 'Gráfico: Porcentagem de trabalho na Linha de Produção',
            height: 400,
            colors: ['#0d3e63', '#9f9f9f'],
            legend: { position: 'top', maxLines: 3 },
            pieSliceTextStyle: {
                fontName: 'Lato',
                fontSize: 10
            },
            legendTextStyle: {
                fontName: 'Lato',
                fontSize: 10
            }
        };

        var chart = new google.visualization.PieChart(document.getElementById('pie-chart'));

        chart.draw(data, options);
    }

}


//------------------------------------------------------------------------------

function desenharColumnMaquina(dados) {

    google.charts.load('current', {packages: ['corechart', 'bar'], 'callback': drawColumn});
    google.charts.setOnLoadCallback(drawColumn);

    function drawColumn() {

        var dataarray = [['Máquinas', 'Ocupado', 'Ocioso']];
        var qtd = 0;

        angular.forEach(dados, function(value, key) {
            dataarray.push([value.maquina, (value.trabalho / (value.trabalho + value.ocioso)) * 100,
                (value.ocioso / (value.trabalho + value.ocioso) ) * 100]);
                qtd++;
            });

            var data = google.visualization.arrayToDataTable(dataarray);

            var options = {
                title: 'Gráfico: Máquinas da Linha de Produção',
                height: 400,
                isStacked: true,
                fontName: 'Lato',
                colors: ['#0d3e63', '#9f9f9f'],
                fontSize: 12,
                legend: { position: 'top', maxLines: 3 },
                bar: { groupWidth: '50  %' },
                legendTextStyle: {
                    fontName: 'Lato',
                    fontSize: 10
                },
                tooltipTextStyle: {
                    fontName: 'Lato',
                    fontSize: 12
                },
            };

            var chart = new google.visualization.BarChart(document.getElementById('column-chart'));
            chart.draw(data, options);
        }

    }

    //------------------------------------------------------------------------------

    function desenharTimeline(idLinha, dados) {

        google.charts.load("current", {packages:["timeline"], 'callback': drawTimeline});
        google.charts.setOnLoadCallback(drawTimeline);

        function drawTimeline() {

            var container = document.getElementById('timeline-chart');
            var material = new google.visualization.Timeline(container);
            var dataTable = new google.visualization.DataTable();

            dataTable.addColumn({ type: 'string', id: 'Máquina' });
            dataTable.addColumn({ type: 'string', id: 'Job' });
            dataTable.addColumn({ type: 'string', role: 'Tarefa' });
            dataTable.addColumn({ type: 'date', id: 'Início' });
            dataTable.addColumn({ type: 'date', id: 'Fim' });

            angular.forEach(dados.distribuicao, function(value, key) {
                if (value.Linha == idLinha)
                dataTable.addRow([ value.Recurso, 'Job ' + value.Job,
                'Tarefa ' + value.Tarefa, new Date(0,0,0,0,value.Inicio, 0),  new Date(0,0,0,0,value.Fim, 0)]);
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
