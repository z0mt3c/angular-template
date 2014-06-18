var angular = require('angular');

var defaultServices = module.exports = angular.module('DefaultServices', [require('angular-resource').name]);

defaultServices.factory('Hello', ['$resource', function ($resource) {
    return $resource('/api/hello/:name', {}, {
        get: { method: 'GET', params: {name: '@name'}}
    });
}]);