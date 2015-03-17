angular.module("buttonController", [])
.controller("ButtonController", ["$scope", "$timeout", function($scope, $timeout){


  // Your code goes here
  $scope.clicked = false;
  $scope.text = "Enabled";

  $scope.disableButton = function() {

 	$scope.clicked = true;
	$scope.text = "Loading...";

  	$timeout(function(){
      
      $scope.clicked = false;
      $scope.text = "Enabled";

    }, 4000);
  	
  }




}])