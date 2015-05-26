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
