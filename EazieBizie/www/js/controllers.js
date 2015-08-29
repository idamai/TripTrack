angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $http, $ionicModal, $stateParams, $timeout) {
  console.log('test');
  $http.get("http://tutturu.walklight.net/ezbz/users/"+$stateParams.userId).then(function(resp) {
    console.log('Success', resp.data);
    // A confirm dialog
    $scope.user = resp.data;
   })

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlacesCtrl', function($scope, $ionicPopup, $stateParams, $http) {
 $http.get("http://tutturu.walklight.net/ezbz/location/"+$stateParams.locationId+"/go").then(function(resp) {
    console.log('Success', resp.data);
    // A confirm dialog
   $scope.showConfirm = function(e) {
     var confirmPopup = $ionicPopup.confirm({
       title: 'Get Directions',
       template: 'You will be leaving the app.'
     });
     confirmPopup.then(function(res) {
       if(res) {
         window.open(e);
       } else {
         console.log('You are not sure');
       }
     });
   };
    
    $scope.places = resp.data;
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  })
})

.controller('PredepartureCtrl', function($scope, $stateParams, $http) {
  $http.get("http://tutturu.walklight.net/ezbz/location/"+$stateParams.locationId+"/checklist").then(function(resp) {
    console.log('Success', resp.data);
    
    $scope.predepartures = resp.data;
  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  })
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
