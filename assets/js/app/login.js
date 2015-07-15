// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['validation.match', 'kupon.dao', 'kupon.business'])

.run(function($rootScope, $location, $kuponServices){
  $kuponServices.loadEstados();
  $rootScope.modal = {};
})

.controller( "LoginController", function( $scope, $rootScope, $http, $kuponServices, $timeout){
  $scope.isLogin = true;

  $scope.switch = function(){
    $scope.estados = $kuponServices.getEstados();
    $scope.user = null;
    $scope.isLogin = !$scope.isLogin;
  }

  $scope.login = function(){
    $scope.mensaje = ' Verificando usuario ...';
    console.log($scope.user);
    $http.post(LOGIN_WS, $scope.user)
        .success(function(result,status){
          console.log(status);
          localStorage["user"] = JSON.stringify(result);
          window.location.href="/#/promociones";
        }).error(function(err){
          $scope.errorLogin = "El usuario y/o contraseña son incorrectos";
          console.log("Error"+$scope.errorLogin );

          $rootScope.modal.title = "Error";
          $rootScope.modal.msg = "El usuario y/o contraseña son incorrectos.";
          $('#myModal').modal('show');
          $scope.user = {};
        });
  }


  $scope.registrar = function(){
    console.log("Usuario que se va a registrar :: ", $scope.user);
    console.log($scope.user);
    console.log("Estado seleccionado :: ", $rootScope.estadoSelected);
    $scope.user.status = 1;
    $scope.user.wreck = '(#$%)';
    $scope.loading = true;
    $http.post( REGISTRO_WS, $scope.user ).success(function(result) {
      localStorage["user"] = JSON.stringify(result);
      $http.post( CLIENTE_CREATE_WS, { user: result.id, correo: $scope.user.email, estado: $rootScope.estadoSelected })
          .then(function(resultNuevoCliente){
            $scope.loading = false;
            $rootScope.estadoSelected = "";
            console.log("Cliente registrado:: ", resultNuevoCliente);
            $rootScope.modal.title = "Exito";
            $rootScope.modal.msg = "Tu usuario se registro correctamente pero se encuentra inactivo, revisa tu email para activar tu cuenta. (No olvides revisar el spam).";
            $('#myModalRegister').modal('show');
            $scope.user = {};
            $scope.rpassword = "";
            $scope.form.$setPristine(true);
          }).
          catch(function(err){
            $scope.loading = false;
            console.error("err ", err);
            alert("Error en registro de cliente :: " + JSON.stringify(err) );
          });

    }).error(function(error) {
      $scope.errorRegistro = "Error al registrar: El usuario y/o correo electrónico ya existen.";

      $rootScope.modal.title = "Exito";
      $rootScope.modal.msg = "El usuario y/o correo electrónico ya existen.";
      $('#myModal').modal('show');
      $scope.user = {};
      $scope.rpassword = "";


    });
  }

  $scope.setEstado = function(id){
    $rootScope.estadoSelected = id;
  }

})