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