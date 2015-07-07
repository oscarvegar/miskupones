/**
 * Created by oscar on 02/04/15.
 */
var myApp = angular.module("PromoModule",[]);
myApp.controller( "PromoController",
    function($timeout, $scope, $http, $rootScope, $kuponServices){

        $scope.meGusta = function( promoSelected ){
            // se va a quitar la promocion del cliente
            var request = {id:$rootScope.cliente.id, promocionId:promoSelected.promocionId, megusta:$rootScope.megusta};
            $http.post(CLIENTE_DEF_MEGUSTA_WS, request)
            .then(function (result) {
                $rootScope.megusta = !$rootScope.megusta;
                if($rootScope.megusta){
                    $rootScope.cliente.promosIdsLike.push(promoSelected.promocionId);
                }else{
                    var indexPromo = $rootScope.cliente.promosIdsLike.indexOf(promoSelected.promocionId);
                    $rootScope.cliente.promosIdsLike.splice(indexPromo, 1);
                }
            })
            .catch(function (err) {
                alert("Error al actualizar el cliente: " + JSON.stringify(err));
            });
        }

        $scope.setEstado = function(id){
            $rootScope.estadoSelected = id;
        }

        $scope.setCategoria = function(id){
            $scope.categoriaSelected = id;
            $http.post( SUBCATEGORIAS_WS, {categoriaId:id} ).then(function(result){
                $scope.categoData.subcategorias = result.data;
                $scope.subCategoriaSelected = $scope.categoData.subcategorias[0].subCategoriaId;
            })
        }

        $scope.setSubCategoria = function(id){
            $scope.subCategoriaSelected = id;
        }

        $scope.getPromocion = function ( promo, index ) {
            console.log("promo :: ", promo);
            $rootScope.promoSelected = promo;
            $rootScope.indexPromoSelected = index;
            $rootScope.decuentoPorcentaje = 100 - (( promo.precioDescuento * 100 ) / promo.precioRegular);

            //Verificar si la promo tiene "megusta" por el cliente
            $rootScope.megusta = $rootScope.cliente.promosIdsLike.indexOf( promo.promocionId ) >= 0 ? true : false;
            console.log("Me gusta:: " + $rootScope.megusta);

            window.location.href = "#/app/detalle";
        }

        $scope.buscarPorNombre = function(){
          if ( $scope.criteria.length >= 3 ) {
              $kuponServices.getPromosPorTitulo( $scope.criteria ).then(function(resultPromo) {
                  console.log("actualizando promociones :: ", resultPromo);
                  $rootScope.promociones = resultPromo;
                  if(!$scope.$$phase) {
                      $scope.$apply()
                  }
              },function(error){
                  alert("Error al cargar promociones: " + JSON.stringify(error) );
              });
          } else if( $scope.criteria === "" ) {
              $kuponServices.getPromosPorTitulo( "*" ).then(function(resultPromo) {
                  $rootScope.promociones = resultPromo;
                  console.log("actualizando promociones :: ", $rootScope.promociones );
                  if(!$scope.$$phase) {
                      $scope.$apply()
                  }
              },function(error){
                  alert("Error al cargar promociones: " + JSON.stringify(error) );
              });
          }
        }

        $scope.actualizarLista = function(){

          $kuponServices.initApp($rootScope.user.id).then(function(resultPromo) {
              console.log("actualizando promociones :: ", resultPromo);
              $rootScope.promociones = resultPromo.data;
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

        var BUSQUEDA_POR_ESTADO = 1

        // Para busqueda de kupones
        $scope.prepararBusqueda = function( tipo ){
          if( tipo === BUSQUEDA_POR_ESTADO ){
              // An elaborate, custom popup
              // Sustituit por un modal WEB
              /*
              var myPopup = $ionicPopup.show({
                  template: '<select ng-model="estadoSelected" ng-change="setEstado(estadoSelected)" ' +
                            'ng-options="estado.id as estado.nombre for estado in estados"> ' +
                            '</select>',
                  title: 'Busqueda de kupones por estado',
                  subTitle: 'Seleccione un estado',
                  scope: $scope,
                  buttons: [
                      { text: 'Cancel' },
                      {
                          text: '<b>Buscar</b>',
                          type: 'button-positive',
                          onTap: function(e) {
                              //console.log("Estado selected: ", $scope.estadoSelected);
                              localStorage[ LOCAL_ESTADO_SELECTED ] = $scope.estadoSelected;
                              return $scope.estadoSelected;
                          }
                      }
                  ]
              });
              myPopup.then(function(res) {
                if(!res) return;
                $ionicLoading.show({
                  template: "Buscando tus kupones ..."
                });
                $kuponServices.getPromosPorEstado( res ).then(function(resultPromo) {
                    $rootScope.promociones = resultPromo.data;
                    $scope.$broadcast('scroll.refreshComplete');
                    if(!$scope.$$phase) {
                        $scope.$apply()
                    }
                    $ionicLoading.hide();
                },function(error){
                    $ionicLoading.hide();
                    $scope.$broadcast('scroll.refreshComplete');
                    if(!$scope.$$phase) {
                        $scope.$apply()
                    }
                    alert("Error al cargar promociones: " + JSON.stringify(error) );
                });;
              });
              */
          }else{
              $scope.categoData = JSON.parse(localStorage["categoData"]);
              $scope.categoriaSelected = $scope.categoData.categorias[0].categoriaId;
              $scope.subCategoriaSelected = $scope.categoData.subcategorias[0].subCategoriaId;
              console.log("subCategoriaSelected antes de ... :: ", $scope.subCategoriaSelected)

              // Sustituir por un modal WEB
              /*
              var myPopup = $ionicPopup.show({
                  template: '<select ng-model="categoriaSelected" ng-change="setCategoria(categoriaSelected)" ' +
                  'ng-options="categoria.categoriaId as categoria.descripcion for categoria in categoData.categorias"> ' +
                  '</select><select ng-model="subCategoriaSelected" ng-change="setSubCategoria(subCategoriaSelected)" ' +
                  'ng-options="subcategoria.subCategoriaId as subcategoria.descripcion for subcategoria in categoData.subcategorias"> ' +
                  '</select> ',
                  title: 'Busqueda de kupones por categoria',
                  subTitle: 'Seleccione una categoria',
                  scope: $scope,
                  buttons: [
                      { text: 'Cancel' },
                      {
                          text: '<b>Buscar</b>',
                          type: 'button-positive',
                          onTap: function(e) {
                              return $scope.subCategoriaSelected;
                          }
                      }
                  ]
              });
              myPopup.then(function(res) {
                  if(!res) return;
                  $ionicLoading.show({
                      template: "Buscando tus kupones ..."
                  });
                  var request = {estadoId: localStorage[ LOCAL_ESTADO_SELECTED ], subcategoriaId: res};
                  $http.post(GET_PROMOS_ESTADO_CATEGO_WS, request)
                  .then(function(result){
                      console.log("Promociones por categoria: ", result.data )
                      $rootScope.promociones = result.data.promociones;
                      $scope.$broadcast('scroll.refreshComplete');
                      if(!$scope.$$phase) {
                          $scope.$apply()
                      }
                      $ionicLoading.hide();
                  })
                  .catch(function(err){
                      $ionicLoading.hide();
                      $scope.$broadcast('scroll.refreshComplete');
                      if(!$scope.$$phase) {
                          $scope.$apply()
                      }
                      alert("Error al cargar promociones: " + JSON.stringify(error) );
                  })
              });
              */
          }

      }

});
