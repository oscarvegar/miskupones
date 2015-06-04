/**
 * PromocionController
 *
 * @description :: Server-side logic for managing Promocions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    findByLimit: function(request, response ){
        var data = request.allParams.limit;
        var criteria = null
        if( data ) {
            criteria = {where: {activo: true}, limit: data};
        } else {
            criteria = {where: {activo: true}};
        }
        Promocion.find(criteria).then(function (promociones) {
            return response.json(promociones);
        }).catch(function (err) {
            console.error("Error al buscar promociones por limite :: ", err);
        });
    },
    findById: function(request, response ){
        var data = request.allParams.id;
        console.log("data.: ", data);
        Promocion.findOne({promocionId:data, activo:true}).then(function (promocion) {
            console.log("==>", promocion)
            return response.json(promocion);
        }).catch(function (err) {
            console.error("Error al buscar promociones por id :: ",err);
        });
    }
};

