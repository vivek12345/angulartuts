angular.module('myApp.controllers')
	.controller('listingController', ['$scope', 'settings', 'courseProvider',
		function($scope, settings, courseProvider) {

			$scope.maxLength = settings.maxDescriptionLength;
			$scope.maxResults = settings.maxResults;
			/*courseProvider.getCourses().success(function (data){
				$scope.courses = data;	
			});*/
	 courseProvider.getCourses().$promise.then(function(data){
	 		$scope.courses=data;
	});
			/*$scope.showCourseDetails = function(course){
				courseProvider.selectedCourse = course;
				$nonsense.url('/details');
			}*/
		}
	]);