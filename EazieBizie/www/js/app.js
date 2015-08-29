// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var starter = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider,$httpProvider) {

  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'views/menu.html',
    controller: 'AppCtrl'
  })
  
  .state('app.home', {
    url: '/home',
	 views: {
      'menuContent': {
        templateUrl: 'views/home.html',
		controller: 'HomeCtrl'
      }
    }
    
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })

    .state('app.notifications', {
        url: '/notifications',
        views: {
          'menuContent': {
            templateUrl: 'views/notifications.html',
            controller: 'NotificationsCtrl' 
          }
        }
    })

  .state('app.predeparture', {
      url: '/predeparture/:locationId',
      views: {
        'menuContent': {
          templateUrl: 'templates/predeparture.html',
          controller: 'PredepartureCtrl'
        }
      }
    })

  .state('app.places', {
    url: '/places/:locationId',
    views: {
      'menuContent': {
        templateUrl: 'views/places.html',
        controller: 'PlacesCtrl'
      }
    }
  })

  .state('app.localdelights', {
    url: '/localdelights/:locationId',
    views: {
      'menuContent': {
        templateUrl: 'views/localdelights.html',
        controller: 'LocalDelightsCtrl'
      }
    }
  })

  .state('app.trip', {
    url: '/trip/:tripId',
    views: {
      'menuContent': {
        templateUrl: 'views/trip.html',
        controller: 'TripCtrl'
      }
    }
  })
  
  .state('app.itinerary', {
    url: '/itinerary/:tripId',
    views: {
      'menuContent': {
        templateUrl: 'views/itinerary.html',
        controller: 'ItineraryCtrl'
      }
    }
  })
  
  .state('app.contacts', {
    url: '/contacts/:locationId',
    views: {
      'menuContent': {
        templateUrl: 'views/contacts.html',
        controller: 'ContactsCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
  
  $httpProvider.defaults.useXDomain = true;
  $httpProvider.defaults.withCredentials = true;
  delete $httpProvider.defaults.headers.common["X-Requested-With"];
  $httpProvider.defaults.headers.common["Accept"] = "application/json";
  $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
});
