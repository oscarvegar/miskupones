/**
* Promocion.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	adapter: 'kuponesMysqlServer',
	autoCreatedAt: true,
	autoPK:false,
	autoUpdatedAt: true,
	tableName: 'promocion',
	attributes: {
		promocionId: {
			type: 'integer',
			unique: true,
			primaryKey: true,
			autoIncrement: true,
			columnName: 'promocion_id'
		},
		titulo: {
			type: 'string'
		},
		subCategoriaId: {
			model: 'Subcategoria',
			columnName: 'sub_categoria_id'
		},
		proveedorId: {
			model: 'Proveedor',
			columnName: 'proveedor_id'
		},
		kupones: {
			collection: 'Kupon',
			via: 'promocionId'
		}
	}
};

