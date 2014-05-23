define(['angular'], function (angular) {
    'use strict';

    return angular.module('NotificationApp', [
        /*angJSDeps*/
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute'])
        .provider('Notifications', [function () {
            var options = {
                ttl: 3000,
                type: 'info'
            }

            this.setOptions = function (newOptions) {
                angular.extend(options, newOptions);
            };

            this.ttl = function (ttl) {
                if (angular.isDefined(ttl)) {
                    options.ttl = ttl;
                    return this;
                }
                return options.ttl;
            };

            this.type = function (type) {
                if (angular.isDefined(type)) {
                    options.type = type;
                    return this;
                }
                return options.type;
            };

            this.$get = function ($timeout, $rootScope) {
                function Notifications() {
                    this._notifications = [];
                    this.options = options;

                    Object.defineProperty(this, 'notifications', {
                        get: function () {
                            return this._notifications;
                        }
                    });

                }

                Notifications.prototype._broadcastUpdate = function () {
                    $rootScope.$broadcast('notifications::update', this.notifications);
                };

                Notifications.prototype.add = function (title, type, description, ttl) {
                    var notification, self = this;

                    notification = {
                        title: (title ? title.toString() : ''),
                        description: (description ? description.toString() : ''),
                        type: (type ? type.toString() : options.type),
                        ttl: (ttl ? parseInt(ttl, 10) : options.ttl)
                    };

                    this._notifications.push(notification);

                    $timeout(function () {
                        self.remove(notification);
                    }, notification.ttl);

                    // Broadcast change
                    this._broadcastUpdate();

                    return true;
                };

                Notifications.prototype.remove = function (notification) {
                    if (this._notifications.indexOf(notification) !== -1) {
                        _.remove(this._notifications, notification);

                        // Broadcast change
                        this._broadcastUpdate();
                    }

                    return this;
                };

                return new Notifications();
            };

            this.$get.$inject = ['$timeout', '$rootScope'];
        }])
        .controller('NotificationsCtrl', ['$scope', 'Notifications', function ($scope, Notifications) {
            $scope.notifications = Notifications.notifications;
        }]);
});
