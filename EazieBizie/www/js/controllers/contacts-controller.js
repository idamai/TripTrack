starter.controller('ContactsCtrl', function($scope, $stateParams, ContactsService) {

  $scope.contacts = ContactsService.getContacts($stateParams.locationId);
  
});