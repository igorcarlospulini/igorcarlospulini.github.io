'use strict';

angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'templates/arquivo.html'
            })
            .state('operador', {
                url: '/operador',
                templateUrl: 'templates/operador.html'
            })
            .state('evolucao', {
                url: '/evolucao',
                templateUrl: 'templates/evolucao.html'
            })
            .state('maquinas', {
                url: '/maquinas',
                templateUrl: 'templates/maquinas.html'
            })
            .state('resumo', {
                url: '/resumo',
                templateUrl: 'templates/resumo.html'
            })
            .state('completo', {
                url: '/completo',
                templateUrl: 'templates/completo.html'
            })
            .state('linhas', {
                url: '/linhas',
                templateUrl: 'templates/linhas.html'
            });
    }
]);
