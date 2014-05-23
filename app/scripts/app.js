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
        'ngRoute'
    ]);

    angular.module('app').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        //$locationProvider.html5Mode(true);
        $routeProvider.otherwise({redirectTo: '/start'});
    }]);

    return angular.module('app');
});
