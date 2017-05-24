angular.module('RDash')
.controller('MasterCtrl', ['$scope', '$cookieStore', 'DataService', MasterCtrl]);

function MasterCtrl($scope, $cookieStore, DataService) {

    $scope.upload = function () {
        DataService.setItem($scope.excel);
    }

    var mobileView = 992;

    $scope.getWidth = function() {
        return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
        if (newValue >= mobileView) {
            if (angular.isDefined($cookieStore.get('toggle'))) {
                $scope.toggle = ! $cookieStore.get('toggle') ? false : true;
            } else {
                $scope.toggle = true;
            }
        } else {
            $scope.toggle = false;
        }

    });

    $scope.toggleSidebar = function() {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function() {
        $scope.$apply();
    };

    /**
    * Menu Dinamic
    */
    $scope.menu_list = [{
        'name': 'Arquivo',
        'icon': 'fa-upload',
        'href': ''
    },{
        'name': 'Operador',
        'icon': 'fa-bookmark',
        'href': '#/operador'
    },{
        'name': 'Resumo',
        'icon': 'fa-bookmark',
        'href': '#/resumo'
    },{
        'name': 'Completo',
        'icon': 'fa-bookmark-o',
        'href': '#/completo'
    },{
        'name': 'Linhas',
        'icon': 'fa-clock-o',
        'href': '#/linhas'
    },{
        'name': 'Máquinas',
        'icon': 'fa-area-chart',
        'href': '#/maquinas'
    },{
        'name': 'Evolução',
        'icon': 'fa-line-chart',
        'href': '#/evolucao'
    }];
}
