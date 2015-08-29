var scope;
starter.controller('TripsCtrl', function($scope, TripsService) {
  $scope.trips = TripsService.getTrips(0);
  console.log('This is loaded');
  $scope.test = 'This is loaded';
  scope = $scope;
});