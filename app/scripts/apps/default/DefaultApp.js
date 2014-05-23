define(['angular'], function (angular) {
    'use strict';

    angular.module('DefaultApp', [
        /*angJSDeps*/
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/start', {
                    templateUrl: 'scripts/apps/default/templates/start.tpl.html',
                    controller: 'DefaultStartCtrl'
                })
                .when('/hello/:name', {
                    templateUrl: 'scripts/apps/default/templates/hello.tpl.html',
                    controller: 'DefaultHelloCtrl'
                })
        })
        .controller('DefaultStartCtrl', function () {})
        .controller('DefaultHelloCtrl', function ($scope, $routeParams) {
            $scope.name = $routeParams.name;
        });
});
