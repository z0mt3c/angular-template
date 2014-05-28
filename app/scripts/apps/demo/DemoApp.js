define(['angular', 'angular-ui-router', 'apps/notification/NotificationApp'], function (angular) {
    'use strict';

    angular.module('DemoApp', ['ui.router', 'NotificationApp'])
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
});
