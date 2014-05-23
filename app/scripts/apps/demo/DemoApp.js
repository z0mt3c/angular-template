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
        .controller('DemoAppCtrl', ['$scope', 'Notifications', function ($scope, Notifications) {
            $scope.notify = function($event, notification) {
                $event.preventDefault();
                var element = angular.element($event.currentTarget);
                Notifications.add(element.attr('data-title'), element.attr('data-type'), element.attr('data-description'));
            };
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
        }]);
});
