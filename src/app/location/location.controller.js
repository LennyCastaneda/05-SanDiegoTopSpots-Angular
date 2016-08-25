(function() {
    'use strict';

    angular
        .module('app')
        .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['topspotsFactory'];

    /* @ngInject */
    function homeCtrl(topspotsFactory) {
        var vm = this; //jshint ignore:line 
        // vm.HomeCtrl = 'homeCtrl';

        getTopSpots();

        ////////////////

        function getTopSpots() {
            return topspotsFactory.getTopSpots(location.spot).then(
                function(data) {
                    vm.data = data;

                },
                function(error) {
                    console.log(error);
                });
        }
    }
})();

