var angular = require('angular');
var masterDetailServices = module.exports = angular.module('MasterDetailServices', [require('angular-resource').name]);

masterDetailServices.factory('MasterDetail', ['$resource', function ($resource) {
    return $resource('/api/masterdetail/:id', {}, {
        query: { method: 'GET', cache: true, isArray: true, stripTrailingSlashes: true },
        get: { method: 'GET', cache: true, params: { id: '@id' } }
    });
}]);