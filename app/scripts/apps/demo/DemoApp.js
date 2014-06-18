//define(['angular', 'ui.router', 'apps/notification/NotificationApp'], function (angular) {
var angular = require('angular');
require('angular-ui-router');

module.exports = angular.module('DemoApp', ['ui.router', require('../notification/NotificationApp').name])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('demo', {
                url: '/demo',
                templateUrl: 'scripts/apps/demo/templates/demo.tpl.html',
                controller: 'DemoAppCtrl'
            });
    }])
    .controller('DemoAppCtrl', ['$scope', 'Notifications', function ($scope, Notifications) {
        $scope.notify = function ($event) {
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