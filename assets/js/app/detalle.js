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
            console.log("Promocion seleccionada :: ", $scope.promoSelected )
            var user = JSON.parse(localStorage["user"]);
            var estadoId = localStorage[ LOCAL_ESTADO_SELECTED ];
            console.log("user logged : ", user);
            console.log("estado ID : ", estadoId);
            var request = { promocionId: $scope.promoSelected.promocionId,
                            subcategoriaId: $scope.promoSelected.subCategoriaId,
                            user: user.id,
                            estadoId: estadoId,
                            cantidad: eval($scope.cantidad),
                            total: ($scope.promoSelected.precioKupon *  $scope.cantidad)};
            localStorage["venta"] = JSON.stringify( request );
            $("#custom").val( JSON.stringify( request ) );
            $("#business").val( CORREO_BUSINESS );
            $("#cancel_return").val( CANCEL_URL );
            $("#return").val( RETURN_URL );
            $("#notify_url").val( NOTIFY_URL );
            $("#formPaypal").submit();
        }

        $scope.confirmarCompra = function() {

            $http.post( VENTA_WS, request ).then(function(result){
                $('#modalCompra').modal({backdrop:false})
            },function(error){
              alert("Error al generar la venta: " + JSON.stringify(error) );
            });
        }

        $scope.shareViaFacebook = function(promo) {


        }

});
