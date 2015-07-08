/**
 * Created by oscar on 02/04/15.
 */
var myApp = angular.module("DetalleModule",[]);
myApp.controller( "DetalleController",
    function($timeout, $scope, $http, $rootScope, $kuponServices){

        $scope.promoSelected = webUtil.getJSON("promoSelected");
        $scope.decuentoPorcentaje = 100 - (( $scope.promoSelected.precioDescuento * 100 ) / $scope.promoSelected.precioRegular);
        $scope.disponibles = [];

        $scope.cantidadDisponible = $scope.promoSelected.cantidadKupones - $scope.promoSelected.cantidadCreados;
        if($scope.cantidadDisponible <= 10) {
            for (var i = 0; i < $scope.cantidadDisponible; i++) {
                $scope.disponibles.push(i + 1);
            }
        }else{
            $scope.disponibles = [1,2,3,4,5,6,7,8,9,10];
        }
        $scope.cantidad = 1;
        $scope.cliente = $kuponServices.getCliente();
        if($scope.cliente == null){
            window.location.href = "/#/promociones";
        }
        $scope.megusta = $scope.cliente.promosIdsLike.indexOf( $scope.promoSelected.promocionId ) >= 0

        $scope.meGusta = function( promoSelected ){
            // se va a quitar la promocion del cliente
            var request = { id: $scope.cliente.id,
                            promocionId: promoSelected.promocionId,
                            megusta: $scope.megusta };
            $http.post(CLIENTE_DEF_MEGUSTA_WS, request)
            .then(function (result) {
                    $scope.megusta = !$scope.megusta;
                if($scope.megusta){
                    $scope.cliente.promosIdsLike.push(promoSelected.promocionId);
                }else{
                    var indexPromo = $scope.cliente.promosIdsLike.indexOf(promoSelected.promocionId);
                    $scope.cliente.promosIdsLike.splice(indexPromo, 1);
                }
            })
            .catch(function (err) {
                alert("Error al actualizar el cliente: " + JSON.stringify(err));
            });
        }

        $scope.comprar = function() {
            $rootScope.disponibles = [];
            if($scope.promoSelected.cantidadKupones <= 10) {
                for (var i = 0; i < $scope.promoSelected.cantidadKupones; i++) {
                    $rootScope.disponibles.push(i + 1);
                }
            }else{
                $rootScope.disponibles = [1,2,3,4,5,6,7,8,9,10];
            }
            window.location.href = "#/app/compra";
            $rootScope.cantidad = 1;
        }

        $scope.aplicaCantidad = function(cantidad){
            $rootScope.cantidad = cantidad;
            //alert("cantidad a aplicar :: ", $rootScope.cantidad );
        }

        $scope.procederCompra = function() {
            $rootScope.productsCart = [];
            var prodInCart = {  title: 'product name',
                description: 'product description',
                quantity: 1,
                price: 230,
                images: null,
                id: 1};
            $rootScope.productsCart.push( prodInCart );
        }

        $scope.confirmarCompra = function() {
            //alert("cantidad a comprar :: ", $rootScope.cantidad );
            /*
            $ionicLoading.show({
              template: "Procesando tu compra ..."
            });
            console.log("Promocion seleccionada :: ", $rootScope.promoSelected )
            var user = JSON.parse(localStorage["user"]);
            var estadoId = localStorage[ LOCAL_ESTADO_SELECTED ];
            console.log("user logged : ", user);
            console.log("estado ID : ", estadoId);
            var request = { promocionId: $rootScope.promoSelected.promocionId,
                            subcategoriaId: $rootScope.promoSelected.subCategoriaId,
                            user: user.id,
                            estadoId: estadoId,
                            cantidad: eval($rootScope.cantidad),
                            total: ($rootScope.promoSelected.precioKupon *  $rootScope.cantidad)};

            $http.post( VENTA_WS, request ).then(function(result){
               $kuponServices.actualizarCantidadPromo( eval($rootScope.cantidad), $rootScope.indexPromoSelected )
              .then(function(resultUpd){
                    $ionicLoading.hide();
                    var myPopup = $ionicPopup.show({
                       template: '<b><center>Tu compra se ha realizado correctamente, podrás ver tu kupon en el apartado de Mis Kupones. Gracias por usar MisKupones</center></b>',
                       title: 'Compra Finalizada',
                       scope: $scope,
                       buttons: [
                           { text: 'Aceptar' }
                       ]
                    });
                    myPopup.then(function(res) {
                       console.log('Tapped!', res);
                       window.location.href = "inicio.html";
                    });
                    $timeout(function() {
                       myPopup.close(); //close the popup after 3 seconds for some reason
                        window.location.href = "inicio.html";
                    }, 3000);
              },function(error){
                    $ionicLoading.hide();
                    alert("Error al actualiar cantidad: " + JSON.stringify(error) );
              });
            },function(error){
              $ionicLoading.hide();
              alert("Error al generar la venta: " + JSON.stringify(error) );
            });
            */
        }

        $scope.shareViaFacebook = function(promo) {


        }

});
