starter.controller('AttendeesCtrl', function($scope, $stateParams,$ionicModal, AttendeesService) {
	  var response = AttendeesService.get();
	  response.then(function(data) {
        if(data == null) {
          console.log($stateParams.locationId);
          $scope.attendees = JSON.parse(window.localStorage.getItem("http://tutturu.walklight.net/ezbz/users"));
          
         } else {
       $scope.attendees = data;

         }
	  });
	  
	   // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('views/attendee-modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeAttendee = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.openAttendee = function(attendee) {
    $scope.modal.show();
	$scope.attendee = attendee;
  };
});