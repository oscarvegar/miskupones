var app = angular.module('miskupones',['ngRoute',"miskupones.controllers"])

app.config(function($routeProvider){
  $routeProvider
  .when("/",
    {
      templateUrl: "/home",
      controller: "CuponesCtrl"
    }
  ).when("/graphicsview",
    {
      templateUrl: "/charts",
      controller: "CuponesCtrl"
  	}
  ).otherwise({
    redirectTo: "/"
  });
})

app.run(function($rootScope,$location){
  $rootScope.go = function(location){
    $rootScope.showSpinner = false;
    $location.url("/graphicsview")
  }
})


