// John Pappa style
(function() {
    'use strict';

    angular
        //create the app. The empty array defines the apps dependencies, it is there so angular can create a topspotsApp.
        .module('app', []);
})();



//*******    OLD CODE NOT JOHN PAPPA STYLE *************//

  
//Call Angular.module (The go between the Model and the View)
//Tells Angular that we want a controller to this app module that we are creating.
//Passing $scope into the function, which is the between the javascript variables and html.
// angular.module('app')
// 	.controller('homeController', function($scope, $http) {
// 	    // Create the $http call that retrieves the 'topspots.json' data file into a factory and inject it into your controller.
// 	    $http.get('http://localhost:58865/api/topspots')
// 	        .success(function(topSpotsFromServer) 
// 	        {
// 	            $scope.topSpots = topSpotsFromServer;
// 	        })
// 	        .error(function(data, status, headers, config) {
// 	            //  Do some error handling here
// 	            alert('There was a problem with the http server. Please check your file and try again.');
// 	        });
// });
