angular.module('myApp.routes').
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/listing', {templateUrl: 'partials/listing.html'},controller='listingController');
$routeProvider.when('/new', {
			templateUrl: 'partials/new.html',
			controller: 'newCourseForm'
		});  
$routeProvider.when('/listinggrid',{templateUrl: 'partials/anotherview.html'},controller='listingController');
 

$routeProvider.when('/details/:id', {
			templateUrl: 'partials/detail.html',
			controller: 'detailsController'
		});
$routeProvider.when('/reviews/:id', {
			templateUrl: 'partials/review.html',
			controller: 'reviewsController'
		});


  $routeProvider.otherwise({redirectTo: '/listing'});
}]);