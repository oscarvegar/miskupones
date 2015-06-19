/**
* Cliente.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    user:{
      model:'user'
    },
    nombre: 'string',
    apellidos: 'string',
    telefono: 'string',
    correo: 'string',
    estado:{
      model:'estado'
    },
    promocionesLike:{
      collection:'promocion',
      via:'clientesLike',
      dominant:true
    },
    activo: {
      type:'boolean',
      defaultsTo:1
    }

  }
};

