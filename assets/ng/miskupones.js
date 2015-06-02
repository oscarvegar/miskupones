var app = angular.module('miskupones',
  ['ngRoute',"miskupones.controllers","miskupones.usuarios","miskupones.password","miskupones.perfil", "miskupones.kupones"])

app.run(function($rootScope){
  $rootScope.modal = {};
})

app.config(function($routeProvider){  //, $locationProvider){
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
      controller:'KuponesCtrl',
      resolve: {
        // I will cause a 1 second delay
        delay: function($q, $timeout) {
          var delay = $q.defer();
          $timeout(delay.resolve, 1000);
          return delay.promise;
        }
      }
    }
  ).when("/kupones/view/:kuponId",
    {
      action:"V",
      templateUrl: "/ng/modules/kupones-view.html",
      controller:'KuponesCtrl',
      resolve: {
        // I will cause a 1 second delay
        delay: function($q, $timeout) {
          var delay = $q.defer();
          $timeout(delay.resolve, 1000);
          return delay.promise;
        }
      }
    }
  ).when("/kupones/update/:kuponId",
    {
      action:"U",
      templateUrl: "/ng/modules/kupones-edit.html",
      controller:'KuponesCtrl',
      resolve: {
        // I will cause a 1 second delay
        delay: function($q, $timeout) {
          var delay = $q.defer();
          $timeout(delay.resolve, 1000);
          return delay.promise;
        }
      }
    }
  ).when("/kupones/delete/:kuponId",
    {
      action:"D",
      templateUrl: "/ng/modules/kupones-list.html",
      controller:'KuponesCtrl',
      resolve: {
        // I will cause a 1 second delay
        delay: function($q, $timeout) {
          var delay = $q.defer();
          $timeout(delay.resolve, 1000);
          return delay.promise;
        }
      }
    }
  ).otherwise({
    redirectTo: "/"
  });

  // configure html5 to get links working on jsfiddle
  // $locationProvider.html5Mode(true);
})

app.run(function($rootScope,$location){
  $rootScope.go = function(location){
    $rootScope.showSpinner = false;
    $location.url("/graphicsview")
  }
})


