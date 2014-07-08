angular.module('myApp.controllers')
	.controller('detailsController', ['$scope', 'courseProvider', 'reviewProvider','settings', '$routeParams', 
		function($scope, courseProvider,reviewProvider,settings, $routeParams) {

			var courseId = $routeParams.id;
			/*$scope.reviews=reviewProvider.get(courseId);
			
			console.log(courseId);*/

			/*var promise=*/
			reviewProvider.get(courseId).
			$promise.then(function(data){
				$scope.reviews = data;
			})

			promise = courseProvider.get(courseId);

			promise.then(function(data){
				$scope.course = data;
			})
			


		}
	]);