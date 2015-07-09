angular.module("miskupones.perfilKupones",[])
.controller('PerfilKuponesCtrl',function($timeout, $scope, $http, $rootScope, $kuponServices,$window){
	console.log("PERFIL KUPONES CTRL");
	$scope.user = {};
	$scope.block=true;
	
	$scope.estados = $kuponServices.getEstados();
    console.log("Estados");
    console.log( $scope.estados);


	$scope.init = function() {

  	   	 var usuario = JSON.parse( $window.localStorage.getItem("user") );
            $scope.user.username = usuario.username;
              console.log($scope.user.username );
            console.log(" id a buscar en " + CLIENTE_WS + " ::::  ", usuario.id)
            $http.post(CLIENTE_WS, {id:usuario.id}).then(function( resultClient ){
                console.log( "client :: ", resultClient.data );
                $rootScope.cliente = resultClient.data;
                if( $rootScope.cliente.estado ) {
                    console.log("estado del cliente: ", $rootScope.cliente.estado);
                    $rootScope.estadoSelected = $rootScope.cliente.estado;
                }else{
                    $rootScope.estadoSelected = 9;
                }
            },function(err){
                console.error("Error ::::: ", err);
            }).catch(function(err){
                console.error("Error al extraer el cliente :: ", err);
            });
  


	};

	$scope.init();

	$scope.setEstado = function(id){
        $rootScope.estadoSelected = id;
    }
	
	/*$scope.perfil = function(){

		$http.post("/updateperfil",$scope.user)
		.success(function(data){
				$http.get("/getperfil").success(function (data){
					$scope.user = data;
					var fechaNac = $scope.user.fechaNacimiento;
                    $scope.user.fechaNacimiento = fechaNac.substring(0,10);
					$rootScope.modal.title = "Éxito";
					$rootScope.modal.msg = "Se han actualizado los datos correctamente.";
					$('#myModal').modal('show');
			     });
			
		}).error(function(err){
			console.error(err);
		})



	};*/


	   $scope.actualizarCliente = function(){
        $rootScope.cliente.estado = $rootScope.estadoSelected;
        console.log("Actualizar");
        console.log($rootScope.cliente);
        $http.post(CLIENTE_UPDATE_WS, $rootScope.cliente)
            .then(function(result){
                $rootScope.modal.title = "Éxito";
					$rootScope.modal.msg = "Se han actualizado los datos correctamente.";
					$('#myModal').modal('show');
            })
            .catch(function(err){
                alert("Error al actualizar el cliente: " + JSON.stringify(err) );
            });
    }
});

