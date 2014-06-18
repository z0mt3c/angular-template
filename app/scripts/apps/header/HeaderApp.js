var angular = require('angular');

module.exports = angular.module('HeaderApp', [])
    .controller('HeaderCtrl', [ '$scope',
        function ($scope) {
            $scope.menu = [
                { name: 'Start', url: '/start', navigationTrigger: 'default:start' },
                { name: 'Hello', url: '/hello/Name', navigationTrigger: ['default:hello', 'Name'] },
                { name: 'MasterDetail', url: '/masterdetail', navigationTrigger: 'masterdetail:start' },
                { name: 'Notifications', url: '/demo', navigationTrigger: 'demo:demo' }
            ];
        }]);