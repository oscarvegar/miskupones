/**
 * Created by oscar on 02/04/15.
 */
var myApp = angular.module("PerfilModule",[]);
myApp.controller( "PerfilController",
    function($timeout, $scope, $http, $rootScope, $kuponServices){
        getCliente = function(){
            //Obtener del Server en vez del $db
            /*
            $db.query( DOC_USER ).then( function( result ){
                $rootScope.user = result.user;
                console.log(" id a buscar en " + CLIENTE_WS + " ::::  ", result.user.id)
                $http.post(CLIENTE_WS, {id:result.user.id}).then(function( resultClient ){
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
            });
            */
        };

        getCliente();

        $scope.actualizarCliente = function(isValid, form){
            if(!isValid){
                // Sustituir por un modal WEB
                /*
                var myPopup = $ionicPopup.show({
                    template: '<b><center>Verifica que los datos ingresados sean correctos</center></b>',
                    title: 'Error de datos',
                    subTitle: 'Error al procesar la operación',
                    scope: $scope,
                    buttons: [
                        { text: 'Aceptar' }
                    ]
                });
                */
                angular.forEach(form.$error.required, function(field) {
                    field.$setDirty();
                });
                return;
            }

            $rootScope.cliente.estado = $rootScope.estadoSelected;
            $http.post(CLIENTE_UPDATE_WS, $rootScope.cliente)
                .then(function(result){
                    $scope.editar = false ;
                    // Sustituir por un modal WEB
                    /*
                    myPopup = $ionicPopup.show({
                        template: '<b><center>Su información ha sido actualizada</center></b>',
                        title: 'Confirmación de operación',
                        scope: $scope,
                        buttons: [
                            { text: 'Aceptar' }
                        ]
                    });
                    $timeout(function() {
                        myPopup.close(); //close the popup after 3 seconds for some reason
                    }, 3000);
                    */
                    $scope.onCambiarPwd = false;
                    $scope.editar = false ;
                    if(!$scope.$$phase) {
                        $scope.$apply();
                    }
                })
                .catch(function(err){
                    alert("Error al actualizar el cliente: " + JSON.stringify(err) );
                });
        }
});
