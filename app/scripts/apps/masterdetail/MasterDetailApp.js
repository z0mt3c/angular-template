define(['angular'], function (angular) {
    'use strict';

    angular.module('MasterDetailApp', [
        /*angJSDeps*/
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/masterdetail', {
                    templateUrl: 'scripts/apps/masterdetail/templates/masterdetail.tpl.html',
                    controller: 'MasterDetailAppCtrl'
                })
        })
        .controller('MasterDetailAppCtrl', function ($scope) {
        });
});
