/**
 * DashboardController
 *
 * @description :: Server-side logic for managing Dashboards
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	dashboardmapa:function(req,res){
		/*var data={};
		data.labels={
			"PUE" :'100 ventas',
			"CHH" :'200 ventas',
			"BCS" :"300 ventas"
		};
		data.colors={
			"PUE" :"#33CC00",
			"CHH" :'#339900',
			"BCS" :"#336600",
			"YUC" :"#336600"
		};
		return res.json(data);*/

		if(req.session.user) {

			console.log("MAPA");
			var fecha = req.allParams();
			var fecha_ini=fecha.fechaInicial;
			var fecha_fin=fecha.fechaFinal;
			var sessionUser = req.session.user;

			console.log(fecha_ini);
			console.log(fecha_fin);
			console.log(sessionUser.proveedor);

			if(sessionUser.perfil == 'PROVEEDOR'){

				Venta.query("SELECT edo.abreviatura as estado, edo.color as color, SUM(vt.total) as total  FROM estado edo, venta vt, promocion pr WHERE  edo.id = vt.estadoId  AND vt.promocion = pr.promocion_id AND pr.proveedor_id =  "+sessionUser.proveedor+" AND (vt.createdAt BETWEEN '"+fecha_ini+"' AND '"+fecha_fin+"') GROUP BY vt.estadoId" , function(err, data) {
        		    if(err) res.json({ error: err.message }, 400);
				    console.log("Datos Mapa Proveedor>>>>>");
				    console.log(data);
				    res.json(data);
				});



				}else{


				Venta.query("SELECT edo.abreviatura as estado, edo.color as color, SUM(vt.total) as total  FROM estado edo, venta vt, promocion pr WHERE  edo.id = vt.estadoId  AND (vt.createdAt BETWEEN '"+fecha_ini+"' AND '"+fecha_fin+"') GROUP BY vt.estadoId" , function(err, data) {
				    if(err) res.json({ error: err.message }, 400);
				    console.log("Datos Mapa Admin>>>>>>>");
				    console.log(data);
				    res.json(data);
				});


			}

			} else {
            return res.redirect('/provlogin');
        }


	},


	

	getdashboard:function(req,res){


		if(req.session.user) {

			var fecha = req.allParams();
			//var start_date=Number(fecha.fechaInicial);
			//var end_date=Number(fecha.fechaFinal);
			var sessionUser = req.session.user;

			var fecha_ini=fecha.fechaInicial;
			var fecha_fin=fecha.fechaFinal;

			console.log("Dashboard Ventas");
			console.log(fecha_ini);
			console.log(fecha_fin);
			console.log(sessionUser.perfil);
			console.log(sessionUser.proveedor);

			if(sessionUser.perfil == 'PROVEEDOR'){


				//Venta.find().where({createdAt: { '>=': new Date(end_date),'<=' : new Date(start_date)}}).populate('promocion').populate('user',{ proveedor: sessionUser.proveedor}).sort('promocion ASC').exec(function(err, data){
				
				Venta.query("SELECT sum(vt.cantidad) as total,DATE_FORMAT(vt.createdAt, '%Y-%m-%d')   as fecha, vt.promocion as promocion FROM promocion pr, venta vt  WHERE vt.promocion = pr.promocion_id AND pr.proveedor_id =  "+sessionUser.proveedor+" AND (vt.createdAt BETWEEN '"+fecha_ini+"' AND '"+fecha_fin+"')  GROUP BY vt.promocion, DATE_FORMAT(vt.createdAt, '%Y-%m-%d')   ORDER BY vt.promocion ASC", function(err, data) {
					console.log("Datos Ventas x kupon Proveedor>>>>>");
					//console.log(data);
					res.json(data);

					})		

			}else{

				Venta.query("SELECT sum(vt.cantidad) as total,DATE_FORMAT(vt.createdAt, '%Y-%m-%d')  as fecha, vt.promocion as promocion FROM promocion pr, venta vt  WHERE vt.promocion = pr.promocion_id  AND (vt.createdAt BETWEEN '"+fecha_ini+"' AND '"+fecha_fin+"')  GROUP BY vt.promocion, DATE_FORMAT(vt.createdAt, '%Y-%m-%d')   ORDER BY vt.promocion ASC", function(err, data) {
					console.log("Datos Ventas x kupon Admin>>>>>");
					//console.log(data);
					res.json(data);

					})	
			}

		} else {
            return res.redirect('/provlogin');
        }
	},



	getdashboardxmes:function(req,res){


		if(req.session.user) {

			var fecha = req.allParams();
			var fecha_ini=fecha.fechaInicial;
			var fecha_fin=fecha.fechaFinal;
			var sessionUser = req.session.user;


			console.log("Dashboard Ventas");
			console.log(fecha_ini);
			console.log(fecha_fin);
			console.log(sessionUser.perfil);
			console.log(sessionUser.id);

			

			if(sessionUser.perfil == 'PROVEEDOR'){



                Venta.query("SELECT MONTH(vt.createdAt) as meses, SUM(vt.total) as total FROM venta vt, promocion pr WHERE vt.promocion = pr.promocion_id AND pr.proveedor_id =  "+sessionUser.proveedor+" AND (vt.createdAt BETWEEN '"+fecha_ini+"' AND '"+fecha_fin+"') GROUP BY YEAR(vt.createdAt), MONTH(vt.createdAt)", function(err, data) {
			    if(err) res.json({ error: err.message }, 400);
			      console.log("Dashboard por mes Proveedor>>>>>>>");
				 //   console.log(data);
			    res.json(data);
				});


			}else{

				Venta.query("SELECT MONTH(createdAt) as meses, SUM(total) as total FROM venta WHERE (createdAt BETWEEN '"+fecha_ini+"' AND '"+fecha_fin+"') GROUP BY YEAR(createdAt), MONTH(createdAt)", function(err, data) {
			    if(err) res.json({ error: err.message }, 400);
			      console.log("Dashboard por mes  Admin>>>>>>>");
				 //   console.log(data);
			    res.json(data);
				});

			}	
			


	    } else {
            return res.redirect('/provlogin');
        }
	
				
	},


	getdashboardanual:function(req,res){


		if(req.session.user) {


			var fecha = req.allParams();
			var fecha_ini=fecha.fechaInicial;
			var fecha_fin=fecha.fechaFinal;
			var sessionUser = req.session.user;


			if(sessionUser.perfil == 'PROVEEDOR'){
		

				Venta.query("SELECT MONTH(vt.createdAt) as meses, YEAR(vt.createdAt) as anios, SUM(vt.total) as total FROM venta vt, promocion pr WHERE vt.promocion = pr.promocion_id AND pr.proveedor_id =   "+sessionUser.proveedor+" AND (vt.createdAt BETWEEN '"+fecha_ini+"' AND '"+fecha_fin+"') GROUP BY YEAR(vt.createdAt), MONTH(vt.createdAt)", function(err, data) {
				    if(err) res.json({ error: err.message }, 400);
				    //console.log(data);
				    res.json(data);
				});

			
			}else{

				Venta.query("SELECT MONTH(createdAt) as meses, YEAR(createdAt) as anios, SUM(total) as total FROM venta  WHERE (createdAt BETWEEN '"+fecha_ini+"' AND '"+fecha_fin+"') GROUP BY YEAR(createdAt), MONTH(createdAt)", function(err, data) {
				    if(err) res.json({ error: err.message }, 400);
				    //console.log(data);
				    res.json(data);
				});


			}


		} else {
            return res.redirect('/provlogin');
        }
				
	},


	getdashboardcompartidos:function(req,res){

		if(req.session.user) {

			var fecha = req.allParams();
			var fecha_ini=fecha.fechaInicial;
			var fecha_fin=fecha.fechaFinal;
			var sessionUser = req.session.user;
			//var fecha_ini = "2015-05-01";
			//var fecha_fin = "2015-06-20";
	


			if(sessionUser.perfil == 'PROVEEDOR'){

				Venta.query("SELECT vt.promocion as promocion, SUM(pr.fbshare) as compartidos FROM promocion pr, venta vt WHERE vt.promocion = pr.promocion_id AND pr.proveedor_id =   "+sessionUser.proveedor+" AND (vt.createdAt BETWEEN '"+fecha_ini+"' AND '"+fecha_fin+"') GROUP BY pr.promocion_id", function(err, data) {
					    if(err) res.json({ error: err.message }, 400);
					    res.json(data);
						});


			}else{

				Venta.query("SELECT vt.promocion as promocion, SUM(pr.fbshare) as compartidos  FROM promocion pr, venta vt WHERE vt.promocion = pr.promocion_id  AND (vt.createdAt BETWEEN '"+fecha_ini+"' AND '"+fecha_fin+"') GROUP BY pr.promocion_id", function(err, data) {
					    if(err) res.json({ error: err.message }, 400);
					    res.json(data);
						});

			}
	     
         

        } else {
            return res.redirect('/provlogin');
        }
	
	
	},




	getdashboardlikes:function(req,res){
		var fecha = req.allParams();
		var start_date=Number(fecha.fechaInicial);
		var end_date=Number(fecha.fechaFinal);

		Venta.query('SELECT promocion_clientesLike as promocion, COUNT(promocion_clientesLike) as total FROM cliente_promocioneslike__promocion_clienteslike GROUP BY promocion_clientesLike', function(err, data) {
		    if(err) res.json({ error: err.message }, 400);
		    //console.log(data);
		    res.json(data);
		});
	
				
	},

	getdashboardso:function(req,res){
		if(req.session.user) {

			var fecha = req.allParams();
			var fecha_ini=fecha.fechaInicial;
			var fecha_fin=fecha.fechaFinal;
			var sessionUser = req.session.user;
	


			if(sessionUser.perfil == 'PROVEEDOR'){
	

				Venta.query("SELECT MONTH(vt.createdAt) as meses, SUM(vt.userAgent LIKE '%Android%') as Android, SUM(vt.userAgent LIKE '%iPhone%') as iPhone, SUM(vt.userAgent LIKE '%Windows%') as Windows, SUM(vt.userAgent LIKE '%BlackBerry%') as BlackBerry FROM promocion pr, venta vt  WHERE vt.promocion = pr.promocion_id AND pr.proveedor_id =   "+sessionUser.proveedor+" AND (vt.createdAt BETWEEN '"+fecha_ini+"' AND '"+fecha_fin+"') GROUP BY MONTH(vt.createdAt)", function(err, data) {
				    if(err) res.json({ error: err.message }, 400);
				    res.json(data);
				});
	

			}else{

				Venta.query("SELECT MONTH(createdAt) as meses, SUM(userAgent LIKE '%Android%') as Android, SUM(userAgent LIKE '%iPhone%') as iPhone, SUM(userAgent LIKE '%Windows%') as Windows, SUM(userAgent LIKE '%BlackBerry%') as BlackBerry FROM venta WHERE (createdAt BETWEEN '"+fecha_ini+"' AND '"+fecha_fin+"') GROUP BY MONTH(createdAt)", function(err, data) {
				    if(err) res.json({ error: err.message }, 400);
				    res.json(data);
				});
			}
	     
         

        } else {
            return res.redirect('/provlogin');
        }
	

				
	}



};

