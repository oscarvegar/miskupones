/**
* Kupon.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
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
		promocionId: {
			model: 'Promocion',
			columnName: 'promocion_id'
		},
		subCategoriaId: {
			model: 'Subcategoria',
			columnName: 'sub_categoria_id'
		},
		estadoId:{
			model: 'estado'
		},
		userAgent:'string'
	}
};

