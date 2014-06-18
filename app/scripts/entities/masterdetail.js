var angular = require('angular');
require('angular-resource');

var masterDetailServices = module.exports = angular.module('MasterDetailServices', [ 'ngResource' ]);

masterDetailServices.factory('MasterDetail', ['$resource', function ($resource) {
    return $resource('/api/masterdetail/:id', {}, {
        query: { method: 'GET', cache: true, isArray: true, stripTrailingSlashes: true },
        get: { method: 'GET', cache: true, params: { id: '@id' } }
    });
}]);