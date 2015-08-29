starter.service("NotificationsService", [  '$rootScope', function($rootScope) {


	var notificationsStub = [{
			id:"30931",
			title:"Korea Project Genesis"
		}, {
			id:"30221",
			title:"China Offshore Control Project"
		}
	];

	return {
		getNotifications: function(user) {
			
			var notifications = notificationsStub;
			
			return notifications;
			
		}
	}

	
} ]);
