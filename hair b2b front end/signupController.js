bnb.controller("signupController",function($scope, $http){
  $scope.typeSelection=function(type){
    console.log(type);
  }

  $scope.showModal = false;
  $scope.buttonClicked = "";
  $scope.toggleModal = function(btnClicked){
    $scope.buttonClicked = btnClicked;
    $scope.showModal = !$scope.showModal;
  };

  var selected1=false;
  var selected2=false;
  var initial = false;

  $scope.save = function(vall){
    console.log(vall);
    if(vall=="0"){
      if(selected1==false){
        selected1=true;
      }
      else{
        selected1=false;
      }
    }
    else {
      if(selected2==false){
        selected2=true;
      }
      else{
        selected2=false;
      }
    }

    if(selected1==true){
      $scope.salonShow=true;
    }
    if(selected2==true){
      $scope.stylistShow=true;
    }

    if(selected1==false){
      $scope.salonShow=false;
    }
    if(selected2==false){
      $scope.stylistShow=false;
    }
  }

  $scope.pass = function(vall){
    if (vall=='6'){
      if (initial==false){
        $scope.accepted = true;
        initial=true;
      }
      else{
        $scope.accepted = false;
        initial=false;
      }
    }
  }

  $scope.submit = function(){
    var basicData =
    {
      "firstname":$scope.firstname,
      "lastname":$scope.lastname,
      "age":$scope.age,
      "location":$scope.location,
      "gender":$scope.sex,
      "email":$scope.email,
      "password":$scope.password,
      "repassword":$scope.repassword,
      "stylist":$scope.stylist,
      "salon":$scope.salon,
      "description":$scope.description,
      "salonName":$scope.salonName,
      "condition":$scope.condition
    }
    console.log(basicData);

    $http({
      url: "/signup",
      method : "POST",
      data : basicData
    }).then(function (response){
      console.log(response);
      if (response.data.correctAccount=="true"){
        $scope.accountExist = false;

        location.href = '#!successregister';
      }
      else{
        $scope.accountExist = true;
      }
    }, function (error){
      console.log(error);
    });

  }

});

bnb.directive('pwCheck', [function () {
  return {
    require: 'ngModel',
    link: function (scope, elem, attrs, ctrl) {
      var firstPassword = '#' + attrs.pwCheck;
      elem.add(firstPassword).on('keyup', function () {
        scope.$apply(function () {
          var v = elem.val()===$(firstPassword).val();
          ctrl.$setValidity('pwmatch', v);
        });
      });
    }
  }
}]);

bnb.directive('modal', function () {
  return {
    template: '<div class="modal fade">' +
    '<div class="modal-dialog">' +
    '<div class="modal-content">' +
    '<div class="modal-header">' +
    '<button type="button" class="close" ng-click="home()" data-dismiss="modal" aria-hidden="true">&times;</button>' +
    '<h4 class="modal-title">Task {{ buttonClicked }} ! </h4>' +
    '</div>' +
    '<div class="modal-body" ng-transclude></div>' +
    '</div>' +
    '</div>' +
    '</div>',
    restrict: 'E',
    transclude: true,
    replace:true,
    scope:true,
    link: function postLink(scope, element, attrs) {
      scope.$watch(attrs.visible, function(value){
        if(value == true)
        $(element).modal('show');
        else
        $(element).modal('hide');
      });

      $(element).on('shown.bs.modal', function(){
        scope.$apply(function(){
          scope.$parent[attrs.visible] = true;
        });
      });

      $(element).on('hidden.bs.modal', function(){
        scope.$apply(function(){
          scope.$parent[attrs.visible] = false;
        });
      });
    }
  };
});
