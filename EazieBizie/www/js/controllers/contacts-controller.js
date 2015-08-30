starter.controller('ContactsCtrl', function($scope, $stateParams, ContactsService) {

  var response = ContactsService.get($stateParams.locationId);
  response.then(function(data) {
			 if(data == null) {
			 	console.log($stateParams.locationId);
			 	$scope.contacts = JSON.parse(window.localStorage.getItem("http://tutturu.walklight.net/ezbz/location/"+$stateParams.locationId+"/contacts"));
			 	
			 } else {
			 	$scope.contacts  = data;

			 }

	});
});