starter.controller('AppCtrl', function($scope, $http, $ionicModal, $stateParams, $timeout, TripsService, UsersService) {
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
  var response = TripsService.getTrips();
  response.then(function(data) {
      if(data == null) { 
       $scope.trips  = JSON.parse(window.localStorage.getItem("trips"));
      } else {
        $scope.trips = data;
      }
  });

  var user = window.localStorage.getItem("user");

  var response2 = UsersService.getUser("idamai");
  response2.then(function(data2) {
      if(data2 == null) { 
       $scope.user  = JSON.parse(window.localStorage.getItem("user"));
      } else {
        $scope.user = data2;
      }
  });
})

.controller('ProfileCtrl', function($scope, UsersService) {
  var response2 = UsersService.getUser("idamai");
  response2.then(function(data2) {
       $scope.user  = data2;
  });
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

.controller('EventsCtrl', function($scope, $ionicPopup, $stateParams, $ionicPopup, $cordovaCalendar, $http) {


  $scope.addEvent = function(name, address, time, id) {
      var timeslot = time.split('/');

      $cordovaCalendar.createEventInteractively({
          title: name,
          location: address,
          startDate: new Date(timeslot[2], timeslot[1], timeslot[0], 9, 0, 0, 0, 0),
          endDate: new Date(timeslot[2], timeslot[1], timeslot[0], 10, 0, 0, 0, 0),
      }).then(function (result) {
          var alertPopup = $ionicPopup.alert({
             title: 'Thank You',
             template: 'Event added to calendar.'
           });
           alertPopup.then(function(res) {
             console.log('Thank you for not eating my delicious ice cream cone');
             document.getElementById(id).disabled = true;
             document.getElementById(id).innerHTML=" Going";
             document.getElementById(id).className = "button button-dark button-outline button-block ion-checkmark-round";
           });
      }, function (err) {
          console.error("There was an error: " + err);
      });
  }

 $http.get("http://tutturu.walklight.net/ezbz/location/"+$stateParams.locationId+"/do").then(function(resp) {
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
    window.localStorage.setItem("http://tutturu.walklight.net/ezbz/location/"+$stateParams.locationId+"/do", JSON.stringify(resp.data));
    $scope.events = resp.data;
  }, function(err) {
    if(window.localStorage.getItem("http://tutturu.walklight.net/ezbz/location/"+$stateParams.locationId+"/do") !== undefined) {
        var storedData = JSON.parse(window.localStorage.getItem("http://tutturu.walklight.net/ezbz/location/"+$stateParams.locationId+"/do"));
        // deferred.resolve(storedData);
        $scope.events = storedData;
    }
    console.error('ERR', err);
    // err.status will contain the status code
  })
})

.controller('ExpensesCtrl', function($scope, $ionicPopup, $stateParams, $http, $ionicModal) {



 $http.get("http://tutturu.walklight.net/ezbz/finance/"+$stateParams.locationId+"/expenses").then(function(resp) {
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

   var receipts = resp.data[0].receipts;
   console.log(receipts);
   var string = "Hi Ronald, here are the receipts I've accumulated for work in Korea. <br/>";
   for(x in receipts) {
      var count = parseInt(x)+1;
      string = string.concat("<br /><a href='"+receipts[x].image+"'>" + "Receipt " + count + "</a>");
   }

   string = string.concat("<br/><br/>Thank you,<br/>" + "Ignatius Damai.");

   
   $scope.sendFeedback= function() {
        if(window.plugins && window.plugins.emailComposer) {
            window.plugins.emailComposer.showEmailComposerWithCallback(function(result) {
                console.log("Response -> " + result);
            }, 
            "Expenses Claim", // Subject
            string,                      // Body
            ["manager@accenture.com"],    // To
            null,                    // CC
            null,                    // BCC
            true,                   // isHTML
            null,                    // Attachments
            null);                   // Attachment Data
        }
    }

   $scope.contact = {
      name: 'Mittens Cat',
      info: 'Tap anywhere on the card to open the modal'
    }

    $ionicModal.fromTemplateUrl('contact-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal
    })  

    $scope.openModal = function(image) {
      console.log(image);
      $scope.image = image;
      $scope.modal.show()
    }

    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    
   console.log(resp.data[0]);

    $scope.expenses = resp.data;

    $scope.currency = resp.data[0].currency;
    $scope.receipts = resp.data[0].receipts;
    $scope.totalExpense = resp.data[0].totalExpense;
    $scope.totalReceipts = resp.data[0].totalReceipts;
    window.localStorage.setItem("http://tutturu.walklight.net/ezbz/finance/"+$stateParams.locationId+"/expenses", JSON.stringify(resp.data));

  }, function(err) {
    console.error('ERR', err);
    if(window.localStorage.getItem("http://tutturu.walklight.net/ezbz/finance/"+$stateParams.locationId+"/expenses") !== undefined) {
        var storedData = JSON.parse(window.localStorage.getItem("http://tutturu.walklight.net/ezbz/finance/"+$stateParams.locationId+"/expenses"));
        // deferred.resolve(storedData);
        $scope.expenses = storedData;

        $scope.currency = storedData[0].currency;
        $scope.receipts = storedData[0].receipts;
        $scope.totalExpense = storedData[0].totalExpense;
        $scope.totalReceipts = storedData[0].totalReceipts;
    }
    // err.status will contain the status code
  })
})

.controller('PlacesCtrl', function($scope, $ionicPopup, $stateParams, $cordovaCalendar, $http) {



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
    window.localStorage.setItem("http://tutturu.walklight.net/ezbz/location/"+$stateParams.locationId+"/go", JSON.stringify(resp.data));
    $scope.places = resp.data;
  }, function(err) {
    if(window.localStorage.getItem("http://tutturu.walklight.net/ezbz/location/"+$stateParams.locationId+"/go") !== undefined) {
        var storedData = JSON.parse(window.localStorage.getItem("http://tutturu.walklight.net/ezbz/location/"+$stateParams.locationId+"/go"));
        // deferred.resolve(storedData);
        $scope.places = storedData;
    }
    console.error('ERR', err);
    // err.status will contain the status code
  })
})

