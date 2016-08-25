(function() {
    'use strict';

    angular
        .module('app')
        .factory('topspotsFactory', topspotsFactory);

    topspotsFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    // Passing in the topspotsFactory function into the .factory function.
    function topspotsFactory($http, $q) {
        var service = {
            // Define getTopSpots function here.
            getTopSpots: getTopSpots
        };
        return service;

        ////////////////

        function getTopSpots(spot) {
            var defer = $q.defer();
            var topSpots = this; //jshint ignore:line 

            // Use $http.get function passing in the API URL location.
            // In this case URL location is local host from Visual Studio C#
            $http.get('http://localhost:58865/api/topspots')
                // Use .success callback function to that gets the JSON object back as its first argument
                .then(function(response) {
                        defer.resolve(response.data);
                        topSpots = response.data;                       
                    },
                    function(error) {
                        defer.reject(error);
                        //  Do some error handling here
                        alert('There was a problem with the http server. Please check your file and try again.');
                    }
                );
            // This defer promise variable runs before the .success callback function.
            return defer.promise;
        }
    }

})();
