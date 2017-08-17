bnb.controller("bookingController",function($scope, $http,$routeParams){
  $scope.styId  = $routeParams.id;
  $scope.token = localStorage.getItem("token");
  var data =
  {
    "id":$scope.styId
  }


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
    $scope.jobTypeAndPriceArray = [];
    $scope.jobTypeObj = response.data;
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
    console.log($scope.jobTypeAndPriceArray);
  }, function (error){
    console.log(error);
  });


  $scope.$watch('from',function(val){
     $scope.startingDate = new Date(val);
     if($scope.startingDate&&$scope.finishingDate){
       console.log("true. . . .");
       var timeDiff = Math.abs($scope.finishingDate.getTime()-$scope.startingDate.getTime());
       $scope.dayDiff = 1+Math.ceil(timeDiff/(1000*3600*24));
     };
  });

  $scope.$watch('until',function(val){
     $scope.finishingDate = new Date(val);
     if($scope.startingDate&&$scope.finishingDate){
       var timeDiff = Math.abs($scope.finishingDate.getTime()-$scope.startingDate.getTime());
       $scope.dayDiff = 1+Math.ceil(timeDiff/(1000*3600*24));
     };
     if (!$scope.dayPrice){
       if($scope.jobTypeAndPriceArray){
         $scope.dayPrice = $scope.jobTypeAndPriceArray[0].price;
       }

     };
  });


  $scope.$watch('job',function(type){
    if(type){
      $scope.jobTypeAndPriceArray.forEach(styJobType=>{
        if(styJobType.jobType==type){
          $scope.dayPrice = styJobType.price;
        }
      })
    }

  });

  $scope.book = function(){
    var bookingDetails =
    {
      "from":$scope.from,
      "until":$scope.until,
      "job":$scope.job,
      "location":$scope.location,
      "description":$scope.description
    }
    console.log(bookingDetails);
    location.href = '#!bookingSuccess';

  }


});
