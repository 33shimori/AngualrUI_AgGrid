describe('controller spec', function (){
	var $scope;
	
		beforeEach (module('app'));
	
		beforeEach (inject(function ($rootScope, $controller){
		$scope = $rootScope;
		$controller ('helloWorldCtrl', {$scope: $scope});
		}));
		it ('should create "name" with first name "Jane"', function (){
			expect($scope.name.first).to.equal("Jane");
		});
	});

describe('Spec for directive', function () {
	beforeEach(module('app'));
	var $scope;
	beforeEach (inject(function($rootScope){
		$scope = $rootScope.$new();
		$scope.name= {first: "John", last: "Smith"};
	}));
		describe("hello-world", function (){
			it('should contain the provided name', function () {
				inject(function($compile){
				var element = $compile('<div hello-world name="name"></div>')($scope);
				$scope.$digest();
				expect (element.html()).to.contain("John");
		});
	});
});
});