starter.service("TripsService", [  '$rootScope', '$http', '$q', function($rootScope, $http, $q) {

	var urlBase = 'http://tutturu.walklight.net/ezbz';

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
