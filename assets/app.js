'use strict';
angular.module('app', ['ui.bootstrap','ngRoute','ngGrid']);


angular.module('app')
				.controller('AddNewUserCtrl', function ($scope, $modalInstance, newUser){
					$scope.newUser = newUser;
					$scope.saveNewUser = function (){
						$modalInstance.close(newUser);
					};
									
									$scope.cancel = function (){
						$modalInstance.dismiss('cancel');
					};
});


angular.module('app')
				.controller('articlesCtrl', function($scope){
	
$scope.posts = [
{
title:"Almonds are good for Health",
content:"Almonds contain high amounts of HDL which helps reduce chalostrol.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus quam leo, id tristique sapien viverra eu. Maecenas ipsum lectus, suscipit auctor tristique in, venenatis ut nisl. Quisque eget bibendum libero. Nam nec mi augue."
},
{
title:"Sugar is bad for health",
content:"Sugar besides being bad for diabeties, it also causes overweight and obesity problems.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus quam leo, id tristique sapien viverra eu. Maecenas ipsum lectus, suscipit auctor tristique in. "
},
{
title:"Cut down your carbs!!!",
content:"Sugar besides being bad for diabeties, it also causes overweight and obesity problems.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus quam leo, id tristique sapien viverra eu. Maecenas ipsum lectus, suscipit auctor tristique in, venenatis ut nisl. Quisque eget bibendum libero. Nam nec mi augue. "
      }

       ];
  });



angular.module('app')
				.controller('mainCtrl', function ($scope){
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
				.controller("galleryCtrl", function ($scope){
					var pictures = $scope.pictures=[];
					var baseURL = "http://lorempixel.com/300/800/";
					var titles = [
						"Healthy Food", "Healthy @ Work", "City Life", 
						"Staying Fit", "Looking Good", "Nightlife !!"
					];
					var keywords = [
						"food", "business", "city", "sports", "fashion", "nightlife"
					];
					var dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " + 
									"Sed nec odio quis nulla semper tempus quis ut nunc. " + 
									"Nulla mattis tortor sed eros dapibus, a facilisis nisi posuere."
					
					$scope.addPics=function (){
						pictures.push({
							url:baseURL+keywords[i],
							title: titles[i],
							summary:dummyText
						});
					};
					
					for (var i=0; i < 6; i++){
						$scope.addPics();
					}
					$scope.rate = 0;
					$scope.max = 10;
					$scope.isReadOnly = false;
				});


angular.module('app')
				.controller('mainCtrl', function ($scope){
					var baseURL = 'http://lorempixel.com/960/450/';
					$scope.setInterval = 5000;
					$scope.slides= [
						{
							title: '7 ways to stay Fit', 
							image: baseURL+'sports/',
							text: 'Play a sport for 30mins a day!'
						},
						{
							title: 'Health Food', 
							image: baseURL+'food/', 
							text: 'Food that you shoudl be eating!'
						},
						{
							title: 'Relaxing Holidays', 
							image: baseURL+'nature/',
							text: '10 Locations for Nature Lovers!'
						}
					];
					
					// model for the content blocks
					var baseURL='http://lorempixel.com/200/200/';
					$scope.content=[
						{
							img:baseURL+'people',
							title: 'About us',
							summary: 'WE are good, we are the best out there'
						},
						{
							img:baseURL+'business',
							title: 'our services',
							summary: 'We offer advice on staying Healthy, waht eat... ' +
							'What are the best exercises for you etc.'
							
						},
						{
							img:baseURL+'transport',
							title:'Contact Us',
							summary:'#11, Good Health Blvd, Happy Place, Antartica, Zip-452167'
						}
					]
					
					
});

angular.module('app')
				.config(function($routeProvider, $locationProvider){
				//	$locationProvider.html5Mode(true);
					$routeProvider
					.when('/', {controller: 'mainCtrl', templateUrl:'main.jade'})
					.when('/articles', {controller:'articlesCtrl', templateUrl:'articles.jade'})
					.when('/gallery', {controller:'galleryCtrl', templateUrl:'gallery.jade'})
					.when('/subscribers', {controller: 'subscribersCtrl', templateUrl:'subscribers.jade'});
	
});


angular.module('app')
				.controller('subscribersCtrl', function ($scope, $http, $modal){
					$http.get('/subscribersData').success(function (data){
						$scope.subscribers = data;
					});
					$scope.gridOptions = {
						data: 'subscribers',
						showGroupPanel: true,
						enabelCellSelection: true,
						enableRowSelection: false,
						enableCellEdit: true,
							columnDefs: [
							{field: 'no', displayName: 'No.'},
							{field: 'name', displayName: 'Name'},
							{field: 'userType', displyname: 'Subscription Type'},
							{field: 'loyalty', displayName: 'Loyalty Score'},
							{field: 'joinDate', displayName: 'Date of Joining'}
						]
					};
					$scope.showModal=function () {
						$scope.newUser={};
						var modalInstance = $modal.open({
							templateUrl: 'AddNewUser.jade',
							controller: 'AddNewUserCtrl',
							resolve:{
								newUser: function (){
									return $scope.newUser;
								}
							}
						});
						modalInstance.result.then(function (){
							$scope.subscribers.push({
								no: $scope.subscribers.length+1,
								name: $scope.newUser.name,
								userType: $scope.newUser.userType,
								loyalty: $scope.newUser.loyalty,
								joinDate: $scope.newUser.joinDate
							});
						});
					};
});
