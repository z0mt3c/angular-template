define(['angular', 'angular-bootstrap-ui-transition', 'angular-bootstrap-ui-modal', 'entities/default'], function (angular) {
    'use strict';

    angular.module('DefaultApp', [
        'ui.bootstrap.modal',
        'DefaultServices',
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
                    controller: 'DefaultHelloCtrl',
                    resolve: {
                        hello: ['$route', 'Hello', function ($route, Hello) {
                            return Hello.query({name: $route.current.params.name});
                        }]
                    }
                })
        })
        .controller('DefaultStartCtrl', function ($scope, $modal) {
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
        })
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
});
