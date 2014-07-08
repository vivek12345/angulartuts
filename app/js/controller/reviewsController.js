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
					reviewProvider.add(review);
					
					console.log('saving review : ' + review.name);
					$location.url('/details/'+courseId);
				}
			}

		}
	]);