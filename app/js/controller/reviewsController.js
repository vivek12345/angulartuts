angular.module('myApp.controllers')
	.controller('reviewsController', ['$scope', 'reviewProvider', '$routeParams','$location', 
		function($scope, reviewProvider, $routeParams,$location) {

			$scope.addReview = function(review, newReviewForm) {
				var courseId=$routeParams.id;
				if (newReviewForm.$invalid) {
					alert('validation failed');
				} else {
					console.log(review);
					review.course_id=courseId;
					review.likes=0;
					reviewProvider.add(review);
					
					console.log('saving review : ' + review.name);
					$location.url('/details/'+courseId);
				}
			}

		}
	]).directive('myPreview', function()
	{
 		return {
   			restrict: 'E',
   			templateUrl : 'partials/preview.html',
   
 	}
}).directive('progressPreview', function()
	{
 		return {
   			restrict: 'E',
   			templateUrl : 'partials/progress.html',
   
 	}
})