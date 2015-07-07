/**
 * Created by oscar on 02/04/15.
 */
var myApp = angular.module("MisComprasModule",[]);
myApp.controller( "MisComprasController",
    function($timeout,$scope, $http, $rootScope, $kuponServices){
        $scope.loadInit = function() {
            // Obtener del servidor en vez de $db
            /*
            $db.query( DOC_USER ).then( function( result ) {
              //alert("user: " + result.user.id );
              $http.post( MIS_KUPONES_WS, {userId: result.user.id})
                  .then(function(result){
                      console.log("Result de mis kupones :: ", result.data);
                      $scope.miskupones = result.data;
                  })
                  .catch(function(err){
                      console.error("Error: ", err)
                  });
            });

            for(var i = 0; i < $rootScope.kuponSelected.miskupones.length; i++){
                var kuponqr =  $rootScope.kuponSelected.miskupones[i];
                console.log("kupon qr:: ", kuponqr);
                new QRCode(document.getElementById("kupon" + kuponqr.kuponId), kuponqr.qr);
            }
             */
        }

        $scope.getkupones = function( kupon ){
            $rootScope.kuponSelected = kupon;
        }

        $scope.loadInit();


});
