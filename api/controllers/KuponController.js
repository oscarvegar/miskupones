/**
 * KuponController
 *
 * @description :: Server-side logic for managing Kupons
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    misKupones:function(request, response){
        var userId = request.allParams().userId;
        if( !userId ){
            if(request.session.user) {
                var reqUser = request.session.user;
                userId = reqUser.id;
            }
        }

        console.log("User ID de Kupones:: ", userId);

        Venta.find( {user: userId}).populate('promocion')
            .populate('estadoId').populate("kupones")
        .then(function(result){
            for( var i = 0; i < result.length; i++ ){
                var kupons = [];
                for( var j = 0; j < result[i].kupones.length; j++ ){
                    var k = result[i].kupones[j];
                    console.log("created date type _:: " + typeof k.createdAt )
                    kupons.push({kuponId: k.kuponId,qr: k.qr });
                }
                console.log(" kupons -->", kupons );
                result[i].miskupones = kupons;
                result[i].kupones = null;
            }
            console.log("Mis ventas son: ", result);
            return response.json(result);
        })
        .catch(function(err){
            console.error("Error al regresar las ventas:: ", err);
            return response.json(500, err);
        });
    }

};

