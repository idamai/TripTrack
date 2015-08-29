starter.controller('TripsCtrl', function($scope, TripsService) {
  $scope.trips = TripsService.getTrips(0);
});