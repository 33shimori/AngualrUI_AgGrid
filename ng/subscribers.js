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
