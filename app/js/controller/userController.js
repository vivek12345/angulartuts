angular.module('myApp.controllers')
	.controller('userController', ['$scope', 'courseProvider', 'reviewProvider','settings', '$routeParams', 
		function($scope, courseProvider,reviewProvider,settings, $routeParams) {
			$scope.scenario = 'Sign up';
  			$scope.currentUser = Parse.User.current();
			$scope.signUp = function(user,newUserForm) 
			{
    			var user = new Parse.User();
    			user.set("email", user.email);
    			user.set("username", user.username);
    			user.set("password", user.password);
    
    			user.signUp(null, 
    			{
      				success: function(user)
      				{
        				$scope.currentUser = user;
        				/*console.log($scope.currentUser);
        				$scope.$apply();*/
        				window.location.href = "#/listing";
      				},
      				error: function(user, error) 
      				{
        				alert("Unable to sign up:  " + error.code + " " + error.message);
      				}
    			});    
  			};
		}
		]);