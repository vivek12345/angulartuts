angular.module('myApp.controllers')
	.controller('detailsController', ['$scope', 'courseProvider', 'reviewProvider','settings', '$routeParams', 
		function($scope, courseProvider,reviewProvider,settings, $routeParams) {

			var courseId = $routeParams.id;
			/*$scope.reviews=reviewProvider.get(courseId);
			
			console.log(courseId);*/

			/*var promise=*/
			var myreviews=[];
			reviewProvider.getupdate(2);
			reviewProvider.get(courseId).
			$promise.then(function(data){
				angular.forEach(data,function(item,index){
					if(item.course_id==courseId)
						myreviews.push(item);
				});
				$scope.reviews = myreviews;
				$scope.avg=reviewProvider.getavg(myreviews);
			})



			promise = courseProvider.get(courseId);

			promise.then(function(data){
				$scope.course = data;
			})
			


		}
	]);