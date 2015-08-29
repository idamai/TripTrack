angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

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

.controller('PredepartureCtrl', function($scope) {
  $scope.predepartures = [
    { item: 'Reggae', id: 1 },
    { item: 'Chill', id: 2 },
    { item: 'Dubstep', id: 3 },
    { item: 'Indie', id: 4 },
    { item: 'Rap', id: 5 },
    { item: 'Cowbell', id: 6 }
  ];
})

.controller('PlacesToGoCtrl', function($scope) {
  $scope.placestogo = [
  {
    "_id" : "1",
    "name" : "Insadong Tearooms",
    "image" : "http://www.roughguides.com/wp-content/uploads/2013/04/52513428-1680x1050.jpg",
    "details" : "Tea may have ceded ground to coffee across the nation, but Seoul’s traditional Insadong district still has dozens of secluded places serving traditional brews.",
  },
  {
    "_id" : "2",
    "name" : "Huwon",
    "image" : "http://www.roughguides.com/wp-content/uploads/2013/04/korea0818-1680x1050.jpg",
    "details" : "Relax by the lake as kings once did at this secluded “Secret Garden”, which nestles at the back of a UNESCO-listed palace in central Seoul.",
  },
  {
    "_id" : "3",
    "name" : "Jeonju Hanok Village",
    "image" : "http://www.roughguides.com/wp-content/uploads/2013/04/korea4202-1680x1050.jpg",
    "details" : "Here you can sleep in a traditional wooden hanok house heated from underneath by gentle flames, in one of Korea’s most agreeable cities.",
  },
  {
    "_id" : "4",
    "name" : "Boryeong Mud Festival",
    "image" : "http://www.roughguides.com/wp-content/uploads/2013/04/148366018-1680x1050.jpg",
    "details" : "Korea’s dirtiest, most enjoyable festival takes place each July on the west coast – don’t forget your soap.",
  },
  {
    "_id" : "5",
    "name" : "Makkeolli",
    "image" : "http://www.roughguides.com/wp-content/uploads/2013/04/hrMakkeolli2620169201003009k-1680x1050.jpg",
    "details" : "Get drunk the local way with this milky rice wine, which has undergone a huge surge in popularity of late.",
  },
  {
    "_id" : "6",
    "name" : "Teddy Bear Museum",
    "image" : "http://www.roughguides.com/wp-content/uploads/2013/04/korea6216-1680x1050.jpg",
    "details" : "The epitome of kitsch, most notable for its diorama room portraying twentieth-century events such as teddies tearing down the Berlin Wall, landing on the moon and going down with the Titanic.",
  },
  {
    "_id" : "7",
    "name" : "Guinsa",
    "image" : "http://www.roughguides.com/wp-content/uploads/2013/04/korea5112-1680x1050.jpg",
    "details" : "The most distinctive temple complex in the country, Guinsa’s paths wind snake-like routes up a tight, remote valley in Korea’s heartland.",
  },
  {
    "_id" : "8",
    "name" : "Dosan Seowon",
    "image" : "http://www.roughguides.com/wp-content/uploads/2013/04/korea3226-1680x1050.jpg",
    "details" : "The wonderfully unspoilt countryside surrounding the city of Andong is studded with gems, and this former Confucian academy is one of the best.",
  },
  {
    "_id" : "9",
    "name" : "West Sea Islands",
    "image" : "http://www.roughguides.com/wp-content/uploads/2013/04/korea4156-1680x1050.jpg",
    "details" : "Over three thousand islands are sprinkled like confetti around Korea’s western coast – pick up a map in Mokpo, get on a ferry and lose track of time.",
  },
  {
    "_id" : "10",
    "name" : "Dongdaemun Market",
    "image" : "http://www.roughguides.com/wp-content/uploads/2013/04/korea0605-1680x1050.jpg",
    "details" : "A 24-hour market in a city that never sleeps, Dongdaemun is a Seoul institution, with sights and smells redolent of decades gone by.",
  }
];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
