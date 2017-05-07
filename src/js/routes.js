'use strict';

angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'templates/arquivo.html'
            })
            .state('evolucao', {
                url: '/evolucao',
                templateUrl: 'templates/evolucao.html'
            })
            .state('maquinas', {
                url: '/maquinas',
                templateUrl: 'templates/maquinas.html'
            })
            .state('linhas', {
                url: '/linhas',
                templateUrl: 'templates/linhas.html'
            });
    }
]);
