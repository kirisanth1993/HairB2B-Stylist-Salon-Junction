bnb.controller("searchController",function($scope, $http){
  $scope.firstname = localStorage.getItem("firstname");
  $scope.lastname = localStorage.getItem("lastname");
  $scope.token = localStorage.getItem("token");
  $scope.email = localStorage.getItem("email");
  $scope.id = localStorage.getItem("id");
  //console.log($scope.id);

  var filter = false;
  $scope.filterClick = function(click){
    if (click=='1'){
      if (filter==false){
        $scope.filterClicked = true;
        filter = true;
      }
      else{
        $scope.filterClicked = false;
        filter = false;
      }
    }
  }

//////////////

  $scope.search = function(){
    var detail =
    {
      "name":$scope.name
    }
    $http({
      url : "/simpleSearch",
      method : "POST",
      data : detail
    }).then(function(response){
      //console.log(response.data);
    if (response.data.length>0){
        $scope.result=true;
        $scope.usersList = response.data;
      };

      if (response.data.length<=0){
          $scope.result=false;
      };

    });
  }

/////////////////////



});
