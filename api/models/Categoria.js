/**
* Categoria.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	adapter: 'kuponesMysqlServer',
	autoCreatedAt: true,
	autoPK:false,
	autoUpdatedAt: true,
	tableName: 'categoria',
	attributes: {
		categoriaId: {
			type: 'integer',
			unique: true,
			primaryKey: true,
			autoIncrement: true,
			columnName: 'categoria_id'
		},
		codigo: {
			type: 'string'
		},
		descripcion: {
			type: 'string'
		},
		subcategorias: {
			collection: 'Subcategoria',
			via: 'categoriaId'
		}
	}
};

