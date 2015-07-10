var app = angular.module('miskupones',

  ['ngRoute',
    "miskupones.controllers",
    "miskupones.usuarios",
    "miskupones.password",
    "miskupones.perfil",
    "miskupones.kupones",
    'miskupones.categorias',
    'miskupones.perfilKupones',
    'kupon.dao',
    'kupon.business',
    "PromoModule",
    "DetalleModule",
    "MisComprasModule",
    "PerfilModule",
      'ngFlowGrid',
    "ngResource"])

app.run(function($rootScope){
  $rootScope.modal = {};
})
/*app.directive("pinterest",function($timeout){
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
      console.log("Se ejecuta directive");
      $timeout(function() {
        $(element).pinterest_grid(scope.$eval(attrs.pinterest));
      },2);

      //element[0].preventDefault();
    }}
});*/
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
  ).when("/miPerfilKupones",
    {
      templateUrl: "/ng/app/miperfilKupones.html",
      controller:'PerfilKuponesCtrl'
    }
  ).when("/changePassword",
    {
      templateUrl: "/ng/modules/password.html",
      controller:'PasswordCtrl'
    }
  ).when("/kupones/create",
    {
      action:"C",
      templateUrl: "/ng/modules/kupones-create.html",
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
  ).when("/categorias",
    {
      action:"R",
      templateUrl: "/ng/modules/categorias-list.html",
      controller:'CategoriasCtrl',
      resolve: {
        // I will cause a 1 second delay
        delay: function($q, $timeout) {
          var delay = $q.defer();
          $timeout(delay.resolve, 1000);
          return delay.promise;
        }
      }
    }
  ).when("/categorias/view/:categoriaId",
    {
      action:"V",
      templateUrl: "/ng/modules/categorias-view.html",
      controller:'CategoriasCtrl',
      resolve: {
        // I will cause a 1 second delay
        delay: function($q, $timeout) {
          var delay = $q.defer();
          $timeout(delay.resolve, 1000);
          return delay.promise;
        }
      }
    }
  ).when("/promociones",
      {
        templateUrl: "/ng/app/promociones.html",
        controller:'PromoController'
      }
  ).when("/miscompras",
      {
        templateUrl: "/ng/app/miscompras.html"
      }
  ).when("/detalle",
      {
        templateUrl: "/ng/app/detalle.html",
        controller:'DetalleController'
      }
  ).otherwise({
    redirectTo: "/"
  });

  // configure html5 to get links working on jsfiddle
  // $locationProvider.html5Mode(true);
})

app.run(function($rootScope, $location,$kuponServices){
  $rootScope.go = function(location){
    $rootScope.showSpinner = false;
    $location.url("/graphicsview")
  }
  $kuponServices.loadEstados();
  $kuponServices.loadCategorias();
  $kuponServices.loadCliente();


 

})

app.controller('LoginKuponesController', ["$timeout", "$scope", "$http", "$rootScope", "$kuponServices",function($timeout, $scope, $http, $rootScope, $kuponServices){

console.log("Clientes Kupones");

  $scope.isLogin = true;


  $scope.switch = function(){
    console.log("Cambio Regisgter");

    $scope.estados = $kuponServices.getEstados();
    console.log("Estados");
    console.log( $scope.estados);

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
    $http.post( REGISTRO_WS, $scope.user ).success(function(result) {
      localStorage["user"] = JSON.stringify(result);
      $http.post( CLIENTE_CREATE_WS, { user: result.id, correo: $scope.user.email, estado: $rootScope.estadoSelected })
          .then(function(resultNuevoCliente){
            console.log("Cliente registrado:: ", resultNuevoCliente);
            //window.location = '/#/promociones';
            //alert("Cliente nuevo");

            $rootScope.modal.title = "Exito";
            $rootScope.modal.msg = "Tu usuario se registro exitosamente.";
            $('#myModalRegister').modal('show');
            $scope.user = {};
            $scope.rpassword = "";

          }).
          catch(function(err){
            console.error("err ", err);
            alert("Error en registro de cliente :: " + JSON.stringify(err) );
          });

         /* $kuponServices.registraUsuario( result ).then( function(resultUser){
              $kuponServices.initApp(result.id).then(function(resultPromo) {
                console.log("promociones creadas :: ", resultPromo);
                $rootScope.promociones = resultPromo.data;
                window.location="/#/promociones";
              },function(error){
                alert("Error al cargar promociones: " + JSON.stringify(error) );
              });
            },function(error){
              alert("Error al registrar usuario: " + JSON.stringify(error) );
            });*/

    }).error(function(error) {
      $scope.errorRegistro = "Error al registrar: El usuario y/o correo electrónico ya existen.";

 
      //alert("Error al intentar registrar: " + JSON.stringify(error));
     // console.error("Error al registrar nuevo usuario: ", error);

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



  



        
    }]);


