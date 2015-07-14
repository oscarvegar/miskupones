/**
 * Created by oscar on 02/04/15.
 */
var myApp = angular.module("MisComprasModule",[]);
myApp.controller( "MisComprasController",
    function($timeout,$scope, $http, $rootScope, $kuponServices){
        $scope.loadInit = function() {
            // Obtener del servidor en vez de $db

              $http.post( MIS_KUPONES_WS )
                  .then(function(result){
                      console.log("Result de mis kupones :: ", result.data);
                      $scope.miskupones = result.data;
                  })
                  .catch(function(err){
                      console.error("Error: ", err)
                  });

        }

        $scope.getkupones = function( kupon ){
            $rootScope.kuponSelected = kupon;
            $timeout(function(){
                for(var i = 0; i < $rootScope.kuponSelected.miskupones.length; i++){
                    var kuponqr =  $rootScope.kuponSelected.miskupones[i];
                    console.log("kupon qr:: ", kuponqr);
                    var ele = document.getElementById("kupon" + kuponqr.kuponId);
                    ele.innerHTML = "";
                    new QRCode(ele,  {text: kuponqr.qr,width: 90,height: 80});
                }
            })
        }

        $scope.descargarPDF = function(){
            console.log("Descargando PDF");
            var doc = new jsPDF();
            doc.setFontSize(25);
            var splitTitle = doc.splitTextToSize($rootScope.kuponSelected.promocion.titulo, 180);
            doc.text(15, 15, splitTitle);

            doc.setFontSize(15);
            doc.text(15, 29, "-DESCRIPCION-");

            doc.setFontSize(10);
            var splitDescripcion = doc.splitTextToSize($rootScope.kuponSelected.promocion.descripcionLarga, 180);
            doc.text(15, 35, splitDescripcion);

            doc.text(15, 50, "Costo Kupon: $" + $rootScope.kuponSelected.promocion.precioKupon);
            doc.text(15, 55, "Precio Normal Sin Kupon: $" +  $rootScope.kuponSelected.promocion.precioRegular);
            doc.text(15, 60, "Precio Con Kupon: $" + $rootScope.kuponSelected.promocion.precioDescuento);

            doc.setFontSize(15);
            var width = 100, height = 90, x = 15, y = 80, yText = 70, countQR = 0;
            for(var i = 0; i < $rootScope.kuponSelected.miskupones.length; i++){
                doc.text(15, yText, "Kupon " + (i + 1) );
                var kuponqr =  $rootScope.kuponSelected.miskupones[i];
                var imgData = $("#kupon" + kuponqr.kuponId + " img").attr("src");
                doc.addImage(imgData, 'JPEG', x, y, width, height);
                y += height + 20;
                yText = y - 10;
                countQR ++;
                if( countQR % 2 == 0 ){
                    doc.addPage();
                    yText = 20;
                    y = 40;
                }
            }
            doc.save("codigosQR.pdf");
            $('#modalQR').modal('hide')
        }

        $scope.loadInit();


});
