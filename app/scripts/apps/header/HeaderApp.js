define(['angular'], function (angular) {
    'use strict';

    angular.module('HeaderApp', [
        /*angJSDeps*/
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'])
        .controller('HeaderCtrl', [ '$scope', '$location', '$route',
            function ($scope) {
                $scope.menu = [
                    { name: 'Start', url: '/start', navigationTrigger: 'default:start' },
                    { name: 'Hello', url: '/hello/Name', navigationTrigger: ['default:hello', 'Name'] },
                    { name: 'MasterDetail', url: '/masterdetail', navigationTrigger: 'masterdetail:start' },
                    { name: 'Notifications', url: '/demo', navigationTrigger: 'demo:demo' }
                ];
            }]);
});
