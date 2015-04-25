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

