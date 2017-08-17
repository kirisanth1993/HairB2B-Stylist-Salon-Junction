var bnb = angular.module('app', ["ngRoute"]);
bnb.config(function($routeProvider) {
  $routeProvider
  .when("/signup", {
    templateUrl : "signup.html",
    controller : "signupController"
  })
  .when("/login", {
    templateUrl : "login.html",
    controller : "loginController"
  })
  .when("/skills", {
    templateUrl : "skills.html",
    controller : "skillsController"
  })
  .when("/edit", {
    templateUrl : "edit.html",
    controller : "signupController"
  })
  .when("/password", {
    templateUrl : "password.html",
    controller : "navController"
  })

  .when("/successregister", {
    templateUrl : "/successregister.html",
    controller : "successRegisterController"
  })

  .when("/search", {
    templateUrl : "/search.html",
    controller : "searchController"
  })


  .when("/", {
    templateUrl : "/welcome.html",

  })
  .when("/stylistProfile/:id", {
    templateUrl : "/stylistProfile.html",
    controller : "stylistProfileController"
  })

  .when("/booking/:id", {
    templateUrl : "/booking.html",
    controller : "bookingController"
  })
  .when("/bookingSuccess", {
    templateUrl : "/bookingSuccess.html"
  })
  .when("/profile", {
    templateUrl : "profile.html",
    controller : "profileController"

  });
});
