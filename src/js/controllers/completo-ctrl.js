angular.module('RDash').controller('CompletoCtrl', ['$scope', 'DataService', CompletoCtrl])

function CompletoCtrl($scope, DataService) {

    $scope.dados = function() {
        return DataService.getItem();
    };

    $scope.$watch($scope.dados, function(newValue, oldValue) {

        $scope.dados = DataService.getItem();

        $scope.changedValue = function (id){

        }
    });

    $scope.gerarPDF = function () {

        decisao = confirm("Desejar gerar PDF?");
        if (decisao){
            kendo.drawing.drawDOM($("#tabela")).then(function(group) {
                kendo.drawing.pdf.saveAs(group, "pdf.pdf");
            });
            alert("Arquivo gerado com sucesso!");
        }

    };
}
