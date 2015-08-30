starter.service("UsersService", [  '$rootScope', '$http', '$q', function($rootScope, $http, $q) {

	var urlBase = 'http://tutturu.walklight.net/ezbz';

	return {
		getUser: function(userId) {
			var deferred = $q.defer();
			$http({
				method : "GET",
				url : urlBase + '/user/' +userId,
			}).success(function(data) {
				deferred.resolve(data);
			}).error(function(error) {
				deferred.reject(error);
			});
			return deferred.promise;
		}
	}

	
} ]);
