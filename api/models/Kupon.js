/**
* Kupon.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	adapter: 'kuponesMysqlServer',
	autoCreatedAt: true,
	autoPK:false,
	autoUpdatedAt: true,
	tableName: 'kupon',
	attributes: {
		kuponId: {
			type: 'integer',
			unique: true,
			primaryKey: true,
			autoIncrement: true,
			columnName: 'kupon_id'
		},
		titulo: {
			type: 'string',
			columnName: 'titulo'
		},
		descripcionCorta: {
			type: 'string',
			columnName: 'descripcion_corta'
		},
		descripcionLarga: {
			type: 'text',
			columnName: 'descripcion_larga'
		},
		imagenes: {
			type: 'array'
		},
		vigencia: {
			type: 'datetime'
		},
		restricciones: {
			type: 'text'
		},
		precioRegular: {
			type: 'float',
			columnName: 'precio_regular'
		},
		precioDescuento: {
			type: 'float',
			columnName: 'precio_descuento'
		},
		precioKupon: {
			type: 'float',
			columnName: 'precio_kupon'
		},
		activo: {
			type: 'boolean'
		},
		promocionId: {
			model: 'Promocion',
			columnName: 'promocion_id'
		}
	}
};

