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
