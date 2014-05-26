/*jshint unused: vars */
define(['angular',
    'apps/header/HeaderApp',
    'apps/notification/NotificationApp',
    'apps/default/DefaultApp',
    'apps/demo/DemoApp',
    'apps/masterdetail/MasterDetailApp'
]/*deps*/, function (angular)/*invoke*/ {
    'use strict';

    angular.module('app', [
        'NotificationApp',
        'HeaderApp',
        'DefaultApp',
        'MasterDetailApp',
        'DemoApp',
        /*angJSDeps*/
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.router'
    ]);

    angular.module('app').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/start');
    }]);

    return angular.module('app');
});
