/**
 * KuponController
 *
 * @description :: Server-side logic for managing Kupons
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    misKupones:function(request, response){
        var userId = request.allParams().userId;
        console.log("User ID de Kupones:: ", userId);
        Venta.find( {user: userId}).populate('promocion').populate('estadoId')
        .then(function(result){
            console.log("Mis ventas son: ", result);
            return response.json(result);
        })
        .catch(function(err){
            console.error("Error al regresar las ventas:: ", err);
            return response.json(500, err);
        });
    }

};

