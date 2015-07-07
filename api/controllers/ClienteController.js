/**
 * ClienteController
 *
 * @description :: Server-side logic for managing Clientes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {


    findById : function(request, response ){
        var data = request.allParams().id;
        console.log("data.: ID CLiente en findById ... ", data);
        Cliente.findOne({user:data, activo:1}).populate('promocionesLike',{select:"promocionId"}).then(function(cliente) {
            console.log("==>", cliente);
            var promosCount = cliente.promocionesLike.length;
            var promosIdLike = [];
            for(var i = 0; i < promosCount; i++){
                //console.log("Promos: ",  cliente.promocionesLike[i].promocionId ) ;
                promosIdLike.push( cliente.promocionesLike[i].promocionId );
            }
            var micliente = { user: cliente.user,
            estado: cliente.estado,
            nombre: cliente.nombre,
            apellidos: cliente.apellidos,
            telefono: cliente.telefono,
            correo: cliente.correo,
            id: cliente.id,
            promosIdsLike: promosIdLike};
            console.log("Promos like cliente en retorno: ", micliente );
            return response.json(micliente);
        }).catch(function (err) {
            console.error("Error al buscar cliente por id :: ",err);
        });
    },

   defineMeGusta : function( request, response ){
        var cliente = request.allParams();
       console.log("Info de cliente y promocion a quitar de megusta:: ", cliente);
        Cliente.findOne({id:cliente.id}).then(function(clienteUpd ) {
            console.log("Cliente a actualizar ==> ", clienteUpd );
            if( cliente.megusta ){
                // Hay que quitar
                clienteUpd.promocionesLike.remove( cliente.promocionId );
                clienteUpd.save(function(err){console.error("Error al modificar la relacion del cliente:: ", err);});
                return response.send("ok");
            }else{
                // Hay que agregar
                Promocion.findOne({promocionId: cliente.promocionId}).then(function(promo){
                    console.log("Promociones Like:: ", clienteUpd.promocionesLike);
                    clienteUpd.promocionesLike.add( promo );
                    clienteUpd.save(function(err){console.error("Error al modificar la relacion del cliente:: ", err);});
                    return response.send("ok");
                });
            }
        }).catch(function (err) {
            console.error("Error al buscar cliente por id :: ",err);
        });
    },

    update : function( request, response ){
        var cliente = request.allParams();
        console.log("Cliente: ", cliente);
        Cliente.update({id:cliente.id}, cliente).then(function(clienteUpd) {
            console.log("==>", clienteUpd)
            if( cliente.password ){
                if( cliente.password.length > 0 ){
                    console.log("Actualizando cliente: ", clienteUpd);
                    Passport.update({user:clienteUpd[0].user},{password:cliente.password})
                        .then(function(updatedUser){
                        console.info("Cambio la contraseña usuario",updatedUser);
                    })

                }
            }
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

