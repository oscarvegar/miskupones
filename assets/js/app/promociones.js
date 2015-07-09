/**
 * Created by oscar on 02/04/15.
 */
var myApp = angular.module("PromoModule",[]);
myApp.directive("pinterest",function($timeout){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            console.log("Se ejecuta directive");
            $timeout(function() {
                //$(element).pinterest_grid(scope.$eval(attrs.pinterest));
            });
            scope.$watch('$last',function() {
                $(element).pinterest_grid(scope.$eval(attrs.pinterest));
            });
            //element[0].preventDefault();
        }}
});

myApp.controller( "PromoController",
    function($timeout, $scope, $http, $rootScope, $kuponServices){
        $scope.pinterest = null;
        $scope.load = function(){
            if( $kuponServices.getPromociones() == null ) {
                $kuponServices.initApp().then(function (resultPromo) {
                    $kuponServices.setPromociones( resultPromo.promociones );
                    $scope.promociones = $kuponServices.getPromociones();
                    console.log("CARGA INICIAL ==> Mis Promociones:: ", $scope.promociones);
                }, function (error) {
                    alert("Error al cargar promociones: " + JSON.stringify(error));
                });
            }else {
                $scope.promociones = $kuponServices.getPromociones();
                console.log("Mis Promociones:: ", $scope.promociones);
            }

            // Dibujando GRID Pinterest
            // Recuperandon el cliente asociado
            $timeout(function(){
                $scope.pinteres = $('#pinBoot').pinterest_grid({
                    no_columns: 4,
                    padding_x: 10,
                    padding_y: 10,
                    margin_bottom: 50,
                    single_column_breakpoint: 700
                });
            }, 1);

            // Obteniendo los estados
            $scope.estados = $kuponServices.getEstados();
            $scope.estadoSelected = 9;

        };

        $scope.load();

        $scope.setEstado = function(id){
            $rootScope.estadoSelected = id;
        }

        $scope.setCategoria = function(id){
            $scope.categoriaSelected = id;
            $http.post( SUBCATEGORIAS_WS, {categoriaId:id} ).then(function(result){
                $scope.subcategorias = result.data;
                $scope.subCategoriaSelected = $scope.subcategorias[0].subCategoriaId;
            })
        }

        $scope.setSubCategoria = function(id){
            $scope.subCategoriaSelected = id;
        }

        $scope.getPromocion = function ( promo, index ) {
            webUtil.save("promoSelected", promo);
            //Verificar si la promo tiene "megusta" por el cliente
            //$rootScope.megusta = $scope.cliente.promosIdsLike.indexOf( promo.promocionId ) >= 0 ? true : false;
            //console.log("Me gusta:: " + $rootScope.megusta);

            window.location.href = "/#/detalle";
        }

        $scope.buscarPorNombre = function(){
          if ( $scope.criteria.length >= 3 ) {
              var resultPromo = $kuponServices.getPromosPorTitulo( $scope.criteria, $scope.promociones )
              console.log("actualizando promociones :: ", resultPromo);
              $scope.promociones = resultPromo;
              if(!$scope.$$phase) {
                  $scope.$apply()
              }
          } else if( $scope.criteria === "" ) {
              $scope.promociones = $kuponServices.getPromociones();
          }
        }

        $scope.buscarPromosPorEstado = function(){
            localStorage[ LOCAL_ESTADO_SELECTED ] = $scope.estadoSelected;
            $scope.promociones = null;
            $kuponServices.getPromosPorEstado( $scope.estadoSelected ).then(function(resultPromo) {
                console.log("actualizando promociones :: ", resultPromo);
                $scope.promociones = resultPromo.promociones;
                $('#myModal').modal('hide');
                $timeout(function(){
                    $scope.pinteres = $('#pinBoot').pinterest_grid({
                        no_columns: 4,
                        padding_x: 10,
                        padding_y: 10,
                        margin_bottom: 50,
                        single_column_breakpoint: 700
                    });
                }, 1);
            },function(error){
                alert("Error al cargar promociones: " + JSON.stringify(error) );
                $('#myModal').modal('hide')
            });
        }

        $scope.buscarPromosPorCategoria = function(){
            var request = {estadoId: localStorage[ LOCAL_ESTADO_SELECTED ], subcategoriaId: $scope.subCategoriaSelected};
            $http.post(GET_PROMOS_ESTADO_CATEGO_WS, request)
                .then(function(result){
                    console.log("Promociones por categoria: ", result.data )
                    $scope.promociones = result.data.promociones;
                    $('#myModalCateogia').modal('hide')
                })
        }

        $scope.actualizarLista = function(){

          $kuponServices.initApp($rootScope.user.id).then(function(resultPromo) {
              console.log("actualizando promociones :: ", resultPromo);
              $scope.promociones = resultPromo.data;
              $scope.$broadcast('scroll.refreshComplete');
              if(!$scope.$$phase) {
                  $scope.$apply()
              }
          },function(error){
              $ionicLoading.hide();
              $scope.$broadcast('scroll.refreshComplete');
              if(!$scope.$$phase) {
                  $scope.$apply()
              }
              alert("Error al cargar promociones: " + JSON.stringify(error) );
          });
        }

        $scope.loadCategorias = function(){
            $scope.categorias = $kuponServices.getCategorias();
            $scope.subcategorias = $kuponServices.getSubCategorias();
            $scope.categoriaSelected = $scope.categorias[0].categoriaId;
            $scope.subCategoriaSelected = $scope.subcategorias[0].subCategoriaId;
        }

});
