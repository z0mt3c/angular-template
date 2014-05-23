define(['angular'], function (angular) {
    'use strict';
    var masterDetailServices = angular.module('MasterDetailServices', ['ngResource']);

    masterDetailServices.factory('MasterDetail', ['$resource', function ($resource) {
        return $resource('/api/masterdetail/:id', {}, {
            query: { method: 'GET', cache: true, isArray: true, stripTrailingSlashes: true },
            get: { method: 'GET', cache: true, params: { id: '@id' } }
        });
    }]);
});
