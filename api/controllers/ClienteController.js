/**
 * ClienteController
 *
 * @description :: Server-side logic for managing Clientes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {


    findById : function(request, response ){
        var data = request.allParams().id;
        console.log("data.: ", data);
        Cliente.findOne({user:data, activo:1}).then(function(cliente) {
            console.log("==>", cliente)
            return response.json(cliente);
        }).catch(function (err) {
            console.error("Error al buscar cliente por id :: ",err);
        });
    },

    update : function( request, response ){
        var cliente = request.allParams();
        console.log("Cliente: ", cliente);
        Cliente.update({id:cliente.id}, cliente).then(function(clienteUpd) {
            console.log("==>", clienteUpd)
            return response.json(clienteUpd);
        }).catch(function (err) {
            console.error("Error al buscar cliente por id :: ",err);
        });
    },

    create: function( request, response ){
        var cliente = request.allParams();
        Cliente.create(cliente).then(function(cliente){
            return response.json(cliente);
        });
    }

};

