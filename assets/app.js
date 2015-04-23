'use strict';
angular.module('app', []);


angular.module('app')
				.controller('helloWorldCtrl', function ($scope){
					$scope.name = {first: "Jane", last: "Doe"};
});


angular.module('app')
				.directive('helloWorld', function(){
					return {
						restrict: 'AE',
						scope: {name: "=name"},
						template:
										"<h1>Hello {{ name.first }} {{ name.last }}!</h1>" +
										"<input ng-model='name.first'></input>" +
										"<input ng-model='name.last'></input>"
					}
});

angular.module('app')
				.controller('peopleCtrl', function ($scope) {
					$scope.people = [
		{name: "John Doe", phone: "3252345678", city: "New York"}, 
		{name: "Sarah Parker", phone: "123456789", city: "Chicago"},
		{name: "Little John", phone: "6456135786", city: "Los Angels"},
		{name: "Adam Doe", phone: "9023548168", city: "Las Vegas"}
					];
		$scope.Save=function (){
			$scope.people.push({
					name:$scope.newPerson.name,
					phone:$scope.newPerson.phone, 
					city:$scope.newPerson.city
		});
			$scope.formVisibility = false;
	};
		$scope.ShowForm=function (){
			$scope.formVisibility=true;
		};			
});