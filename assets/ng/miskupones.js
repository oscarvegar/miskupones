var app = angular.module('miskupones',
  ['ngRoute',"miskupones.controllers","miskupones.usuarios","miskupones.password","miskupones.perfil", "miskupones.kupones"])

app.run(function($rootScope){
  $rootScope.modal = {};
})

app.config(function($routeProvider){
  $routeProvider
  .when("/",
    {
      templateUrl: "/home",
      controller: "CuponesCtrl"
    }
  ).when("/graphicsview",
    {
      templateUrl: "/charts"
    }
  ).when("/usuarios",
    {
      action:"L",
      templateUrl: "/ng/modules/usuarios.html",
      controller:'UsuariosCtrl'
    }
  ).when("/usuarios/create/:id",
    {
      action:"C",
      templateUrl: "/ng/modules/usuariosEdit.html",
      controller:'UsuariosCtrl'
    }
  ).when("/usuarios/read/:id",
    {
      action:"R",
      templateUrl: "/ng/modules/usuariosEdit.html",
      controller:'UsuariosCtrl'
    }
  ).when("/usuarios/edit/:id",
    {
      action:"U",
      templateUrl: "/ng/modules/usuariosEdit.html",
      controller:'UsuariosCtrl'
    }
  ).when("/miPerfil",
    {
      templateUrl: "/ng/modules/miperfil.html",
      controller:'PerfilCtrl'
    }
  ).when("/changePassword",
    {
      templateUrl: "/ng/modules/password.html",
      controller:'PasswordCtrl'
    }
  ).when("/kupones/create",
    {
      action:"C",
      templateUrl: "/ng/modules/kupones-edit.html",
      controller:'KuponesCtrl'
    }
  ).when("/kupones",
    {
      action:"R",
      templateUrl: "/ng/modules/kupones-list.html",
      controller:'KuponesCtrl'
    }
  ).when("/kupones/update",
    {
      action:"U",
      templateUrl: "/ng/modules/kupones-edit.html",
      controller:'KuponesCtrl'
    }
  ).when("/kupones/delete",
    {
      action:"D",
      templateUrl: "/ng/modules/kupones-list.html",
      controller:'KuponesCtrl'
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


