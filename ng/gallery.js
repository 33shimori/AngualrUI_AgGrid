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

