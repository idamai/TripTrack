starter.service("AttendeesService", [  '$rootScope', '$http', '$q', function($rootScope, $http, $q) {
	var urlBase = 'http://tutturu.walklight.net/ezbz/users';
	return {
		get: function() {
			var deferred = $q.defer();
			$http({
				method : "GET",
				url : urlBase,
			}).success(function(data) {
				window.localStorage.setItem(urlBase, JSON.stringify(data));
				deferred.resolve(data);
			}).error(function(error) {
				if(window.localStorage.getItem(urlBase) !== undefined) {
	                var storedData = JSON.parse(window.localStorage.getItem(urlBase));
	                deferred.resolve(storedData);
	            }
	            else{
					deferred.reject(error);
				}
			});
			return deferred.promise;
		}
	}
} ]);