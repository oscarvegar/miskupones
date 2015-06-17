/**
 * EstadoController
 *
 * @description :: Server-side logic for managing Estadoes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    getEstados : function( request, response ){
        Estado.find({}).then(function(estados){
            return response.json(estados);
        })
    }

};

