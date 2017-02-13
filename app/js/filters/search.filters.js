(function ()
{
    'use strict';
    function search()
    {
        'use strict';
        return function (text)
        {
            return String(text).replace(/\%VERSION\%/mg);
        };
    }

    angular.module('app').filter('search', search);
})();
