var angular = require('angular');
require('angular-resource');

var defaultServices = module.exports = angular.module('DefaultServices', ['ngResource']);

defaultServices.factory('Hello', ['$resource', function ($resource) {
    return $resource('/api/hello/:name', {}, {
        get: { method: 'GET', params: {name: '@name'}}
    });
}]);