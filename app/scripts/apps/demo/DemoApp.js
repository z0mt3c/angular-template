define(['angular'], function (angular) {
    'use strict';

    angular.module('DemoApp', [
        /*angJSDeps*/
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/demo', {
                    templateUrl: 'scripts/apps/demo/templates/demo.tpl.html',
                    controller: 'DemoAppCtrl'
                })
        })
        .controller('DemoAppCtrl', function ($scope) {
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        });
});
