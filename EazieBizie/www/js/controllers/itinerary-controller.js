starter.controller('ItineraryCtrl', function($scope, $stateParams, TripsService) {
	  var response = TripsService.getItinerary($stateParams.tripId);
	  response.then(function(data) {
			 $scope.trip = data[0];
		});
});