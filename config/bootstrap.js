/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  sails.services.passport.loadStrategies();
/*
  Categoria.create({codigo: 'A&A', descripcion: 'Apparel & Accessories', hashTag: '#ApparelAccessories'}, function(error, categoria) {
  	Categoria.create({codigo: 'CLTH', descripcion: 'Clothing', hashTag: '#Clothing', categoriaIdPadre: categoria}, function(error, categoriaHija) {
	  Subcategoria.create({codigo: 'ACTW', descripcion: 'Activewear', hashTag: '#Activewear', categoriaId: categoriaHija}, function(error, subcategoria) {
	  	Subcategoria.create({codigo: 'MTPRCLTH', descripcion: 'Motorcycle Protective Clothing', hashTag: '#MotorcycleProtectiveClothing', categoriaId: categoriaHija, subCategoriaIdPadre: subcategoria}, function(error, subcategoriaHija) {
		  Subcategoria.create({codigo: 'MTJCK', descripcion: 'Motorcycle Jackets', hashTag: '#MotorcycleJackets', categoriaId: categoriaHija, subCategoriaIdPadre: subcategoriaHija}, function(error, subcategoriaHijaDeep) {
			  Subcategoria.create({codigo: 'MTJCK', descripcion: 'Motorcycle Pants', hashTag: '#MotorcyclePants', categoriaId: categoriaHija, subCategoriaIdPadre: subcategoriaHija}, function(error, subcategoriaHijaDeep) {
				  Subcategoria.create({codigo: 'MTJCK', descripcion: 'Motorcycle Suits', hashTag: '#MotorcycleSuits', categoriaId: categoriaHija, subCategoriaIdPadre: subcategoriaHija}, function(error, subcategoriaHijaDeep) {
				  	console.log('Finisher!!!');
				  });
			  });
		  });
	  	});
	  });
  	});
  });
 */

 var dateDummy = new Date();
 dateDummy.setMonth(dateDummy.getMonth() + 3);

 var promocionDummy = { 
 	  titulo: 'titulo',
	  descripcionCorta: 'descripcionCorta',
	  descripcionLarga: 'descripcionLarga descripcionLarga descripcionLarga descripcionLarga descripcionLarga descripcionLarga',
	  restricciones: 'restricciones restricciones restricciones restricciones restricciones restricciones restricciones restricciones',
	  cantidadKupones: '25',
	  precioRegular: '250',
	  precioDescuento: '200',
	  precioKupon: '30',
	  activo: true,
	  iniVigencia: dateDummy,
	  finVigencia: dateDummy,
	  imagenesNames: [ 'MisKupones.jpg' ],
	  imagenesUrls: [ 'http://localhost:1337/uploadImages/97b51232-0673-433b-a5f3-a965cf19a574.jpg' ],
	  imagenesFds: [ '/home/phoenix/Repositories/git/miskupones/assets/uploadImages/97b51232-0673-433b-a5f3-a965cf19a574.jpg' ]
  };

  Proveedor.findOne({rfc: 'MORD810515MU0'}, function(err, proveedor) {
  	if(err) {
  		return res.json(400,err);
  	} else if(proveedor == null) {
  		Proveedor.create({rfc: 'MORD810515MU0'}, function(err, createdProveedor) {

		  Categoria.findOne({codigo: 'A&A'}, function(err, categoria) {
		  	if(err){
		  		return res.json(400,err);
		  	} else if(categoria == null){
			  Categoria.create({codigo: 'A&A', descripcion: 'Apparel & Accessories', hashTag: '#ApparelAccessories'}, function(error, categoria) {
			  	Subcategoria.create({codigo: 'CLTH', descripcion: 'Clothing', hashTag: '#Clothing', categoriaId: categoria}, function(error, subcategoria) {
			  		promocionDummy.subCategoriaId = subcategoria;
			  		promocionDummy.proveedorId = createdProveedor;
			  		Promocion.create(promocionDummy, function(error, promocion) {
						console.log('Finisher!!!');
			  		});
			  	});
			  });
		    }
		  });

		  Categoria.findOne({codigo: 'A&E'}, function(err, categoria) {
		  	if(err){
		  		return res.json(400,err);
		  	} else if(categoria == null){
			  Categoria.create({codigo: 'A&E', descripcion: 'Arts & Entertainment', hashTag: '#ArtsEntertainment'}, function(error, categoria) {
			  	Subcategoria.create({codigo: 'P&C', descripcion: 'Party & Celebration', hashTag: '#PartyCelebration', categoriaId: categoria}, function(error, subcategoria) {
			  		promocionDummy.subCategoriaId = subcategoria;
			  		promocionDummy.proveedorId = createdProveedor;
			  		Promocion.create(promocionDummy, function(error, promocion) {
						console.log('Finisher!!!');
			  		});
			  	});
			  });
		    }
		  });

		  Categoria.findOne({codigo: 'B&T'}, function(err, categoria) {
		  	if(err){
		  		return res.json(400,err);
		  	} else if(categoria == null){
			  Categoria.create({codigo: 'B&T', descripcion: 'Baby & Toddler', hashTag: '#BabyToddler'}, function(error, categoria) {
			  	Subcategoria.create({codigo: 'BB_TOYS', descripcion: 'Baby Toys', hashTag: '#BabyToys', categoriaId: categoria}, function(error, subcategoria) {
			  		promocionDummy.subCategoriaId = subcategoria;
			  		promocionDummy.proveedorId = createdProveedor;
			  		Promocion.create(promocionDummy, function(error, promocion) {
						console.log('Finisher!!!');
			  		});
			  	});
			  });
		    }
		  });

		  Categoria.findOne({codigo: 'ELCT'}, function(err, categoria) {
		  	if(err){
		  		return res.json(400,err);
		  	} else if(categoria == null){
			  Categoria.create({codigo: 'ELCT', descripcion: 'Electronics', hashTag: '#Electronics'}, function(error, categoria) {
			  	Subcategoria.create({codigo: 'AUDIO', descripcion: 'Audio', hashTag: '#Audio', categoriaId: categoria}, function(error, subcategoria) {
			  		promocionDummy.subCategoriaId = subcategoria;
			  		promocionDummy.proveedorId = createdProveedor;
			  		Promocion.create(promocionDummy, function(error, promocion) {
						console.log('Finisher!!!');
			  		});
				  	Subcategoria.create({codigo: 'COMP', descripcion: 'Computers', hashTag: '#Computers', categoriaId: categoria}, function(error, subcategoria) {
				  		promocionDummy.subCategoriaId = subcategoria;
				  		promocionDummy.proveedorId = createdProveedor;
				  		Promocion.create(promocionDummy, function(error, promocion) {
							console.log('Finisher!!!');
				  		});
					  	Subcategoria.create({codigo: 'VGMC', descripcion: 'Video Game Consoles', hashTag: '#VideoGameConsoles', categoriaId: categoria}, function(error, subcategoria) {
					  		promocionDummy.subCategoriaId = subcategoria;
					  		promocionDummy.proveedorId = createdProveedor;
					  		Promocion.create(promocionDummy, function(error, promocion) {
								console.log('Finisher!!!');
					  		});
					  	});
				  	});
			  	});
			  });
		    }
		  });

		  Categoria.findOne({codigo: 'H&B'}, function(err, categoria) {
		  	if(err){
		  		return res.json(400,err);
		  	} else if(categoria == null){
			  Categoria.create({codigo: 'H&B', descripcion: 'Health & Beauty', hashTag: '#HealthBeauty'}, function(error, categoria) {
			  	Subcategoria.create({codigo: 'HLTH_CARE', descripcion: 'Health Care', hashTag: '#HealthCare', categoriaId: categoria}, function(error, subcategoria) {
			  		promocionDummy.subCategoriaId = subcategoria;
			  		promocionDummy.proveedorId = createdProveedor;
			  		Promocion.create(promocionDummy, function(error, promocion) {
						console.log('Finisher!!!');
			  		});
			  	});
			  });
		    }
		  });

  		});
  	}
  });
/*
  Promocion.find({activo: true}, function(err, promociones) {
  	if(err){
  		return res.json(400,err);
  	} else if(promociones == null || promociones.length == 0){
  		promocionDummy.
  		Promocion.create(, function(error, promocion) {
  			asd
  		});
  	}
  });
*/
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
