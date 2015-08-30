starter.service("UsersService", [  '$rootScope', '$http', '$q', function($rootScope, $http, $q) {

	var urlBase = 'http://tutturu.walklight.net/ezbz';

	return {
		getUser: function(userId) {
			var deferred = $q.defer();
			$http({
				method : "GET",
				url : urlBase + '/user/' +userId,
			}).success(function(data) {
				window.localStorage.setItem(urlBase + '/user/' +userId, JSON.stringify(data));
				deferred.resolve(data);
			}).error(function(error) {
				if(window.localStorage.getItem(urlBase + '/user/' +userId) !== undefined) {
	                var storedData = JSON.parse(window.localStorage.getItem(urlBase + '/user/' +userId));
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
