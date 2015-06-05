/**
* Subcategoria.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	autoCreatedAt: true,
	autoPK:false,
	autoUpdatedAt: true,
	tableName: 'sub_categoria',
	attributes: {
		subCategoriaId: {
			type: 'integer',
			unique: true,
			primaryKey: true,
			autoIncrement: true,
			columnName: 'sub_categoria_id'
		},
		codigo: {
			type: 'string'
		},
		descripcion: {
			type: 'string'
		},
		hashTag: {
			type: 'string'
		},
		categoriaId: {
			model: 'Categoria',
			columnName: 'categoria_id'
		},
		subCategoriaIdPadre: {
			model: 'Subcategoria',
			columnName: 'sub_categoria_id_padre'
		},
		pomociones: {
			collection: 'Promocion',
			via: 'subCategoriaId'
		},
		subcategoriasHijas: {
			collection: 'Subcategoria',
			via: 'subCategoriaIdPadre'
		}
	}
};

