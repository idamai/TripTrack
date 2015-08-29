starter.service("ContactsService", [  '$rootScope', function($rootScope) {


	var contactsStub = [{
			name:"Police",
			number:"3238742"
		}, {
			name:"Firedept",
			number:"43548584"
		}
	];

	return {
		getContacts: function(locationId) {
			
			var contacts = contactsStub;
			
			return contacts;
			
		}
	}

	
} ]);
