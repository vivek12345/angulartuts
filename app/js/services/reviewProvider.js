'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services')
.factory('reviewProvider', ['$http', '$q', '$resource','$routeParams', 'parseSettings',

		function($http, $q, $resource, $routeParams,parseSettings) {
			
	var courseRef = $resource('https://api.parse.com/1/classes/courses/:objectId', null, {
				get : {
					method: 'GET',
					headers: parseSettings,
					isArray: true,
					
					transformResponse : function(data){
						var raw = angular.fromJson(data);
						return raw.results;
					}
				},
				create: {
					method : 'POST',
					isArray : false,
					headers: parseSettings
				},
				update: {
					method: 'PUT',
					isArray: false,
					headers: parseSettings
				}
			})

	var review=[
    {
         
        "course_id":"1",
        "name": "Vivek Nayyar",
        "myreview": "An introduction to the theory and practice of computer programming, the emphasis of this course is on techniques of program development within the object-oriented paradigm. Topics include control structures, objects, classes, inheritance, simple data structures, and basic concepts of software development. Currently, Java is the programming language used in the course. This course has a required lab component, and is required for the major and minor in computer science. (Offered every semester)",
        "rating": "5"
    },
    {
        "course_id": "1",
        "name": "Akshay iyer",
        "myreview": "This course continues the study of data structures and algorithms, focusing on algorithm design and analysis and the relationships between data representation, algorithm design, and program efficiency. Topics include advanced data structures, key algorithm design techniques, analysis of the time and space requirements of algorithms, and characterizing the difficulty of solving a problem. Concrete examples will be drawn from a variety of domains, such as algorithms for graphs and networks, cryptography, data compression, strings, geometric problems, indexing and search, numerical problems, and parallel computation. This course is required for the major in computer science. Prerequisites: CPSC 225; CPSC 229 is recommended. (Offered annually)",
        "rating":"3"
    },
    {
        "course_id": "2",
        "name": "Uma Ladha",
        "myreview": "This course continues the study of data structures and algorithms, focusing on algorithm design and analysis and the relationships between data representation, algorithm design, and program efficiency. Topics include advanced data structures, key algorithm design techniques, analysis of the time and space requirements of algorithms, and characterizing the difficulty of solving a problem. Concrete examples will be drawn from a variety of domains, such as algorithms for graphs and networks, cryptography, data compression, strings, geometric problems, indexing and search, numerical problems, and parallel computation. This course is required for the major in computer science. Prerequisites: CPSC 225; CPSC 229 is recommended. (Offered annually)",
        "rating":"4"
    }
]
function getReviews(id)
 {



			return courseRef.get
			(
				{
					where: {'course_id':id}
					
				}
			);	
			/*	var targetCourse=[];
				console.log(id);
				var reviews=getReview();
				console.log(reviews);
				angular.forEach(reviews,function(item,index){
					if(item.course_id==id)
						targetCourse.push(item);
				});
				console.log(targetCourse);
				/*$http.get('data/courses.json').success(function(data) {
					courses = data;

					angular.forEach(courses, function(item, index) {
						if (item.id === id) {
							targetCourse = item;

							deferred.resolve(targetCourse);
						}
					})
				});

				return deferred.promise;*/
				/*return targetCourse;*/

	}
	function getReview()
	 {
		return review;
	}
		
			function addReview(myreview) {
				/*review.push(myreview);*/
				courseRef.create(myreview);
			}
			
			function avg(allreviews) {
				var avg=0.0;
				var sum=0;
				angular.forEach(allreviews,function(item,index){
						sum+=parseInt(item.rating);
						
				});
				avg=sum/allreviews.length;
				

				return avg;
			}
			function updatelikes(review)
			{
					return courseRef.update({ objectId:review.objectId },{
				   	likes:review.likes
				});
			}
			return {
				
				get: getReviews,
				add:addReview,
				getavg:avg,
				callupdate:updatelikes
			};

}
]);