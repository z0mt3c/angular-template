module.exports = {
    'angular': {
        exports: 'angular',
        depends: {
            'lodash': '_'
        }
    },
    'angular-route': {
        depends: { angular: 'angular'}},
    'angular-cookies': {
        depends: { angular: 'angular'}},
    'angular-sanitize': {
        depends: { angular: 'angular'}},
    'angular-resource': {
        depends: { angular: 'angular'}},
    'angular-mocks': {
        exports: 'angular.mock',
        depends: {
            'angular': 'angular'
        }
    },
    'angular-bootstrap-ui-modal': {
        depends: {
            'angular': 'angular',
            'angular-bootstrap-ui-transition': 'angular-bootstrap-ui-transition'
        }
    },
    'angular-bootstrap-ui-accordion': {
        depends: {
            'angular': 'angular'
        }
    },
    'angular-bootstrap-ui-alert': {
        depends: {
            'angular': 'angular'
        }
    },
    'angular-bootstrap-ui-buttons': {
        depends: {
            'angular': 'angular'
        }
    },
    'angular-bootstrap-ui-carousel': {
        depends: {
            'angular': 'angular'
        }
    },
    'angular-bootstrap-ui-collapse': {
        depends: {
            'angular': 'angular'
        }
    },
    'angular-bootstrap-ui-dateparser': {
        depends: {
            'angular': 'angular'
        }
    },
    'angular-bootstrap-ui-datepicker': {
        depends: {
            'angular': 'angular'
        }
    },
    'angular-bootstrap-ui-dropdown': {
        depends: {
            'angular': 'angular'
        }
    },
    'angular-bootstrap-ui-pagination': {
        depends: {
            'angular': 'angular'
        }
    },
    'angular-bootstrap-ui-popover': {
        depends: {
            'angular': 'angular'
        }
    },
    'angular-bootstrap-ui-position': {
        depends: {
            'angular': 'angular'
        }
    },
    'angular-bootstrap-ui-progressbar': {
        depends: {
            'angular': 'angular'
        }
    },
    'angular-bootstrap-ui-rating': {
        depends: {
            'angular': 'angular'
        }
    },
    'angular-bootstrap-ui-tabs': {
        depends: {
            'angular': 'angular'
        }
    },
    'angular-bootstrap-ui-timepicker': {
        depends: {
            'angular': 'angular'
        }
    },
    'angular-bootstrap-ui-tooltip': {
        depends: {
            'angular': 'angular'
        }
    },
    'angular-bootstrap-ui-transition': {
        depends: {
            'angular': 'angular'
        }
    },
    'angular-bootstrap-ui-typeahead': {
        depends: {
            'angular': 'angular'
        }
    }
}
;