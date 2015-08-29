starter.controller('TripsCtrl', function($scope, TripsService) {

      var response = TripsService.getTrips();
	  response.then(function(data) {
			 $scope.trips = data;
		});
});