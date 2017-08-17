bnb.controller("stylistProfileController",function($scope, $http,$routeParams){
  $scope.styId  = $routeParams.id;

    var data =
    {
      "id":$scope.styId
    }
    console.log(data);

    $http({
      url: "/profile",
      method : "GET",
      params: data
    }).then(function (response){
      //console.log(response);
      $scope.userObj = response.data;
      //console.log($scope.userObj);
    }, function (error){
      console.log(error);
    });

    $http({
      url: "/stylistDetail",
      method : "GET",
      params: data
    }).then(function (response){
      //console.log(response);
      $scope.stylistObj = response.data;
      //console.log($scope.stylistObj.condition);
    }, function (error){
      console.log(error);
    });

    $http({
      url: "/skills",
      method : "GET",
    }).then(function (response){
      $scope.skills = response.data;
      console.log("skills . . . . ")
      //console.log(response.data);
    }, function (error){
      console.log(error);
    });

    $scope.educatorSkills=[];
    $scope.hairStylistSkills=[];
    $scope.apprenticeSkills=[];
    $http({
      url: "/SkillsJobTypeUsersDetail",
      method : "GET",
      params: data
    }).then(function (response){
      //console.log(response);
      $scope.skillJobTypeObj = response.data;
      //console.log($scope.skillsJobTypeObj);
      $scope.skillJobTypeObj.forEach(userTypeSkills=>{
        console.log(userTypeSkills);
        $scope.skills.forEach(skill=>{

          if(userTypeSkills.skillId==skill.id){
            // console.log(userTypeSkills.skillId);
            // console.log(skill.skillName);
            if (userTypeSkills.jobTypeId==1){
              $scope.educatorSkills.push(skill.skillName);
              $scope.educator=true;
            }
            if (userTypeSkills.jobTypeId==2){
              $scope.hairStylistSkills.push(skill.skillName);
              $scope.hairStylist=true;
            }
            if (userTypeSkills.jobTypeId==3){
              $scope.apprenticeSkills.push(skill.skillName);
              $scope.apprentice=true;
            }

          }
        })

      })
      console.log($scope.educatorSkills);
      console.log($scope.hairStylistSkills);
      console.log($scope.apprenticeSkills);


    }, function (error){
      console.log(error);
    });

    $http({
      url: "/jobType",
      method : "GET",
    }).then(function (response){
      $scope.jobTypes = response.data;
      console.log("all job types")
      //console.log(response.data);
    }, function (error){
      console.log(error);
    });


    $http({
      url: "/jobTypeDetail",
      method : "GET",
      params: data
    }).then(function (response){
      //console.log(response);
      $scope.jobTypeAndPriceArray = [];
      $scope.jobTypeObj = response.data;
      //console.log(response.data);
      $scope.jobTypeObj.forEach(jobType => {
        //console.log(jobType)
        //console.log(jobType.jobTypeId);
        $scope.jobTypes.forEach(singletype=>{

          if(jobType.jobTypeId==singletype.id){
            var jobTypeAndPrice={
              jobType:singletype.typeName,
              price:jobType.price
            }
            $scope.jobTypeAndPriceArray.push(jobTypeAndPrice);
          }
        })
      })
      //console.log($scope.jobTypeAndPriceArray);
    }, function (error){
      console.log(error);
    });



    $http({
      url: "/userType",
      method : "GET",
    }).then(function (response){
      $scope.userTypes = response.data;
      //console.log(response.data);
    }, function (error){
      console.log(error);
    });

    $http({
      url: "/userTypeUsersDetail",
      method : "GET",
      params: data
    }).then(function (response){
      //console.log(response);
      $scope.UserTypeObj = response.data;
      //console.log($scope.UserTypeObj);
      $scope.userTypeArray = [];
      $scope.UserTypeObj.forEach(userTypeUser => {
        //console.log(userTypeUser);
        //console.log($scope.userTypes);
        $scope.userTypes.forEach(userTypes => {
          //console.log(userTypes);
          if(userTypeUser.userTypeId == userTypes.id){
            $scope.userTypeArray.push(userTypes.userType);
          }
          //console.log(userTypeUser.userTypeId);
          if (userTypeUser.userTypeId==1){
            $scope.stylist=true;
          }
        })
        //console.log(userTypeUser);
      })
      //console.log($scope.userTypeArray);

    }, function (error){
      console.log(error);
    });





});
