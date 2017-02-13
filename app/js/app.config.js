(function ()
{
    'use strict';

    function config($routeProvider, $locationProvider)
    {
        $locationProvider.html5Mode({
            enabled: true, requireBase: false
        });

        $routeProvider
                .when('/drivers', {
                    templateUrl: 'partials/drivers.html', controller: 'driversController', controllerAs: 'driversCtrl'
                })
                .when('/drivers/:id', {
                    templateUrl: 'partials/driver.html', controller: 'driverController', controllerAs: 'driverCtrl'
                })
                .otherwise({redirectTo: '/drivers'});
    }

    angular.module('app')
            .config(config);

})();
