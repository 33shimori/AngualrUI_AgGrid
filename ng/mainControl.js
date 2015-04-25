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
