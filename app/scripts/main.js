/*jshint unused: vars */
require.config({
    paths: {
        'sass-bootstrap': '../bower_components/sass-bootstrap/dist/js/bootstrap',
        jquery: '../bower_components/jquery/dist/jquery',
        lodash: '../bower_components/lodash/dist/lodash',

        'angular-scenario': '../bower_components/angular-scenario/angular-scenario',
        'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
        'angular-route': '../bower_components/angular-route/angular-route',
        'angular-resource': '../bower_components/angular-resource/angular-resource',
        'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
        'angular-cookies': '../bower_components/angular-cookies/angular-cookies',

        'angular-bootstrap-ui-modal': '../bower_components/angular-ui-bootstrap/src/modal/modal',
        'angular-bootstrap-ui-accordion': '../bower_components/angular-ui-bootstrap/src/accordion/accordion',
        'angular-bootstrap-ui-alert': '../bower_components/angular-ui-bootstrap/src/alert/alert',
        'angular-bootstrap-ui-buttons': '../bower_components/angular-ui-bootstrap/src/buttons/buttons',
        'angular-bootstrap-ui-carousel': '../bower_components/angular-ui-bootstrap/src/carousel/carousel',
        'angular-bootstrap-ui-collapse': '../bower_components/angular-ui-bootstrap/src/collapse/collapse',
        'angular-bootstrap-ui-dateparser': '../bower_components/angular-ui-bootstrap/src/dateparser/dateparser',
        'angular-bootstrap-ui-datepicker': '../bower_components/angular-ui-bootstrap/src/datepicker/datepicker',
        'angular-bootstrap-ui-dropdown': '../bower_components/angular-ui-bootstrap/src/dropdown/dropdown',
        'angular-bootstrap-ui-pagination': '../bower_components/angular-ui-bootstrap/src/pagination/pagination',
        'angular-bootstrap-ui-popover': '../bower_components/angular-ui-bootstrap/src/popover/popover',
        'angular-bootstrap-ui-position': '../bower_components/angular-ui-bootstrap/src/position/position',
        'angular-bootstrap-ui-progressbar': '../bower_components/angular-ui-bootstrap/src/progressbar/progressbar',
        'angular-bootstrap-ui-rating': '../bower_components/angular-ui-bootstrap/src/rating/rating',
        'angular-bootstrap-ui-tabs': '../bower_components/angular-ui-bootstrap/src/tabs/tabs',
        'angular-bootstrap-ui-timepicker': '../bower_components/angular-ui-bootstrap/src/timepicker/timepicker',
        'angular-bootstrap-ui-tooltip': '../bower_components/angular-ui-bootstrap/src/tooltip/tooltip',
        'angular-bootstrap-ui-transition': '../bower_components/angular-ui-bootstrap/src/transition/transition',
        'angular-bootstrap-ui-typeahead': '../bower_components/angular-ui-bootstrap/src/typeahead/typeahead',

        angular: '../bower_components/angular/angular',
        affix: '../bower_components/twbs-bootstrap-sass/vendor/assets/javascripts/bootstrap/affix',
        alert: '../bower_components/twbs-bootstrap-sass/vendor/assets/javascripts/bootstrap/alert',
        button: '../bower_components/twbs-bootstrap-sass/vendor/assets/javascripts/bootstrap/button',
        carousel: '../bower_components/twbs-bootstrap-sass/vendor/assets/javascripts/bootstrap/carousel',
        collapse: '../bower_components/twbs-bootstrap-sass/vendor/assets/javascripts/bootstrap/collapse',
        dropdown: '../bower_components/twbs-bootstrap-sass/vendor/assets/javascripts/bootstrap/dropdown',
        tab: '../bower_components/twbs-bootstrap-sass/vendor/assets/javascripts/bootstrap/tab',
        transition: '../bower_components/twbs-bootstrap-sass/vendor/assets/javascripts/bootstrap/transition',
        scrollspy: '../bower_components/twbs-bootstrap-sass/vendor/assets/javascripts/bootstrap/scrollspy',
        modal: '../bower_components/twbs-bootstrap-sass/vendor/assets/javascripts/bootstrap/modal',
        tooltip: '../bower_components/twbs-bootstrap-sass/vendor/assets/javascripts/bootstrap/tooltip',
        popover: '../bower_components/twbs-bootstrap-sass/vendor/assets/javascripts/bootstrap/popover'
    },
    shim: {
        angular: {
            exports: 'angular',
            deps: ['lodash']
        },
        'angular-route': [
            'angular'
        ],
        'angular-cookies': [
            'angular'
        ],
        'angular-sanitize': [
            'angular'
        ],
        'angular-resource': [
            'angular'
        ],
        'angular-mocks': {
            deps: [
                'angular'
            ],
            exports: 'angular.mock'
        },
        'angular-bootstrap-ui-modal': { deps: [ 'angular' ]},
        'angular-bootstrap-ui-accordion': { deps: [ 'angular' ]},
        'angular-bootstrap-ui-alert': { deps: [ 'angular' ]},
        'angular-bootstrap-ui-buttons': { deps: [ 'angular' ]},
        'angular-bootstrap-ui-carousel': { deps: [ 'angular' ]},
        'angular-bootstrap-ui-collapse': { deps: [ 'angular' ]},
        'angular-bootstrap-ui-dateparser': { deps: [ 'angular' ]},
        'angular-bootstrap-ui-datepicker': { deps: [ 'angular' ]},
        'angular-bootstrap-ui-dropdown': { deps: [ 'angular' ]},
        'angular-bootstrap-ui-pagination': { deps: [ 'angular' ]},
        'angular-bootstrap-ui-popover': { deps: [ 'angular' ]},
        'angular-bootstrap-ui-position': { deps: [ 'angular' ]},
        'angular-bootstrap-ui-progressbar': { deps: [ 'angular' ]},
        'angular-bootstrap-ui-rating': { deps: [ 'angular' ]},
        'angular-bootstrap-ui-tabs': { deps: [ 'angular' ]},
        'angular-bootstrap-ui-timepicker': { deps: [ 'angular' ]},
        'angular-bootstrap-ui-tooltip': { deps: [ 'angular' ]},
        'angular-bootstrap-ui-transition': { deps: [ 'angular' ]},
        'angular-bootstrap-ui-typeahead': { deps: [ 'angular' ]}
    },
    priority: [
        'angular'
    ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

require([
    'angular',
    'app',
    'angular-route',
    'angular-cookies',
    'angular-sanitize',
    'angular-resource'
], function (angular, app, ngRoutes, ngCookies, ngSanitize, ngResource) {
    'use strict';
    /* jshint ignore:start */
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    /* jshint ignore:end */
    angular.element().ready(function () {
        angular.resumeBootstrap([app.name]);
    });
});