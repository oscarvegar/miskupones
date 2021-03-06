/**
* Proveedor.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	autoCreatedAt: true,
	autoPK:false,
	autoUpdatedAt: true,
	tableName: 'proveedor',
	attributes: {
		proveedorId: {
			type: 'integer',
			unique: true,
			primaryKey: true,
			autoIncrement: true,
			columnName: 'proveedor_id'
		},
		rfc: {
			type: 'string'
		},
		 nombre: 'string',
    	 apellidoPaterno: 'string',
    	 apellidoMaterno: 'string',
    	 estado: 'string',
    	 ciudad: 'string',
    	 fechaNacimiento: 'date',
    	 sexo: 'string',
		userId: {
			model: 'User',
			columnName: 'user_id'
		},
		username: 'string',
		email: 'email',
		promociones: {
			collection: 'Promocion',
			via: 'proveedorId'
		}
	}
};

