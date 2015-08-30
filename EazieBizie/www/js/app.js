// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

var starter = angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    // local storage
    window.localStorage.setItem("http://tutturu.walklight.net/ezbz/users", JSON.stringify([{"_id":"55e27e8e274ba4776bd88c34","username":"yhpoh","name":"Poh Yee Hui","image":"http://tutturu.walklight.net/images/yhpoh.jpg","bio":"Final year Electrical Engineering student at NUS. Experienced in Mobile App Development. Eager to connect to others.","number":"83758922"},{"_id":"55e27e8e274ba4776bd88c35","username":"yqwang","name":"Wang Yuqing","image":"http://tutturu.walklight.net/images/yqwang.jpg","bio":"Information System student at NUS. Great UI/UX designer with industrial experience.","number":"92375937"},{"_id":"55e27e8e274ba4776bd88c36","username":"idamai","name":"Ignatius Damai","image":"http://tutturu.walklight.net/images/idamai.jpg","bio":"Current management analyst at Accenture. Graduated from National University of Singapore, majoring in Computer Engineering and minoring in Business Management. I am both a team player and an individual player. Professionalism is my middle name.","number":"97582892"},{"_id":"55e27e8e274ba4776bd88c37","username":"hpratama","name":"Henry Pratama","image":"http://tutturu.walklight.net/images/hpratama.jpg","bio":"Aspiring Electrical Engineering student. Great marketer for TripTrack.","number":"83920532"},{"_id":"55e27e90274ba4776bd88c38","username":"ssuwandi","name":"Shazwi Suwandi","image":"http://tutturu.walklight.net/images/ssuwandi.jpg","bio":"Front-end developer.","number":"83648392"}]));
    window.localStorage.setItem("http://tutturu.walklight.net/ezbz/user/idamai", JSON.stringify([{"_id":"55e27e8e274ba4776bd88c36","username":"idamai","name":"Ignatius Damai","image":"http://tutturu.walklight.net/images/idamai.jpg","bio":"Current management analyst at Accenture. Graduated from National University of Singapore, majoring in Computer Engineering and minoring in Business Management. I am both a team player and an individual player. Professionalism is my middle name.","number":"97582892"}]));
    window.localStorage.setItem("http://tutturu.walklight.net/ezbz/location/kor/checklist", JSON.stringify([{"_id":"55e15faea9df8f97a9c4fa6f","name":"Passport","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa70","name":"Visa","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa71","name":"Inform destination office of departure","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa72","name":"Flight ticket","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa73","name":"Driving license (local)","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa74","name":"Driving license (international)","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa75","name":"Foreign cash","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa76","name":"Credit card","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa77","name":"Frequent flyer card","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa78","name":"Copy of important documents","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa79","name":"Medication","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa7a","name":"Medical Insurance","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa7b","name":"Business Cards","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa7c","name":"Electrical adapters","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa7d","name":"Chargers","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa7e","name":"Computer","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa7f","name":"Mobile phone","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa80","name":"Tablet","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa81","name":"Pager","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa82","name":"Casual Attire","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa83","name":"Business Attire","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa84","name":"Winter Attire","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["winter"], "checked":false},{"_id":"55e16017a9df8f97a9c4fa85","name":"Beach Attire","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer"], "checked":false}]));
    window.localStorage.setItem("http://tutturu.walklight.net/ezbz/location/usa/checklist", JSON.stringify([{"_id":"55e15faea9df8f97a9c4fa6f","name":"Passport","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa70","name":"Visa","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa71","name":"Inform destination office of departure","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa72","name":"Flight ticket","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa73","name":"Driving license (local)","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa74","name":"Driving license (international)","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa75","name":"Foreign cash","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa76","name":"Credit card","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa77","name":"Frequent flyer card","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa78","name":"Copy of important documents","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa79","name":"Medication","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa7a","name":"Medical Insurance","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa7b","name":"Business Cards","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa7c","name":"Electrical adapters","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa7d","name":"Chargers","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa7e","name":"Computer","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa7f","name":"Mobile phone","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa80","name":"Tablet","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa81","name":"Pager","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa82","name":"Casual Attire","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa83","name":"Business Attire","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer","winter"], "checked":false},{"_id":"55e15faea9df8f97a9c4fa84","name":"Winter Attire","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["winter"], "checked":false},{"_id":"55e16017a9df8f97a9c4fa85","name":"Beach Attire","country":["kor","usa","chn"],"city":["seoul","newyork","shanghai"],"season":["summer"], "checked":false}]));
    window.localStorage.setItem("http://tutturu.walklight.net/ezbz/location/kor/contacts", JSON.stringify([{"_id":"55e154819b7a1148f43348ca","country":"kor","city":"seoul","priority":0,"name":"Emergency","number":"119"},{"_id":"55e154819b7a1148f43348cc","country":"kor","city":"seoul","priority":2,"name":"Ambulance","number":"119"},{"_id":"55e154819b7a1148f43348cd","country":"kor","city":"seoul","priority":1,"name":"Police","number":"112"},{"_id":"55e154819b7a1148f43348d0","country":"kor","city":"seoul","priority":5,"name":"Tourism and Translation Service","number":"1330"},{"_id":"55e154819b7a1148f43348d1","country":"kor","city":"seoul","priority":3,"name":"Coast Guard","number":"122"},{"_id":"55e154819b7a1148f43348d2","country":"kor","city":"seoul","priority":0,"name":"International Emergency Rescue","number":"02 790 7561"},{"_id":"55e154819b7a1148f43348cb","country":"kor","city":"seoul","priority":1,"name":"Fire Department","number":"119"},{"_id":"55e154819b7a1148f43348ce","country":"kor","city":"seoul","priority":2,"name":"Medical Emergency","number":"1339"},{"_id":"55e154819b7a1148f43348cf","country":"kor","city":"seoul","priority":4,"name":"National Intelligence Service","number":"111"}]));
    window.localStorage.setItem("http://tutturu.walklight.net/ezbz/location/usa/contacts", JSON.stringify([{"_id":"55e154829b7a1148f43348e3","country":"usa","city":"newyork","priority":0,"name":"Emergency","number":"911"},{"_id":"55e154829b7a1148f43348e4","country":"usa","city":"newyork","priority":4,"name":"Terrorist Hotline","number":"1 (888) NYC SAFE"},{"_id":"55e154829b7a1148f43348e5","country":"usa","city":"newyork","priority":4,"name":"Sex Crime Report","number":"1 (212) 267 RAPE"},{"_id":"55e154829b7a1148f43348e6","country":"usa","city":"newyork","priority":5,"name":"Non-Emergency","number":"311"},{"_id":"55e154829b7a1148f43348e7","country":"usa","city":"newyork","priority":2,"name":"Ambulance","number":"911"},{"_id":"55e154829b7a1148f43348e8","country":"usa","city":"newyork","priority":1,"name":"Fire Department","number":"911"},{"_id":"55e154829b7a1148f43348e9","country":"usa","city":"newyork","priority":1,"name":"Police","number":"911"},{"_id":"55e154829b7a1148f43348ea","country":"usa","city":"newyork","priority":5,"name":"Railroad Emergency","number":"(718) 330 1234"},{"_id":"55e154829b7a1148f43348eb","country":"usa","city":"newyork","priority":4,"name":"Poison Control","number":"(212) POISONS"},{"_id":"55e154829b7a1148f43348ec","country":"usa","city":"newyork","priority":5,"name":"Fish and Wildlife Commission","number":"(718) 482 4900"},{"_id":"55e154839b7a1148f43348ed","country":"usa","city":"newyork","priority":5,"name":"Information Assistance","number":"411"}]));
    window.localStorage.setItem("http://tutturu.walklight.net/ezbz/trips", JSON.stringify([{"title":"Client Meeting 6","id":"55e1e8422965d704221ca52c"},{"title":"Factory Inspection 2016","id":"55e1e8442965d704221ca52d"}]));
    window.localStorage.setItem("http://tutturu.walklight.net/ezbz/trip/55e1e8422965d704221ca52c", JSON.stringify([{"_id":"55e1e8422965d704221ca52c","title":"Client Meeting 6","location":"Seoul, Korea","meeting_detail":{"company":"Accenture Headquarters","address":"10th Fl., Posteel Tower, 735-3, Yeoksam-dong, Gangnam-gu, Seoul 135-923, Korea","etique":"Greetings follow strict rules of protocol. Many South Koreans shake hands with expatriates after the bow, thereby blending both cultural styles. The person of lower status bows to the person of higher status, yet it is the most senior person who initiates the handshake. The person who initiates the bow says, man-na-suh pan-gop-sumnida, which means pleased to meet you. Information about the other person will be given to the person they are being introduced to in advance of the actual meeting. Wait to be introduced at a social gathering. When you leave a social gathering, say good-bye and bow to each person individually.","time":"2pm - 5pm daily"},"country":"kor","date":{"start":"5 Aug 2015","end":"10 Aug 2015"},"user":["Ignatius Damai","Poh Yee Hui","Wang Yuqing","Henry Pratama"],"itinerary":[{"type":"flight","title":"SIN - ICN","details":"Singapore Airlines 5876","time":{"start":"07:05","end":"10:05"},"location":"Changi Airport"},{"type":"taxi","title":"Taxi - pickup","details":"Incheon Airport Gate","time":{"start":"11:00","end":"12:00"},"location":"Incheon Airport Gate"},{"type":"work","title":"Meeting","details":"Daily meeting","time":{"start":"14:00","end":"17:00"},"location":"Accenture Headquarters"},{"type":"hotel","title":"Hotel Check-in","details":"Seoul International Hotel","time":{"start":"18:00","end":"18:30"},"location":"Seoul International Hotel"},{"type":"meal","title":"Dinner Time","details":"Seoul International Hotel","time":{"start":"19:00","end":"21:00"},"location":"Seoul International Hotel"}]}]));
    window.localStorage.setItem("http://tutturu.walklight.net/ezbz/trip/55e1e8442965d704221ca52d", JSON.stringify([{"_id":"55e1e8442965d704221ca52d","title":"Factory Inspection 2016","location":"New York, United States","meeting_detail":{"company":"Accenture Headquarters","address":"1345 6th Ave, New York, NY 10105, United States","etique":"Arrive on time for meetings since time and punctuality are so important to Americans. In the Northeast and Midwest, people are extremely punctual and view it as a sign of disrespect for someone to be late for a meeting or appointment. In the Southern and Western states, people may be a little more relaxed, but to be safe, always arrive on time, although you may have to wait a little before your meeting begins.","time":"1pm - 4pm daily"},"country":"usa","date":{"start":"15 Jan 2016","end":"25 Jan 2016"},"user":["Ignatius Damai","Wang Yuqing","Henry Pratama"],"itinerary":[{"type":"flight","title":"SIN - JFK","details":"Singapore Airlines 1235","time":{"start":"04:05","end":"07:05"},"location":"Changi Airport"},{"type":"taxi","title":"Taxi - pickup","details":"JFK Airport","time":{"start":"07:30","end":"09:00"},"location":"JFK Airport "},{"type":"meal","title":"Lunch Time","details":"Kate's Steakhouse","time":{"start":"10:30","end":"12:00"},"location":"Kate's Steakhouse"},{"type":"hotel","title":"Hotel Check-in","details":"Hotel Sunshine","time":{"start":"12:00","end":"13:00"},"location":"Hotel Sunshine"},{"type":"work","title":"Meeting","details":"Daily meeting","time":{"start":"13:00","end":"16:00"},"location":"Accenture Headquarters"},{"type":"meal","title":"Dinner Time","details":"El Pasta","time":{"start":"17:00","end":"19:00"},"location":"El Pasta"}]}]));
    window.localStorage.setItem("http://tutturu.walklight.net/ezbz/finance/kor/expenses", JSON.stringify([{"_id":"55e1e7932965d704221ca52b","country":"kor","totalExpense":144230,"currency":"Won","totalReceipts":5,"receipts":[{"item":"Hotel Cleaning","time":"08/20/2015","amount":44000,"image":"http://i.kinja-img.com/gawker-media/image/upload/s--36rVI54w--/c_fit,fl_progressive,q_80,w_636/187xjaqojdlewjpg.jpg"},{"item":"Supermarket","time":"08/20/2015","amount":4000,"image":"http://4.bp.blogspot.com/_s-exbz0PZd4/TH2wjF40QAI/AAAAAAAAACk/NnMzOfNGqKY/s1600/18+Korean+Receipt.JPG"},{"item":"Bus Ticket","time":"08/20/2015","amount":47730,"image":"http://i1289.photobucket.com/albums/b516/thatrandomqirl/Blog%20Pictures/CIMG5292_zpsf8ccef54.jpg"},{"item":"Bus Ticket","time":"08/20/2015","amount":36000,"image":"http://1.bp.blogspot.com/-CuoorRG0uaE/T53CBx8IivI/AAAAAAAABZg/LaFlW1KIXlo/s1600/DSCN8036.JPG"},{"item":"Lunch","time":"08/20/2015","amount":12500,"image":"http://colourfulpieces.com/wp-content/uploads/2014/05/20140531-110435-39875021.jpg"}]}]));
    window.localStorage.setItem("http://tutturu.walklight.net/ezbz/finance/usa/expenses", JSON.stringify([]));

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


    .state('app.tripdetails', {
        url: '/tripdetails/:tripId',
        views: {
          'menuContent': {
            templateUrl: 'views/trip-details.html',
            controller: 'TripDetailsCtrl' 
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

  .state('app.expenses', {
    url: '/finance/:locationId',
    views: {
      'menuContent': {
        templateUrl: 'views/expenses.html',
        controller: 'ExpensesCtrl'
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


  .state('app.events', {
    url: '/events/:locationId',
    views: {
      'menuContent': {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl'
      }
    }
  })

  .state('app.trip]', {
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

  .state('app.profile', {
    url: '/profile/:profileId',
    views: {
      'menuContent': {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
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
  })
	.state('app.attendees', {
    url: '/attendees/:tripId',
    views: {
      'menuContent': {
        templateUrl: 'views/attendees.html',
        controller: 'AttendeesCtrl'
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
