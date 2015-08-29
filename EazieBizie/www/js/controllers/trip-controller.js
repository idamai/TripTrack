starter.controller('TripCtrl', function($scope, $stateParams, $timeout,  TripsService) {
	  var response = TripsService.getItinerary($stateParams.tripId);
		  response.then(function(data) {
			  $timeout(function(){
				 $scope.trip  = data[0];
				 $scope.tripimg = "img/"+data[0].country+".jpg";
			  }, 200);
		});
});