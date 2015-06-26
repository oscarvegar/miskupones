/**
* Estado.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
		clave: 'string',
		nombre: 'string',
		abreviatura: 'string',
		color:'string',
		claveCapital: {
			type: 'string',
			columnName: 'clave_capital'
		},
		nombreCapital: {
			type: 'string',
			columnName: 'nombre_capital'
		},
		estadoPromociones: {
			collection: 'PromocionEstado',
			via: 'estadoId'
		},
		promocionesAsociadas: {
			collection: 'promocion',
			through: 'promocionestadojunction'
		}
	}
};

