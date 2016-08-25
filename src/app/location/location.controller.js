(function() {
    'use strict';

    angular
        .module('app')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['topspotsFactory'];

    /* @ngInject */
    function homeCtrl(topspotsFactory) {
        var vm = this; //jshint ignore:line 
        // Create empyt topspot object to hold new top spots.
        vm.blankTopSpot = {};

        // Define getTopSpots() function here.
        getTopSpots();

        //////////////// getTopSpots function ////////////

        function getTopSpots() {
            return topspotsFactory.getTopSpots(location.spot).then(
                function(data) {
                    vm.data = data;

                },
                function(error) {
                    console.log(error);
                });
        }

        //////////////// postTopSpots function ////////////

        function postTopSpots() {
            return topspotsFactory.postTopSpots(location.spot).then(
                function(data) {    // success
                    vm.topspots.push(vm.blankTopspot);
                },
                function(error) {   // error
                    console.log(error);
                });
        }

    }
})();

