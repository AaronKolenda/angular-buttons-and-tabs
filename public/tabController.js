angular.module("tabController", [])
.controller("TabController", ["$scope", function($scope){

	$scope.something = "ok";
	console.log($scope);


	// Your code goes here
	$scope.redValue = true;
	$scope.greenValue = false;
	$scope.blueValue = false;

	$scope.redClick = function() {
		console.log("red clicked");
		if ($scope.redValue === false) {
			$scope.redValue = true;
			$scope.greenValue = false;
			$scope.blueValue = false;
		};

	};

	$scope.greenClick = function() {
		console.log("green clicked");
		if ($scope.greenValue === false) {
			$scope.greenValue = true;
			$scope.redValue = false;
			$scope.blueValue = false;
		};
	};

	$scope.blueClick = function() {
		console.log("blue clicked");
		if ($scope.blueValue === false) {
			$scope.blueValue = true;
			$scope.greenValue = false;
			$scope.redValue = false;
		};
	};


  
  
}])