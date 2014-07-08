'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1')
.value('settings', {
	maxDescriptionLength : 50,
	maxResults : 3
}).
value('parseSettings',{
	'X-Parse-Application-Id':'XzIKiaGNwqynHQGJtp6ShSoGVpqH4zpbuSGNPfO6',
	'X-Parse-REST-API-Key':'0UXUsIR3dttnuVLOiRz0XTm3wbO5NDxmN1wYgt0f'

});

