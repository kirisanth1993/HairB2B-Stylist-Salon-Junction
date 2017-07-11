var bnb = angular.module('app', []);

bnb.controller("signupController",function($scope){
     console.log("welcom");
     $scope.typeSelection=function(type){
     	console.log(type);
     }

     var selected1=false;
     var selected2=false;
     //$scope.showType="-1";
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

     	// if(selected1==true && selected2==true){
     	// 	$scope.salonShow=true;
     	// 	$scope.stylistShow=true;
     	// }
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

 });