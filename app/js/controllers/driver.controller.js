(function ()
{
    'use strict';


    function driverController(DriverAPIFactory, $routeParams)
    {
        var ctrl = this;
        ctrl.races = [];
        ctrl.driver = null;
        ctrl.id = $routeParams.id;


        DriverAPIFactory.getDriver(ctrl.id).then(function (driver)
        {
                ctrl.driver = driver.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];

        });
        DriverAPIFactory.getDriverRaces(ctrl.id).then(function (response)
        {
            ctrl.races = response.MRData.RaceTable.Races;
        });

    }

    angular.module('app').controller('driverController', driverController);
})();
