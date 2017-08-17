bnb.controller("navController",function($scope, $http){
  $scope.firstname = localStorage.getItem("firstname");
  $scope.lastname = localStorage.getItem("lastname");
  $scope.token = localStorage.getItem("token");
  
  $scope.remove = function(txt){
    if (txt=='on'){
      console.log("remove is called");
      localStorage.removeItem("token");
      localStorage.removeItem("firstname");
      localStorage.removeItem("lastname");
      $scope.firstname = null;
      $scope.lastname = null;
      $scope.token = null;

      $scope.logout=true;

    }



  }

});
