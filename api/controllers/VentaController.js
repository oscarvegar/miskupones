/**
 * VentaController
 *
 * @description :: Server-side logic for managing Ventas
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var Q = require("q");

module.exports = {

    generaVenta: function(request, response ){
        var ventaRequest = request.allParams();
        console.log("venta.: ", ventaRequest);
        var venta = { user: ventaRequest.user,
                      promocion:ventaRequest.promocionId ,
                      cantidad:ventaRequest.cantidad,
                      total:ventaRequest.total }
        Promocion.find({promocionId:venta.promocion})
       .then(function(promocion) {
            Venta.query("START TRANSACTION");
            return promocion;
        })
       .then(function(promocion) {
            return Promocion.update( {promocionId:promocion.promocionId}, {cantidadCreados:venta.cantidad} );
        })
       .then(function(promocion){
            console.log("Promocion actualizada a " + venta.cantidad + " kupones creados ... ");
            var promises = [];
            for( var i = 0; i < venta.cantidad; i++ ){
                var kupon = {promocionId: venta.promocion, subCategoriaId: ventaRequest.subcategoriaId};
                promises.push( Kupon.create( kupon ) );
            }
            return Q.all(promises).allSettled(promises);
        })
       .then(function( promesasResult ){
            console.log(" RESULT de PROMESAS ::: ", promesasResult );
            console.log("Venta a crear :: ", venta);
            return Venta.create( venta );
        })
       .then(function(ventaNueva){
            console.log("Venta creada con ", ventaNueva );
            return Venta.query("COMMIT;");
        })
       .then(function(){
            console.log("Commit transaction");
            response.json(200, "OK");
        })
       .catch(function(err){
            console.log("Error al procesar la venta ::: ", err);
            response.json( 500, err );
        });
    }

};

