angular.module('RDash').controller('ArquivoCtrl', ['$scope', 'DataService', ArquivoCtrl])

function ArquivoCtrl($scope, DataService) {

    $scope.dados = function() {
        return DataService.getItem();
    };

    $scope.$watch($scope.dados, function(newValue, oldValue) {

        $scope.dados = DataService.getItem();

    });

}
