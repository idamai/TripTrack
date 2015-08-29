starter.service("TripsService", [  '$rootScope', '$http', '$q', function($rootScope, $http, $q) {

	var urlBase = 'http://tutturu.walklight.net/ezbz/';

	var tripsStub = [{
			id:"30931",
			title:"Korea Project Genesis"
		}, {
			id:"30221",
			title:"China Offshore Control Project"
		}
	];

	return {
		getTrips: function() {
			var deferred = $q.defer();
			$http({
				method : "GET",
				url : urlBase + '/trips',
			}).success(function(data) {
				deferred.resolve(data);
			}).error(function(error) {
				deferred.reject(error);
			});
			return deferred.promise;
		},
		getItinerary: function(tripId) {
			var deferred = $q.defer();
			$http({
				method : "GET",
				url : urlBase + '/trip/' +tripId,
			}).success(function(data) {
				deferred.resolve(data);
			}).error(function(error) {
				deferred.reject(error);
			});
			return deferred.promise;
		}
	}

	
} ]);
