var angular = require('angular');
require('angular-ui-router');

module.exports = angular.module('MasterDetailApp', [
    require('../../entities/masterdetail').name,
    'ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider) {
        $stateProvider
            .state({
                name: 'masterdetail',
                url: '/masterdetail',
                abstract: true,
                templateUrl: 'scripts/apps/masterdetail/templates/layout.tpl.html',
                resolve: {
                    items: ['MasterDetail', function (MasterDetail) {
                        return MasterDetail.query();
                    }]
                },
                controller: 'MasterDetailListAppCtrl'
            })
            .state('masterdetail.empty', {
                url: '',
                views: {
                    'detail': {
                        templateUrl: 'scripts/apps/masterdetail/templates/empty.tpl.html'
                    }
                }
            })
            .state('masterdetail.detail', {
                url: '/{id:[0-9]{1,4}}',
                views: {
                    'detail': {
                        templateUrl: 'scripts/apps/masterdetail/templates/detail.tpl.html',
                        controller: 'MasterDetailItemAppCtrl',
                        resolve: {
                            item: ['$stateParams', 'MasterDetail', function ($stateParams, MasterDetail) {
                                return $stateParams.id ? MasterDetail.get({id: $stateParams.id}) : null;
                            }]
                        }
                    }
                }
            });
    }])
    .controller('MasterDetailItemAppCtrl', ['$scope', 'item', function ($scope, item) {
        $scope.item = item;
    }])
    .controller('MasterDetailListAppCtrl', ['$scope', 'items', function ($scope, items) {
        $scope.items = items;
    }]);