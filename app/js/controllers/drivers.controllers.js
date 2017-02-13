(function ()
{
    'use strict';
    function driversController(DriverAPIFactory)
    {
        var ctrl = this;
        ctrl.nameFilter = null;
        ctrl.driversList = [];
        ctrl.searchFilter = searchFilter;

        function searchFilter(driver)
        {
            var re = new RegExp(ctrl.nameFilter, 'i');
            return !ctrl.nameFilter || re.test(driver.Driver.givenName) || re.test(driver.Driver.familyName);
        }

        DriverAPIFactory.getDrivers().then(function (response)
        {
            ctrl.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        });
    }

    angular.module('app').controller('driversController', driversController);

})();
