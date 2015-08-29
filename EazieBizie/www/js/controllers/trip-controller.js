starter.controller('TripCtrl', function($scope, TripsService) {
  $scope.trips = TripsService.getTrips(0);
})