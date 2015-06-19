/**
 * PromocionEstado.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
	autoPK: false,
	tableName: 'promocion_estado',
	attributes: {
		promocionEstadoId: {
			type: 'integer',
			unique: true,
			primaryKey: true,
			autoIncrement: true,
			columnName: 'promocion_estado_id'
		},
		promocionId: {
			model: 'Promocion',
			columnName: 'promocion_id'
		},
		estadoId: {
			model: 'Estado',
			columnName: 'estado_id'
		},
	}
};