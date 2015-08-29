starter.service("ContactsService", [  '$rootScope', '$http', '$q', function($rootScope , $http, $q) {

	var urlBase ='http://tutturu.walklight.net/ezbz/location/';

	return {
		get: function(locationId) {
			var deferred = $q.defer();
			$http({
				method : "GET",
				url : urlBase + locationId+ '/contacts/',
			}).success(function(data) {
				deferred.resolve(data);
			}).error(function(error) {
				deferred.reject(error);
			});
			return deferred.promise;
		}
	}

	
} ]);
