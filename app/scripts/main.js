//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

var angular = require('angular');
var app = require('application');

/* jshint ignore:start */
var $html = angular.element(document.getElementsByTagName('html')[0]);
/* jshint ignore:end */

angular.element().ready(function () {
    angular.resumeBootstrap([app.name]);
});