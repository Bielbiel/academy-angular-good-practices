(function ()
{
    'use strict';
    function driverDetails(version)
    {
        return function (elm, attrs)
        {
            elm.text(version);
        };
    }


    angular.module('app').directive('driverDetails', driverDetails);
})();
