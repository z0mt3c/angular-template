var angular = require('angular');
require('angular-ui-router');

module.exports = angular.module('DefaultApp', [
    require('angular-bootstrap-ui-modal').name,
    require('../../entities/default').name,
    'ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider) {
        $stateProvider
            .state('start', {
                url: '/start',
                templateUrl: 'scripts/apps/default/templates/start.tpl.html',
                controller: 'DefaultStartCtrl'
            })
            .state('hello', {
                url: '/hello/:name',
                templateUrl: 'scripts/apps/default/templates/hello.tpl.html',
                controller: 'DefaultHelloCtrl',
                resolve: {
                    hello: ['Hello', '$stateParams', function (Hello, $stateParams) {
                        return Hello.get({name: $stateParams.name});
                    }]
                }
            });
    }])
    .controller('DefaultStartCtrl', ['$scope', '$modal', '$log', function ($scope, $modal, $log) {
        $scope.items = ['item1', 'item2', 'item3'];

        $scope.openModal = function ($event) {
            $event.preventDefault();

            var modalInstance = $modal.open({
                templateUrl: 'scripts/apps/default/templates/modal.tpl.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });

        };
    }])
    .controller('DefaultHelloCtrl', ['$scope', 'hello', function ($scope, hello) {
        $scope.say = hello;
    }])
    .controller('ModalInstanceCtrl', ['$scope', '$modalInstance', 'items', function ($scope, $modalInstance, items) {
        $scope.items = items;
        $scope.selected = {
            item: $scope.items[0]
        };

        $scope.ok = function () {
            $modalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);