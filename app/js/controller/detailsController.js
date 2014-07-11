angular.module('myApp.controllers')
	.controller('detailsController', ['$scope', 'courseProvider', 'reviewProvider','settings', '$routeParams', 
		function($scope, courseProvider,reviewProvider,settings, $routeParams) {

			var courseId = $routeParams.id;
			/*$scope.increcount=function(myreview){
				reviewProider.callupdate(myreview.)
			}*/
			$scope.update=function(review)
			{
				reviewProvider.callupdate(review);
			};
			/*$scope.reviews=reviewProvider.get(courseId);
			
			console.log(courseId);*/

			/*var promise=*/
			var myreviews=[];
			courseProvider.get(courseId).
			$promise.then(function(data){
				$scope.course = data[0];
				reviewProvider.get(courseId).
			$promise.then(function(data){
				/*angular.forEach(data,function(item,index){
					if(item.course_id==courseId)
						myreviews.push(item);

				});*/
				/*$scope.reviews = myreviews;*/
				$scope.reviews=data;
		
				$scope.avg=reviewProvider.getavg(data);

				
				courseProvider.callUpdate($scope.avg,courseId);
				
			})

				
			});
			
			/*reviewProvider.getupdate(2);*/
			

		}
	]);