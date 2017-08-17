bnb.controller("skillsController",function($scope, $http){
  $scope.firstname = localStorage.getItem("firstname");
  $scope.lastname = localStorage.getItem("lastname");
  $scope.token = localStorage.getItem("token");
  $scope.email = localStorage.getItem("email");
  $scope.id = localStorage.getItem("id");
  //console.log($scope.id);

  var onEdu = false;
  var onSty = false;
  var onApp = false;

  // $scope.selectSkills = ['Hair Cutting','Coloring', 'Color Removing','Manicure', 'Pedicure',
  //                      'Nail Art', 'Makeup','Massage','Scalp treatment','Skin care','Hair Removal'];
  $scope.eduSelectedList={};
  $scope.hairSelectedList={};
  $scope.appSelectedList={};

  $http({
    url: "/skills",
    method : "GET",
  }).then(function (response){
    $scope.selectSkills = response.data;
    console.log(response);
  }, function (error){
    console.log(error);
  });

  $scope.save = function () {
    //console.log($scope.eduSelectedList);
    var skillsJobType = {
      "userId" : $scope.id,
      "skills" : [{"jobId": 1,"skillList":$scope.eduSelectedList},
      {"jobId" : 2,"skillList":$scope.hairSelectedList},
      {"jobId" : 3,"skillList":$scope.appSelectedList}
    ]
  }
  //console.log(skillsJobType);
  $http({
    url: "/skills",
    method : "POST",
    data : skillsJobType
  }).then(function (response){
    console.log(response);
  }, function (error){
    console.log(error);
  });
  var job = [];
  console.log(job);
  if ($scope.educator){
    job.push({"jobtypeId":1,"price":$scope.eduPrice});
  }
  if($scope.hairStylist){
    job.push({"jobtypeId": 2,"price":$scope.hairPrice});
  }
  if($scope.apprentice){
    job.push({"jobtypeId": 3,"price":$scope.appPrice});
  }
  console.log(job);
  var jobType = {
    "userId" : $scope.id,
    "jobtypePrices" : job
  }


  $http({
    url: "/jobtypePrices",
    method : "POST",
    data : jobType
  }).then(function (response){
    console.log(response);
  }, function (error){
    console.log(error);
  });
  location.href = '#!/profile';
  window.location.reload();
  window.location.reload();
  window.location.reload();
}

$scope.skillEduClick = function(clickEduVal){
  if (clickEduVal=='1'){
    if (onEdu==false){
      $scope.eduClicked = true;
      onEdu=true;
    }
    else{
      $scope.eduClicked = false;
      onEdu=false;
    }
  }
}

$scope.skillStyClick = function(clickStyVal){
  if (clickStyVal=='1'){
    if (onSty==false){
      $scope.styClicked = true;
      onSty=true;
    }
    else{
      $scope.styClicked = false;
      onSty=false;
    }
  }
}
$scope.skillAppClick = function(clickAppVal){
  if (clickAppVal=='1'){
    if (onApp==false){
      $scope.appClicked = true;
      onApp=true;
    }
    else{
      $scope.appClicked = false;
      onApp=false;
    }
  }
}

});
