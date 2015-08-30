starter.service("ContactsService", [  '$rootScope', '$http', '$q', function($rootScope , $http, $q) {

	var urlBase ='http://tutturu.walklight.net/ezbz/location/';

	return {
		get: function(locationId) {
			var deferred = $q.defer();
			$http({
				method : "GET",
				url : urlBase + locationId+ '/contacts/',
			}).success(function(data) {
				window.localStorage.setItem(urlBase + locationId+ '/contacts/', JSON.stringify(data));
				deferred.resolve(data);
			}).error(function(error) {
				if(window.localStorage.getItem(urlBase + locationId+ '/contacts/') !== undefined) {
	                var storedData = JSON.parse(window.localStorage.getItem(urlBase + locationId+ '/contacts/'));
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