.controller('LocalDelightsCtrl', function($scope, $ionicPopup, $stateParams, $http) {
 $http.get("http://tutturu.walklight.net/ezbz/location/"+$stateParams.locationId+"/eat").then(function(resp) {
    console.log('Success', resp.data);
   
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
    window.localStorage.setItem("http://tutturu.walklight.net/ezbz/location/"+$stateParams.locationId+"/eat", JSON.stringify(resp.data));
    $scope.localdelights = resp.data;
  }, function(err) {
    if(window.localStorage.getItem("http://tutturu.walklight.net/ezbz/location/"+$stateParams.locationId+"/eat") !== undefined) {
        var storedData = JSON.parse(window.localStorage.getItem("http://tutturu.walklight.net/ezbz/location/"+$stateParams.locationId+"/eat"));
        // deferred.resolve(storedData);
        $scope.localdelights = storedData;
    }
    console.error('ERR', err);
    // err.status will contain the status code
  })
})

.controller('PredepartureCtrl', function($scope, $stateParams, $http) {

  $scope.saveCheckbox = function(e) {
    var storedData = JSON.parse(window.localStorage.getItem("http://tutturu.walklight.net/ezbz/location/"+$stateParams.locationId+"/checklist"));
    // deferred.resolve(storedData);
    $scope.predepartures = storedData;
    for(x in $scope.predepartures) {
      if($scope.predepartures[x]._id == e) {
        console.log($scope.predepartures[x]._id);
        console.log(e);
        if($scope.predepartures[x].checked == false) {
          $scope.predepartures[x].checked = true;
        } else {
          $scope.predepartures[x].checked = false;
        }
      }
    }
    window.localStorage.setItem("http://tutturu.walklight.net/ezbz/location/"+$stateParams.locationId+"/checklist", JSON.stringify($scope.predepartures));
  }

  var storedData = JSON.parse(window.localStorage.getItem("http://tutturu.walklight.net/ezbz/location/"+$stateParams.locationId+"/checklist"));
  // deferred.resolve(storedData);
  $scope.predepartures = storedData;
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
