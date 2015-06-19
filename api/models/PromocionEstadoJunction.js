/**
* PromocionEstadoJunction.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	autoCreatedAt: true,
	autoPK:false,
	autoUpdatedAt: true,
	tableName: 'promocion_estado_junction',
	tables: ['promocion', 'estado'],
	junctionTable: true,
	attributes: {
	    promocionEstadoJunctionId: {
	      primaryKey: true,
	      autoIncrement: true,
	      type: 'integer',
		  columnName: 'promocion_estado_junction_id'
	    },
	    
	    promociones: {
	      columnName: 'promocion_id',
	      type: 'integer',
	      foreignKey: true,
	      references: 'promocion',
	      on: 'id',
	      onKey: 'id',
	      via: 'estados',
	      groupBy: 'promocion'
	    },
	    
	    estados: {
	      columnName: 'estado_id',
	      type: 'integer',
	      foreignKey: true,
	      references: 'estado',
	      on: 'id',
		  onKey: 'id',
	      via: 'promociones',
	      groupBy: 'estado'
	    }
	}
};