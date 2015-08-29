starter.service("TripsService", [  '$rootScope', function($rootScope) {


	var tripsStub = [{
			id:"30931",
			title:"Korea Project Genesis"
		}, {
			id:"30221",
			title:"China Offshore Control Project"
		}
	];

	return {
		getTrips: function(user) {
			
			var trips = tripsStub;
			
			return trips;
			
		}
	}

	
} ]);
