/**
* Promocion.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
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
		imagenesNames: {
			type: 'array',
			columnName: 'imagenes_names'
		},
		imagenesUrls: {
			type: 'array',
			columnName: 'imagenes_urls'
		},
		imagenesFds: {
			type: 'array',
			columnName: 'imagenes_fds'
		},
		iniVigencia: {
			type: 'datetime',
			columnName: 'ini_vigencia'
		},
		finVigencia: {
			type: 'datetime',
			columnName: 'fin_vigencia'
		},
		restricciones: {
			type: 'text'
		},
		cantidadKupones: {
			type: 'integer',
			columnName: 'cantidad_kupones'
		},
		cantidadCreados: {
			type: 'integer',
			columnName: 'cantidad_creados',
			defaultsTo: 0
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
		eliminado: {
			type: 'boolean',
			defaultsTo: false
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

