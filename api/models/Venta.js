/**
* Venta.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    user:{
      model: 'user',
      required: true
    },

    promocion:{
      model: 'promocion',
      required: true
    },

    cantidad: 'integer',
    total: 'float',
    estadoId:{
      model:'estado'
    },
    userAgent:'string'
  }

};

