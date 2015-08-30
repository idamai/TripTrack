starter.controller('ContactsCtrl', function($scope, $stateParams, ContactsService) {

  var response = ContactsService.get($stateParams.locationId);
  response.then(function(data) {
			 $scope.contacts  = data;
			 
	});
});