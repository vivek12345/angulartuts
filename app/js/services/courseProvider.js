/*'use strict';*/

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
/*angular.module('myApp.services')
	.factory('courseProvider', ['$http', '$q',

		function($http, $q) {


			function getCourses() {
				return $http.get('data/courses.json');
			}

			function addCourse(course) {
				courses.push(course);
			}

			function getCourse(id) {

				var deferred = $q.defer();

				var targetCourse;

				var courses;
				$http.get('data/courses.json').success(function(data) {
					courses = data;

					angular.forEach(courses, function(item, index) {
						if (item.id === id) {
							targetCourse = item;

							deferred.resolve(targetCourse);
						}
					})
				});

				return deferred.promise;
			}

			return {
				getCourses: getCourses,
				add: addCourse,
				get: getCourse
			};

		}
	]);
	*/
	'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services')
	.factory('courseProvider', ['$http', '$q', '$resource', 'parseSettings',

		function($http, $q, $resource, parseSettings) {

			

			var courseRef = $resource('https://api.parse.com/1/classes/mycourses/:objectId', null, {
				get : {
					method: 'GET',
					headers: parseSettings,
					isArray: true,
					transformResponse : function(data){
						var raw = angular.fromJson(data);
						console.log(raw);
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


			function getCourses() {
				return courseRef.get();
			}

			function addCourse(course) {
				courseRef.create(course);
			}

			function getCourse(id) {

				return courseRef.get(
					{
					where: {'objectId':id}
					
					}
				);

			}
			function updateavg(avg,id){
				return courseRef.update({ objectId:id },{
				    avg_rating:avg
					//'courseID': courseID
				});
			}

			return {
				getCourses: getCourses,
				add: addCourse,
				get: getCourse,
				callUpdate:updateavg
			};

		}
	]);
