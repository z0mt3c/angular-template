define(['angular', 'entities/masterdetail'], function (angular) {
    'use strict';

    angular.module('MasterDetailApp', [
        'MasterDetailServices',
        /*angJSDeps*/
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/masterdetail/:id', {
                    templateUrl: 'scripts/apps/masterdetail/templates/detail.tpl.html',
                    controller: 'MasterDetailItemAppCtrl',
                    resolve: {
                        item: ['$route', 'MasterDetail', function ($route, MasterDetail) {
                            var id = $route.current.params.id;
                            return id ? MasterDetail.get({id: id}) : null;
                        }]
                    }
                })
                .when('/masterdetail', {
                    templateUrl: 'scripts/apps/masterdetail/templates/detail.tpl.html',
                    controller: 'MasterDetailEmptyAppCtrl'
                })
        })
        .controller('MasterDetailItemAppCtrl', ['$scope', 'item', function ($scope, item) {
            $scope.item = item;
        }])
        .controller('MasterDetailEmptyAppCtrl', ['$scope', function ($scope) { }])
        .controller('MasterDetailListAppCtrl', ['$scope', 'MasterDetail', function ($scope, MasterDetail) {
            $scope.items = MasterDetail.query();
        }]);
});

