define(['angular', 'angular-bootstrap-ui-transition', 'angular-bootstrap-ui-modal'], function (angular) {
    'use strict';

    angular.module('DefaultApp', [
        'ui.bootstrap.modal',
        /*angJSDeps*/
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/start', {
                    templateUrl: 'scripts/apps/default/templates/start.tpl.html',
                    controller: 'DefaultStartCtrl'
                })
                .when('/hello/:name', {
                    templateUrl: 'scripts/apps/default/templates/hello.tpl.html',
                    controller: 'DefaultHelloCtrl'
                })
        })
        .controller('DefaultStartCtrl', function ($scope, $modal) {
            $scope.items = ['item1', 'item2', 'item3'];

            $scope.openModal = function($event) {
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
        })
        .controller('DefaultHelloCtrl', function ($scope, $routeParams) {
            $scope.name = $routeParams.name;
        })
        .controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {
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
        });
});
