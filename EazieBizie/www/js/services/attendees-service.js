starter.service("AttendeesService", [  '$rootScope', '$http', '$q', function($rootScope, $http, $q) {

	var urlBase = 'http://tutturu.walklight.net/ezbz/users';

	return {
		get: function() {
			var deferred = $q.defer();
			$http({
				method : "GET",
				url : urlBase,
			}).success(function(data) {
				deferred.resolve(data);
			}).error(function(error) {
				deferred.reject(error);
			});
			return deferred.promise;
		}
	}

	
} ]);
