var angular = require('angular');
//require('HeaderApp');

/*
 'apps/header/HeaderApp',
 'apps/notification/NotificationApp',
 'apps/default/DefaultApp',
 'apps/demo/DemoApp',
 'apps/masterdetail/MasterDetailApp'
 */

require('angular-ui-router');

module.exports = angular.module('app', [
    require('./apps/header/HeaderApp').name,
    require('./apps/notification/NotificationApp').name,
    //require('./apps/default/DefaultApp').name,
    require('./apps/demo/DemoApp').name,
    require('./apps/masterdetail/MasterDetailApp').name,
    /*
    'ngCookies',
    'ngResource',
    'ngSanitize',
    */
]);


angular.module('app').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/start');
}]);