angular.module('app')
				.config(function($routeProvider, $locationProvider){
				//	$locationProvider.html5Mode(true);
					$routeProvider
					.when('/', {controller: 'mainCtrl', templateUrl:'main.jade'})
					.when('/articles', {controller:'articlesCtrl', templateUrl:'articles.jade'})
					.when('/gallery', {controller:'galleryCtrl', templateUrl:'gallery.jade'})
					.when('/subscribers', {controller: 'subscribersCtrl', templateUrl:'subscribers.jade'});
	
});

