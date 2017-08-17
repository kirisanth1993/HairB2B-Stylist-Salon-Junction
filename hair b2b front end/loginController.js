bnb.controller("loginController",function($scope, $http){
  $scope.login = function(){
    console.log("login function");
    var loginData =
    {
      "emailId" : $scope.user,
      "password" : $scope.password
    }

    $http({
      url: "/login",
      method : "POST",
      data : loginData
    }).then(function (response){
      console.log(response.data);
      if (response.data.correctUser == "true"){
        localStorage.setItem("token", response.data.userToken);
        localStorage.setItem("firstname",response.data.firstname);
        localStorage.setItem("lastname", response.data.lastname);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("id", response.data.id);

        location.href = '#!/profile';
        window.location.reload();
      }
      else if (response.data.correctUser == "false"){
        $scope.loginError=true;
      }


    }, function (error){
      console.log(error);
    });

  }

});
