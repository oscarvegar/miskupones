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
        //console.log("venta.: ", ventaRequest);
        var venta = { user: ventaRequest.user,
                      promocion:ventaRequest.promocionId ,
                      cantidad:ventaRequest.cantidad,
                      total:ventaRequest.total,
                      estadoId:eval(ventaRequest.estadoId),
                      userAgent:request.headers['user-agent']  }
        console.log("Venta:: ", venta);
        Promocion.findOne({promocionId:venta.promocion})
       .then(function(promocion) {
            //Venta.query("START TRANSACTION");
            return promocion;
        })
       .then(function(promocion) {
                console.log("Actualizando promo: ", promocion );
                var cantidadCreados = promocion.cantidadCreados + venta.cantidad;
            return Promocion.update( {promocionId:promocion.promocionId}, {cantidadCreados:cantidadCreados} );
        })
        .then(function( promocion ){
            console.log("Promocion actualizada a " + venta.cantidad + " kupones creados ... ");
            return Venta.create( venta );
        })
       .then(function(venta){
            console.log(" VENTA CREADA ::: ", venta);
            var promises = [];
            for( var i = 0; i < venta.cantidad; i++ ){
                var kupon = {promocionId: venta.promocion,
                             subCategoriaId: ventaRequest.subcategoriaId,
                             estadoId:venta.estadoId,
                             ventaId: venta.id,
                             userAgent:venta.userAgent};
                promises.push( Kupon.create( kupon ) );
            }
            return Q.all(promises).allSettled(promises);
        })
       .then(function(promesasResult){
            console.log(" RESULT de PROMESAS ::: ", promesasResult );
            //Venta.query("COMMIT;");
            console.log("Commit transaction");
            return response.json(200, "OK");
        })
       .catch(function(err){
            console.log("Error al procesar la venta ::: ", err);
            response.json( 500, err );
        });

    },


    notify: function(request, response){
        var data = request.allParams();
        console.log(" Notify: ", data);
        if( data.payment_status === "Pending" ){
            // En desarrollo, pasa como pendiente, en produccion seria Completed
            var ventaRequest = JSON.parse(data.custom);

            var venta = { user: ventaRequest.user,
                promocion:ventaRequest.promocionId ,
                cantidad:ventaRequest.cantidad,
                total:ventaRequest.total,
                estadoId:eval(ventaRequest.estadoId),
                userAgent:request.headers['user-agent']  }
            console.log("Venta:: ", venta);
            Promocion.findOne({promocionId:venta.promocion})
                .then(function(promocion) {
                    //Venta.query("START TRANSACTION");
                    return promocion;
                })
                .then(function(promocion) {
                    console.log("Actualizando promo: ", promocion );
                    var cantidadCreados = promocion.cantidadCreados + venta.cantidad;
                    return Promocion.update( {promocionId:promocion.promocionId}, {cantidadCreados:cantidadCreados} );
                })
                .then(function( promocion ){
                    console.log("Promocion actualizada a " + venta.cantidad + " kupones creados ... ");
                    return Venta.create( venta );
                })
                .then(function(venta){
                    console.log(" VENTA CREADA ::: ", venta);
                    var promises = [];
                    for( var i = 0; i < venta.cantidad; i++ ){
                        var kupon = {promocionId: venta.promocion,
                            subCategoriaId: ventaRequest.subcategoriaId,
                            estadoId:venta.estadoId,
                            ventaId: venta.id,
                            userAgent:venta.userAgent};
                        promises.push( Kupon.create( kupon ) );
                    }
                    return Q.all(promises).allSettled(promises);
                })
                .then(function(promesasResult){
                    console.log(" RESULT de PROMESAS ::: ", promesasResult );
                    //Venta.query("COMMIT;");
                    console.log("Commit transaction");
                    //return response.json(200, "OK");
                    return response.send("OK");

                })
                .catch(function(err){
                    console.log("Error al procesar la venta ::: ", err);
                    return response.redirect(502, "/#/fin");

                });


        }else{
            console.log("Error al procesar pago de paypal " + data.payment_status +
            ":: ", data.pending_reason);
            return response.redirect(500, "/index.html#/fin");
        }

    }

};

