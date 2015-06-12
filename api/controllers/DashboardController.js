/**
 * DashboardController
 *
 * @description :: Server-side logic for managing Dashboards
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	mapa:function(req,res){
		var data={};
		data.labels={
			"PUE" :'100 ventas',
			"CHH" :'200 ventas',
			"BCS" :"300 ventas"
		};
		data.colors={
			"PUE" :"#33CC00",
			"CHH" :'#339900',
			"BCS" :"#336600"
		};
		return res.json(data);
	},


	

	getdashboard:function(req,res){
		var fecha = req.allParams();
		var start_date=Number(fecha.fechaInicial);
		var end_date=Number(fecha.fechaFinal);
		console.log("Entro a dashboard");
		console.log(start_date);
		console.log(end_date);

		Venta.find().where({createdAt: { '>=': new Date(end_date),'<=' : new Date(start_date)}}).populate('promocion').populate('user').sort('promocion ASC').exec(function(err, data){
			console.log(data);
			res.json(data);

			})		
				
	},



	getdashboardxmes:function(req,res){
		var fecha = req.allParams();
		var start_date=Number(fecha.fechaInicial);
		var end_date=Number(fecha.fechaFinal);
		console.log("Entro a dashboard");
		console.log(start_date);
		console.log(end_date);

		Venta.query('SELECT MONTH(createdAt) as meses, SUM(total) as total FROM venta GROUP BY YEAR(createdAt), MONTH(createdAt)', function(err, data) {
		    if(err) res.json({ error: err.message }, 400);
		    console.log(data);
		    res.json(data);
		});
	
				
	},


	getdashboardanual:function(req,res){
		var fecha = req.allParams();
		var start_date=Number(fecha.fechaInicial);
		var end_date=Number(fecha.fechaFinal);
		console.log("Entro a dashboard");
		console.log(start_date);
		console.log(end_date);

		Venta.query('SELECT MONTH(createdAt) as meses, YEAR(createdAt) as anios, SUM(total) as total FROM mis_kupones.venta GROUP BY YEAR(createdAt), MONTH(createdAt)', function(err, data) {
		    if(err) res.json({ error: err.message }, 400);
		    console.log(data);
		    res.json(data);
		});
	
				
	},










};

