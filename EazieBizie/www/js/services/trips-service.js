starter.service("TripsService", [  '$rootScope', '$http', '$q', function($rootScope, $http, $q) {

	var urlBase = 'http://tutturu.walklight.net/ezbz';

	return {
		getTrips: function() {
			var deferred = $q.defer();
			$http({
				method : "GET",
				url : urlBase + '/trips',
			}).success(function(data) {
				window.localStorage.setItem(urlBase + '/trips', JSON.stringify(data));
				deferred.resolve(data);
			}).error(function(error) {
				if(window.localStorage.getItem(urlBase + '/trips') !== undefined) {
	                var storedData = JSON.parse(window.localStorage.getItem(urlBase + '/trips'));
	                deferred.resolve(storedData);
	            }
	            else{
					deferred.reject(error);
				}
				// deferred.reject(error);
			});
			return deferred.promise;
		},
		getItinerary: function(tripId) {
			var deferred = $q.defer();
			$http({
				method : "GET",
				url : urlBase + '/trip/' +tripId,
			}).success(function(data) {
				window.localStorage.setItem(urlBase + '/trip/' +tripId, JSON.stringify(data));
				deferred.resolve(data);
			}).error(function(error) {
				if(window.localStorage.getItem(urlBase + '/trip/' +tripId) !== undefined) {
	                var storedData = JSON.parse(window.localStorage.getItem(urlBase + '/trip/' +tripId));
	                deferred.resolve(storedData);
	            }
	            else{
					deferred.reject(error);
				}
				// deferred.reject(error);
			});
			return deferred.promise;
		}
	}

	
} ]);
