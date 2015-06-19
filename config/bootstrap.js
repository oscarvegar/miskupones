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
	  eliminado: false,
	  iniVigencia: dateDummy,
	  finVigencia: dateDummy,
	  imagenesNames: [ 'MisKupones.jpg' ],
	  imagenesUrls: [ 'http://miskupones.com/uploadImages/97b51232-0673-433b-a5f3-a965cf19a574.jpg' ],
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

	Estado.find().exec( function(err, estados){
		//console.log("Hay estados? ", estados );
		if( !estados || estados.length <= 0 ){
			//No hay estados, registramos en B.D.
			Estado.create({ clave: '01',
			  nombre: 'Aguascalientes',
			  abreviatura: 'Ags.',
			  claveCapital: '0010001',
			  nombreCapital: 'Aguascalientes' }).exec(function(err, tp){});
			Estado.create({ clave: '02',
			  nombre: 'Baja California',
			  abreviatura: 'BC',
			  claveCapital: '0020001',
			  nombreCapital: 'Mexicali' }).exec(function(err, tp){});
			Estado.create({ clave: '03',
			  nombre: 'Baja California Sur',
			  abreviatura: 'BCS',
			  claveCapital: '0030001',
			  nombreCapital: 'La Paz' }).exec(function(err, tp){});
			Estado.create({ clave: '04',
			  nombre: 'Campeche',
			  abreviatura: 'Camp.',
			  claveCapital: '0020001',
			  nombreCapital: 'San Francisco de Campeche' }).exec(function(err, tp){});
			Estado.create({ clave: '05',
			  nombre: 'Coahuila de Zaragoza',
			  abreviatura: 'Coah.',
			  claveCapital: '0300001',
			  nombreCapital: 'Saltillo' }).exec(function(err, tp){});
			Estado.create({ clave: '06',
			  nombre: 'Colima',
			  abreviatura: 'Col.',
			  claveCapital: '0020001',
			  nombreCapital: 'Colima' }).exec(function(err, tp){});
			Estado.create({ clave: '07',
			  nombre: 'Chiapas',
			  abreviatura: 'Chis.',
			  claveCapital: '1010001',
			  nombreCapital: 'Tuxtla Gutiérrez' }).exec(function(err, tp){});
			Estado.create({ clave: '08',
			  nombre: 'Chihuahua',
			  abreviatura: 'Chih.',
			  claveCapital: '0190001',
			  nombreCapital: 'Chihuahua' }).exec(function(err, tp){});
			Estado.create({ clave: '09',
			  nombre: 'Distrito Federal',
			  abreviatura: 'DF',
			  claveCapital: '',
			  nombreCapital: '' }).exec(function(err, tp){});
			Estado.create({ clave: '10',
			  nombre: 'Durango',
			  abreviatura: 'Dgo.',
			  claveCapital: '0050001',
			  nombreCapital: 'Victoria de Durango' }).exec(function(err, tp){});
			Estado.create({ clave: '11',
			  nombre: 'Guanajuato',
			  abreviatura: 'Gto.',
			  claveCapital: '0150001',
			  nombreCapital: 'Guanajuato' }).exec(function(err, tp){});
			Estado.create({ clave: '12',
			  nombre: 'Guerrero',
			  abreviatura: 'Gro.',
			  claveCapital: '0290001',
			  nombreCapital: 'Chilpancingo de los Bravo' }).exec(function(err, tp){});
			Estado.create({ clave: '13',
			  nombre: 'Hidalgo',
			  abreviatura: 'Hgo.',
			  claveCapital: '0480001',
			  nombreCapital: 'Pachuca de Soto' }).exec(function(err, tp){});
			Estado.create({ clave: '14',
			  nombre: 'Jalisco',
			  abreviatura: 'Jal.',
			  claveCapital: '0390001',
			  nombreCapital: 'Guadalajara' }).exec(function(err, tp){});
			Estado.create({ clave: '15',
			  nombre: 'México',
			  abreviatura: 'Mex.',
			  claveCapital: '1060001',
			  nombreCapital: 'Toluca de Lerdo' }).exec(function(err, tp){});
			Estado.create({ clave: '16',
			  nombre: 'Michoacán de Ocampo',
			  abreviatura: 'Mich.',
			  claveCapital: '0530001',
			  nombreCapital: 'Morelia' }).exec(function(err, tp){});
			Estado.create({ clave: '17',
			  nombre: 'Morelos',
			  abreviatura: 'Mor.',
			  claveCapital: '0070001',
			  nombreCapital: 'Cuernavaca' }).exec(function(err, tp){});
			Estado.create({ clave: '18',
			  nombre: 'Nayarit',
			  abreviatura: 'Nay.',
			  claveCapital: '0170001',
			  nombreCapital: 'Tepic' }).exec(function(err, tp){});
			Estado.create({ clave: '19',
			  nombre: 'Nuevo León',
			  abreviatura: 'NL',
			  claveCapital: '0390001',
			  nombreCapital: 'Ciudad Monterrey' }).exec(function(err, tp){});
			Estado.create({ clave: '20',
			  nombre: 'Oaxaca',
			  abreviatura: 'Oax.',
			  claveCapital: '0670001',
			  nombreCapital: 'Oaxaca de Juárez' }).exec(function(err, tp){});
			Estado.create({ clave: '21',
			  nombre: 'Puebla',
			  abreviatura: 'Pue.',
			  claveCapital: '1140001',
			  nombreCapital: 'Heróica Puebla de Zaragoza' }).exec(function(err, tp){});
			Estado.create({ clave: '22',
			  nombre: 'Querétaro',
			  abreviatura: 'Qro.',
			  claveCapital: '0140001',
			  nombreCapital: 'Santiago de Querétaro' }).exec(function(err, tp){});
			Estado.create({ clave: '23',
			  nombre: 'Quintana Roo',
			  abreviatura: 'Q. Roo',
			  claveCapital: '0040001',
			  nombreCapital: 'Chetumal' }).exec(function(err, tp){});
			Estado.create({ clave: '24',
			  nombre: 'San Luis Potosí',
			  abreviatura: 'SLP',
			  claveCapital: '0280001',
			  nombreCapital: 'San Luis Potosí' }).exec(function(err, tp){});
			Estado.create({ clave: '25',
			  nombre: 'Sinaloa',
			  abreviatura: 'Sin.',
			  claveCapital: '0060001',
			  nombreCapital: 'Culiacán Rosales' }).exec(function(err, tp){});
			Estado.create({ clave: '26',
			  nombre: 'Sonora',
			  abreviatura: 'Son.',
			  claveCapital: '0300001',
			  nombreCapital: 'Hermosillo' }).exec(function(err, tp){});
			Estado.create({ clave: '27',
			  nombre: 'Tabasco',
			  abreviatura: 'Tab.',
			  claveCapital: '0040001',
			  nombreCapital: 'Villahermosa' }).exec(function(err, tp){});
			Estado.create({ clave: '28',
			  nombre: 'Tamaulipas',
			  abreviatura: 'Tamps.',
			  claveCapital: '0410001',
			  nombreCapital: 'Ciudad Victoria' }).exec(function(err, tp){});
			Estado.create({ clave: '29',
			  nombre: 'Tlaxcala',
			  abreviatura: 'Tlax.',
			  claveCapital: '0330001',
			  nombreCapital: 'Tlaxcala de Xicohténcatl' }).exec(function(err, tp){});
			Estado.create({ clave: '30',
			  nombre: 'Veracruz de Ignacio de la Llave',
			  abreviatura: 'Ver.',
			  claveCapital: '0870001',
			  nombreCapital: 'Xalapa-Enríquez' }).exec(function(err, tp){});
			Estado.create({ clave: '31',
			  nombre: 'Yucatán',
			  abreviatura: 'Yuc.',
			  claveCapital: '0500001',
			  nombreCapital: 'Mérida' }).exec(function(err, tp){});
			Estado.create({ clave: '32',
			  nombre: 'Zacatecas',
			  abreviatura: 'Zac.',
			  claveCapital: '0560001',
			  nombreCapital: 'Zacatecas' }).exec(function(err, tp){});
/*
			Municipio.create({ claveEntidad: '01',
			  clave: '001',
			  nombre: 'Aguascalientes',
			  claveCabecera: '0001',
			  nombreCabecera: 'Aguascalientes' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '01',
			  clave: '002',
			  nombre: 'Asientos',
			  claveCabecera: '0001',
			  nombreCabecera: 'Asientos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '01',
			  clave: '003',
			  nombre: 'Calvillo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Calvillo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '01',
			  clave: '004',
			  nombre: 'Cos�o',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cos�o' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '01',
			  clave: '005',
			  nombre: 'Jes�s Mar�a',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jes�s Mar�a' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '01',
			  clave: '006',
			  nombre: 'Pabell�n de Arteaga',
			  claveCabecera: '0001',
			  nombreCabecera: 'Pabell�n de Arteaga' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '01',
			  clave: '007',
			  nombre: 'Rinc�n de Romos',
			  claveCabecera: '0001',
			  nombreCabecera: 'Rinc�n de Romos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '01',
			  clave: '008',
			  nombre: 'San Jos� de Gracia',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Jos� de Gracia' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '01',
			  clave: '009',
			  nombre: 'Tepezal�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepezal�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '01',
			  clave: '010',
			  nombre: 'El Llano',
			  claveCabecera: '0001',
			  nombreCabecera: 'Palo Alto' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '01',
			  clave: '011',
			  nombre: 'San Francisco de los Romo',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Francisco de los Romo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '02',
			  clave: '001',
			  nombre: 'Ensenada',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ensenada' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '02',
			  clave: '002',
			  nombre: 'Mexicali',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mexicali' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '02',
			  clave: '003',
			  nombre: 'Tecate',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tecate' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '02',
			  clave: '004',
			  nombre: 'Tijuana',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tijuana' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '02',
			  clave: '005',
			  nombre: 'Playas de Rosarito',
			  claveCabecera: '0001',
			  nombreCabecera: 'Playas de Rosarito' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '03',
			  clave: '001',
			  nombre: 'Comond�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad Constituci�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '03',
			  clave: '002',
			  nombre: 'Muleg�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Rosal�a' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '03',
			  clave: '003',
			  nombre: 'La Paz',
			  claveCabecera: '0001',
			  nombreCabecera: 'La Paz' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '03',
			  clave: '008',
			  nombre: 'Los Cabos',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Jos� del Cabo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '03',
			  clave: '009',
			  nombre: 'Loreto',
			  claveCabecera: '0001',
			  nombreCabecera: 'Loreto' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '04',
			  clave: '001',
			  nombre: 'Calkin�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Calkin�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '04',
			  clave: '002',
			  nombre: 'Campeche',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Francisco de Campeche' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '04',
			  clave: '003',
			  nombre: 'Carmen',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad del Carmen' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '04',
			  clave: '004',
			  nombre: 'Champot�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Champot�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '04',
			  clave: '005',
			  nombre: 'Hecelchak�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Hecelchak�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '04',
			  clave: '006',
			  nombre: 'Hopelch�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Hopelch�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '04',
			  clave: '007',
			  nombre: 'Palizada',
			  claveCabecera: '0001',
			  nombreCabecera: 'Palizada' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '04',
			  clave: '008',
			  nombre: 'Tenabo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tenabo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '04',
			  clave: '009',
			  nombre: 'Esc�rcega',
			  claveCabecera: '0001',
			  nombreCabecera: 'Esc�rcega' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '04',
			  clave: '010',
			  nombre: 'Calakmul',
			  claveCabecera: '0001',
			  nombreCabecera: 'Xpujil' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '04',
			  clave: '011',
			  nombre: 'Candelaria',
			  claveCabecera: '0001',
			  nombreCabecera: 'Candelaria' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '001',
			  nombre: 'Abasolo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Abasolo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '002',
			  nombre: 'Acu�a',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad Acu�a' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '003',
			  nombre: 'Allende',
			  claveCabecera: '0001',
			  nombreCabecera: 'Allende' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '004',
			  nombre: 'Arteaga',
			  claveCabecera: '0001',
			  nombreCabecera: 'Arteaga' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '005',
			  nombre: 'Candela',
			  claveCabecera: '0001',
			  nombreCabecera: 'Candela' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '006',
			  nombre: 'Casta�os',
			  claveCabecera: '0001',
			  nombreCabecera: 'Casta�os' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '007',
			  nombre: 'Cuatro Ci�negas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cuatro Ci�negas de Carranza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '008',
			  nombre: 'Escobedo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Escobedo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '009',
			  nombre: 'Francisco I. Madero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Francisco I. Madero (Ch�vez)' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '010',
			  nombre: 'Frontera',
			  claveCabecera: '0001',
			  nombreCabecera: 'Frontera' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '011',
			  nombre: 'General Cepeda',
			  claveCabecera: '0001',
			  nombreCabecera: 'General Cepeda' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '012',
			  nombre: 'Guerrero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Guerrero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '013',
			  nombre: 'Hidalgo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '014',
			  nombre: 'Jim�nez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jim�nez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '015',
			  nombre: 'Ju�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '016',
			  nombre: 'Lamadrid',
			  claveCabecera: '0001',
			  nombreCabecera: 'Lamadrid' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '017',
			  nombre: 'Matamoros',
			  claveCabecera: '0001',
			  nombreCabecera: 'Matamoros' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '018',
			  nombre: 'Monclova',
			  claveCabecera: '0001',
			  nombreCabecera: 'Monclova' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '019',
			  nombre: 'Morelos',
			  claveCabecera: '0001',
			  nombreCabecera: 'Morelos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '020',
			  nombre: 'M�zquiz',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad Melchor M�zquiz' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '021',
			  nombre: 'Nadadores',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nadadores' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '022',
			  nombre: 'Nava',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nava' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '023',
			  nombre: 'Ocampo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ocampo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '024',
			  nombre: 'Parras',
			  claveCabecera: '0001',
			  nombreCabecera: 'Parras de la Fuente' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '025',
			  nombre: 'Piedras Negras',
			  claveCabecera: '0001',
			  nombreCabecera: 'Piedras Negras' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '026',
			  nombre: 'Progreso',
			  claveCabecera: '0001',
			  nombreCabecera: 'Progreso' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '027',
			  nombre: 'Ramos Arizpe',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ramos Arizpe' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '028',
			  nombre: 'Sabinas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Sabinas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '029',
			  nombre: 'Sacramento',
			  claveCabecera: '0001',
			  nombreCabecera: 'Sacramento' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '030',
			  nombre: 'Saltillo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Saltillo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '031',
			  nombre: 'San Buenaventura',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Buenaventura' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '032',
			  nombre: 'San Juan de Sabinas',
			  claveCabecera: '0014',
			  nombreCabecera: 'Nueva Rosita' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '033',
			  nombre: 'San Pedro',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '034',
			  nombre: 'Sierra Mojada',
			  claveCabecera: '0001',
			  nombreCabecera: 'Sierra Mojada' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '035',
			  nombre: 'Torre�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Torre�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '036',
			  nombre: 'Viesca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Viesca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '037',
			  nombre: 'Villa Uni�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Uni�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '05',
			  clave: '038',
			  nombre: 'Zaragoza',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zaragoza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '06',
			  clave: '001',
			  nombre: 'Armer�a',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad de Armer�a' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '06',
			  clave: '002',
			  nombre: 'Colima',
			  claveCabecera: '0001',
			  nombreCabecera: 'Colima' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '06',
			  clave: '003',
			  nombre: 'Comala',
			  claveCabecera: '0001',
			  nombreCabecera: 'Comala' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '06',
			  clave: '004',
			  nombre: 'Coquimatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Coquimatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '06',
			  clave: '005',
			  nombre: 'Cuauht�moc',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cuauht�moc' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '06',
			  clave: '006',
			  nombre: 'Ixtlahuac�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ixtlahuac�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '06',
			  clave: '007',
			  nombre: 'Manzanillo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Manzanillo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '06',
			  clave: '008',
			  nombre: 'Minatitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Minatitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '06',
			  clave: '009',
			  nombre: 'Tecom�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tecom�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '06',
			  clave: '010',
			  nombre: 'Villa de �lvarez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad de Villa de �lvarez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '001',
			  nombre: 'Acacoyagua',
			  claveCabecera: '0001',
			  nombreCabecera: 'Acacoyagua' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '002',
			  nombre: 'Acala',
			  claveCabecera: '0001',
			  nombreCabecera: 'Acala' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '003',
			  nombre: 'Acapetahua',
			  claveCabecera: '0001',
			  nombreCabecera: 'Acapetahua' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '004',
			  nombre: 'Altamirano',
			  claveCabecera: '0001',
			  nombreCabecera: 'Altamirano' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '005',
			  nombre: 'Amat�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Amat�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '006',
			  nombre: 'Amatenango de la Frontera',
			  claveCabecera: '0001',
			  nombreCabecera: 'Amatenango de la Frontera' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '007',
			  nombre: 'Amatenango del Valle',
			  claveCabecera: '0001',
			  nombreCabecera: 'Amatenango del Valle' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '008',
			  nombre: 'Angel Albino Corzo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jaltenango de la Paz (Angel Albino Corzo)' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '009',
			  nombre: 'Arriaga',
			  claveCabecera: '0001',
			  nombreCabecera: 'Arriaga' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '010',
			  nombre: 'Bejucal de Ocampo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Bejucal de Ocampo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '011',
			  nombre: 'Bella Vista',
			  claveCabecera: '0001',
			  nombreCabecera: 'Bella Vista' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '012',
			  nombre: 'Berrioz�bal',
			  claveCabecera: '0001',
			  nombreCabecera: 'Berrioz�bal' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '013',
			  nombre: 'Bochil',
			  claveCabecera: '0001',
			  nombreCabecera: 'Bochil' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '014',
			  nombre: 'El Bosque',
			  claveCabecera: '0001',
			  nombreCabecera: 'El Bosque' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '015',
			  nombre: 'Cacahoat�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cacahoat�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '016',
			  nombre: 'Catazaj�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Catazaj�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '017',
			  nombre: 'Cintalapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cintalapa de Figueroa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '018',
			  nombre: 'Coapilla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Coapilla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '019',
			  nombre: 'Comit�n de Dom�nguez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Comit�n de Dom�nguez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '020',
			  nombre: 'La Concordia',
			  claveCabecera: '0001',
			  nombreCabecera: 'La Concordia' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '021',
			  nombre: 'Copainal�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Copainal�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '022',
			  nombre: 'Chalchihuit�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chalchihuit�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '023',
			  nombre: 'Chamula',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chamula' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '024',
			  nombre: 'Chanal',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chanal' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '025',
			  nombre: 'Chapultenango',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chapultenango' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '026',
			  nombre: 'Chenalh�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chenalh�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '027',
			  nombre: 'Chiapa de Corzo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chiapa de Corzo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '028',
			  nombre: 'Chiapilla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chiapilla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '029',
			  nombre: 'Chicoas�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chicoas�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '030',
			  nombre: 'Chicomuselo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chicomuselo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '031',
			  nombre: 'Chil�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chil�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '032',
			  nombre: 'Escuintla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Escuintla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '033',
			  nombre: 'Francisco Le�n',
			  claveCabecera: '0042',
			  nombreCabecera: 'Rivera el Viejo Carmen' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '034',
			  nombre: 'Frontera Comalapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Frontera Comalapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '035',
			  nombre: 'Frontera Hidalgo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Frontera Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '036',
			  nombre: 'La Grandeza',
			  claveCabecera: '0001',
			  nombreCabecera: 'La Grandeza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '037',
			  nombre: 'Huehuet�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huehuet�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '038',
			  nombre: 'Huixt�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huixt�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '039',
			  nombre: 'Huitiup�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huitiup�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '040',
			  nombre: 'Huixtla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huixtla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '041',
			  nombre: 'La Independencia',
			  claveCabecera: '0001',
			  nombreCabecera: 'La Independencia' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '042',
			  nombre: 'Ixhuat�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ixhuat�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '043',
			  nombre: 'Ixtacomit�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ixtacomit�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '044',
			  nombre: 'Ixtapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ixtapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '045',
			  nombre: 'Ixtapangajoya',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ixtapangajoya' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '046',
			  nombre: 'Jiquipilas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jiquipilas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '047',
			  nombre: 'Jitotol',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jitotol' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '048',
			  nombre: 'Ju�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '049',
			  nombre: 'Larr�inzar',
			  claveCabecera: '0001',
			  nombreCabecera: 'Larr�inzar' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '050',
			  nombre: 'La Libertad',
			  claveCabecera: '0001',
			  nombreCabecera: 'La Libertad' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '051',
			  nombre: 'Mapastepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mapastepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '052',
			  nombre: 'Las Margaritas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Las Margaritas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '053',
			  nombre: 'Mazapa de Madero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mazapa de Madero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '054',
			  nombre: 'Mazat�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mazat�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '055',
			  nombre: 'Metapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Metapa de Dom�nguez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '056',
			  nombre: 'Mitontic',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mitontic' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '057',
			  nombre: 'Motozintla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Motozintla de Mendoza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '058',
			  nombre: 'Nicol�s Ru�z',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nicol�s Ru�z' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '059',
			  nombre: 'Ocosingo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ocosingo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '060',
			  nombre: 'Ocotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ocotepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '061',
			  nombre: 'Ocozocoautla de Espinosa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ocozocoautla de Espinosa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '062',
			  nombre: 'Ostuac�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ostuac�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '063',
			  nombre: 'Osumacinta',
			  claveCabecera: '0001',
			  nombreCabecera: 'Osumacinta' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '064',
			  nombre: 'Oxchuc',
			  claveCabecera: '0001',
			  nombreCabecera: 'Oxchuc' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '065',
			  nombre: 'Palenque',
			  claveCabecera: '0001',
			  nombreCabecera: 'Palenque' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '066',
			  nombre: 'Pantelh�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Pantelh�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '067',
			  nombre: 'Pantepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Pantepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '068',
			  nombre: 'Pichucalco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Pichucalco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '069',
			  nombre: 'Pijijiapan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Pijijiapan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '070',
			  nombre: 'El Porvenir',
			  claveCabecera: '0001',
			  nombreCabecera: 'El Porvenir de Velasco Su�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '071',
			  nombre: 'Villa Comaltitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Comaltitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '072',
			  nombre: 'Pueblo Nuevo Solistahuac�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Pueblo Nuevo Solistahuac�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '073',
			  nombre: 'Ray�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ray�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '074',
			  nombre: 'Reforma',
			  claveCabecera: '0001',
			  nombreCabecera: 'Reforma' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '075',
			  nombre: 'Las Rosas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Las Rosas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '076',
			  nombre: 'Sabanilla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Sabanilla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '077',
			  nombre: 'Salto de Agua',
			  claveCabecera: '0001',
			  nombreCabecera: 'Salto de Agua' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '078',
			  nombre: 'San Crist�bal de las Casas',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Crist�bal de las Casas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '079',
			  nombre: 'San Fernando',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Fernando' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '080',
			  nombre: 'Siltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Siltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '081',
			  nombre: 'Simojovel',
			  claveCabecera: '0001',
			  nombreCabecera: 'Simojovel de Allende' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '082',
			  nombre: 'Sital�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Sital�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '083',
			  nombre: 'Socoltenango',
			  claveCabecera: '0001',
			  nombreCabecera: 'Socoltenango' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '084',
			  nombre: 'Solosuchiapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Solosuchiapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '085',
			  nombre: 'Soyal�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Soyal�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '086',
			  nombre: 'Suchiapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Suchiapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '087',
			  nombre: 'Suchiate',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '088',
			  nombre: 'Sunuapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Sunuapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '089',
			  nombre: 'Tapachula',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tapachula de C�rdova y Ord��ez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '090',
			  nombre: 'Tapalapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tapalapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '091',
			  nombre: 'Tapilula',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tapilula' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '092',
			  nombre: 'Tecpat�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tecpat�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '093',
			  nombre: 'Tenejapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tenejapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '094',
			  nombre: 'Teopisca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Teopisca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '096',
			  nombre: 'Tila',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tila' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '097',
			  nombre: 'Tonal�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tonal�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '098',
			  nombre: 'Totolapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Totolapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '099',
			  nombre: 'La Trinitaria',
			  claveCabecera: '0001',
			  nombreCabecera: 'La Trinitaria' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '100',
			  nombre: 'Tumbal�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tumbal�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '101',
			  nombre: 'Tuxtla Guti�rrez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tuxtla Guti�rrez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '102',
			  nombre: 'Tuxtla Chico',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tuxtla Chico' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '103',
			  nombre: 'Tuzant�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tuzant�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '104',
			  nombre: 'Tzimol',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tzimol' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '105',
			  nombre: 'Uni�n Ju�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Uni�n Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '106',
			  nombre: 'Venustiano Carranza',
			  claveCabecera: '0001',
			  nombreCabecera: 'Venustiano Carranza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '107',
			  nombre: 'Villa Corzo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Corzo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '108',
			  nombre: 'Villaflores',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villaflores' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '109',
			  nombre: 'Yajal�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Yajal�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '110',
			  nombre: 'San Lucas',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Lucas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '111',
			  nombre: 'Zinacant�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zinacant�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '112',
			  nombre: 'San Juan Cancuc',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Cancuc' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '113',
			  nombre: 'Aldama',
			  claveCabecera: '0001',
			  nombreCabecera: 'Aldama' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '114',
			  nombre: 'Benem�rito de las Am�ricas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Benem�rito de las Am�ricas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '115',
			  nombre: 'Maravilla Tenejapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Maravilla Tenejapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '116',
			  nombre: 'Marqu�s de Comillas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zamora Pico de Oro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '117',
			  nombre: 'Montecristo de Guerrero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Montecristo de Guerrero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '118',
			  nombre: 'San Andr�s Duraznal',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Andr�s Duraznal' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '07',
			  clave: '119',
			  nombre: 'Santiago el Pinar',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago el Pinar' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '001',
			  nombre: 'Ahumada',
			  claveCabecera: '0001',
			  nombreCabecera: 'Miguel Ahumada' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '002',
			  nombre: 'Aldama',
			  claveCabecera: '0001',
			  nombreCabecera: 'Juan Aldama' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '003',
			  nombre: 'Allende',
			  claveCabecera: '0001',
			  nombreCabecera: 'Valle de Ignacio Allende' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '004',
			  nombre: 'Aquiles Serd�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Eulalia' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '005',
			  nombre: 'Ascensi�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ascensi�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '006',
			  nombre: 'Bach�niva',
			  claveCabecera: '0001',
			  nombreCabecera: 'Bach�niva' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '007',
			  nombre: 'Balleza',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mariano Balleza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '008',
			  nombre: 'Batopilas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Batopilas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '009',
			  nombre: 'Bocoyna',
			  claveCabecera: '0001',
			  nombreCabecera: 'Bocoyna' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '010',
			  nombre: 'Buenaventura',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Buenaventura' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '011',
			  nombre: 'Camargo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Rosal�a de Camargo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '012',
			  nombre: 'Carich�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Carich�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '013',
			  nombre: 'Casas Grandes',
			  claveCabecera: '0001',
			  nombreCabecera: 'Casas Grandes' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '014',
			  nombre: 'Coronado',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jos� Esteban Coronado' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '015',
			  nombre: 'Coyame del Sotol',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago de Coyame' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '016',
			  nombre: 'La Cruz',
			  claveCabecera: '0001',
			  nombreCabecera: 'La Cruz' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '017',
			  nombre: 'Cuauht�moc',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cuauht�moc' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '018',
			  nombre: 'Cusihuiriachi',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cusihuiriachi' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '019',
			  nombre: 'Chihuahua',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chihuahua' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '020',
			  nombre: 'Ch�nipas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ch�nipas de Almada' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '021',
			  nombre: 'Delicias',
			  claveCabecera: '0001',
			  nombreCabecera: 'Delicias' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '022',
			  nombre: 'Dr. Belisario Dom�nguez',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Lorenzo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '023',
			  nombre: 'Galeana',
			  claveCabecera: '0001',
			  nombreCabecera: 'Hermenegildo Galeana' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '024',
			  nombre: 'Santa Isabel',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Isabel' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '025',
			  nombre: 'G�mez Far�as',
			  claveCabecera: '0001',
			  nombreCabecera: 'Valent�n G�mez Far�as' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '026',
			  nombre: 'Gran Morelos',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Nicol�s de Carretas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '027',
			  nombre: 'Guachochi',
			  claveCabecera: '0001',
			  nombreCabecera: 'Guachochi' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '028',
			  nombre: 'Guadalupe',
			  claveCabecera: '0001',
			  nombreCabecera: 'Guadalupe' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '029',
			  nombre: 'Guadalupe y Calvo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Guadalupe y Calvo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '030',
			  nombre: 'Guazapares',
			  claveCabecera: '0001',
			  nombreCabecera: 'T�moris' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '031',
			  nombre: 'Guerrero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Vicente Guerrero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '032',
			  nombre: 'Hidalgo del Parral',
			  claveCabecera: '0001',
			  nombreCabecera: 'Hidalgo del Parral' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '033',
			  nombre: 'Huejotit�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huejotit�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '034',
			  nombre: 'Ignacio Zaragoza',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ignacio Zaragoza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '035',
			  nombre: 'Janos',
			  claveCabecera: '0001',
			  nombreCabecera: 'Janos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '036',
			  nombre: 'Jim�nez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jos� Mariano Jim�nez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '037',
			  nombre: 'Ju�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '038',
			  nombre: 'Julimes',
			  claveCabecera: '0001',
			  nombreCabecera: 'Julimes' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '039',
			  nombre: 'L�pez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Octaviano L�pez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '040',
			  nombre: 'Madera',
			  claveCabecera: '0001',
			  nombreCabecera: 'Madera' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '041',
			  nombre: 'Maguarichi',
			  claveCabecera: '0001',
			  nombreCabecera: 'Maguarichi' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '042',
			  nombre: 'Manuel Benavides',
			  claveCabecera: '0001',
			  nombreCabecera: 'Manuel Benavides' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '043',
			  nombre: 'Matach�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Matach�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '044',
			  nombre: 'Matamoros',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mariano Matamoros' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '045',
			  nombre: 'Meoqui',
			  claveCabecera: '0001',
			  nombreCabecera: 'Pedro Meoqui' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '046',
			  nombre: 'Morelos',
			  claveCabecera: '0001',
			  nombreCabecera: 'Morelos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '047',
			  nombre: 'Moris',
			  claveCabecera: '0001',
			  nombreCabecera: 'Moris' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '048',
			  nombre: 'Namiquipa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Namiquipa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '049',
			  nombre: 'Nonoava',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nonoava' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '050',
			  nombre: 'Nuevo Casas Grandes',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nuevo Casas Grandes' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '051',
			  nombre: 'Ocampo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Melchor Ocampo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '052',
			  nombre: 'Ojinaga',
			  claveCabecera: '0001',
			  nombreCabecera: 'Manuel Ojinaga' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '053',
			  nombre: 'Praxedis G. Guerrero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Praxedis G. Guerrero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '054',
			  nombre: 'Riva Palacio',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Andr�s' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '055',
			  nombre: 'Rosales',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Cruz de Rosales' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '056',
			  nombre: 'Rosario',
			  claveCabecera: '0001',
			  nombreCabecera: 'Valle del Rosario' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '057',
			  nombre: 'San Francisco de Borja',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Francisco de Borja' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '058',
			  nombre: 'San Francisco de Conchos',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Francisco de Conchos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '059',
			  nombre: 'San Francisco del Oro',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Francisco del Oro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '060',
			  nombre: 'Santa B�rbara',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa B�rbara' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '061',
			  nombre: 'Satev�',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Francisco Javier de Satev�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '062',
			  nombre: 'Saucillo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Saucillo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '063',
			  nombre: 'Tem�sachic',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tem�sachic' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '064',
			  nombre: 'El Tule',
			  claveCabecera: '0001',
			  nombreCabecera: 'El Tule' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '065',
			  nombre: 'Urique',
			  claveCabecera: '0001',
			  nombreCabecera: 'Urique' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '066',
			  nombre: 'Uruachi',
			  claveCabecera: '0001',
			  nombreCabecera: 'Uruachi' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '08',
			  clave: '067',
			  nombre: 'Valle de Zaragoza',
			  claveCabecera: '0001',
			  nombreCabecera: 'Valle de Zaragoza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '09',
			  clave: '002',
			  nombre: 'Azcapotzalco',
			  claveCabecera: '----',
			  nombreCabecera: '' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '09',
			  clave: '003',
			  nombre: 'Coyoac�n',
			  claveCabecera: '----',
			  nombreCabecera: '' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '09',
			  clave: '004',
			  nombre: 'Cuajimalpa de Morelos',
			  claveCabecera: '----',
			  nombreCabecera: '' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '09',
			  clave: '005',
			  nombre: 'Gustavo A. Madero',
			  claveCabecera: '----',
			  nombreCabecera: '' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '09',
			  clave: '006',
			  nombre: 'Iztacalco',
			  claveCabecera: '----',
			  nombreCabecera: '' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '09',
			  clave: '007',
			  nombre: 'Iztapalapa',
			  claveCabecera: '----',
			  nombreCabecera: '' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '09',
			  clave: '008',
			  nombre: 'La Magdalena Contreras',
			  claveCabecera: '----',
			  nombreCabecera: '' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '09',
			  clave: '009',
			  nombre: 'Milpa Alta',
			  claveCabecera: '----',
			  nombreCabecera: '' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '09',
			  clave: '010',
			  nombre: '�lvaro Obreg�n',
			  claveCabecera: '----',
			  nombreCabecera: '' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '09',
			  clave: '011',
			  nombre: 'Tl�huac',
			  claveCabecera: '----',
			  nombreCabecera: '' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '09',
			  clave: '012',
			  nombre: 'Tlalpan',
			  claveCabecera: '----',
			  nombreCabecera: '' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '09',
			  clave: '013',
			  nombre: 'Xochimilco',
			  claveCabecera: '----',
			  nombreCabecera: '' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '09',
			  clave: '014',
			  nombre: 'Benito Ju�rez',
			  claveCabecera: '----',
			  nombreCabecera: '' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '09',
			  clave: '015',
			  nombre: 'Cuauht�moc',
			  claveCabecera: '----',
			  nombreCabecera: '' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '09',
			  clave: '016',
			  nombre: 'Miguel Hidalgo',
			  claveCabecera: '----',
			  nombreCabecera: '' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '09',
			  clave: '017',
			  nombre: 'Venustiano Carranza',
			  claveCabecera: '----',
			  nombreCabecera: '' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '001',
			  nombre: 'Canatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Canatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '002',
			  nombre: 'Canelas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Canelas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '003',
			  nombre: 'Coneto de Comonfort',
			  claveCabecera: '0001',
			  nombreCabecera: 'Coneto de Comonfort' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '004',
			  nombre: 'Cuencam�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cuencam� de Ceniceros' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '005',
			  nombre: 'Durango',
			  claveCabecera: '0001',
			  nombreCabecera: 'Victoria de Durango' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '006',
			  nombre: 'General Sim�n Bol�var',
			  claveCabecera: '0001',
			  nombreCabecera: 'General Sim�n Bol�var' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '007',
			  nombre: 'G�mez Palacio',
			  claveCabecera: '0001',
			  nombreCabecera: 'G�mez Palacio' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '008',
			  nombre: 'Guadalupe Victoria',
			  claveCabecera: '0001',
			  nombreCabecera: 'Guadalupe Victoria' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '009',
			  nombre: 'Guanacev�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Guanacev�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '010',
			  nombre: 'Hidalgo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '011',
			  nombre: 'Ind�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ind�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '012',
			  nombre: 'Lerdo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Lerdo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '013',
			  nombre: 'Mapim�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mapim�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '014',
			  nombre: 'Mezquital',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Francisco del Mezquital' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '015',
			  nombre: 'Nazas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nazas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '016',
			  nombre: 'Nombre de Dios',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nombre de Dios' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '017',
			  nombre: 'Ocampo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Ocampo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '018',
			  nombre: 'El Oro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a del Oro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '019',
			  nombre: 'Ot�ez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ot�ez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '020',
			  nombre: 'P�nuco de Coronado',
			  claveCabecera: '0001',
			  nombreCabecera: 'Francisco I. Madero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '021',
			  nombre: 'Pe��n Blanco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Pe��n Blanco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '022',
			  nombre: 'Poanas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Uni�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '023',
			  nombre: 'Pueblo Nuevo',
			  claveCabecera: '0001',
			  nombreCabecera: 'El Salto' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '024',
			  nombre: 'Rodeo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Rodeo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '025',
			  nombre: 'San Bernardo',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Bernardo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '026',
			  nombre: 'San Dimas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tayoltita' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '027',
			  nombre: 'San Juan de Guadalupe',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan de Guadalupe' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '028',
			  nombre: 'San Juan del R�o',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan del R�o del Centauro del Norte' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '029',
			  nombre: 'San Luis del Cordero',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Luis del Cordero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '030',
			  nombre: 'San Pedro del Gallo',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro del Gallo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '031',
			  nombre: 'Santa Clara',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Clara' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '032',
			  nombre: 'Santiago Papasquiaro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Papasquiaro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '033',
			  nombre: 'S�chil',
			  claveCabecera: '0001',
			  nombreCabecera: 'S�chil' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '034',
			  nombre: 'Tamazula',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tamazula de Victoria' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '035',
			  nombre: 'Tepehuanes',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Catarina de Tepehuanes' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '036',
			  nombre: 'Tlahualilo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlahualilo de Zaragoza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '037',
			  nombre: 'Topia',
			  claveCabecera: '0001',
			  nombreCabecera: 'Topia' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '038',
			  nombre: 'Vicente Guerrero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Vicente Guerrero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '10',
			  clave: '039',
			  nombre: 'Nuevo Ideal',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nuevo Ideal' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '001',
			  nombre: 'Abasolo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Abasolo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '002',
			  nombre: 'Ac�mbaro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ac�mbaro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '003',
			  nombre: 'San Miguel de Allende',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel de Allende' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '004',
			  nombre: 'Apaseo el Alto',
			  claveCabecera: '0001',
			  nombreCabecera: 'Apaseo el Alto' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '005',
			  nombre: 'Apaseo el Grande',
			  claveCabecera: '0001',
			  nombreCabecera: 'Apaseo el Grande' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '006',
			  nombre: 'Atarjea',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atarjea' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '007',
			  nombre: 'Celaya',
			  claveCabecera: '0001',
			  nombreCabecera: 'Celaya' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '008',
			  nombre: 'Manuel Doblado',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad Manuel Doblado' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '009',
			  nombre: 'Comonfort',
			  claveCabecera: '0001',
			  nombreCabecera: 'Comonfort' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '010',
			  nombre: 'Coroneo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Coroneo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '011',
			  nombre: 'Cortazar',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cortazar' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '012',
			  nombre: 'Cuer�maro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cuer�maro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '013',
			  nombre: 'Doctor Mora',
			  claveCabecera: '0001',
			  nombreCabecera: 'Doctor Mora' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '014',
			  nombre: 'Dolores Hidalgo Cuna de la Independencia Nacional',
			  claveCabecera: '0001',
			  nombreCabecera: 'Dolores Hidalgo Cuna de la Independencia Nacional' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '015',
			  nombre: 'Guanajuato',
			  claveCabecera: '0001',
			  nombreCabecera: 'Guanajuato' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '016',
			  nombre: 'Huan�maro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huan�maro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '017',
			  nombre: 'Irapuato',
			  claveCabecera: '0001',
			  nombreCabecera: 'Irapuato' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '018',
			  nombre: 'Jaral del Progreso',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jaral del Progreso' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '019',
			  nombre: 'Jer�cuaro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jer�cuaro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '020',
			  nombre: 'Le�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Le�n de los Aldama' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '021',
			  nombre: 'Morole�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Morole�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '022',
			  nombre: 'Ocampo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ocampo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '023',
			  nombre: 'P�njamo',
			  claveCabecera: '0001',
			  nombreCabecera: 'P�njamo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '024',
			  nombre: 'Pueblo Nuevo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Pueblo Nuevo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '025',
			  nombre: 'Pur�sima del Rinc�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Pur�sima de Bustos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '026',
			  nombre: 'Romita',
			  claveCabecera: '0001',
			  nombreCabecera: 'Romita' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '027',
			  nombre: 'Salamanca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Salamanca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '028',
			  nombre: 'Salvatierra',
			  claveCabecera: '0001',
			  nombreCabecera: 'Salvatierra' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '029',
			  nombre: 'San Diego de la Uni�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Diego de la Uni�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '030',
			  nombre: 'San Felipe',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Felipe' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '031',
			  nombre: 'San Francisco del Rinc�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Francisco del Rinc�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '032',
			  nombre: 'San Jos� Iturbide',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Jos� Iturbide' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '033',
			  nombre: 'San Luis de la Paz',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Luis de la Paz' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '034',
			  nombre: 'Santa Catarina',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Catarina' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '035',
			  nombre: 'Santa Cruz de Juventino Rosas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Juventino Rosas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '036',
			  nombre: 'Santiago Maravat�o',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Maravat�o' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '037',
			  nombre: 'Silao de la Victoria',
			  claveCabecera: '0001',
			  nombreCabecera: 'Silao de la Victoria' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '038',
			  nombre: 'Tarandacuao',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tarandacuao' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '039',
			  nombre: 'Tarimoro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tarimoro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '040',
			  nombre: 'Tierra Blanca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tierra Blanca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '041',
			  nombre: 'Uriangato',
			  claveCabecera: '0001',
			  nombreCabecera: 'Uriangato' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '042',
			  nombre: 'Valle de Santiago',
			  claveCabecera: '0001',
			  nombreCabecera: 'Valle de Santiago' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '043',
			  nombre: 'Victoria',
			  claveCabecera: '0001',
			  nombreCabecera: 'Victoria' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '044',
			  nombre: 'Villagr�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villagr�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '045',
			  nombre: 'Xich�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Xich�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '11',
			  clave: '046',
			  nombre: 'Yuriria',
			  claveCabecera: '0001',
			  nombreCabecera: 'Yuriria' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '001',
			  nombre: 'Acapulco de Ju�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Acapulco de Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '002',
			  nombre: 'Ahuacuotzingo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ahuacuotzingo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '003',
			  nombre: 'Ajuchitl�n del Progreso',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ajuchitl�n del Progreso' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '004',
			  nombre: 'Alcozauca de Guerrero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Alcozauca de Guerrero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '005',
			  nombre: 'Alpoyeca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Alpoyeca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '006',
			  nombre: 'Apaxtla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad Apaxtla de Castrej�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '007',
			  nombre: 'Arcelia',
			  claveCabecera: '0001',
			  nombreCabecera: 'Arcelia' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '008',
			  nombre: 'Atenango del R�o',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atenango del R�o' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '009',
			  nombre: 'Atlamajalcingo del Monte',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atlamajalcingo del Monte' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '010',
			  nombre: 'Atlixtac',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atlixtac' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '011',
			  nombre: 'Atoyac de �lvarez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atoyac de �lvarez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '012',
			  nombre: 'Ayutla de los Libres',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ayutla de los Libres' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '013',
			  nombre: 'Azoy�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Azoy�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '014',
			  nombre: 'Benito Ju�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Jer�nimo de Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '015',
			  nombre: 'Buenavista de Cu�llar',
			  claveCabecera: '0001',
			  nombreCabecera: 'Buenavista de Cu�llar' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '016',
			  nombre: 'Coahuayutla de Jos� Mar�a Izazaga',
			  claveCabecera: '0001',
			  nombreCabecera: 'Coahuayutla de Guerrero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '017',
			  nombre: 'Cocula',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cocula' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '018',
			  nombre: 'Copala',
			  claveCabecera: '0001',
			  nombreCabecera: 'Copala' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '019',
			  nombre: 'Copalillo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Copalillo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '020',
			  nombre: 'Copanatoyac',
			  claveCabecera: '0001',
			  nombreCabecera: 'Copanatoyac' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '021',
			  nombre: 'Coyuca de Ben�tez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Coyuca de Ben�tez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '022',
			  nombre: 'Coyuca de Catal�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Coyuca de Catal�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '023',
			  nombre: 'Cuajinicuilapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cuajinicuilapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '024',
			  nombre: 'Cual�c',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cual�c' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '025',
			  nombre: 'Cuautepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cuautepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '026',
			  nombre: 'Cuetzala del Progreso',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cuetzala del Progreso' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '027',
			  nombre: 'Cutzamala de Pinz�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cutzamala de Pinz�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '028',
			  nombre: 'Chilapa de �lvarez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chilapa de �lvarez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '029',
			  nombre: 'Chilpancingo de los Bravo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chilpancingo de los Bravo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '030',
			  nombre: 'Florencio Villarreal',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cruz Grande' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '031',
			  nombre: 'General Canuto A. Neri',
			  claveCabecera: '0001',
			  nombreCabecera: 'Acapetlahuaya' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '032',
			  nombre: 'General Heliodoro Castillo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlacotepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '033',
			  nombre: 'Huamuxtitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huamuxtitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '034',
			  nombre: 'Huitzuco de los Figueroa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad de Huitzuco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '035',
			  nombre: 'Iguala de la Independencia',
			  claveCabecera: '0001',
			  nombreCabecera: 'Iguala de la Independencia' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '036',
			  nombre: 'Igualapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Igualapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '037',
			  nombre: 'Ixcateopan de Cuauht�moc',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ixcateopan de Cuauht�moc' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '038',
			  nombre: 'Zihuatanejo de Azueta',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zihuatanejo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '039',
			  nombre: 'Juan R. Escudero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tierra Colorada' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '040',
			  nombre: 'Leonardo Bravo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chichihualco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '041',
			  nombre: 'Malinaltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Malinaltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '042',
			  nombre: 'M�rtir de Cuilapan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Apango' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '043',
			  nombre: 'Metlat�noc',
			  claveCabecera: '0001',
			  nombreCabecera: 'Metlat�noc' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '044',
			  nombre: 'Mochitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mochitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '045',
			  nombre: 'Olinal�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Olinal�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '046',
			  nombre: 'Ometepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ometepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '047',
			  nombre: 'Pedro Ascencio Alquisiras',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ixcapuzalco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '048',
			  nombre: 'Petatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Petatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '049',
			  nombre: 'Pilcaya',
			  claveCabecera: '0001',
			  nombreCabecera: 'Pilcaya' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '050',
			  nombre: 'Pungarabato',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad Altamirano' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '051',
			  nombre: 'Quechultenango',
			  claveCabecera: '0001',
			  nombreCabecera: 'Quechultenango' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '052',
			  nombre: 'San Luis Acatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Luis Acatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '053',
			  nombre: 'San Marcos',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Marcos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '054',
			  nombre: 'San Miguel Totolapan',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel Totolapan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '055',
			  nombre: 'Taxco de Alarc�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Taxco de Alarc�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '056',
			  nombre: 'Tecoanapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tecoanapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '057',
			  nombre: 'T�cpan de Galeana',
			  claveCabecera: '0001',
			  nombreCabecera: 'T�cpan de Galeana' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '058',
			  nombre: 'Teloloapan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Teloloapan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '059',
			  nombre: 'Tepecoacuilco de Trujano',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepecoacuilco de Trujano' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '060',
			  nombre: 'Tetipac',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tetipac' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '061',
			  nombre: 'Tixtla de Guerrero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tixtla de Guerrero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '062',
			  nombre: 'Tlacoachistlahuaca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlacoachistlahuaca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '063',
			  nombre: 'Tlacoapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlacoapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '064',
			  nombre: 'Tlalchapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlalchapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '065',
			  nombre: 'Tlalixtaquilla de Maldonado',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlalixtaquilla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '066',
			  nombre: 'Tlapa de Comonfort',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlapa de Comonfort' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '067',
			  nombre: 'Tlapehuala',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlapehuala' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '068',
			  nombre: 'La Uni�n de Isidoro Montes de Oca',
			  claveCabecera: '0001',
			  nombreCabecera: 'La Uni�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '069',
			  nombre: 'Xalpatl�huac',
			  claveCabecera: '0001',
			  nombreCabecera: 'Xalpatl�huac' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '070',
			  nombre: 'Xochihuehuetl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Xochihuehuetl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '071',
			  nombre: 'Xochistlahuaca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Xochistlahuaca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '072',
			  nombre: 'Zapotitl�n Tablas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zapotitl�n Tablas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '073',
			  nombre: 'Zir�ndaro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zir�ndaro de los Ch�vez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '074',
			  nombre: 'Zitlala',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zitlala' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '075',
			  nombre: 'Eduardo Neri',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zumpango del R�o' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '076',
			  nombre: 'Acatepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Acatepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '077',
			  nombre: 'Marquelia',
			  claveCabecera: '0001',
			  nombreCabecera: 'Marquelia' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '078',
			  nombre: 'Cochoapa el Grande',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cochoapa el Grande' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '079',
			  nombre: 'Jos� Joaqu�n de Herrera',
			  claveCabecera: '0001',
			  nombreCabecera: 'Hueycantenango' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '080',
			  nombre: 'Juchit�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Juchit�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '12',
			  clave: '081',
			  nombre: 'Iliatenco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Iliatenco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '001',
			  nombre: 'Acatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Acatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '002',
			  nombre: 'Acaxochitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Acaxochitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '003',
			  nombre: 'Actopan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Actopan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '004',
			  nombre: 'Agua Blanca de Iturbide',
			  claveCabecera: '0001',
			  nombreCabecera: 'Agua Blanca Iturbide' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '005',
			  nombre: 'Ajacuba',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ajacuba' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '006',
			  nombre: 'Alfajayucan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Alfajayucan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '007',
			  nombre: 'Almoloya',
			  claveCabecera: '0001',
			  nombreCabecera: 'Almoloya' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '008',
			  nombre: 'Apan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Apan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '009',
			  nombre: 'El Arenal',
			  claveCabecera: '0001',
			  nombreCabecera: 'El Arenal' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '010',
			  nombre: 'Atitalaquia',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atitalaquia' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '011',
			  nombre: 'Atlapexco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atlapexco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '012',
			  nombre: 'Atotonilco el Grande',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atotonilco el Grande' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '013',
			  nombre: 'Atotonilco de Tula',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atotonilco de Tula' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '014',
			  nombre: 'Calnali',
			  claveCabecera: '0001',
			  nombreCabecera: 'Calnali' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '015',
			  nombre: 'Cardonal',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cardonal' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '016',
			  nombre: 'Cuautepec de Hinojosa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cuautepec de Hinojosa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '017',
			  nombre: 'Chapantongo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chapantongo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '018',
			  nombre: 'Chapulhuac�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chapulhuac�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '019',
			  nombre: 'Chilcuautla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chilcuautla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '020',
			  nombre: 'Eloxochitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Eloxochitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '021',
			  nombre: 'Emiliano Zapata',
			  claveCabecera: '0001',
			  nombreCabecera: 'Emiliano Zapata' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '022',
			  nombre: 'Epazoyucan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Epazoyucan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '023',
			  nombre: 'Francisco I. Madero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepatepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '024',
			  nombre: 'Huasca de Ocampo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huasca de Ocampo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '025',
			  nombre: 'Huautla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huautla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '026',
			  nombre: 'Huazalingo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huazalingo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '027',
			  nombre: 'Huehuetla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huehuetla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '028',
			  nombre: 'Huejutla de Reyes',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huejutla de Reyes' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '029',
			  nombre: 'Huichapan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huichapan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '030',
			  nombre: 'Ixmiquilpan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ixmiquilpan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '031',
			  nombre: 'Jacala de Ledezma',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jacala' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '032',
			  nombre: 'Jaltoc�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jaltoc�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '033',
			  nombre: 'Ju�rez Hidalgo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '034',
			  nombre: 'Lolotla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Lolotla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '035',
			  nombre: 'Metepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Metepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '036',
			  nombre: 'San Agust�n Metzquititl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mezquititl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '037',
			  nombre: 'Metztitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Metztitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '038',
			  nombre: 'Mineral del Chico',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mineral del Chico' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '039',
			  nombre: 'Mineral del Monte',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mineral del Monte' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '040',
			  nombre: 'La Misi�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'La Misi�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '041',
			  nombre: 'Mixquiahuala de Ju�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mixquiahuala' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '042',
			  nombre: 'Molango de Escamilla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Molango' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '043',
			  nombre: 'Nicol�s Flores',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nicol�s Flores' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '044',
			  nombre: 'Nopala de Villagr�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nopala' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '045',
			  nombre: 'Omitl�n de Ju�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Omitl�n de Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '046',
			  nombre: 'San Felipe Orizatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Orizatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '047',
			  nombre: 'Pacula',
			  claveCabecera: '0001',
			  nombreCabecera: 'Pacula' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '048',
			  nombre: 'Pachuca de Soto',
			  claveCabecera: '0001',
			  nombreCabecera: 'Pachuca de Soto' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '049',
			  nombre: 'Pisaflores',
			  claveCabecera: '0001',
			  nombreCabecera: 'Pisaflores' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '050',
			  nombre: 'Progreso de Obreg�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Progreso' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '051',
			  nombre: 'Mineral de la Reforma',
			  claveCabecera: '0001',
			  nombreCabecera: 'Pachuquilla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '052',
			  nombre: 'San Agust�n Tlaxiaca',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Agust�n Tlaxiaca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '053',
			  nombre: 'San Bartolo Tutotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Bartolo Tutotepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '054',
			  nombre: 'San Salvador',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Salvador' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '055',
			  nombre: 'Santiago de Anaya',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago de Anaya' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '056',
			  nombre: 'Santiago Tulantepec de Lugo Guerrero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Tulantepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '057',
			  nombre: 'Singuilucan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Singuilucan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '058',
			  nombre: 'Tasquillo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tasquillo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '059',
			  nombre: 'Tecozautla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tecozautla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '060',
			  nombre: 'Tenango de Doria',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tenango de Doria' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '061',
			  nombre: 'Tepeapulco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepeapulco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '062',
			  nombre: 'Tepehuac�n de Guerrero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepehuac�n de Guerrero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '063',
			  nombre: 'Tepeji del R�o de Ocampo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepeji del R�o de Ocampo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '064',
			  nombre: 'Tepetitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepetitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '065',
			  nombre: 'Tetepango',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tetepango' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '066',
			  nombre: 'Villa de Tezontepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tezontepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '067',
			  nombre: 'Tezontepec de Aldama',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tezontepec de Aldama' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '068',
			  nombre: 'Tianguistengo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tianguistengo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '069',
			  nombre: 'Tizayuca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tizayuca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '070',
			  nombre: 'Tlahuelilpan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlahuelilpan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '071',
			  nombre: 'Tlahuiltepa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlahuiltepa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '072',
			  nombre: 'Tlanalapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlanalapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '073',
			  nombre: 'Tlanchinol',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlanchinol' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '074',
			  nombre: 'Tlaxcoapan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlaxcoapan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '075',
			  nombre: 'Tolcayuca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tolcayuca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '076',
			  nombre: 'Tula de Allende',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tula de Allende' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '077',
			  nombre: 'Tulancingo de Bravo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tulancingo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '078',
			  nombre: 'Xochiatipan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Xochiatipan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '079',
			  nombre: 'Xochicoatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Xochicoatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '080',
			  nombre: 'Yahualica',
			  claveCabecera: '0001',
			  nombreCabecera: 'Yahualica' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '081',
			  nombre: 'Zacualtip�n de �ngeles',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zacualtip�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '082',
			  nombre: 'Zapotl�n de Ju�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zapotl�n de Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '083',
			  nombre: 'Zempoala',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zempoala' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '13',
			  clave: '084',
			  nombre: 'Zimap�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zimap�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '001',
			  nombre: 'Acatic',
			  claveCabecera: '0001',
			  nombreCabecera: 'Acatic' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '002',
			  nombre: 'Acatl�n de Ju�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Acatl�n de Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '003',
			  nombre: 'Ahualulco de Mercado',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ahualulco de Mercado' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '004',
			  nombre: 'Amacueca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Amacueca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '005',
			  nombre: 'Amatit�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Amatit�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '006',
			  nombre: 'Ameca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ameca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '007',
			  nombre: 'San Juanito de Escobedo',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juanito de Escobedo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '008',
			  nombre: 'Arandas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Arandas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '009',
			  nombre: 'El Arenal',
			  claveCabecera: '0001',
			  nombreCabecera: 'El Arenal' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '010',
			  nombre: 'Atemajac de Brizuela',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atemajac de Brizuela' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '011',
			  nombre: 'Atengo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atengo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '012',
			  nombre: 'Atenguillo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atenguillo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '013',
			  nombre: 'Atotonilco el Alto',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atotonilco el Alto' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '014',
			  nombre: 'Atoyac',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atoyac' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '015',
			  nombre: 'Autl�n de Navarro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Autl�n de Navarro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '016',
			  nombre: 'Ayotl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ayotl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '017',
			  nombre: 'Ayutla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ayutla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '018',
			  nombre: 'La Barca',
			  claveCabecera: '0001',
			  nombreCabecera: 'La Barca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '019',
			  nombre: 'Bola�os',
			  claveCabecera: '0001',
			  nombreCabecera: 'Bola�os' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '020',
			  nombre: 'Cabo Corrientes',
			  claveCabecera: '0001',
			  nombreCabecera: 'El Tuito' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '021',
			  nombre: 'Casimiro Castillo',
			  claveCabecera: '0001',
			  nombreCabecera: 'La Resolana' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '022',
			  nombre: 'Cihuatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cihuatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '023',
			  nombre: 'Zapotl�n el Grande',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad Guzm�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '024',
			  nombre: 'Cocula',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cocula' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '025',
			  nombre: 'Colotl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Colotl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '026',
			  nombre: 'Concepci�n de Buenos Aires',
			  claveCabecera: '0001',
			  nombreCabecera: 'Concepci�n de Buenos Aires' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '027',
			  nombre: 'Cuautitl�n de Garc�a Barrag�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cuautitl�n de Garc�a Barrag�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '028',
			  nombre: 'Cuautla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cuautla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '029',
			  nombre: 'Cuqu�o',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cuqu�o' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '030',
			  nombre: 'Chapala',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chapala' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '031',
			  nombre: 'Chimaltit�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chimaltit�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '032',
			  nombre: 'Chiquilistl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chiquilistl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '033',
			  nombre: 'Degollado',
			  claveCabecera: '0001',
			  nombreCabecera: 'Degollado' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '034',
			  nombre: 'Ejutla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ejutla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '035',
			  nombre: 'Encarnaci�n de D�az',
			  claveCabecera: '0001',
			  nombreCabecera: 'Encarnaci�n de D�az' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '036',
			  nombre: 'Etzatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Etzatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '037',
			  nombre: 'El Grullo',
			  claveCabecera: '0001',
			  nombreCabecera: 'El Grullo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '038',
			  nombre: 'Guachinango',
			  claveCabecera: '0001',
			  nombreCabecera: 'Guachinango' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '039',
			  nombre: 'Guadalajara',
			  claveCabecera: '0001',
			  nombreCabecera: 'Guadalajara' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '040',
			  nombre: 'Hostotipaquillo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Hostotipaquillo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '041',
			  nombre: 'Huej�car',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huej�car' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '042',
			  nombre: 'Huejuquilla el Alto',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huejuquilla el Alto' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '043',
			  nombre: 'La Huerta',
			  claveCabecera: '0001',
			  nombreCabecera: 'La Huerta' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '044',
			  nombre: 'Ixtlahuac�n de los Membrillos',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ixtlahuac�n de los Membrillos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '045',
			  nombre: 'Ixtlahuac�n del R�o',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ixtlahuac�n del R�o' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '046',
			  nombre: 'Jalostotitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jalostotitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '047',
			  nombre: 'Jamay',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jamay' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '048',
			  nombre: 'Jes�s Mar�a',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jes�s Mar�a' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '049',
			  nombre: 'Jilotl�n de los Dolores',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jilotl�n de los Dolores' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '050',
			  nombre: 'Jocotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jocotepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '051',
			  nombre: 'Juanacatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Juanacatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '052',
			  nombre: 'Juchitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Juchitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '053',
			  nombre: 'Lagos de Moreno',
			  claveCabecera: '0001',
			  nombreCabecera: 'Lagos de Moreno' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '054',
			  nombre: 'El Lim�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'El Lim�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '055',
			  nombre: 'Magdalena',
			  claveCabecera: '0001',
			  nombreCabecera: 'Magdalena' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '056',
			  nombre: 'Santa Mar�a del Oro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a del Oro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '057',
			  nombre: 'La Manzanilla de la Paz',
			  claveCabecera: '0001',
			  nombreCabecera: 'La Manzanilla de la Paz' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '058',
			  nombre: 'Mascota',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mascota' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '059',
			  nombre: 'Mazamitla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mazamitla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '060',
			  nombre: 'Mexticac�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mexticac�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '061',
			  nombre: 'Mezquitic',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mezquitic' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '062',
			  nombre: 'Mixtl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mixtl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '063',
			  nombre: 'Ocotl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ocotl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '064',
			  nombre: 'Ojuelos de Jalisco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ojuelos de Jalisco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '065',
			  nombre: 'Pihuamo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Pihuamo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '066',
			  nombre: 'Poncitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Poncitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '067',
			  nombre: 'Puerto Vallarta',
			  claveCabecera: '0001',
			  nombreCabecera: 'Puerto Vallarta' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '068',
			  nombre: 'Villa Purificaci�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Purificaci�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '069',
			  nombre: 'Quitupan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Quitupan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '070',
			  nombre: 'El Salto',
			  claveCabecera: '0001',
			  nombreCabecera: 'El Salto' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '071',
			  nombre: 'San Crist�bal de la Barranca',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Crist�bal de la Barranca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '072',
			  nombre: 'San Diego de Alejandr�a',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Diego de Alejandr�a' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '073',
			  nombre: 'San Juan de los Lagos',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan de los Lagos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '074',
			  nombre: 'San Juli�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juli�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '075',
			  nombre: 'San Marcos',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Marcos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '076',
			  nombre: 'San Mart�n de Bola�os',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Mart�n de Bola�os' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '077',
			  nombre: 'San Mart�n Hidalgo',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Mart�n Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '078',
			  nombre: 'San Miguel el Alto',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel el Alto' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '079',
			  nombre: 'G�mez Far�as',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Sebasti�n del Sur' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '080',
			  nombre: 'San Sebasti�n del Oeste',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Sebasti�n del Oeste' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '081',
			  nombre: 'Santa Mar�a de los �ngeles',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a de los �ngeles' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '082',
			  nombre: 'Sayula',
			  claveCabecera: '0001',
			  nombreCabecera: 'Sayula' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '083',
			  nombre: 'Tala',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tala' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '084',
			  nombre: 'Talpa de Allende',
			  claveCabecera: '0001',
			  nombreCabecera: 'Talpa de Allende' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '085',
			  nombre: 'Tamazula de Gordiano',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tamazula de Gordiano' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '086',
			  nombre: 'Tapalpa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tapalpa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '087',
			  nombre: 'Tecalitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tecalitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '088',
			  nombre: 'Tecolotl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tecolotl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '089',
			  nombre: 'Techaluta de Montenegro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Techaluta de Montenegro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '090',
			  nombre: 'Tenamaxtl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tenamaxtl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '091',
			  nombre: 'Teocaltiche',
			  claveCabecera: '0001',
			  nombreCabecera: 'Teocaltiche' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '092',
			  nombre: 'Teocuitatl�n de Corona',
			  claveCabecera: '0001',
			  nombreCabecera: 'Teocuitatl�n de Corona' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '093',
			  nombre: 'Tepatitl�n de Morelos',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepatitl�n de Morelos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '094',
			  nombre: 'Tequila',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tequila' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '095',
			  nombre: 'Teuchitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Teuchitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '096',
			  nombre: 'Tizap�n el Alto',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tizap�n el Alto' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '097',
			  nombre: 'Tlajomulco de Z��iga',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlajomulco de Z��iga' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '098',
			  nombre: 'San Pedro Tlaquepaque',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlaquepaque' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '099',
			  nombre: 'Tolim�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tolim�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '100',
			  nombre: 'Tomatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tomatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '101',
			  nombre: 'Tonal�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tonal�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '102',
			  nombre: 'Tonaya',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tonaya' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '103',
			  nombre: 'Tonila',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tonila' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '104',
			  nombre: 'Totatiche',
			  claveCabecera: '0001',
			  nombreCabecera: 'Totatiche' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '105',
			  nombre: 'Tototl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tototl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '106',
			  nombre: 'Tuxcacuesco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tuxcacuesco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '107',
			  nombre: 'Tuxcueca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tuxcueca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '108',
			  nombre: 'Tuxpan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tuxpan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '109',
			  nombre: 'Uni�n de San Antonio',
			  claveCabecera: '0001',
			  nombreCabecera: 'Uni�n de San Antonio' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '110',
			  nombre: 'Uni�n de Tula',
			  claveCabecera: '0001',
			  nombreCabecera: 'Uni�n de Tula' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '111',
			  nombre: 'Valle de Guadalupe',
			  claveCabecera: '0001',
			  nombreCabecera: 'Valle de Guadalupe' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '112',
			  nombre: 'Valle de Ju�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Valle de Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '113',
			  nombre: 'San Gabriel',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Gabriel' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '114',
			  nombre: 'Villa Corona',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Corona' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '115',
			  nombre: 'Villa Guerrero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Guerrero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '116',
			  nombre: 'Villa Hidalgo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '117',
			  nombre: 'Ca�adas de Obreg�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ca�adas de Obreg�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '118',
			  nombre: 'Yahualica de Gonz�lez Gallo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Yahualica de Gonz�lez Gallo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '119',
			  nombre: 'Zacoalco de Torres',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zacoalco de Torres' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '120',
			  nombre: 'Zapopan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zapopan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '121',
			  nombre: 'Zapotiltic',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zapotiltic' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '122',
			  nombre: 'Zapotitl�n de Vadillo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zapotitl�n de Vadillo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '123',
			  nombre: 'Zapotl�n del Rey',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zapotl�n del Rey' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '124',
			  nombre: 'Zapotlanejo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zapotlanejo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '14',
			  clave: '125',
			  nombre: 'San Ignacio Cerro Gordo',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Ignacio Cerro Gordo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '001',
			  nombre: 'Acambay de Ru�z Casta�eda',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa de Acambay de Ru�z Casta�eda' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '002',
			  nombre: 'Acolman',
			  claveCabecera: '0001',
			  nombreCabecera: 'Acolman de Nezahualc�yotl' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '003',
			  nombre: 'Aculco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Aculco de Espinoza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '004',
			  nombre: 'Almoloya de Alquisiras',
			  claveCabecera: '0001',
			  nombreCabecera: 'Almoloya de Alquisiras' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '005',
			  nombre: 'Almoloya de Ju�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa de Almoloya de Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '006',
			  nombre: 'Almoloya del R�o',
			  claveCabecera: '0001',
			  nombreCabecera: 'Almoloya del R�o' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '007',
			  nombre: 'Amanalco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Amanalco de Becerra' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '008',
			  nombre: 'Amatepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Amatepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '009',
			  nombre: 'Amecameca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Amecameca de Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '010',
			  nombre: 'Apaxco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Apaxco de Ocampo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '011',
			  nombre: 'Atenco',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Salvador Atenco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '012',
			  nombre: 'Atizap�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Cruz Atizap�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '013',
			  nombre: 'Atizap�n de Zaragoza',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad L�pez Mateos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '014',
			  nombre: 'Atlacomulco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atlacomulco de Fabela' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '015',
			  nombre: 'Atlautla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atlautla de Victoria' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '016',
			  nombre: 'Axapusco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Axapusco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '017',
			  nombre: 'Ayapango',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ayapango de Gabriel Ramos M.' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '018',
			  nombre: 'Calimaya',
			  claveCabecera: '0001',
			  nombreCabecera: 'Calimaya de D�az Gonz�lez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '019',
			  nombre: 'Capulhuac',
			  claveCabecera: '0001',
			  nombreCabecera: 'Capulhuac de Mirafuentes' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '020',
			  nombre: 'Coacalco de Berrioz�bal',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Francisco Coacalco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '021',
			  nombre: 'Coatepec Harinas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Coatepec Harinas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '022',
			  nombre: 'Cocotitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cocotitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '023',
			  nombre: 'Coyotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Coyotepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '024',
			  nombre: 'Cuautitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cuautitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '025',
			  nombre: 'Chalco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chalco de D�az Covarrubias' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '026',
			  nombre: 'Chapa de Mota',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chapa de Mota' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '027',
			  nombre: 'Chapultepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chapultepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '028',
			  nombre: 'Chiautla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chiautla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '029',
			  nombre: 'Chicoloapan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chicoloapan de Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '030',
			  nombre: 'Chiconcuac',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chiconcuac de Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '031',
			  nombre: 'Chimalhuac�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chimalhuac�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '032',
			  nombre: 'Donato Guerra',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Donato Guerra' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '033',
			  nombre: 'Ecatepec de Morelos',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ecatepec de Morelos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '034',
			  nombre: 'Ecatzingo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ecatzingo de Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '035',
			  nombre: 'Huehuetoca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huehuetoca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '036',
			  nombre: 'Hueypoxtla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Hueypoxtla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '037',
			  nombre: 'Huixquilucan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huixquilucan de Degollado' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '038',
			  nombre: 'Isidro Fabela',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlazala de Fabela' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '039',
			  nombre: 'Ixtapaluca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ixtapaluca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '040',
			  nombre: 'Ixtapan de la Sal',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ixtapan de la Sal' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '041',
			  nombre: 'Ixtapan del Oro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ixtapan del Oro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '042',
			  nombre: 'Ixtlahuaca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ixtlahuaca de Ray�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '043',
			  nombre: 'Xalatlaco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Xalatlaco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '044',
			  nombre: 'Jaltenco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jaltenco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '045',
			  nombre: 'Jilotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jilotepec de Molina Enr�quez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '046',
			  nombre: 'Jilotzingo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Ana Jilotzingo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '047',
			  nombre: 'Jiquipilco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jiquipilco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '048',
			  nombre: 'Jocotitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad de Jocotitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '049',
			  nombre: 'Joquicingo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Joquicingo de Le�n Guzm�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '050',
			  nombre: 'Juchitepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Juchitepec de Mariano Rivapalacio' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '051',
			  nombre: 'Lerma',
			  claveCabecera: '0001',
			  nombreCabecera: 'Lerma de Villada' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '052',
			  nombre: 'Malinalco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Malinalco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '053',
			  nombre: 'Melchor Ocampo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Melchor Ocampo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '054',
			  nombre: 'Metepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Metepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '055',
			  nombre: 'Mexicaltzingo',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Mateo Mexicaltzingo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '056',
			  nombre: 'Morelos',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Bartolo Morelos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '057',
			  nombre: 'Naucalpan de Ju�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Naucalpan de Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '058',
			  nombre: 'Nezahualc�yotl',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad Nezahualc�yotl' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '059',
			  nombre: 'Nextlalpan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Ana Nextlalpan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '060',
			  nombre: 'Nicol�s Romero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad Nicol�s Romero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '061',
			  nombre: 'Nopaltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nopaltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '062',
			  nombre: 'Ocoyoacac',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ocoyoacac' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '063',
			  nombre: 'Ocuilan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ocuilan de Arteaga' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '064',
			  nombre: 'El Oro',
			  claveCabecera: '0001',
			  nombreCabecera: 'El Oro de Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '065',
			  nombre: 'Otumba',
			  claveCabecera: '0001',
			  nombreCabecera: 'Otumba de G�mez Far�as' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '066',
			  nombre: 'Otzoloapan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Otzoloapan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '067',
			  nombre: 'Otzolotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Cuauht�moc' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '068',
			  nombre: 'Ozumba',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ozumba de Alzate' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '069',
			  nombre: 'Papalotla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Papalotla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '070',
			  nombre: 'La Paz',
			  claveCabecera: '0001',
			  nombreCabecera: 'Los Reyes Acaquilpan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '071',
			  nombre: 'Polotitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Polotitl�n de la Ilustraci�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '072',
			  nombre: 'Ray�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Ray�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '073',
			  nombre: 'San Antonio la Isla',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Antonio la Isla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '074',
			  nombre: 'San Felipe del Progreso',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Felipe del Progreso' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '075',
			  nombre: 'San Mart�n de las Pir�mides',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Mart�n de las Pir�mides' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '076',
			  nombre: 'San Mateo Atenco',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Mateo Atenco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '077',
			  nombre: 'San Sim�n de Guerrero',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Sim�n de Guerrero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '078',
			  nombre: 'Santo Tom�s',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santo Tom�s de los Pl�tanos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '079',
			  nombre: 'Soyaniquilpan de Ju�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Francisco Soyaniquilpan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '080',
			  nombre: 'Sultepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Sultepec de Pedro Ascencio de Alquisiras' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '081',
			  nombre: 'Tec�mac',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tec�mac de Felipe Villanueva' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '082',
			  nombre: 'Tejupilco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tejupilco de Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '083',
			  nombre: 'Temamatla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Temamatla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '084',
			  nombre: 'Temascalapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Temascalapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '085',
			  nombre: 'Temascalcingo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Temascalcingo de Jos� Mar�a Velasco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '086',
			  nombre: 'Temascaltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Temascaltepec de Gonz�lez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '087',
			  nombre: 'Temoaya',
			  claveCabecera: '0001',
			  nombreCabecera: 'Temoaya' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '088',
			  nombre: 'Tenancingo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tenancingo de Degollado' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '089',
			  nombre: 'Tenango del Aire',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tenango del Aire' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '090',
			  nombre: 'Tenango del Valle',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tenango de Arista' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '091',
			  nombre: 'Teoloyucan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Teoloyucan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '092',
			  nombre: 'Teotihuac�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Teotihuac�n de Arista' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '093',
			  nombre: 'Tepetlaoxtoc',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepetlaoxtoc de Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '094',
			  nombre: 'Tepetlixpa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepetlixpa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '095',
			  nombre: 'Tepotzotl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepotzotl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '096',
			  nombre: 'Tequixquiac',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tequixquiac' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '097',
			  nombre: 'Texcaltitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Texcaltitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '098',
			  nombre: 'Texcalyacac',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Mateo Texcalyacac' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '099',
			  nombre: 'Texcoco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Texcoco de Mora' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '100',
			  nombre: 'Tezoyuca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tezoyuca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '101',
			  nombre: 'Tianguistenco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Tianguistenco de Galeana' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '102',
			  nombre: 'Timilpan',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Andr�s Timilpan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '103',
			  nombre: 'Tlalmanalco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlalmanalco de Vel�zquez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '104',
			  nombre: 'Tlalnepantla de Baz',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlalnepantla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '105',
			  nombre: 'Tlatlaya',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlatlaya' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '106',
			  nombre: 'Toluca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Toluca de Lerdo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '107',
			  nombre: 'Tonatico',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tonatico' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '108',
			  nombre: 'Tultepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tultepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '109',
			  nombre: 'Tultitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tultitl�n de Mariano Escobedo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '110',
			  nombre: 'Valle de Bravo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Valle de Bravo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '111',
			  nombre: 'Villa de Allende',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Jos� Villa de Allende' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '112',
			  nombre: 'Villa del Carb�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa del Carb�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '113',
			  nombre: 'Villa Guerrero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Guerrero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '114',
			  nombre: 'Villa Victoria',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Victoria' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '115',
			  nombre: 'Xonacatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Xonacatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '116',
			  nombre: 'Zacazonapan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zacazonapan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '117',
			  nombre: 'Zacualpan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zacualpan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '118',
			  nombre: 'Zinacantepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel Zinacantepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '119',
			  nombre: 'Zumpahuac�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zumpahuac�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '120',
			  nombre: 'Zumpango',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zumpango de Ocampo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '121',
			  nombre: 'Cuautitl�n Izcalli',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cuautitl�n Izcalli' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '122',
			  nombre: 'Valle de Chalco Solidaridad',
			  claveCabecera: '0001',
			  nombreCabecera: 'Xico' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '123',
			  nombre: 'Luvianos',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Luvianos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '124',
			  nombre: 'San Jos� del Rinc�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Jos� del Rinc�n Centro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '15',
			  clave: '125',
			  nombre: 'Tonanitla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Tonanitla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '001',
			  nombre: 'Acuitzio',
			  claveCabecera: '0001',
			  nombreCabecera: 'Acuitzio del Canje' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '002',
			  nombre: 'Aguililla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Aguililla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '003',
			  nombre: '�lvaro Obreg�n',
			  claveCabecera: '0001',
			  nombreCabecera: '�lvaro Obreg�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '004',
			  nombre: 'Angamacutiro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Angamacutiro de la Uni�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '005',
			  nombre: 'Angangueo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mineral de Angangueo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '006',
			  nombre: 'Apatzing�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Apatzing�n de la Constituci�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '007',
			  nombre: 'Aporo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Aporo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '008',
			  nombre: 'Aquila',
			  claveCabecera: '0001',
			  nombreCabecera: 'Aquila' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '009',
			  nombre: 'Ario',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ario de Rosales' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '010',
			  nombre: 'Arteaga',
			  claveCabecera: '0001',
			  nombreCabecera: 'Arteaga' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '011',
			  nombre: 'Brise�as',
			  claveCabecera: '0001',
			  nombreCabecera: 'Brise�as de Matamoros' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '012',
			  nombre: 'Buenavista',
			  claveCabecera: '0001',
			  nombreCabecera: 'Buenavista Tomatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '013',
			  nombre: 'Car�cuaro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Car�cuaro de Morelos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '014',
			  nombre: 'Coahuayana',
			  claveCabecera: '0001',
			  nombreCabecera: 'Coahuayana de Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '015',
			  nombre: 'Coalcom�n de V�zquez Pallares',
			  claveCabecera: '0001',
			  nombreCabecera: 'Coalcom�n de V�zquez Pallares' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '016',
			  nombre: 'Coeneo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Coeneo de la Libertad' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '017',
			  nombre: 'Contepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Contepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '018',
			  nombre: 'Cop�ndaro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cop�ndaro de Galeana' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '019',
			  nombre: 'Cotija',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cotija de la Paz' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '020',
			  nombre: 'Cuitzeo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cuitzeo del Porvenir' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '021',
			  nombre: 'Charapan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Charapan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '022',
			  nombre: 'Charo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Charo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '023',
			  nombre: 'Chavinda',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chavinda' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '024',
			  nombre: 'Cher�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cher�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '025',
			  nombre: 'Chilchota',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chilchota' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '026',
			  nombre: 'Chinicuila',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Victoria' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '027',
			  nombre: 'Chuc�ndiro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chuc�ndiro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '028',
			  nombre: 'Churintzio',
			  claveCabecera: '0001',
			  nombreCabecera: 'Churintzio' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '029',
			  nombre: 'Churumuco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Churumuco de Morelos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '030',
			  nombre: 'Ecuandureo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ecuandureo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '031',
			  nombre: 'Epitacio Huerta',
			  claveCabecera: '0001',
			  nombreCabecera: 'Epitacio Huerta' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '032',
			  nombre: 'Erongar�cuaro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Erongar�cuaro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '033',
			  nombre: 'Gabriel Zamora',
			  claveCabecera: '0001',
			  nombreCabecera: 'Lombard�a' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '034',
			  nombre: 'Hidalgo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '035',
			  nombre: 'La Huacana',
			  claveCabecera: '0001',
			  nombreCabecera: 'La Huacana' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '036',
			  nombre: 'Huandacareo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huandacareo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '037',
			  nombre: 'Huaniqueo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huaniqueo de Morales' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '038',
			  nombre: 'Huetamo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huetamo de N��ez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '039',
			  nombre: 'Huiramba',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huiramba' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '040',
			  nombre: 'Indaparapeo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Indaparapeo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '041',
			  nombre: 'Irimbo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Irimbo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '042',
			  nombre: 'Ixtl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ixtl�n de los Hervores' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '043',
			  nombre: 'Jacona',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jacona de Plancarte' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '044',
			  nombre: 'Jim�nez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Jim�nez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '045',
			  nombre: 'Jiquilpan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jiquilpan de Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '046',
			  nombre: 'Ju�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Benito Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '047',
			  nombre: 'Jungapeo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jungapeo de Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '048',
			  nombre: 'Lagunillas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Lagunillas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '049',
			  nombre: 'Madero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Madero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '050',
			  nombre: 'Maravat�o',
			  claveCabecera: '0001',
			  nombreCabecera: 'Maravat�o de Ocampo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '051',
			  nombre: 'Marcos Castellanos',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Jos� de Gracia' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '052',
			  nombre: 'L�zaro C�rdenas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad L�zaro C�rdenas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '053',
			  nombre: 'Morelia',
			  claveCabecera: '0001',
			  nombreCabecera: 'Morelia' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '054',
			  nombre: 'Morelos',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Morelos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '055',
			  nombre: 'M�gica',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nueva Italia de Ruiz' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '056',
			  nombre: 'Nahuatzen',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nahuatzen' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '057',
			  nombre: 'Nocup�taro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nocup�taro de Morelos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '058',
			  nombre: 'Nuevo Parangaricutiro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nuevo San Juan Parangaricutiro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '059',
			  nombre: 'Nuevo Urecho',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nuevo Urecho' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '060',
			  nombre: 'Numar�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Numar�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '061',
			  nombre: 'Ocampo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ocampo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '062',
			  nombre: 'Pajacuar�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Pajacuar�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '063',
			  nombre: 'Panind�cuaro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Panind�cuaro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '064',
			  nombre: 'Par�cuaro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Par�cuaro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '065',
			  nombre: 'Paracho',
			  claveCabecera: '0001',
			  nombreCabecera: 'Paracho de Verduzco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '066',
			  nombre: 'P�tzcuaro',
			  claveCabecera: '0001',
			  nombreCabecera: 'P�tzcuaro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '067',
			  nombre: 'Penjamillo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Penjamillo de Degollado' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '068',
			  nombre: 'Perib�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Perib�n de Ramos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '069',
			  nombre: 'La Piedad',
			  claveCabecera: '0001',
			  nombreCabecera: 'La Piedad de Cabadas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '070',
			  nombre: 'Pur�pero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Pur�pero de Ech�iz' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '071',
			  nombre: 'Puru�ndiro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Puru�ndiro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '072',
			  nombre: 'Quer�ndaro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Quer�ndaro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '073',
			  nombre: 'Quiroga',
			  claveCabecera: '0001',
			  nombreCabecera: 'Quiroga' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '074',
			  nombre: 'Cojumatl�n de R�gules',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cojumatl�n de R�gules' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '075',
			  nombre: 'Los Reyes',
			  claveCabecera: '0001',
			  nombreCabecera: 'Los Reyes de Salgado' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '076',
			  nombre: 'Sahuayo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Sahuayo de Morelos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '077',
			  nombre: 'San Lucas',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Lucas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '078',
			  nombre: 'Santa Ana Maya',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Ana Maya' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '079',
			  nombre: 'Salvador Escalante',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Clara del Cobre' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '080',
			  nombre: 'Senguio',
			  claveCabecera: '0001',
			  nombreCabecera: 'Senguio' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '081',
			  nombre: 'Susupuato',
			  claveCabecera: '0001',
			  nombreCabecera: 'Susupuato de Guerrero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '082',
			  nombre: 'Tac�mbaro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tac�mbaro de Codallos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '083',
			  nombre: 'Tanc�taro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tanc�taro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '084',
			  nombre: 'Tangamandapio',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Tangamandapio' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '085',
			  nombre: 'Tanganc�cuaro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tanganc�cuaro de Arista' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '086',
			  nombre: 'Tanhuato',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tanhuato de Guerrero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '087',
			  nombre: 'Taretan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Taretan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '088',
			  nombre: 'Tar�mbaro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tar�mbaro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '089',
			  nombre: 'Tepalcatepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepalcatepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '090',
			  nombre: 'Tingambato',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tingambato' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '091',
			  nombre: 'Ting�ind�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ting�ind�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '092',
			  nombre: 'Tiquicheo de Nicol�s Romero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tiquicheo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '093',
			  nombre: 'Tlalpujahua',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlalpujahua de Ray�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '094',
			  nombre: 'Tlazazalca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlazazalca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '095',
			  nombre: 'Tocumbo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tocumbo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '096',
			  nombre: 'Tumbiscat�o',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tumbiscat�o de Ruiz' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '097',
			  nombre: 'Turicato',
			  claveCabecera: '0001',
			  nombreCabecera: 'Turicato' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '098',
			  nombre: 'Tuxpan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tuxpan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '099',
			  nombre: 'Tuzantla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tuzantla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '100',
			  nombre: 'Tzintzuntzan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tzintzuntzan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '101',
			  nombre: 'Tzitzio',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tzitzio' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '102',
			  nombre: 'Uruapan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Uruapan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '103',
			  nombre: 'Venustiano Carranza',
			  claveCabecera: '0001',
			  nombreCabecera: 'Venustiano Carranza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '104',
			  nombre: 'Villamar',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villamar' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '105',
			  nombre: 'Vista Hermosa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Vista Hermosa de Negrete' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '106',
			  nombre: 'Yur�cuaro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Yur�cuaro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '107',
			  nombre: 'Zacapu',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zacapu' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '108',
			  nombre: 'Zamora',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zamora de Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '109',
			  nombre: 'Zin�paro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zin�paro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '110',
			  nombre: 'Zinap�cuaro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zinap�cuaro de Figueroa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '111',
			  nombre: 'Ziracuaretiro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ziracuaretiro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '112',
			  nombre: 'Zit�cuaro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Her�ica Zit�cuaro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '16',
			  clave: '113',
			  nombre: 'Jos� Sixto Verduzco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Pastor Ortiz' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '001',
			  nombre: 'Amacuzac',
			  claveCabecera: '0001',
			  nombreCabecera: 'Amacuzac' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '002',
			  nombre: 'Atlatlahucan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atlatlahucan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '003',
			  nombre: 'Axochiapan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Axochiapan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '004',
			  nombre: 'Ayala',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad Ayala' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '005',
			  nombre: 'Coatl�n del R�o',
			  claveCabecera: '0001',
			  nombreCabecera: 'Coatl�n del R�o' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '006',
			  nombre: 'Cuautla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cuautla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '007',
			  nombre: 'Cuernavaca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cuernavaca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '008',
			  nombre: 'Emiliano Zapata',
			  claveCabecera: '0001',
			  nombreCabecera: 'Emiliano Zapata' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '009',
			  nombre: 'Huitzilac',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huitzilac' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '010',
			  nombre: 'Jantetelco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jantetelco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '011',
			  nombre: 'Jiutepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jiutepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '012',
			  nombre: 'Jojutla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jojutla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '013',
			  nombre: 'Jonacatepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jonacatepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '014',
			  nombre: 'Mazatepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mazatepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '015',
			  nombre: 'Miacatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Miacatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '016',
			  nombre: 'Ocuituco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ocuituco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '017',
			  nombre: 'Puente de Ixtla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Puente de Ixtla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '018',
			  nombre: 'Temixco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Temixco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '019',
			  nombre: 'Tepalcingo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepalcingo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '020',
			  nombre: 'Tepoztl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepoztl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '021',
			  nombre: 'Tetecala',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tetecala' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '022',
			  nombre: 'Tetela del Volc�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tetela del Volc�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '023',
			  nombre: 'Tlalnepantla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlalnepantla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '024',
			  nombre: 'Tlaltizap�n de Zapata',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlaltizap�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '025',
			  nombre: 'Tlaquiltenango',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlaquiltenango' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '026',
			  nombre: 'Tlayacapan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlayacapan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '027',
			  nombre: 'Totolapan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Totolapan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '028',
			  nombre: 'Xochitepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Xochitepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '029',
			  nombre: 'Yautepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Yautepec de Zaragoza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '030',
			  nombre: 'Yecapixtla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Yecapixtla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '031',
			  nombre: 'Zacatepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zacatepec de Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '032',
			  nombre: 'Zacualpan de Amilpas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zacualpan de Amilpas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '17',
			  clave: '033',
			  nombre: 'Temoac',
			  claveCabecera: '0001',
			  nombreCabecera: 'Temoac' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '18',
			  clave: '001',
			  nombre: 'Acaponeta',
			  claveCabecera: '0001',
			  nombreCabecera: 'Acaponeta' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '18',
			  clave: '002',
			  nombre: 'Ahuacatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ahuacatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '18',
			  clave: '003',
			  nombre: 'Amatl�n de Ca�as',
			  claveCabecera: '0001',
			  nombreCabecera: 'Amatl�n de Ca�as' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '18',
			  clave: '004',
			  nombre: 'Compostela',
			  claveCabecera: '0001',
			  nombreCabecera: 'Compostela' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '18',
			  clave: '005',
			  nombre: 'Huajicori',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huajicori' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '18',
			  clave: '006',
			  nombre: 'Ixtl�n del R�o',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ixtl�n del R�o' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '18',
			  clave: '007',
			  nombre: 'Jala',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jala' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '18',
			  clave: '008',
			  nombre: 'Xalisco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Xalisco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '18',
			  clave: '009',
			  nombre: 'Del Nayar',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jes�s Mar�a' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '18',
			  clave: '010',
			  nombre: 'Rosamorada',
			  claveCabecera: '0001',
			  nombreCabecera: 'Rosamorada' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '18',
			  clave: '011',
			  nombre: 'Ru�z',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ru�z' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '18',
			  clave: '012',
			  nombre: 'San Blas',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Blas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '18',
			  clave: '013',
			  nombre: 'San Pedro Lagunillas',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Lagunillas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '18',
			  clave: '014',
			  nombre: 'Santa Mar�a del Oro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a del Oro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '18',
			  clave: '015',
			  nombre: 'Santiago Ixcuintla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Ixcuintla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '18',
			  clave: '016',
			  nombre: 'Tecuala',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tecuala' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '18',
			  clave: '017',
			  nombre: 'Tepic',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepic' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '18',
			  clave: '018',
			  nombre: 'Tuxpan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tuxpan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '18',
			  clave: '019',
			  nombre: 'La Yesca',
			  claveCabecera: '0001',
			  nombreCabecera: 'La Yesca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '18',
			  clave: '020',
			  nombre: 'Bah�a de Banderas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Valle de Banderas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '001',
			  nombre: 'Abasolo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Abasolo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '002',
			  nombre: 'Agualeguas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Agualeguas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '003',
			  nombre: 'Los Aldamas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Los Aldamas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '004',
			  nombre: 'Allende',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad de Allende' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '005',
			  nombre: 'An�huac',
			  claveCabecera: '0001',
			  nombreCabecera: 'An�huac' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '006',
			  nombre: 'Apodaca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad Apodaca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '007',
			  nombre: 'Aramberri',
			  claveCabecera: '0001',
			  nombreCabecera: 'Aramberri' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '008',
			  nombre: 'Bustamante',
			  claveCabecera: '0001',
			  nombreCabecera: 'Bustamante' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '009',
			  nombre: 'Cadereyta Jim�nez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cadereyta Jim�nez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '010',
			  nombre: 'El Carmen',
			  claveCabecera: '0001',
			  nombreCabecera: 'Carmen' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '011',
			  nombre: 'Cerralvo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad Cerralvo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '012',
			  nombre: 'Ci�nega de Flores',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ci�nega de Flores' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '013',
			  nombre: 'China',
			  claveCabecera: '0001',
			  nombreCabecera: 'China' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '014',
			  nombre: 'Doctor Arroyo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Doctor Arroyo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '015',
			  nombre: 'Doctor Coss',
			  claveCabecera: '0001',
			  nombreCabecera: 'Doctor Coss' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '016',
			  nombre: 'Doctor Gonz�lez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Doctor Gonz�lez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '017',
			  nombre: 'Galeana',
			  claveCabecera: '0001',
			  nombreCabecera: 'Galeana' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '018',
			  nombre: 'Garc�a',
			  claveCabecera: '0001',
			  nombreCabecera: 'Garc�a' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '019',
			  nombre: 'San Pedro Garza Garc�a',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Garza Garc�a' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '020',
			  nombre: 'General Bravo',
			  claveCabecera: '0001',
			  nombreCabecera: 'General Bravo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '021',
			  nombre: 'General Escobedo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad General Escobedo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '022',
			  nombre: 'General Ter�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad General Ter�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '023',
			  nombre: 'General Trevi�o',
			  claveCabecera: '0001',
			  nombreCabecera: 'General Trevi�o' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '024',
			  nombre: 'General Zaragoza',
			  claveCabecera: '0001',
			  nombreCabecera: 'General Zaragoza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '025',
			  nombre: 'General Zuazua',
			  claveCabecera: '0001',
			  nombreCabecera: 'General Zuazua' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '026',
			  nombre: 'Guadalupe',
			  claveCabecera: '0001',
			  nombreCabecera: 'Guadalupe' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '027',
			  nombre: 'Los Herreras',
			  claveCabecera: '0001',
			  nombreCabecera: 'Los Herreras' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '028',
			  nombre: 'Higueras',
			  claveCabecera: '0001',
			  nombreCabecera: 'Higueras' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '029',
			  nombre: 'Hualahuises',
			  claveCabecera: '0001',
			  nombreCabecera: 'Hualahuises' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '030',
			  nombre: 'Iturbide',
			  claveCabecera: '0001',
			  nombreCabecera: 'Iturbide' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '031',
			  nombre: 'Ju�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad Benito Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '032',
			  nombre: 'Lampazos de Naranjo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Lampazos de Naranjo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '033',
			  nombre: 'Linares',
			  claveCabecera: '0001',
			  nombreCabecera: 'Linares' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '034',
			  nombre: 'Mar�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mar�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '035',
			  nombre: 'Melchor Ocampo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Melchor Ocampo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '036',
			  nombre: 'Mier y Noriega',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mier y Noriega' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '037',
			  nombre: 'Mina',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mina' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '038',
			  nombre: 'Montemorelos',
			  claveCabecera: '0001',
			  nombreCabecera: 'Montemorelos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '039',
			  nombre: 'Monterrey',
			  claveCabecera: '0001',
			  nombreCabecera: 'Monterrey' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '040',
			  nombre: 'Par�s',
			  claveCabecera: '0001',
			  nombreCabecera: 'Par�s' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '041',
			  nombre: 'Pesquer�a',
			  claveCabecera: '0001',
			  nombreCabecera: 'Pesquer�a' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '042',
			  nombre: 'Los Ramones',
			  claveCabecera: '0001',
			  nombreCabecera: 'Los Ramones' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '043',
			  nombre: 'Rayones',
			  claveCabecera: '0001',
			  nombreCabecera: 'Rayones' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '044',
			  nombre: 'Sabinas Hidalgo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad Sabinas Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '045',
			  nombre: 'Salinas Victoria',
			  claveCabecera: '0001',
			  nombreCabecera: 'Salinas Victoria' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '046',
			  nombre: 'San Nicol�s de los Garza',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Nicol�s de los Garza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '047',
			  nombre: 'Hidalgo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '048',
			  nombre: 'Santa Catarina',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad Santa Catarina' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '049',
			  nombre: 'Santiago',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '050',
			  nombre: 'Vallecillo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Vallecillo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '19',
			  clave: '051',
			  nombre: 'Villaldama',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad de Villaldama' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '001',
			  nombre: 'Abejones',
			  claveCabecera: '0001',
			  nombreCabecera: 'Abejones' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '002',
			  nombre: 'Acatl�n de P�rez Figueroa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Acatl�n de P�rez Figueroa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '003',
			  nombre: 'Asunci�n Cacalotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Asunci�n Cacalotepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '004',
			  nombre: 'Asunci�n Cuyotepeji',
			  claveCabecera: '0001',
			  nombreCabecera: 'Asunci�n Cuyotepeji' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '005',
			  nombre: 'Asunci�n Ixtaltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Asunci�n Ixtaltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '006',
			  nombre: 'Asunci�n Nochixtl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Asunci�n Nochixtl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '007',
			  nombre: 'Asunci�n Ocotl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Asunci�n Ocotl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '008',
			  nombre: 'Asunci�n Tlacolulita',
			  claveCabecera: '0001',
			  nombreCabecera: 'Asunci�n Tlacolulita' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '009',
			  nombre: 'Ayotzintepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ayotzintepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '010',
			  nombre: 'El Barrio de la Soledad',
			  claveCabecera: '0001',
			  nombreCabecera: 'El Barrio de la Soledad' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '011',
			  nombre: 'Calihual�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Calihual�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '012',
			  nombre: 'Candelaria Loxicha',
			  claveCabecera: '0001',
			  nombreCabecera: 'Candelaria Loxicha' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '013',
			  nombre: 'Ci�nega de Zimatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ci�nega de Zimatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '014',
			  nombre: 'Ciudad Ixtepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad Ixtepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '015',
			  nombre: 'Coatecas Altas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Coatecas Altas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '016',
			  nombre: 'Coicoy�n de las Flores',
			  claveCabecera: '0001',
			  nombreCabecera: 'Coicoy�n de las Flores' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '017',
			  nombre: 'La Compa��a',
			  claveCabecera: '0001',
			  nombreCabecera: 'La Compa��a' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '018',
			  nombre: 'Concepci�n Buenavista',
			  claveCabecera: '0001',
			  nombreCabecera: 'Concepci�n Buenavista' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '019',
			  nombre: 'Concepci�n P�palo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Concepci�n P�palo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '020',
			  nombre: 'Constancia del Rosario',
			  claveCabecera: '0001',
			  nombreCabecera: 'Constancia del Rosario' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '021',
			  nombre: 'Cosolapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cosolapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '022',
			  nombre: 'Cosoltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cosoltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '023',
			  nombre: 'Cuil�pam de Guerrero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cuil�pam de Guerrero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '024',
			  nombre: 'Cuyamecalco Villa de Zaragoza',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cuyamecalco Villa de Zaragoza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '025',
			  nombre: 'Chahuites',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chahuites' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '026',
			  nombre: 'Chalcatongo de Hidalgo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chalcatongo de Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '027',
			  nombre: 'Chiquihuitl�n de Benito Ju�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chiquihuitl�n de Benito Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '028',
			  nombre: 'Heroica Ciudad de Ejutla de Crespo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Heroica Ciudad de Ejutla de Crespo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '029',
			  nombre: 'Eloxochitl�n de Flores Mag�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Eloxochitl�n de Flores Mag�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '030',
			  nombre: 'El Espinal',
			  claveCabecera: '0001',
			  nombreCabecera: 'El Espinal' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '031',
			  nombre: 'Tamazul�pam del Esp�ritu Santo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tamazul�pam del Esp�ritu Santo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '032',
			  nombre: 'Fresnillo de Trujano',
			  claveCabecera: '0001',
			  nombreCabecera: 'Fresnillo de Trujano' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '033',
			  nombre: 'Guadalupe Etla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Guadalupe Etla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '034',
			  nombre: 'Guadalupe de Ram�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Guadalupe de Ram�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '035',
			  nombre: 'Guelatao de Ju�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Guelatao de Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '036',
			  nombre: 'Guevea de Humboldt',
			  claveCabecera: '0001',
			  nombreCabecera: 'Guevea de Humboldt' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '037',
			  nombre: 'Mesones Hidalgo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mesones Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '038',
			  nombre: 'Villa Hidalgo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '039',
			  nombre: 'Heroica Ciudad de Huajuapan de Le�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Heroica Ciudad de Huajuapan de Le�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '040',
			  nombre: 'Huautepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huautepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '041',
			  nombre: 'Huautla de Jim�nez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huautla de Jim�nez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '042',
			  nombre: 'Ixtl�n de Ju�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ixtl�n de Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '043',
			  nombre: 'Heroica Ciudad de Juchit�n de Zaragoza',
			  claveCabecera: '0001',
			  nombreCabecera: 'Heroica Ciudad de Juchit�n de Zaragoza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '044',
			  nombre: 'Loma Bonita',
			  claveCabecera: '0001',
			  nombreCabecera: 'Loma Bonita' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '045',
			  nombre: 'Magdalena Apasco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Magdalena Apasco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '046',
			  nombre: 'Magdalena Jaltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Magdalena Jaltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '047',
			  nombre: 'Santa Magdalena Jicotl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Magdalena Jicotl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '048',
			  nombre: 'Magdalena Mixtepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Magdalena Mixtepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '049',
			  nombre: 'Magdalena Ocotl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Magdalena Ocotl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '050',
			  nombre: 'Magdalena Pe�asco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Magdalena Pe�asco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '051',
			  nombre: 'Magdalena Teitipac',
			  claveCabecera: '0001',
			  nombreCabecera: 'Magdalena Teitipac' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '052',
			  nombre: 'Magdalena Tequisistl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Magdalena Tequisistl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '053',
			  nombre: 'Magdalena Tlacotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Magdalena Tlacotepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '054',
			  nombre: 'Magdalena Zahuatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Magdalena Zahuatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '055',
			  nombre: 'Mariscala de Ju�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mariscala de Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '056',
			  nombre: 'M�rtires de Tacubaya',
			  claveCabecera: '0001',
			  nombreCabecera: 'M�rtires de Tacubaya' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '057',
			  nombre: 'Mat�as Romero Avenda�o',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mat�as Romero Avenda�o' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '058',
			  nombre: 'Mazatl�n Villa de Flores',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mazatl�n Villa de Flores' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '059',
			  nombre: 'Miahuatl�n de Porfirio D�az',
			  claveCabecera: '0001',
			  nombreCabecera: 'Miahuatl�n de Porfirio D�az' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '060',
			  nombre: 'Mixistl�n de la Reforma',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mixistl�n de la Reforma' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '061',
			  nombre: 'Monjas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Monjas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '062',
			  nombre: 'Natividad',
			  claveCabecera: '0001',
			  nombreCabecera: 'Natividad' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '063',
			  nombre: 'Nazareno Etla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nazareno Etla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '064',
			  nombre: 'Nejapa de Madero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nejapa de Madero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '065',
			  nombre: 'Ixpantepec Nieves',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ixpantepec Nieves' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '066',
			  nombre: 'Santiago Niltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Niltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '067',
			  nombre: 'Oaxaca de Ju�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Oaxaca de Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '068',
			  nombre: 'Ocotl�n de Morelos',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ocotl�n de Morelos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '069',
			  nombre: 'La Pe',
			  claveCabecera: '0001',
			  nombreCabecera: 'La Pe' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '070',
			  nombre: 'Pinotepa de Don Luis',
			  claveCabecera: '0001',
			  nombreCabecera: 'Pinotepa de Don Luis' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '071',
			  nombre: 'Pluma Hidalgo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Pluma Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '072',
			  nombre: 'San Jos� del Progreso',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Jos� del Progreso' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '073',
			  nombre: 'Putla Villa de Guerrero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Putla Villa de Guerrero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '074',
			  nombre: 'Santa Catarina Quioquitani',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Catarina Quioquitani' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '075',
			  nombre: 'Reforma de Pineda',
			  claveCabecera: '0001',
			  nombreCabecera: 'Reforma de Pineda' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '076',
			  nombre: 'La Reforma',
			  claveCabecera: '0001',
			  nombreCabecera: 'La Reforma' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '077',
			  nombre: 'Reyes Etla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Reyes Etla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '078',
			  nombre: 'Rojas de Cuauht�moc',
			  claveCabecera: '0001',
			  nombreCabecera: 'Rojas de Cuauht�moc' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '079',
			  nombre: 'Salina Cruz',
			  claveCabecera: '0001',
			  nombreCabecera: 'Salina Cruz' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '080',
			  nombre: 'San Agust�n Amatengo',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Agust�n Amatengo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '081',
			  nombre: 'San Agust�n Atenango',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Agust�n Atenango' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '082',
			  nombre: 'San Agust�n Chayuco',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Agust�n Chayuco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '083',
			  nombre: 'San Agust�n de las Juntas',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Agust�n de las Juntas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '084',
			  nombre: 'San Agust�n Etla',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Agust�n Etla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '085',
			  nombre: 'San Agust�n Loxicha',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Agust�n Loxicha' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '086',
			  nombre: 'San Agust�n Tlacotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Agust�n Tlacotepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '087',
			  nombre: 'San Agust�n Yatareni',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Agust�n Yatareni' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '088',
			  nombre: 'San Andr�s Cabecera Nueva',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Andr�s Cabecera Nueva' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '089',
			  nombre: 'San Andr�s Dinicuiti',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Andr�s Dinicuiti' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '090',
			  nombre: 'San Andr�s Huaxpaltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Andr�s Huaxpaltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '091',
			  nombre: 'San Andr�s Huay�pam',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Andr�s Huay�pam' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '092',
			  nombre: 'San Andr�s Ixtlahuaca',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Andr�s Ixtlahuaca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '093',
			  nombre: 'San Andr�s Lagunas',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Andr�s Lagunas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '094',
			  nombre: 'San Andr�s Nuxi�o',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Andr�s Nuxi�o' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '095',
			  nombre: 'San Andr�s Paxtl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Andr�s Paxtl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '096',
			  nombre: 'San Andr�s Sinaxtla',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Andr�s Sinaxtla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '097',
			  nombre: 'San Andr�s Solaga',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Andr�s Solaga' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '098',
			  nombre: 'San Andr�s Teotil�lpam',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Andr�s Teotil�lpam' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '099',
			  nombre: 'San Andr�s Tepetlapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Andr�s Tepetlapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '100',
			  nombre: 'San Andr�s Ya�',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Andr�s Ya�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '101',
			  nombre: 'San Andr�s Zabache',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Andr�s Zabache' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '102',
			  nombre: 'San Andr�s Zautla',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Andr�s Zautla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '103',
			  nombre: 'San Antonino Castillo Velasco',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Antonino Castillo Velasco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '104',
			  nombre: 'San Antonino el Alto',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Antonino el Alto' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '105',
			  nombre: 'San Antonino Monte Verde',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Antonino Monte Verde' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '106',
			  nombre: 'San Antonio Acutla',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Antonio Acutla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '107',
			  nombre: 'San Antonio de la Cal',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Antonio de la Cal' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '108',
			  nombre: 'San Antonio Huitepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Antonio Huitepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '109',
			  nombre: 'San Antonio Nanahuat�pam',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Antonio Nanahuat�pam' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '110',
			  nombre: 'San Antonio Sinicahua',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Antonio Sinicahua' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '111',
			  nombre: 'San Antonio Tepetlapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Antonio Tepetlapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '112',
			  nombre: 'San Baltazar Chichic�pam',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Baltazar Chichic�pam' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '113',
			  nombre: 'San Baltazar Loxicha',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Baltazar Loxicha' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '114',
			  nombre: 'San Baltazar Yatzachi el Bajo',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Baltazar Yatzachi el Bajo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '115',
			  nombre: 'San Bartolo Coyotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Bartolo Coyotepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '116',
			  nombre: 'San Bartolom� Ayautla',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Bartolom� Ayautla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '117',
			  nombre: 'San Bartolom� Loxicha',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Bartolom� Loxicha' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '118',
			  nombre: 'San Bartolom� Quialana',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Bartolom� Quialana' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '119',
			  nombre: 'San Bartolom� Yucua�e',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Bartolom� Yucua�e' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '120',
			  nombre: 'San Bartolom� Zoogocho',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Bartolom� Zoogocho' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '121',
			  nombre: 'San Bartolo Soyaltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Bartolo Soyaltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '122',
			  nombre: 'San Bartolo Yautepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Bartolo Yautepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '123',
			  nombre: 'San Bernardo Mixtepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Bernardo Mixtepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '124',
			  nombre: 'San Blas Atempa',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Blas Atempa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '125',
			  nombre: 'San Carlos Yautepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Carlos Yautepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '126',
			  nombre: 'San Crist�bal Amatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Crist�bal Amatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '127',
			  nombre: 'San Crist�bal Amoltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Crist�bal Amoltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '128',
			  nombre: 'San Crist�bal Lachirioag',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Crist�bal Lachirioag' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '129',
			  nombre: 'San Crist�bal Suchixtlahuaca',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Crist�bal Suchixtlahuaca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '130',
			  nombre: 'San Dionisio del Mar',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Dionisio del Mar' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '131',
			  nombre: 'San Dionisio Ocotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Dionisio Ocotepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '132',
			  nombre: 'San Dionisio Ocotl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Dionisio Ocotl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '133',
			  nombre: 'San Esteban Atatlahuca',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Esteban Atatlahuca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '134',
			  nombre: 'San Felipe Jalapa de D�az',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Felipe Jalapa de D�az' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '135',
			  nombre: 'San Felipe Tejal�pam',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Felipe Tejal�pam' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '136',
			  nombre: 'San Felipe Usila',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Felipe Usila' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '137',
			  nombre: 'San Francisco Cahuacu�',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Francisco Cahuacu�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '138',
			  nombre: 'San Francisco Cajonos',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Francisco Cajonos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '139',
			  nombre: 'San Francisco Chapulapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Francisco Chapulapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '140',
			  nombre: 'San Francisco Chind�a',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Francisco Chind�a' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '141',
			  nombre: 'San Francisco del Mar',
			  claveCabecera: '0036',
			  nombreCabecera: 'San Francisco del Mar' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '142',
			  nombre: 'San Francisco Huehuetl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Francisco Huehuetl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '143',
			  nombre: 'San Francisco Ixhuat�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Francisco Ixhuat�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '144',
			  nombre: 'San Francisco Jaltepetongo',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Francisco Jaltepetongo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '145',
			  nombre: 'San Francisco Lachigol�',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Francisco Lachigol�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '146',
			  nombre: 'San Francisco Logueche',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Francisco Logueche' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '147',
			  nombre: 'San Francisco Nuxa�o',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Francisco Nuxa�o' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '148',
			  nombre: 'San Francisco Ozolotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Francisco Ozolotepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '149',
			  nombre: 'San Francisco Sola',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Francisco Sola' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '150',
			  nombre: 'San Francisco Telixtlahuaca',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Francisco Telixtlahuaca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '151',
			  nombre: 'San Francisco Teopan',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Francisco Teopan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '152',
			  nombre: 'San Francisco Tlapancingo',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Francisco Tlapancingo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '153',
			  nombre: 'San Gabriel Mixtepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Gabriel Mixtepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '154',
			  nombre: 'San Ildefonso Amatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Ildefonso Amatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '155',
			  nombre: 'San Ildefonso Sola',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Ildefonso Sola' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '156',
			  nombre: 'San Ildefonso Villa Alta',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Ildefonso Villa Alta' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '157',
			  nombre: 'San Jacinto Amilpas',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Jacinto Amilpas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '158',
			  nombre: 'San Jacinto Tlacotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Jacinto Tlacotepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '159',
			  nombre: 'San Jer�nimo Coatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Jer�nimo Coatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '160',
			  nombre: 'San Jer�nimo Silacayoapilla',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Jer�nimo Silacayoapilla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '161',
			  nombre: 'San Jer�nimo Sosola',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Jer�nimo Sosola' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '162',
			  nombre: 'San Jer�nimo Taviche',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Jer�nimo Taviche' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '163',
			  nombre: 'San Jer�nimo Tec�atl',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Jer�nimo Tec�atl' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '164',
			  nombre: 'San Jorge Nuchita',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Jorge Nuchita' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '165',
			  nombre: 'San Jos� Ayuquila',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Jos� Ayuquila' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '166',
			  nombre: 'San Jos� Chiltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Jos� Chiltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '167',
			  nombre: 'San Jos� del Pe�asco',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Jos� del Pe�asco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '168',
			  nombre: 'San Jos� Estancia Grande',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Jos� Estancia Grande' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '169',
			  nombre: 'San Jos� Independencia',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Jos� Independencia' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '170',
			  nombre: 'San Jos� Lachiguiri',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Jos� Lachiguiri' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '171',
			  nombre: 'San Jos� Tenango',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Jos� Tenango' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '172',
			  nombre: 'San Juan Achiutla',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Achiutla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '173',
			  nombre: 'San Juan Atepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Atepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '174',
			  nombre: '�nimas Trujano',
			  claveCabecera: '0001',
			  nombreCabecera: '�nimas Trujano' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '175',
			  nombre: 'San Juan Bautista Atatlahuca',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Bautista Atatlahuca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '176',
			  nombre: 'San Juan Bautista Coixtlahuaca',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Bautista Coixtlahuaca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '177',
			  nombre: 'San Juan Bautista Cuicatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Bautista Cuicatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '178',
			  nombre: 'San Juan Bautista Guelache',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Bautista Guelache' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '179',
			  nombre: 'San Juan Bautista Jayacatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Bautista Jayacatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '180',
			  nombre: 'San Juan Bautista Lo de Soto',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Bautista Lo de Soto' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '181',
			  nombre: 'San Juan Bautista Suchitepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Bautista Suchitepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '182',
			  nombre: 'San Juan Bautista Tlacoatzintepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Bautista Tlacoatzintepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '183',
			  nombre: 'San Juan Bautista Tlachichilco',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Bautista Tlachichilco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '184',
			  nombre: 'San Juan Bautista Tuxtepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Bautista Tuxtepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '185',
			  nombre: 'San Juan Cacahuatepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Cacahuatepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '186',
			  nombre: 'San Juan Cieneguilla',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Cieneguilla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '187',
			  nombre: 'San Juan Coatz�spam',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Coatz�spam' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '188',
			  nombre: 'San Juan Colorado',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Colorado' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '189',
			  nombre: 'San Juan Comaltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Comaltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '190',
			  nombre: 'San Juan Cotzoc�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Cotzoc�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '191',
			  nombre: 'San Juan Chicomez�chil',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Chicomez�chil' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '192',
			  nombre: 'San Juan Chilateca',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Chilateca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '193',
			  nombre: 'San Juan del Estado',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan del Estado' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '194',
			  nombre: 'San Juan del R�o',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan del R�o' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '195',
			  nombre: 'San Juan Diuxi',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Diuxi' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '196',
			  nombre: 'San Juan Evangelista Analco',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Evangelista Analco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '197',
			  nombre: 'San Juan Guelav�a',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Guelav�a' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '198',
			  nombre: 'San Juan Guichicovi',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Guichicovi' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '199',
			  nombre: 'San Juan Ihualtepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Ihualtepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '200',
			  nombre: 'San Juan Juquila Mixes',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Juquila Mixes' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '201',
			  nombre: 'San Juan Juquila Vijanos',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Juquila Vijanos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '202',
			  nombre: 'San Juan Lachao',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Lachao' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '203',
			  nombre: 'San Juan Lachigalla',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Lachigalla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '204',
			  nombre: 'San Juan Lajarcia',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Lajarcia' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '205',
			  nombre: 'San Juan Lalana',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Lalana' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '206',
			  nombre: 'San Juan de los Cu�s',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan de los Cu�s' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '207',
			  nombre: 'San Juan Mazatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Mazatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '208',
			  nombre: 'San Juan Mixtepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Mixtepec Distrito 08' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '209',
			  nombre: 'San Juan Mixtepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Mixtepec Distrito 26' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '210',
			  nombre: 'San Juan �um�',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan �um�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '211',
			  nombre: 'San Juan Ozolotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Ozolotepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '212',
			  nombre: 'San Juan Petlapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Petlapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '213',
			  nombre: 'San Juan Quiahije',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Quiahije' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '214',
			  nombre: 'San Juan Quiotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Quiotepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '215',
			  nombre: 'San Juan Sayultepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Sayultepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '216',
			  nombre: 'San Juan Taba�',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Taba�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '217',
			  nombre: 'San Juan Tamazola',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Tamazola' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '218',
			  nombre: 'San Juan Teita',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Teita' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '219',
			  nombre: 'San Juan Teitipac',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Teitipac' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '220',
			  nombre: 'San Juan Tepeuxila',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Tepeuxila' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '221',
			  nombre: 'San Juan Teposcolula',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Teposcolula' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '222',
			  nombre: 'San Juan Yae�',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Yae�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '223',
			  nombre: 'San Juan Yatzona',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Yatzona' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '224',
			  nombre: 'San Juan Yucuita',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Yucuita' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '225',
			  nombre: 'San Lorenzo',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Lorenzo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '226',
			  nombre: 'San Lorenzo Albarradas',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Lorenzo Albarradas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '227',
			  nombre: 'San Lorenzo Cacaotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Lorenzo Cacaotepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '228',
			  nombre: 'San Lorenzo Cuaunecuiltitla',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Lorenzo Cuaunecuiltitla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '229',
			  nombre: 'San Lorenzo Texmel�can',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Lorenzo Texmel�can' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '230',
			  nombre: 'San Lorenzo Victoria',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Lorenzo Victoria' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '231',
			  nombre: 'San Lucas Camotl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Lucas Camotl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '232',
			  nombre: 'San Lucas Ojitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Lucas Ojitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '233',
			  nombre: 'San Lucas Quiavin�',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Lucas Quiavin�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '234',
			  nombre: 'San Lucas Zoqui�pam',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Lucas Zoqui�pam' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '235',
			  nombre: 'San Luis Amatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Luis Amatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '236',
			  nombre: 'San Marcial Ozolotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Marcial Ozolotepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '237',
			  nombre: 'San Marcos Arteaga',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Marcos Arteaga' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '238',
			  nombre: 'San Mart�n de los Cansecos',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Mart�n de los Cansecos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '239',
			  nombre: 'San Mart�n Huamel�lpam',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Mart�n Huamel�lpam' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '240',
			  nombre: 'San Mart�n Itunyoso',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Mart�n Itunyoso' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '241',
			  nombre: 'San Mart�n Lachil�',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Mart�n Lachil�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '242',
			  nombre: 'San Mart�n Peras',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Mart�n Peras' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '243',
			  nombre: 'San Mart�n Tilcajete',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Mart�n Tilcajete' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '244',
			  nombre: 'San Mart�n Toxpalan',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Mart�n Toxpalan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '245',
			  nombre: 'San Mart�n Zacatepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Mart�n Zacatepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '246',
			  nombre: 'San Mateo Cajonos',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Mateo Cajonos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '247',
			  nombre: 'Capul�lpam de M�ndez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Capul�lpam de M�ndez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '248',
			  nombre: 'San Mateo del Mar',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Mateo del Mar' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '249',
			  nombre: 'San Mateo Yoloxochitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Mateo Yoloxochitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '250',
			  nombre: 'San Mateo Etlatongo',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Mateo Etlatongo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '251',
			  nombre: 'San Mateo Nej�pam',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Mateo Nej�pam' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '252',
			  nombre: 'San Mateo Pe�asco',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Mateo Pe�asco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '253',
			  nombre: 'San Mateo Pi�as',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Mateo Pi�as' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '254',
			  nombre: 'San Mateo R�o Hondo',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Mateo R�o Hondo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '255',
			  nombre: 'San Mateo Sindihui',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Mateo Sindihui' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '256',
			  nombre: 'San Mateo Tlapiltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Mateo Tlapiltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '257',
			  nombre: 'San Melchor Betaza',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Melchor Betaza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '258',
			  nombre: 'San Miguel Achiutla',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel Achiutla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '259',
			  nombre: 'San Miguel Ahuehuetitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel Ahuehuetitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '260',
			  nombre: 'San Miguel Alo�pam',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel Alo�pam' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '261',
			  nombre: 'San Miguel Amatitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel Amatitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '262',
			  nombre: 'San Miguel Amatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel Amatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '263',
			  nombre: 'San Miguel Coatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel Coatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '264',
			  nombre: 'San Miguel Chicahua',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel Chicahua' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '265',
			  nombre: 'San Miguel Chimalapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel Chimalapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '266',
			  nombre: 'San Miguel del Puerto',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel del Puerto' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '267',
			  nombre: 'San Miguel del R�o',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel del R�o' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '268',
			  nombre: 'San Miguel Ejutla',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel Ejutla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '269',
			  nombre: 'San Miguel el Grande',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel el Grande' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '270',
			  nombre: 'San Miguel Huautla',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel Huautla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '271',
			  nombre: 'San Miguel Mixtepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel Mixtepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '272',
			  nombre: 'San Miguel Panixtlahuaca',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel Panixtlahuaca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '273',
			  nombre: 'San Miguel Peras',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel Peras' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '274',
			  nombre: 'San Miguel Piedras',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel Piedras' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '275',
			  nombre: 'San Miguel Quetzaltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel Quetzaltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '276',
			  nombre: 'San Miguel Santa Flor',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel Santa Flor' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '277',
			  nombre: 'Villa Sola de Vega',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Sola de Vega' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '278',
			  nombre: 'San Miguel Soyaltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Temascal' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '279',
			  nombre: 'San Miguel Suchixtepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel Suchixtepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '280',
			  nombre: 'Villa Talea de Castro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Talea de Castro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '281',
			  nombre: 'San Miguel Tecomatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel Tecomatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '282',
			  nombre: 'San Miguel Tenango',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel Tenango' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '283',
			  nombre: 'San Miguel Tequixtepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel Tequixtepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '284',
			  nombre: 'San Miguel Tilqui�pam',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel Tilqui�pam' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '285',
			  nombre: 'San Miguel Tlacamama',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel Tlacamama' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '286',
			  nombre: 'San Miguel Tlacotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel Tlacotepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '287',
			  nombre: 'San Miguel Tulancingo',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel Tulancingo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '288',
			  nombre: 'San Miguel Yotao',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel Yotao' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '289',
			  nombre: 'San Nicol�s',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Nicol�s' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '290',
			  nombre: 'San Nicol�s Hidalgo',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Nicol�s Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '291',
			  nombre: 'San Pablo Coatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pablo Coatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '292',
			  nombre: 'San Pablo Cuatro Venados',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pablo Cuatro Venados' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '293',
			  nombre: 'San Pablo Etla',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pablo Etla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '294',
			  nombre: 'San Pablo Huitzo',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pablo Huitzo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '295',
			  nombre: 'San Pablo Huixtepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pablo Huixtepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '296',
			  nombre: 'San Pablo Macuiltianguis',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pablo Macuiltianguis' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '297',
			  nombre: 'San Pablo Tijaltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pablo Tijaltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '298',
			  nombre: 'San Pablo Villa de Mitla',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pablo Villa de Mitla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '299',
			  nombre: 'San Pablo Yaganiza',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pablo Yaganiza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '300',
			  nombre: 'San Pedro Amuzgos',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Amuzgos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '301',
			  nombre: 'San Pedro Ap�stol',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Ap�stol' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '302',
			  nombre: 'San Pedro Atoyac',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Atoyac' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '303',
			  nombre: 'San Pedro Cajonos',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Cajonos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '304',
			  nombre: 'San Pedro Coxcaltepec C�ntaros',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Coxcaltepec C�ntaros' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '305',
			  nombre: 'San Pedro Comitancillo',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Comitancillo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '306',
			  nombre: 'San Pedro el Alto',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro el Alto' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '307',
			  nombre: 'San Pedro Huamelula',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Huamelula' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '308',
			  nombre: 'San Pedro Huilotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Huilotepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '309',
			  nombre: 'San Pedro Ixcatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Ixcatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '310',
			  nombre: 'San Pedro Ixtlahuaca',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Ixtlahuaca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '311',
			  nombre: 'San Pedro Jaltepetongo',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Jaltepetongo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '312',
			  nombre: 'San Pedro Jicay�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Jicay�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '313',
			  nombre: 'San Pedro Jocotipac',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Jocotipac' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '314',
			  nombre: 'San Pedro Juchatengo',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Juchatengo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '315',
			  nombre: 'San Pedro M�rtir',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro M�rtir' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '316',
			  nombre: 'San Pedro M�rtir Quiechapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro M�rtir Quiechapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '317',
			  nombre: 'San Pedro M�rtir Yucuxaco',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro M�rtir Yucuxaco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '318',
			  nombre: 'San Pedro Mixtepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Mixtepec Distrito 22' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '319',
			  nombre: 'San Pedro Mixtepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Mixtepec Distrito 26' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '320',
			  nombre: 'San Pedro Molinos',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Molinos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '321',
			  nombre: 'San Pedro Nopala',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Nopala' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '322',
			  nombre: 'San Pedro Ocopetatillo',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Ocopetatillo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '323',
			  nombre: 'San Pedro Ocotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Ocotepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '324',
			  nombre: 'San Pedro Pochutla',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Pochutla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '325',
			  nombre: 'San Pedro Quiatoni',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Quiatoni' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '326',
			  nombre: 'San Pedro Sochi�pam',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Sochi�pam' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '327',
			  nombre: 'San Pedro Tapanatepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Tapanatepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '328',
			  nombre: 'San Pedro Taviche',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Taviche' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '329',
			  nombre: 'San Pedro Teozacoalco',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Teozacoalco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '330',
			  nombre: 'San Pedro Teutila',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Teutila' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '331',
			  nombre: 'San Pedro Tida�',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Tida�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '332',
			  nombre: 'San Pedro Topiltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Topiltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '333',
			  nombre: 'San Pedro Totol�pam',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Totol�pam' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '334',
			  nombre: 'Villa de Tututepec de Melchor Ocampo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa de Tututepec de Melchor Ocampo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '335',
			  nombre: 'San Pedro Yaneri',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Yaneri' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '336',
			  nombre: 'San Pedro Y�lox',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Y�lox' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '337',
			  nombre: 'San Pedro y San Pablo Ayutla',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro y San Pablo Ayutla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '338',
			  nombre: 'Villa de Etla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa de Etla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '339',
			  nombre: 'San Pedro y San Pablo Teposcolula',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro y San Pablo Teposcolula' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '340',
			  nombre: 'San Pedro y San Pablo Tequixtepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro y San Pablo Tequixtepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '341',
			  nombre: 'San Pedro Yucunama',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Yucunama' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '342',
			  nombre: 'San Raymundo Jalpan',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Raymundo Jalpan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '343',
			  nombre: 'San Sebasti�n Abasolo',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Sebasti�n Abasolo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '344',
			  nombre: 'San Sebasti�n Coatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Sebasti�n Coatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '345',
			  nombre: 'San Sebasti�n Ixcapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Sebasti�n Ixcapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '346',
			  nombre: 'San Sebasti�n Nicananduta',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Sebasti�n Nicananduta' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '347',
			  nombre: 'San Sebasti�n R�o Hondo',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Sebasti�n R�o Hondo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '348',
			  nombre: 'San Sebasti�n Tecomaxtlahuaca',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Sebasti�n Tecomaxtlahuaca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '349',
			  nombre: 'San Sebasti�n Teitipac',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Sebasti�n Teitipac' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '350',
			  nombre: 'San Sebasti�n Tutla',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Sebasti�n Tutla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '351',
			  nombre: 'San Sim�n Almolongas',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Sim�n Almolongas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '352',
			  nombre: 'San Sim�n Zahuatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Sim�n Zahuatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '353',
			  nombre: 'Santa Ana',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Ana' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '354',
			  nombre: 'Santa Ana Ateixtlahuaca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Ana Ateixtlahuaca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '355',
			  nombre: 'Santa Ana Cuauht�moc',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Ana Cuauht�moc' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '356',
			  nombre: 'Santa Ana del Valle',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Ana del Valle' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '357',
			  nombre: 'Santa Ana Tavela',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Ana Tavela' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '358',
			  nombre: 'Santa Ana Tlapacoyan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Ana Tlapacoyan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '359',
			  nombre: 'Santa Ana Yareni',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Ana Yareni' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '360',
			  nombre: 'Santa Ana Zegache',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Ana Zegache' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '361',
			  nombre: 'Santa Catalina Quier�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Catalina Quier�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '362',
			  nombre: 'Santa Catarina Cuixtla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Catarina Cuixtla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '363',
			  nombre: 'Santa Catarina Ixtepeji',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Catarina Ixtepeji' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '364',
			  nombre: 'Santa Catarina Juquila',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Catarina Juquila' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '365',
			  nombre: 'Santa Catarina Lachatao',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Catarina Lachatao' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '366',
			  nombre: 'Santa Catarina Loxicha',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Catarina Loxicha' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '367',
			  nombre: 'Santa Catarina Mechoac�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Catarina Mechoac�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '368',
			  nombre: 'Santa Catarina Minas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Catarina Minas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '369',
			  nombre: 'Santa Catarina Quian�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Catarina Quian�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '370',
			  nombre: 'Santa Catarina Tayata',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Catarina Tayata' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '371',
			  nombre: 'Santa Catarina Ticu�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Catarina Ticu�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '372',
			  nombre: 'Santa Catarina Yosonot�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Catarina Yosonot�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '373',
			  nombre: 'Santa Catarina Zapoquila',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Catarina Zapoquila' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '374',
			  nombre: 'Santa Cruz Acatepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Cruz Acatepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '375',
			  nombre: 'Santa Cruz Amilpas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Cruz Amilpas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '376',
			  nombre: 'Santa Cruz de Bravo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Cruz de Bravo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '377',
			  nombre: 'Santa Cruz Itundujia',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Cruz Itundujia' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '378',
			  nombre: 'Santa Cruz Mixtepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Cruz Mixtepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '379',
			  nombre: 'Santa Cruz Nundaco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Cruz Nundaco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '380',
			  nombre: 'Santa Cruz Papalutla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Cruz Papalutla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '381',
			  nombre: 'Santa Cruz Tacache de Mina',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Cruz Tacache de Mina' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '382',
			  nombre: 'Santa Cruz Tacahua',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Cruz Tacahua' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '383',
			  nombre: 'Santa Cruz Tayata',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Cruz Tayata' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '384',
			  nombre: 'Santa Cruz Xitla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Cruz Xitla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '385',
			  nombre: 'Santa Cruz Xoxocotl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Cruz Xoxocotl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '386',
			  nombre: 'Santa Cruz Zenzontepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Cruz Zenzontepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '387',
			  nombre: 'Santa Gertrudis',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Gertrudis' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '388',
			  nombre: 'Santa In�s del Monte',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa In�s del Monte' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '389',
			  nombre: 'Santa In�s Yatzeche',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa In�s Yatzeche' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '390',
			  nombre: 'Santa Luc�a del Camino',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Luc�a del Camino' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '391',
			  nombre: 'Santa Luc�a Miahuatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Luc�a Miahuatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '392',
			  nombre: 'Santa Luc�a Monteverde',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Luc�a Monteverde' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '393',
			  nombre: 'Santa Luc�a Ocotl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Luc�a Ocotl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '394',
			  nombre: 'Santa Mar�a Alotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Alotepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '395',
			  nombre: 'Santa Mar�a Apazco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Apazco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '396',
			  nombre: 'Santa Mar�a la Asunci�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a la Asunci�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '397',
			  nombre: 'Heroica Ciudad de Tlaxiaco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Heroica Ciudad de Tlaxiaco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '398',
			  nombre: 'Ayoquezco de Aldama',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ayoquezco de Aldama' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '399',
			  nombre: 'Santa Mar�a Atzompa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Atzompa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '400',
			  nombre: 'Santa Mar�a Camotl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Camotl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '401',
			  nombre: 'Santa Mar�a Colotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Colotepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '402',
			  nombre: 'Santa Mar�a Cortijo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Cortijo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '403',
			  nombre: 'Santa Mar�a Coyotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Coyotepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '404',
			  nombre: 'Santa Mar�a Chacho�pam',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Chacho�pam' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '405',
			  nombre: 'Villa de Chilapa de D�az',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa de Chilapa de D�az' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '406',
			  nombre: 'Santa Mar�a Chilchotla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Chilchotla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '407',
			  nombre: 'Santa Mar�a Chimalapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Chimalapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '408',
			  nombre: 'Santa Mar�a del Rosario',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a del Rosario' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '409',
			  nombre: 'Santa Mar�a del Tule',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a del Tule' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '410',
			  nombre: 'Santa Mar�a Ecatepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Ecatepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '411',
			  nombre: 'Santa Mar�a Guelac�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Guelac�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '412',
			  nombre: 'Santa Mar�a Guienagati',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Guienagati' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '413',
			  nombre: 'Santa Mar�a Huatulco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Huatulco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '414',
			  nombre: 'Santa Mar�a Huazolotitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Huazolotitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '415',
			  nombre: 'Santa Mar�a Ipalapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Ipalapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '416',
			  nombre: 'Santa Mar�a Ixcatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Ixcatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '417',
			  nombre: 'Santa Mar�a Jacatepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Jacatepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '418',
			  nombre: 'Santa Mar�a Jalapa del Marqu�s',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Jalapa del Marqu�s' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '419',
			  nombre: 'Santa Mar�a Jaltianguis',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Jaltianguis' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '420',
			  nombre: 'Santa Mar�a Lachix�o',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Lachix�o' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '421',
			  nombre: 'Santa Mar�a Mixtequilla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Mixtequilla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '422',
			  nombre: 'Santa Mar�a Nativitas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Nativitas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '423',
			  nombre: 'Santa Mar�a Nduayaco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Nduayaco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '424',
			  nombre: 'Santa Mar�a Ozolotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Ozolotepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '425',
			  nombre: 'Santa Mar�a P�palo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a P�palo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '426',
			  nombre: 'Santa Mar�a Pe�oles',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Pe�oles' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '427',
			  nombre: 'Santa Mar�a Petapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Petapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '428',
			  nombre: 'Santa Mar�a Quiegolani',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Quiegolani' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '429',
			  nombre: 'Santa Mar�a Sola',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Sola' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '430',
			  nombre: 'Santa Mar�a Tataltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Tataltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '431',
			  nombre: 'Santa Mar�a Tecomavaca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Tecomavaca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '432',
			  nombre: 'Santa Mar�a Temaxcalapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Temaxcalapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '433',
			  nombre: 'Santa Mar�a Temaxcaltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Temaxcaltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '434',
			  nombre: 'Santa Mar�a Teopoxco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Teopoxco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '435',
			  nombre: 'Santa Mar�a Tepantlali',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Tepantlali' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '436',
			  nombre: 'Santa Mar�a Texcatitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Texcatitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '437',
			  nombre: 'Santa Mar�a Tlahuitoltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Tlahuitoltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '438',
			  nombre: 'Santa Mar�a Tlalixtac',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Tlalixtac' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '439',
			  nombre: 'Santa Mar�a Tonameca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Tonameca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '440',
			  nombre: 'Santa Mar�a Totolapilla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Totolapilla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '441',
			  nombre: 'Santa Mar�a Xadani',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Xadani' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '442',
			  nombre: 'Santa Mar�a Yalina',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Yalina' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '443',
			  nombre: 'Santa Mar�a Yaves�a',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Yaves�a' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '444',
			  nombre: 'Santa Mar�a Yolotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Yolotepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '445',
			  nombre: 'Santa Mar�a Yosoy�a',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Yosoy�a' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '446',
			  nombre: 'Santa Mar�a Yucuhiti',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Yucuhiti' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '447',
			  nombre: 'Santa Mar�a Zacatepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Zacatepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '448',
			  nombre: 'Santa Mar�a Zaniza',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Zaniza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '449',
			  nombre: 'Santa Mar�a Zoquitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Zoquitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '450',
			  nombre: 'Santiago Amoltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Amoltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '451',
			  nombre: 'Santiago Apoala',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Apoala' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '452',
			  nombre: 'Santiago Ap�stol',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Ap�stol' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '453',
			  nombre: 'Santiago Astata',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Astata' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '454',
			  nombre: 'Santiago Atitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Atitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '455',
			  nombre: 'Santiago Ayuquililla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Ayuquililla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '456',
			  nombre: 'Santiago Cacaloxtepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Cacaloxtepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '457',
			  nombre: 'Santiago Camotl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Camotl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '458',
			  nombre: 'Santiago Comaltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Comaltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '459',
			  nombre: 'Santiago Chazumba',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Chazumba' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '460',
			  nombre: 'Santiago Cho�pam',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Cho�pam' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '461',
			  nombre: 'Santiago del R�o',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago del R�o' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '462',
			  nombre: 'Santiago Huajolotitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Huajolotitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '463',
			  nombre: 'Santiago Huauclilla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Huauclilla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '464',
			  nombre: 'Santiago Ihuitl�n Plumas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Ihuitl�n Plumas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '465',
			  nombre: 'Santiago Ixcuintepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Ixcuintepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '466',
			  nombre: 'Santiago Ixtayutla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Ixtayutla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '467',
			  nombre: 'Santiago Jamiltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Jamiltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '468',
			  nombre: 'Santiago Jocotepec',
			  claveCabecera: '0019',
			  nombreCabecera: 'Monte Negro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '469',
			  nombre: 'Santiago Juxtlahuaca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Juxtlahuaca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '470',
			  nombre: 'Santiago Lachiguiri',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Lachiguiri' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '471',
			  nombre: 'Santiago Lalopa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Lalopa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '472',
			  nombre: 'Santiago Laollaga',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Laollaga' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '473',
			  nombre: 'Santiago Laxopa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Laxopa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '474',
			  nombre: 'Santiago Llano Grande',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Llano Grande' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '475',
			  nombre: 'Santiago Matatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Matatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '476',
			  nombre: 'Santiago Miltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Miltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '477',
			  nombre: 'Santiago Minas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Minas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '478',
			  nombre: 'Santiago Nacaltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Nacaltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '479',
			  nombre: 'Santiago Nejapilla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Nejapilla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '480',
			  nombre: 'Santiago Nundiche',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Nundiche' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '481',
			  nombre: 'Santiago Nuyo�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Nuyo�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '482',
			  nombre: 'Santiago Pinotepa Nacional',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Pinotepa Nacional' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '483',
			  nombre: 'Santiago Suchilquitongo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Suchilquitongo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '484',
			  nombre: 'Santiago Tamazola',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Tamazola' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '485',
			  nombre: 'Santiago Tapextla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Tapextla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '486',
			  nombre: 'Villa Tej�pam de la Uni�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Tej�pam de la Uni�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '487',
			  nombre: 'Santiago Tenango',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Tenango' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '488',
			  nombre: 'Santiago Tepetlapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Tepetlapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '489',
			  nombre: 'Santiago Tetepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Tetepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '490',
			  nombre: 'Santiago Texcalcingo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Texcalcingo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '491',
			  nombre: 'Santiago Textitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Textitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '492',
			  nombre: 'Santiago Tilantongo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Tilantongo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '493',
			  nombre: 'Santiago Tillo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Tillo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '494',
			  nombre: 'Santiago Tlazoyaltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Tlazoyaltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '495',
			  nombre: 'Santiago Xanica',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Xanica' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '496',
			  nombre: 'Santiago Xiacu�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Xiacu�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '497',
			  nombre: 'Santiago Yaitepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Yaitepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '498',
			  nombre: 'Santiago Yaveo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Yaveo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '499',
			  nombre: 'Santiago Yolom�catl',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Yolom�catl' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '500',
			  nombre: 'Santiago Yosond�a',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Yosond�a' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '501',
			  nombre: 'Santiago Yucuyachi',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Yucuyachi' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '502',
			  nombre: 'Santiago Zacatepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Zacatepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '503',
			  nombre: 'Santiago Zoochila',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Zoochila' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '504',
			  nombre: 'Nuevo Zoqui�pam',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nuevo Zoqui�pam' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '505',
			  nombre: 'Santo Domingo Ingenio',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santo Domingo Ingenio' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '506',
			  nombre: 'Santo Domingo Albarradas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santo Domingo Albarradas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '507',
			  nombre: 'Santo Domingo Armenta',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santo Domingo Armenta' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '508',
			  nombre: 'Santo Domingo Chihuit�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santo Domingo Chihuit�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '509',
			  nombre: 'Santo Domingo de Morelos',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santo Domingo de Morelos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '510',
			  nombre: 'Santo Domingo Ixcatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santo Domingo Ixcatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '511',
			  nombre: 'Santo Domingo Nuxa�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santo Domingo Nuxa�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '512',
			  nombre: 'Santo Domingo Ozolotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santo Domingo Ozolotepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '513',
			  nombre: 'Santo Domingo Petapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santo Domingo Petapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '514',
			  nombre: 'Santo Domingo Roayaga',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santo Domingo Roayaga' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '515',
			  nombre: 'Santo Domingo Tehuantepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santo Domingo Tehuantepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '516',
			  nombre: 'Santo Domingo Teojomulco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santo Domingo Teojomulco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '517',
			  nombre: 'Santo Domingo Tepuxtepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santo Domingo Tepuxtepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '518',
			  nombre: 'Santo Domingo Tlatay�pam',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santo Domingo Tlatay�pam' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '519',
			  nombre: 'Santo Domingo Tomaltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santo Domingo Tomaltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '520',
			  nombre: 'Santo Domingo Tonal�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santo Domingo Tonal�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '521',
			  nombre: 'Santo Domingo Tonaltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santo Domingo Tonaltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '522',
			  nombre: 'Santo Domingo Xagac�a',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santo Domingo Xagac�a' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '523',
			  nombre: 'Santo Domingo Yanhuitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santo Domingo Yanhuitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '524',
			  nombre: 'Santo Domingo Yodohino',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santo Domingo Yodohino' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '525',
			  nombre: 'Santo Domingo Zanatepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santo Domingo Zanatepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '526',
			  nombre: 'Santos Reyes Nopala',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santos Reyes Nopala' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '527',
			  nombre: 'Santos Reyes P�palo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santos Reyes P�palo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '528',
			  nombre: 'Santos Reyes Tepejillo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santos Reyes Tepejillo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '529',
			  nombre: 'Santos Reyes Yucun�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santos Reyes Yucun�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '530',
			  nombre: 'Santo Tom�s Jalieza',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santo Tom�s Jalieza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '531',
			  nombre: 'Santo Tom�s Mazaltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santo Tom�s Mazaltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '532',
			  nombre: 'Santo Tom�s Ocotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santo Tom�s Ocotepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '533',
			  nombre: 'Santo Tom�s Tamazulapan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santo Tom�s Tamazulapan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '534',
			  nombre: 'San Vicente Coatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Vicente Coatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '535',
			  nombre: 'San Vicente Lachix�o',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Vicente Lachix�o' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '536',
			  nombre: 'San Vicente Nu��',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Vicente Nu��' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '537',
			  nombre: 'Silacayo�pam',
			  claveCabecera: '0001',
			  nombreCabecera: 'Silacayo�pam' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '538',
			  nombre: 'Sitio de Xitlapehua',
			  claveCabecera: '0001',
			  nombreCabecera: 'Sitio de Xitlapehua' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '539',
			  nombre: 'Soledad Etla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Soledad Etla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '540',
			  nombre: 'Villa de Tamazul�pam del Progreso',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa de Tamazul�pam del Progreso' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '541',
			  nombre: 'Tanetze de Zaragoza',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tanetze de Zaragoza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '542',
			  nombre: 'Taniche',
			  claveCabecera: '0001',
			  nombreCabecera: 'Taniche' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '543',
			  nombre: 'Tataltepec de Vald�s',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tataltepec de Vald�s' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '544',
			  nombre: 'Teococuilco de Marcos P�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Teococuilco de Marcos P�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '545',
			  nombre: 'Teotitl�n de Flores Mag�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Teotitl�n de Flores Mag�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '546',
			  nombre: 'Teotitl�n del Valle',
			  claveCabecera: '0001',
			  nombreCabecera: 'Teotitl�n del Valle' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '547',
			  nombre: 'Teotongo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Teotongo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '548',
			  nombre: 'Tepelmeme Villa de Morelos',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepelmeme Villa de Morelos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '549',
			  nombre: 'Heroica Villa Tezoatl�n de Segura y Luna, Cuna de la Independencia de Oaxaca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Heroica Villa Tezoatl�n de Segura y Luna, Cuna de la Independencia de Oaxaca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '550',
			  nombre: 'San Jer�nimo Tlacochahuaya',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Jer�nimo Tlacochahuaya' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '551',
			  nombre: 'Tlacolula de Matamoros',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlacolula de Matamoros' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '552',
			  nombre: 'Tlacotepec Plumas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlacotepec Plumas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '553',
			  nombre: 'Tlalixtac de Cabrera',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlalixtac de Cabrera' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '554',
			  nombre: 'Totontepec Villa de Morelos',
			  claveCabecera: '0001',
			  nombreCabecera: 'Totontepec Villa de Morelos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '555',
			  nombre: 'Trinidad Zaachila',
			  claveCabecera: '0001',
			  nombreCabecera: 'Trinidad Zaachila' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '556',
			  nombre: 'La Trinidad Vista Hermosa',
			  claveCabecera: '0001',
			  nombreCabecera: 'La Trinidad Vista Hermosa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '557',
			  nombre: 'Uni�n Hidalgo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Uni�n Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '558',
			  nombre: 'Valerio Trujano',
			  claveCabecera: '0001',
			  nombreCabecera: 'Valerio Trujano' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '559',
			  nombre: 'San Juan Bautista Valle Nacional',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Bautista Valle Nacional' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '560',
			  nombre: 'Villa D�az Ordaz',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa D�az Ordaz' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '561',
			  nombre: 'Yaxe',
			  claveCabecera: '0001',
			  nombreCabecera: 'Yaxe' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '562',
			  nombre: 'Magdalena Yodocono de Porfirio D�az',
			  claveCabecera: '0001',
			  nombreCabecera: 'Magdalena Yodocono de Porfirio D�az' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '563',
			  nombre: 'Yogana',
			  claveCabecera: '0001',
			  nombreCabecera: 'Yogana' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '564',
			  nombre: 'Yutanduchi de Guerrero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Yutanduchi de Guerrero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '565',
			  nombre: 'Villa de Zaachila',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa de Zaachila' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '566',
			  nombre: 'San Mateo Yucutindoo',
			  claveCabecera: '0009',
			  nombreCabecera: 'San Mateo Yucutindoo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '567',
			  nombre: 'Zapotitl�n Lagunas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zapotitl�n Lagunas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '568',
			  nombre: 'Zapotitl�n Palmas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zapotitl�n Palmas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '569',
			  nombre: 'Santa In�s de Zaragoza',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa In�s de Zaragoza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '20',
			  clave: '570',
			  nombre: 'Zimatl�n de �lvarez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zimatl�n de �lvarez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '001',
			  nombre: 'Acajete',
			  claveCabecera: '0001',
			  nombreCabecera: 'Acajete' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '002',
			  nombre: 'Acateno',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Jos� Acateno' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '003',
			  nombre: 'Acatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Acatl�n de Osorio' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '004',
			  nombre: 'Acatzingo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Acatzingo de Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '005',
			  nombre: 'Acteopan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Acteopan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '006',
			  nombre: 'Ahuacatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ahuacatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '007',
			  nombre: 'Ahuatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ahuatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '008',
			  nombre: 'Ahuazotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ahuazotepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '009',
			  nombre: 'Ahuehuetitla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ahuehuetitla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '010',
			  nombre: 'Ajalpan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad de Ajalpan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '011',
			  nombre: 'Albino Zertuche',
			  claveCabecera: '0001',
			  nombreCabecera: 'Acaxtlahuac�n de Albino Zertuche' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '012',
			  nombre: 'Aljojuca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Aljojuca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '013',
			  nombre: 'Altepexi',
			  claveCabecera: '0001',
			  nombreCabecera: 'Altepexi' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '014',
			  nombre: 'Amixtl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Amixtl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '015',
			  nombre: 'Amozoc',
			  claveCabecera: '0001',
			  nombreCabecera: 'Amozoc de Mota' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '016',
			  nombre: 'Aquixtla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Aquixtla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '017',
			  nombre: 'Atempan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atempan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '018',
			  nombre: 'Atexcal',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Mart�n Atexcal' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '019',
			  nombre: 'Atlixco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atlixco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '020',
			  nombre: 'Atoyatempan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atoyatempan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '021',
			  nombre: 'Atzala',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atzala' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '022',
			  nombre: 'Atzitzihuac�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Atzitzihuac�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '023',
			  nombre: 'Atzitzintla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atzitzintla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '024',
			  nombre: 'Axutla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Axutla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '025',
			  nombre: 'Ayotoxco de Guerrero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ayotoxco de Guerrero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '026',
			  nombre: 'Calpan',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Andr�s Calpan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '027',
			  nombre: 'Caltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Caltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '028',
			  nombre: 'Camocuautla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Camocuautla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '029',
			  nombre: 'Caxhuacan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Caxhuacan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '030',
			  nombre: 'Coatepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Coatepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '031',
			  nombre: 'Coatzingo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Coatzingo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '032',
			  nombre: 'Cohetzala',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Cohetzala' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '033',
			  nombre: 'Cohuecan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cohuecan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '034',
			  nombre: 'Coronango',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Coronango' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '035',
			  nombre: 'Coxcatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Coxcatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '036',
			  nombre: 'Coyomeapan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a Coyomeapan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '037',
			  nombre: 'Coyotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Vicente Coyotepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '038',
			  nombre: 'Cuapiaxtla de Madero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cuapiaxtla de Madero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '039',
			  nombre: 'Cuautempan',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Esteban Cuautempan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '040',
			  nombre: 'Cuautinch�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cuautinch�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '041',
			  nombre: 'Cuautlancingo',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Cuautlancingo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '042',
			  nombre: 'Cuayuca de Andrade',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Cuayuca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '043',
			  nombre: 'Cuetzalan del Progreso',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad de Cuetzalan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '044',
			  nombre: 'Cuyoaco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cuyoaco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '045',
			  nombre: 'Chalchicomula de Sesma',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad Serd�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '046',
			  nombre: 'Chapulco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chapulco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '047',
			  nombre: 'Chiautla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad de Chiautla de Tapia' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '048',
			  nombre: 'Chiautzingo',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Lorenzo Chiautzingo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '049',
			  nombre: 'Chiconcuautla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chiconcuautla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '050',
			  nombre: 'Chichiquila',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chichiquila' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '051',
			  nombre: 'Chietla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chietla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '052',
			  nombre: 'Chigmecatitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chigmecatitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '053',
			  nombre: 'Chignahuapan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad de Chignahuapan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '054',
			  nombre: 'Chignautla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chignautla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '055',
			  nombre: 'Chila',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chila' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '056',
			  nombre: 'Chila de la Sal',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chila de la Sal' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '057',
			  nombre: 'Honey',
			  claveCabecera: '0001',
			  nombreCabecera: 'Honey' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '058',
			  nombre: 'Chilchotla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Rafael J. Garc�a' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '059',
			  nombre: 'Chinantla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chinantla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '060',
			  nombre: 'Domingo Arenas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Domingo Arenas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '061',
			  nombre: 'Eloxochitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Eloxochitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '062',
			  nombre: 'Epatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Epatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '063',
			  nombre: 'Esperanza',
			  claveCabecera: '0001',
			  nombreCabecera: 'Esperanza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '064',
			  nombre: 'Francisco Z. Mena',
			  claveCabecera: '0001',
			  nombreCabecera: 'Metlaltoyuca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '065',
			  nombre: 'General Felipe �ngeles',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pablo de las Tunas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '066',
			  nombre: 'Guadalupe',
			  claveCabecera: '0001',
			  nombreCabecera: 'Guadalupe' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '067',
			  nombre: 'Guadalupe Victoria',
			  claveCabecera: '0001',
			  nombreCabecera: 'Guadalupe Victoria' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '068',
			  nombre: 'Hermenegildo Galeana',
			  claveCabecera: '0001',
			  nombreCabecera: 'Bienvenido' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '069',
			  nombre: 'Huaquechula',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huaquechula' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '070',
			  nombre: 'Huatlatlauca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huatlatlauca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '071',
			  nombre: 'Huauchinango',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huauchinango' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '072',
			  nombre: 'Huehuetla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huehuetla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '073',
			  nombre: 'Huehuetl�n el Chico',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huehuetl�n el Chico' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '074',
			  nombre: 'Huejotzingo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huejotzingo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '075',
			  nombre: 'Hueyapan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Hueyapan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '076',
			  nombre: 'Hueytamalco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Hueytamalco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '077',
			  nombre: 'Hueytlalpan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Hueytlalpan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '078',
			  nombre: 'Huitzilan de Serd�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huitzilan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '079',
			  nombre: 'Huitziltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Clara Huitziltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '080',
			  nombre: 'Atlequizayan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atlequizayan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '081',
			  nombre: 'Ixcamilpa de Guerrero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ixcamilpa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '082',
			  nombre: 'Ixcaquixtla',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Ixcaquixtla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '083',
			  nombre: 'Ixtacamaxtitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ixtacamaxtitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '084',
			  nombre: 'Ixtepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ixtepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '085',
			  nombre: 'Iz�car de Matamoros',
			  claveCabecera: '0001',
			  nombreCabecera: 'Iz�car de Matamoros' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '086',
			  nombre: 'Jalpan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jalpan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '087',
			  nombre: 'Jolalpan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jolalpan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '088',
			  nombre: 'Jonotla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jonotla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '089',
			  nombre: 'Jopala',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jopala' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '090',
			  nombre: 'Juan C. Bonilla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cuanal�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '091',
			  nombre: 'Juan Galindo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nuevo Necaxa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '092',
			  nombre: 'Juan N. M�ndez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atenayuca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '093',
			  nombre: 'Lafragua',
			  claveCabecera: '0001',
			  nombreCabecera: 'Saltillo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '094',
			  nombre: 'Libres',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad de Libres' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '095',
			  nombre: 'La Magdalena Tlatlauquitepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'La Magdalena Tlatlauquitepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '096',
			  nombre: 'Mazapiltepec de Ju�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mazapiltepec de Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '097',
			  nombre: 'Mixtla',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Francisco Mixtla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '098',
			  nombre: 'Molcaxac',
			  claveCabecera: '0001',
			  nombreCabecera: 'Molcaxac' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '099',
			  nombre: 'Ca�ada Morelos',
			  claveCabecera: '0001',
			  nombreCabecera: 'Morelos Ca�ada' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '100',
			  nombre: 'Naupan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Naupan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '101',
			  nombre: 'Nauzontla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nauzontla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '102',
			  nombre: 'Nealtican',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Buenaventura Nealtican' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '103',
			  nombre: 'Nicol�s Bravo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nicol�s Bravo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '104',
			  nombre: 'Nopalucan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nopalucan de la Granja' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '105',
			  nombre: 'Ocotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ocotepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '106',
			  nombre: 'Ocoyucan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Clara Ocoyucan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '107',
			  nombre: 'Olintla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Olintla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '108',
			  nombre: 'Oriental',
			  claveCabecera: '0001',
			  nombreCabecera: 'Oriental' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '109',
			  nombre: 'Pahuatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad de Pahuatl�n de Valle' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '110',
			  nombre: 'Palmar de Bravo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Palmar de Bravo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '111',
			  nombre: 'Pantepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Pantepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '112',
			  nombre: 'Petlalcingo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Petlalcingo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '113',
			  nombre: 'Piaxtla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Piaxtla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '114',
			  nombre: 'Puebla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Her�ica Puebla de Zaragoza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '115',
			  nombre: 'Quecholac',
			  claveCabecera: '0001',
			  nombreCabecera: 'Quecholac' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '116',
			  nombre: 'Quimixtl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Quimixtl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '117',
			  nombre: 'Rafael Lara Grajales',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad de Rafael Lara Grajales' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '118',
			  nombre: 'Los Reyes de Ju�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Los Reyes de Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '119',
			  nombre: 'San Andr�s Cholula',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Andr�s Cholula' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '120',
			  nombre: 'San Antonio Ca�ada',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Antonio Ca�ada' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '121',
			  nombre: 'San Diego la Mesa Tochimiltzingo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tochimiltzingo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '122',
			  nombre: 'San Felipe Teotlalcingo',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Felipe Teotlalcingo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '123',
			  nombre: 'San Felipe Tepatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Felipe Tepatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '124',
			  nombre: 'San Gabriel Chilac',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Gabriel Chilac' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '125',
			  nombre: 'San Gregorio Atzompa',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Gregorio Atzompa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '126',
			  nombre: 'San Jer�nimo Tecuanipan',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Jer�nimo Tecuanipan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '127',
			  nombre: 'San Jer�nimo Xayacatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Jer�nimo Xayacatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '128',
			  nombre: 'San Jos� Chiapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Jos� Chiapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '129',
			  nombre: 'San Jos� Miahuatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Jos� Miahuatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '130',
			  nombre: 'San Juan Atenco',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Atenco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '131',
			  nombre: 'San Juan Atzompa',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Atzompa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '132',
			  nombre: 'San Mart�n Texmelucan',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Mart�n Texmelucan de Labastida' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '133',
			  nombre: 'San Mart�n Totoltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Mart�n Totoltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '134',
			  nombre: 'San Mat�as Tlalancaleca',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Mat�as Tlalancaleca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '135',
			  nombre: 'San Miguel Ixitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel Ixitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '136',
			  nombre: 'San Miguel Xoxtla',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel Xoxtla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '137',
			  nombre: 'San Nicol�s Buenos Aires',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Nicol�s Buenos Aires' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '138',
			  nombre: 'San Nicol�s de los Ranchos',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Nicol�s de los Ranchos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '139',
			  nombre: 'San Pablo Anicano',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pablo Anicano' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '140',
			  nombre: 'San Pedro Cholula',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cholula de Rivadavia' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '141',
			  nombre: 'San Pedro Yeloixtlahuaca',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Yeloixtlahuaca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '142',
			  nombre: 'San Salvador el Seco',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Salvador el Seco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '143',
			  nombre: 'San Salvador el Verde',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Salvador el Verde' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '144',
			  nombre: 'San Salvador Huixcolotla',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Salvador Huixcolotla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '145',
			  nombre: 'San Sebasti�n Tlacotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlacotepec de Porfirio D�az' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '146',
			  nombre: 'Santa Catarina Tlaltempan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Catarina Tlaltempan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '147',
			  nombre: 'Santa In�s Ahuatempan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa In�s Ahuatempan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '148',
			  nombre: 'Santa Isabel Cholula',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Isabel Cholula' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '149',
			  nombre: 'Santiago Miahuatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Miahuatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '150',
			  nombre: 'Huehuetl�n el Grande',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santo Domingo Huehuetl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '151',
			  nombre: 'Santo Tom�s Hueyotlipan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santo Tom�s Hueyotlipan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '152',
			  nombre: 'Soltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Soltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '153',
			  nombre: 'Tecali de Herrera',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tecali de Herrera' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '154',
			  nombre: 'Tecamachalco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tecamachalco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '155',
			  nombre: 'Tecomatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tecomatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '156',
			  nombre: 'Tehuac�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tehuac�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '157',
			  nombre: 'Tehuitzingo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tehuitzingo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '158',
			  nombre: 'Tenampulco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tenampulco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '159',
			  nombre: 'Teopantl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Teopantl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '160',
			  nombre: 'Teotlalco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Teotlalco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '161',
			  nombre: 'Tepanco de L�pez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepanco de L�pez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '162',
			  nombre: 'Tepango de Rodr�guez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepango de Rodr�guez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '163',
			  nombre: 'Tepatlaxco de Hidalgo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepatlaxco de Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '164',
			  nombre: 'Tepeaca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepeaca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '165',
			  nombre: 'Tepemaxalco',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Felipe Tepemaxalco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '166',
			  nombre: 'Tepeojuma',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepeojuma' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '167',
			  nombre: 'Tepetzintla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepetzintla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '168',
			  nombre: 'Tepexco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepexco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '169',
			  nombre: 'Tepexi de Rodr�guez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepexi de Rodr�guez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '170',
			  nombre: 'Tepeyahualco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepeyahualco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '171',
			  nombre: 'Tepeyahualco de Cuauht�moc',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepeyahualco de Cuauht�moc' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '172',
			  nombre: 'Tetela de Ocampo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad de Tetela de Ocampo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '173',
			  nombre: 'Teteles de Avila Castillo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Teteles de Avila Castillo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '174',
			  nombre: 'Teziutl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Teziutl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '175',
			  nombre: 'Tianguismanalco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tianguismanalco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '176',
			  nombre: 'Tilapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tilapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '177',
			  nombre: 'Tlacotepec de Benito Ju�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlacotepec de Benito Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '178',
			  nombre: 'Tlacuilotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlacuilotepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '179',
			  nombre: 'Tlachichuca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlachichuca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '180',
			  nombre: 'Tlahuapan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Rita Tlahuapan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '181',
			  nombre: 'Tlaltenango',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlaltenango' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '182',
			  nombre: 'Tlanepantla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlanepantla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '183',
			  nombre: 'Tlaola',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlaola' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '184',
			  nombre: 'Tlapacoya',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlapacoya' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '185',
			  nombre: 'Tlapanal�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlapanal�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '186',
			  nombre: 'Tlatlauquitepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad de Tlatlauquitepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '187',
			  nombre: 'Tlaxco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlaxco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '188',
			  nombre: 'Tochimilco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tochimilco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '189',
			  nombre: 'Tochtepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tochtepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '190',
			  nombre: 'Totoltepec de Guerrero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Totoltepec de Guerrero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '191',
			  nombre: 'Tulcingo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tulcingo de Valle' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '192',
			  nombre: 'Tuzamapan de Galeana',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tuzamapan de Galeana' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '193',
			  nombre: 'Tzicatlacoyan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tzicatlacoyan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '194',
			  nombre: 'Venustiano Carranza',
			  claveCabecera: '0001',
			  nombreCabecera: 'Venustiano Carranza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '195',
			  nombre: 'Vicente Guerrero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a del Monte' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '196',
			  nombre: 'Xayacatl�n de Bravo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Xayacatl�n de Bravo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '197',
			  nombre: 'Xicotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Xicotepec de Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '198',
			  nombre: 'Xicotl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Xicotl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '199',
			  nombre: 'Xiutetelco',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Xiutetelco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '200',
			  nombre: 'Xochiapulco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cinco de Mayo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '201',
			  nombre: 'Xochiltepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Xochiltepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '202',
			  nombre: 'Xochitl�n de Vicente Su�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Xochitl�n de Vicente Su�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '203',
			  nombre: 'Xochitl�n Todos Santos',
			  claveCabecera: '0001',
			  nombreCabecera: 'Xochitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '204',
			  nombre: 'Yaon�huac',
			  claveCabecera: '0001',
			  nombreCabecera: 'Yaon�huac' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '205',
			  nombre: 'Yehualtepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Yehualtepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '206',
			  nombre: 'Zacapala',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zacapala' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '207',
			  nombre: 'Zacapoaxtla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zacapoaxtla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '208',
			  nombre: 'Zacatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zacatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '209',
			  nombre: 'Zapotitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zapotitl�n Salinas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '210',
			  nombre: 'Zapotitl�n de M�ndez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zapotitl�n de M�ndez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '211',
			  nombre: 'Zaragoza',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zaragoza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '212',
			  nombre: 'Zautla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Zautla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '213',
			  nombre: 'Zihuateutla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zihuateutla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '214',
			  nombre: 'Zinacatepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Sebasti�n Zinacatepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '215',
			  nombre: 'Zongozotla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zongozotla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '216',
			  nombre: 'Zoquiapan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zoquiapan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '21',
			  clave: '217',
			  nombre: 'Zoquitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zoquitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '22',
			  clave: '001',
			  nombre: 'Amealco de Bonfil',
			  claveCabecera: '0001',
			  nombreCabecera: 'Amealco de Bonfil' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '22',
			  clave: '002',
			  nombre: 'Pinal de Amoles',
			  claveCabecera: '0001',
			  nombreCabecera: 'Pinal de Amoles' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '22',
			  clave: '003',
			  nombre: 'Arroyo Seco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Arroyo Seco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '22',
			  clave: '004',
			  nombre: 'Cadereyta de Montes',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cadereyta de Montes' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '22',
			  clave: '005',
			  nombre: 'Col�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Col�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '22',
			  clave: '006',
			  nombre: 'Corregidora',
			  claveCabecera: '0001',
			  nombreCabecera: 'El Pueblito' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '22',
			  clave: '007',
			  nombre: 'Ezequiel Montes',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ezequiel Montes' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '22',
			  clave: '008',
			  nombre: 'Huimilpan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huimilpan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '22',
			  clave: '009',
			  nombre: 'Jalpan de Serra',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jalpan de Serra' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '22',
			  clave: '010',
			  nombre: 'Landa de Matamoros',
			  claveCabecera: '0001',
			  nombreCabecera: 'Landa de Matamoros' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '22',
			  clave: '011',
			  nombre: 'El Marqu�s',
			  claveCabecera: '0001',
			  nombreCabecera: 'La Ca�ada' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '22',
			  clave: '012',
			  nombre: 'Pedro Escobedo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Pedro Escobedo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '22',
			  clave: '013',
			  nombre: 'Pe�amiller',
			  claveCabecera: '0001',
			  nombreCabecera: 'Pe�amiller' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '22',
			  clave: '014',
			  nombre: 'Quer�taro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago de Quer�taro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '22',
			  clave: '015',
			  nombre: 'San Joaqu�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Joaqu�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '22',
			  clave: '016',
			  nombre: 'San Juan del R�o',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan del R�o' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '22',
			  clave: '017',
			  nombre: 'Tequisquiapan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tequisquiapan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '22',
			  clave: '018',
			  nombre: 'Tolim�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tolim�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '23',
			  clave: '001',
			  nombre: 'Cozumel',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cozumel' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '23',
			  clave: '002',
			  nombre: 'Felipe Carrillo Puerto',
			  claveCabecera: '0001',
			  nombreCabecera: 'Felipe Carrillo Puerto' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '23',
			  clave: '003',
			  nombre: 'Isla Mujeres',
			  claveCabecera: '0001',
			  nombreCabecera: 'Isla Mujeres' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '23',
			  clave: '004',
			  nombre: 'Oth�n P. Blanco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chetumal' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '23',
			  clave: '005',
			  nombre: 'Benito Ju�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Canc�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '23',
			  clave: '006',
			  nombre: 'Jos� Mar�a Morelos',
			  claveCabecera: '0069',
			  nombreCabecera: 'Jos� Mar�a Morelos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '23',
			  clave: '007',
			  nombre: 'L�zaro C�rdenas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Kantunilk�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '23',
			  clave: '008',
			  nombre: 'Solidaridad',
			  claveCabecera: '0001',
			  nombreCabecera: 'Playa del Carmen' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '23',
			  clave: '009',
			  nombre: 'Tulum',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tulum' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '23',
			  clave: '010',
			  nombre: 'Bacalar',
			  claveCabecera: '0001',
			  nombreCabecera: 'Bacalar' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '001',
			  nombre: 'Ahualulco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ahualulco del Sonido 13' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '002',
			  nombre: 'Alaquines',
			  claveCabecera: '0001',
			  nombreCabecera: 'Alaquines' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '003',
			  nombre: 'Aquism�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Aquism�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '004',
			  nombre: 'Armadillo de los Infante',
			  claveCabecera: '0001',
			  nombreCabecera: 'Armadillo de los Infante' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '005',
			  nombre: 'C�rdenas',
			  claveCabecera: '0001',
			  nombreCabecera: 'C�rdenas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '006',
			  nombre: 'Catorce',
			  claveCabecera: '0001',
			  nombreCabecera: 'Real de Catorce' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '007',
			  nombre: 'Cedral',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cedral' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '008',
			  nombre: 'Cerritos',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cerritos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '009',
			  nombre: 'Cerro de San Pedro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cerro de San Pedro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '010',
			  nombre: 'Ciudad del Ma�z',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad del Ma�z' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '011',
			  nombre: 'Ciudad Fern�ndez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad Fern�ndez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '012',
			  nombre: 'Tancanhuitz',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tancanhuitz' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '013',
			  nombre: 'Ciudad Valles',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad Valles' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '014',
			  nombre: 'Coxcatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Coxcatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '015',
			  nombre: 'Charcas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Charcas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '016',
			  nombre: 'Ebano',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ebano' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '017',
			  nombre: 'Guadalc�zar',
			  claveCabecera: '0001',
			  nombreCabecera: 'Guadalc�zar' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '018',
			  nombre: 'Huehuetl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huehuetl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '019',
			  nombre: 'Lagunillas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Lagunillas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '020',
			  nombre: 'Matehuala',
			  claveCabecera: '0001',
			  nombreCabecera: 'Matehuala' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '021',
			  nombre: 'Mexquitic de Carmona',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mexquitic de Carmona' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '022',
			  nombre: 'Moctezuma',
			  claveCabecera: '0001',
			  nombreCabecera: 'Moctezuma' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '023',
			  nombre: 'Ray�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ray�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '024',
			  nombre: 'Rioverde',
			  claveCabecera: '0001',
			  nombreCabecera: 'Rioverde' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '025',
			  nombre: 'Salinas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Salinas de Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '026',
			  nombre: 'San Antonio',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Antonio' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '027',
			  nombre: 'San Ciro de Acosta',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Ciro de Acosta' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '028',
			  nombre: 'San Luis Potos�',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Luis Potos�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '029',
			  nombre: 'San Mart�n Chalchicuautla',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Mart�n Chalchicuautla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '030',
			  nombre: 'San Nicol�s Tolentino',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Nicol�s Tolentino' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '031',
			  nombre: 'Santa Catarina',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Catarina' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '032',
			  nombre: 'Santa Mar�a del R�o',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a del R�o' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '033',
			  nombre: 'Santo Domingo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santo Domingo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '034',
			  nombre: 'San Vicente Tancuayalab',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Vicente Tancuayalab' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '035',
			  nombre: 'Soledad de Graciano S�nchez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Soledad de Graciano S�nchez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '036',
			  nombre: 'Tamasopo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tamasopo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '037',
			  nombre: 'Tamazunchale',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tamazunchale' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '038',
			  nombre: 'Tampac�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tampac�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '039',
			  nombre: 'Tampamol�n Corona',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tampamol�n Corona' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '040',
			  nombre: 'Tamu�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tamu�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '041',
			  nombre: 'Tanlaj�s',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tanlaj�s' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '042',
			  nombre: 'Tanqui�n de Escobedo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tanqui�n de Escobedo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '043',
			  nombre: 'Tierra Nueva',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tierra Nueva' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '044',
			  nombre: 'Vanegas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Vanegas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '045',
			  nombre: 'Venado',
			  claveCabecera: '0001',
			  nombreCabecera: 'Venado' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '046',
			  nombre: 'Villa de Arriaga',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa de Arriaga' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '047',
			  nombre: 'Villa de Guadalupe',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa de Guadalupe' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '048',
			  nombre: 'Villa de la Paz',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa de la Paz' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '049',
			  nombre: 'Villa de Ramos',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa de Ramos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '050',
			  nombre: 'Villa de Reyes',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa de Reyes' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '051',
			  nombre: 'Villa Hidalgo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '052',
			  nombre: 'Villa Ju�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '053',
			  nombre: 'Axtla de Terrazas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Axtla de Terrazas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '054',
			  nombre: 'Xilitla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Xilitla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '055',
			  nombre: 'Zaragoza',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa de Zaragoza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '056',
			  nombre: 'Villa de Arista',
			  claveCabecera: '0002',
			  nombreCabecera: 'Villa de Arista' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '057',
			  nombre: 'Matlapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Matlapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '24',
			  clave: '058',
			  nombre: 'El Naranjo',
			  claveCabecera: '0001',
			  nombreCabecera: 'El Naranjo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '25',
			  clave: '001',
			  nombre: 'Ahome',
			  claveCabecera: '0001',
			  nombreCabecera: 'Los Mochis' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '25',
			  clave: '002',
			  nombre: 'Angostura',
			  claveCabecera: '0001',
			  nombreCabecera: 'Angostura' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '25',
			  clave: '003',
			  nombre: 'Badiraguato',
			  claveCabecera: '0001',
			  nombreCabecera: 'Badiraguato' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '25',
			  clave: '004',
			  nombre: 'Concordia',
			  claveCabecera: '0001',
			  nombreCabecera: 'Concordia' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '25',
			  clave: '005',
			  nombre: 'Cosal�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cosal�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '25',
			  clave: '006',
			  nombre: 'Culiac�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Culiac�n Rosales' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '25',
			  clave: '007',
			  nombre: 'Choix',
			  claveCabecera: '0001',
			  nombreCabecera: 'Choix' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '25',
			  clave: '008',
			  nombre: 'Elota',
			  claveCabecera: '0001',
			  nombreCabecera: 'La Cruz' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '25',
			  clave: '009',
			  nombre: 'Escuinapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Escuinapa de Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '25',
			  clave: '010',
			  nombre: 'El Fuerte',
			  claveCabecera: '0001',
			  nombreCabecera: 'El Fuerte' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '25',
			  clave: '011',
			  nombre: 'Guasave',
			  claveCabecera: '0001',
			  nombreCabecera: 'Guasave' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '25',
			  clave: '012',
			  nombre: 'Mazatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mazatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '25',
			  clave: '013',
			  nombre: 'Mocorito',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mocorito' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '25',
			  clave: '014',
			  nombre: 'Rosario',
			  claveCabecera: '0001',
			  nombreCabecera: 'El Rosario' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '25',
			  clave: '015',
			  nombre: 'Salvador Alvarado',
			  claveCabecera: '0001',
			  nombreCabecera: 'Guam�chil' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '25',
			  clave: '016',
			  nombre: 'San Ignacio',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Ignacio' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '25',
			  clave: '017',
			  nombre: 'Sinaloa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Sinaloa de Leyva' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '25',
			  clave: '018',
			  nombre: 'Navolato',
			  claveCabecera: '0001',
			  nombreCabecera: 'Navolato' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '001',
			  nombre: 'Aconchi',
			  claveCabecera: '0001',
			  nombreCabecera: 'Aconchi' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '002',
			  nombre: 'Agua Prieta',
			  claveCabecera: '0001',
			  nombreCabecera: 'Agua Prieta' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '003',
			  nombre: 'Alamos',
			  claveCabecera: '0001',
			  nombreCabecera: 'Alamos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '004',
			  nombre: 'Altar',
			  claveCabecera: '0001',
			  nombreCabecera: 'Altar' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '005',
			  nombre: 'Arivechi',
			  claveCabecera: '0001',
			  nombreCabecera: 'Arivechi' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '006',
			  nombre: 'Arizpe',
			  claveCabecera: '0001',
			  nombreCabecera: 'Arizpe' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '007',
			  nombre: 'Atil',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atil' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '008',
			  nombre: 'Bacad�huachi',
			  claveCabecera: '0001',
			  nombreCabecera: 'Bacad�huachi' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '009',
			  nombre: 'Bacanora',
			  claveCabecera: '0001',
			  nombreCabecera: 'Bacanora' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '010',
			  nombre: 'Bacerac',
			  claveCabecera: '0001',
			  nombreCabecera: 'Bacerac' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '011',
			  nombre: 'Bacoachi',
			  claveCabecera: '0001',
			  nombreCabecera: 'Bacoachi' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '012',
			  nombre: 'B�cum',
			  claveCabecera: '0001',
			  nombreCabecera: 'B�cum' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '013',
			  nombre: 'Ban�michi',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ban�michi' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '014',
			  nombre: 'Bavi�cora',
			  claveCabecera: '0001',
			  nombreCabecera: 'Bavi�cora' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '015',
			  nombre: 'Bavispe',
			  claveCabecera: '0001',
			  nombreCabecera: 'Bavispe' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '016',
			  nombre: 'Benjam�n Hill',
			  claveCabecera: '0001',
			  nombreCabecera: 'Benjam�n Hill' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '017',
			  nombre: 'Caborca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Heroica Caborca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '018',
			  nombre: 'Cajeme',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad Obreg�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '019',
			  nombre: 'Cananea',
			  claveCabecera: '0001',
			  nombreCabecera: 'Heroica Ciudad de Cananea' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '020',
			  nombre: 'Carb�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Carb�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '021',
			  nombre: 'La Colorada',
			  claveCabecera: '0001',
			  nombreCabecera: 'La Colorada' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '022',
			  nombre: 'Cucurpe',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cucurpe' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '023',
			  nombre: 'Cumpas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cumpas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '024',
			  nombre: 'Divisaderos',
			  claveCabecera: '0001',
			  nombreCabecera: 'Divisaderos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '025',
			  nombre: 'Empalme',
			  claveCabecera: '0001',
			  nombreCabecera: 'Empalme' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '026',
			  nombre: 'Etchojoa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Etchojoa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '027',
			  nombre: 'Fronteras',
			  claveCabecera: '0001',
			  nombreCabecera: 'Fronteras' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '028',
			  nombre: 'Granados',
			  claveCabecera: '0001',
			  nombreCabecera: 'Granados' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '029',
			  nombre: 'Guaymas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Heroica Guaymas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '030',
			  nombre: 'Hermosillo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Hermosillo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '031',
			  nombre: 'Huachinera',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huachinera' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '032',
			  nombre: 'Hu�sabas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Hu�sabas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '033',
			  nombre: 'Huatabampo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huatabampo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '034',
			  nombre: 'Hu�pac',
			  claveCabecera: '0001',
			  nombreCabecera: 'Hu�pac' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '035',
			  nombre: 'Imuris',
			  claveCabecera: '0001',
			  nombreCabecera: 'Imuris' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '036',
			  nombre: 'Magdalena',
			  claveCabecera: '0001',
			  nombreCabecera: 'Magdalena de Kino' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '037',
			  nombre: 'Mazat�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mazat�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '038',
			  nombre: 'Moctezuma',
			  claveCabecera: '0001',
			  nombreCabecera: 'Moctezuma' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '039',
			  nombre: 'Naco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Naco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '040',
			  nombre: 'N�cori Chico',
			  claveCabecera: '0001',
			  nombreCabecera: 'N�cori Chico' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '041',
			  nombre: 'Nacozari de Garc�a',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nacozari de Garc�a' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '042',
			  nombre: 'Navojoa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Navojoa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '043',
			  nombre: 'Nogales',
			  claveCabecera: '0001',
			  nombreCabecera: 'Heroica Nogales' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '044',
			  nombre: 'Onavas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Onavas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '045',
			  nombre: 'Opodepe',
			  claveCabecera: '0001',
			  nombreCabecera: 'Opodepe' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '046',
			  nombre: 'Oquitoa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Oquitoa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '047',
			  nombre: 'Pitiquito',
			  claveCabecera: '0001',
			  nombreCabecera: 'Pitiquito' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '048',
			  nombre: 'Puerto Pe�asco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Puerto Pe�asco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '049',
			  nombre: 'Quiriego',
			  claveCabecera: '0001',
			  nombreCabecera: 'Quiriego' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '050',
			  nombre: 'Ray�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ray�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '051',
			  nombre: 'Rosario',
			  claveCabecera: '0001',
			  nombreCabecera: 'Rosario' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '052',
			  nombre: 'Sahuaripa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Sahuaripa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '053',
			  nombre: 'San Felipe de Jes�s',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Felipe de Jes�s' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '054',
			  nombre: 'San Javier',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Javier' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '055',
			  nombre: 'San Luis R�o Colorado',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Luis R�o Colorado' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '056',
			  nombre: 'San Miguel de Horcasitas',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Miguel de Horcasitas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '057',
			  nombre: 'San Pedro de la Cueva',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro de la Cueva' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '058',
			  nombre: 'Santa Ana',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Ana' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '059',
			  nombre: 'Santa Cruz',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Cruz' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '060',
			  nombre: 'S�ric',
			  claveCabecera: '0001',
			  nombreCabecera: 'S�ric' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '061',
			  nombre: 'Soyopa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Soyopa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '062',
			  nombre: 'Suaqui Grande',
			  claveCabecera: '0001',
			  nombreCabecera: 'Suaqui Grande' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '063',
			  nombre: 'Tepache',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepache' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '064',
			  nombre: 'Trincheras',
			  claveCabecera: '0001',
			  nombreCabecera: 'Trincheras' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '065',
			  nombre: 'Tubutama',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tubutama' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '066',
			  nombre: 'Ures',
			  claveCabecera: '0001',
			  nombreCabecera: 'Heroica Ciudad de Ures' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '067',
			  nombre: 'Villa Hidalgo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '068',
			  nombre: 'Villa Pesqueira',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Pesqueira (M�tape)' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '069',
			  nombre: 'Y�cora',
			  claveCabecera: '0001',
			  nombreCabecera: 'Y�cora' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '070',
			  nombre: 'General Plutarco El�as Calles',
			  claveCabecera: '0001',
			  nombreCabecera: 'Sonoita' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '071',
			  nombre: 'Benito Ju�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '26',
			  clave: '072',
			  nombre: 'San Ignacio R�o Muerto',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Ignacio R�o Muerto' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '27',
			  clave: '001',
			  nombre: 'Balanc�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Balanc�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '27',
			  clave: '002',
			  nombre: 'C�rdenas',
			  claveCabecera: '0001',
			  nombreCabecera: 'C�rdenas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '27',
			  clave: '003',
			  nombre: 'Centla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Frontera' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '27',
			  clave: '004',
			  nombre: 'Centro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villahermosa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '27',
			  clave: '005',
			  nombre: 'Comalcalco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Comalcalco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '27',
			  clave: '006',
			  nombre: 'Cunduac�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cunduac�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '27',
			  clave: '007',
			  nombre: 'Emiliano Zapata',
			  claveCabecera: '0001',
			  nombreCabecera: 'Emiliano Zapata' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '27',
			  clave: '008',
			  nombre: 'Huimanguillo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huimanguillo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '27',
			  clave: '009',
			  nombre: 'Jalapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jalapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '27',
			  clave: '010',
			  nombre: 'Jalpa de M�ndez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jalpa de M�ndez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '27',
			  clave: '011',
			  nombre: 'Jonuta',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jonuta' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '27',
			  clave: '012',
			  nombre: 'Macuspana',
			  claveCabecera: '0001',
			  nombreCabecera: 'Macuspana' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '27',
			  clave: '013',
			  nombre: 'Nacajuca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nacajuca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '27',
			  clave: '014',
			  nombre: 'Para�so',
			  claveCabecera: '0001',
			  nombreCabecera: 'Para�so' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '27',
			  clave: '015',
			  nombre: 'Tacotalpa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tacotalpa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '27',
			  clave: '016',
			  nombre: 'Teapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Teapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '27',
			  clave: '017',
			  nombre: 'Tenosique',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tenosique de Pino Su�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '001',
			  nombre: 'Abasolo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Abasolo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '002',
			  nombre: 'Aldama',
			  claveCabecera: '0001',
			  nombreCabecera: 'Aldama' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '003',
			  nombre: 'Altamira',
			  claveCabecera: '0001',
			  nombreCabecera: 'Altamira' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '004',
			  nombre: 'Antiguo Morelos',
			  claveCabecera: '0001',
			  nombreCabecera: 'Antiguo Morelos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '005',
			  nombre: 'Burgos',
			  claveCabecera: '0001',
			  nombreCabecera: 'Burgos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '006',
			  nombre: 'Bustamante',
			  claveCabecera: '0001',
			  nombreCabecera: 'Bustamante' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '007',
			  nombre: 'Camargo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad Camargo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '008',
			  nombre: 'Casas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Casas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '009',
			  nombre: 'Ciudad Madero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad Madero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '010',
			  nombre: 'Cruillas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cruillas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '011',
			  nombre: 'G�mez Far�as',
			  claveCabecera: '0036',
			  nombreCabecera: 'G�mez Far�as' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '012',
			  nombre: 'Gonz�lez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Gonz�lez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '013',
			  nombre: 'G��mez',
			  claveCabecera: '0001',
			  nombreCabecera: 'G��mez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '014',
			  nombre: 'Guerrero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nueva Ciudad Guerrero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '015',
			  nombre: 'Gustavo D�az Ordaz',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad Gustavo D�az Ordaz' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '016',
			  nombre: 'Hidalgo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '017',
			  nombre: 'Jaumave',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jaumave' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '018',
			  nombre: 'Jim�nez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santander Jim�nez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '019',
			  nombre: 'Llera',
			  claveCabecera: '0001',
			  nombreCabecera: 'Llera de Canales' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '020',
			  nombre: 'Mainero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Mainero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '021',
			  nombre: 'El Mante',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad Mante' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '022',
			  nombre: 'Matamoros',
			  claveCabecera: '0001',
			  nombreCabecera: 'Heroica Matamoros' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '023',
			  nombre: 'M�ndez',
			  claveCabecera: '0001',
			  nombreCabecera: 'M�ndez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '024',
			  nombre: 'Mier',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mier' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '025',
			  nombre: 'Miguel Alem�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad Miguel Alem�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '026',
			  nombre: 'Miquihuana',
			  claveCabecera: '0001',
			  nombreCabecera: 'Miquihuana' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '027',
			  nombre: 'Nuevo Laredo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nuevo Laredo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '028',
			  nombre: 'Nuevo Morelos',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nuevo Morelos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '029',
			  nombre: 'Ocampo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ocampo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '030',
			  nombre: 'Padilla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nueva Villa de Padilla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '031',
			  nombre: 'Palmillas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Palmillas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '032',
			  nombre: 'Reynosa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Reynosa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '033',
			  nombre: 'R�o Bravo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad R�o Bravo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '034',
			  nombre: 'San Carlos',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Carlos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '035',
			  nombre: 'San Fernando',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Fernando' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '036',
			  nombre: 'San Nicol�s',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Nicol�s' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '037',
			  nombre: 'Soto la Marina',
			  claveCabecera: '0001',
			  nombreCabecera: 'Soto la Marina' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '038',
			  nombre: 'Tampico',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tampico' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '039',
			  nombre: 'Tula',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad Tula' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '040',
			  nombre: 'Valle Hermoso',
			  claveCabecera: '0001',
			  nombreCabecera: 'Valle Hermoso' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '041',
			  nombre: 'Victoria',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad Victoria' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '042',
			  nombre: 'Villagr�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villagr�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '28',
			  clave: '043',
			  nombre: 'Xicot�ncatl',
			  claveCabecera: '0001',
			  nombreCabecera: 'Xicot�ncatl' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '001',
			  nombre: 'Amaxac de Guerrero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Amaxac de Guerrero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '002',
			  nombre: 'Apetatitl�n de Antonio Carvajal',
			  claveCabecera: '0001',
			  nombreCabecera: 'Apetatitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '003',
			  nombre: 'Atlangatepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atlangatepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '004',
			  nombre: 'Atltzayanca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atlzayanca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '005',
			  nombre: 'Apizaco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad de Apizaco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '006',
			  nombre: 'Calpulalpan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Calpulalpan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '007',
			  nombre: 'El Carmen Tequexquitla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa de El Carmen Tequexquitla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '008',
			  nombre: 'Cuapiaxtla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cuapiaxtla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '009',
			  nombre: 'Cuaxomulco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cuaxomulco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '010',
			  nombre: 'Chiautempan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Ana Chiautempan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '011',
			  nombre: 'Mu�oz de Domingo Arenas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mu�oz' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '012',
			  nombre: 'Espa�ita',
			  claveCabecera: '0001',
			  nombreCabecera: 'Espa�ita' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '013',
			  nombre: 'Huamantla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huamantla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '014',
			  nombre: 'Hueyotlipan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Hueyotlipan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '015',
			  nombre: 'Ixtacuixtla de Mariano Matamoros',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Mariano Matamoros' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '016',
			  nombre: 'Ixtenco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ixtenco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '017',
			  nombre: 'Mazatecochco de Jos� Mar�a Morelos',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mazatecochco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '018',
			  nombre: 'Contla de Juan Cuamatzi',
			  claveCabecera: '0001',
			  nombreCabecera: 'Contla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '019',
			  nombre: 'Tepetitla de Lardiz�bal',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepetitla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '020',
			  nombre: 'Sanct�rum de L�zaro C�rdenas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Sanct�rum' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '021',
			  nombre: 'Nanacamilpa de Mariano Arista',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad de Nanacamilpa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '022',
			  nombre: 'Acuamanala de Miguel Hidalgo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Acuamanala' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '023',
			  nombre: 'Nat�vitas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nat�vitas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '024',
			  nombre: 'Panotla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Panotla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '025',
			  nombre: 'San Pablo del Monte',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Vicente Guerrero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '026',
			  nombre: 'Santa Cruz Tlaxcala',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Cruz Tlaxcala' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '027',
			  nombre: 'Tenancingo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tenancingo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '028',
			  nombre: 'Teolocholco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Teolocholco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '029',
			  nombre: 'Tepeyanco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepeyanco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '030',
			  nombre: 'Terrenate',
			  claveCabecera: '0001',
			  nombreCabecera: 'Terrenate' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '031',
			  nombre: 'Tetla de la Solidaridad',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tetla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '032',
			  nombre: 'Tetlatlahuca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tetlatlahuca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '033',
			  nombre: 'Tlaxcala',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlaxcala de Xicoht�ncatl' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '034',
			  nombre: 'Tlaxco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlaxco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '035',
			  nombre: 'Tocatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tocatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '036',
			  nombre: 'Totolac',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Totolac' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '037',
			  nombre: 'Ziltlalt�pec de Trinidad S�nchez Santos',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zitlalt�pec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '038',
			  nombre: 'Tzompantepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tzompantepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '039',
			  nombre: 'Xaloztoc',
			  claveCabecera: '0001',
			  nombreCabecera: 'Xaloztoc' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '040',
			  nombre: 'Xaltocan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Xaltocan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '041',
			  nombre: 'Papalotla de Xicoht�ncatl',
			  claveCabecera: '0001',
			  nombreCabecera: 'Papalotla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '042',
			  nombre: 'Xicohtzinco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Xicohtzinco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '043',
			  nombre: 'Yauhquemehcan',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Dionisio Yauhquemehcan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '044',
			  nombre: 'Zacatelco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zacatelco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '045',
			  nombre: 'Benito Ju�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Benito Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '046',
			  nombre: 'Emiliano Zapata',
			  claveCabecera: '0001',
			  nombreCabecera: 'Emiliano Zapata' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '047',
			  nombre: 'L�zaro C�rdenas',
			  claveCabecera: '0001',
			  nombreCabecera: 'L�zaro C�rdenas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '048',
			  nombre: 'La Magdalena Tlaltelulco',
			  claveCabecera: '0001',
			  nombreCabecera: 'La Magdalena Tlaltelulco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '049',
			  nombre: 'San Dami�n Tex�loc',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Dami�n Tex�loc' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '050',
			  nombre: 'San Francisco Tetlanohcan',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Francisco Tetlanohcan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '051',
			  nombre: 'San Jer�nimo Zacualpan',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Jer�nimo Zacualpan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '052',
			  nombre: 'San Jos� Teacalco',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Jos� Teacalco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '053',
			  nombre: 'San Juan Huactzinco',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Huactzinco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '054',
			  nombre: 'San Lorenzo Axocomanitla',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Lorenzo Axocomanitla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '055',
			  nombre: 'San Lucas Tecopilco',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Lucas Tecopilco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '056',
			  nombre: 'Santa Ana Nopalucan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Ana Nopalucan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '057',
			  nombre: 'Santa Apolonia Teacalco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Apolonia Teacalco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '058',
			  nombre: 'Santa Catarina Ayometla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Catarina Ayometla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '059',
			  nombre: 'Santa Cruz Quilehtla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Cruz Quilehtla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '29',
			  clave: '060',
			  nombre: 'Santa Isabel Xiloxoxtla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Isabel Xiloxoxtla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '001',
			  nombre: 'Acajete',
			  claveCabecera: '0001',
			  nombreCabecera: 'Acajete' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '002',
			  nombre: 'Acatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Acatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '003',
			  nombre: 'Acayucan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Acayucan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '004',
			  nombre: 'Actopan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Actopan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '005',
			  nombre: 'Acula',
			  claveCabecera: '0001',
			  nombreCabecera: 'Acula' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '006',
			  nombre: 'Acultzingo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Acultzingo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '007',
			  nombre: 'Camar�n de Tejeda',
			  claveCabecera: '0001',
			  nombreCabecera: 'Camar�n de Tejeda' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '008',
			  nombre: 'Alpatl�huac',
			  claveCabecera: '0001',
			  nombreCabecera: 'Alpatl�huac' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '009',
			  nombre: 'Alto Lucero de Guti�rrez Barrios',
			  claveCabecera: '0001',
			  nombreCabecera: 'Alto Lucero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '010',
			  nombre: 'Altotonga',
			  claveCabecera: '0001',
			  nombreCabecera: 'Altotonga' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '011',
			  nombre: 'Alvarado',
			  claveCabecera: '0001',
			  nombreCabecera: 'Alvarado' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '012',
			  nombre: 'Amatitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Amatitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '013',
			  nombre: 'Naranjos Amatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Naranjos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '014',
			  nombre: 'Amatl�n de los Reyes',
			  claveCabecera: '0001',
			  nombreCabecera: 'Amatl�n de los Reyes' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '015',
			  nombre: 'Angel R. Cabada',
			  claveCabecera: '0001',
			  nombreCabecera: '�ngel R. Cabada' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '016',
			  nombre: 'La Antigua',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jos� Cardel' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '017',
			  nombre: 'Apazapan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Apazapan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '018',
			  nombre: 'Aquila',
			  claveCabecera: '0001',
			  nombreCabecera: 'Aquila' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '019',
			  nombre: 'Astacinga',
			  claveCabecera: '0001',
			  nombreCabecera: 'Astacinga' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '020',
			  nombre: 'Atlahuilco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atlahuilco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '021',
			  nombre: 'Atoyac',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atoyac' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '022',
			  nombre: 'Atzacan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atzacan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '023',
			  nombre: 'Atzalan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atzalan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '024',
			  nombre: 'Tlaltetela',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlaltetela' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '025',
			  nombre: 'Ayahualulco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ayahualulco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '026',
			  nombre: 'Banderilla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Banderilla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '027',
			  nombre: 'Benito Ju�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Benito Ju�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '028',
			  nombre: 'Boca del R�o',
			  claveCabecera: '0001',
			  nombreCabecera: 'Boca del R�o' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '029',
			  nombre: 'Calcahualco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Calcahualco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '030',
			  nombre: 'Camerino Z. Mendoza',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ciudad Mendoza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '031',
			  nombre: 'Carrillo Puerto',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tamarindo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '032',
			  nombre: 'Catemaco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Catemaco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '033',
			  nombre: 'Cazones de Herrera',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cazones de Herrera' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '034',
			  nombre: 'Cerro Azul',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cerro Azul' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '035',
			  nombre: 'Citlalt�petl',
			  claveCabecera: '0001',
			  nombreCabecera: 'Citlalt�pec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '036',
			  nombre: 'Coacoatzintla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Coacoatzintla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '037',
			  nombre: 'Coahuitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Progreso de Zaragoza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '038',
			  nombre: 'Coatepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Coatepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '039',
			  nombre: 'Coatzacoalcos',
			  claveCabecera: '0001',
			  nombreCabecera: 'Coatzacoalcos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '040',
			  nombre: 'Coatzintla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Coatzintla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '041',
			  nombre: 'Coetzala',
			  claveCabecera: '0001',
			  nombreCabecera: 'Coetzala' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '042',
			  nombre: 'Colipa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Colipa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '043',
			  nombre: 'Comapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Comapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '044',
			  nombre: 'C�rdoba',
			  claveCabecera: '0001',
			  nombreCabecera: 'C�rdoba' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '045',
			  nombre: 'Cosamaloapan de Carpio',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cosamaloapan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '046',
			  nombre: 'Cosautl�n de Carvajal',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cosautl�n de Carvajal' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '047',
			  nombre: 'Coscomatepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Coscomatepec de Bravo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '048',
			  nombre: 'Cosoleacaque',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cosoleacaque' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '049',
			  nombre: 'Cotaxtla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cotaxtla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '050',
			  nombre: 'Coxquihui',
			  claveCabecera: '0001',
			  nombreCabecera: 'Coxquihui' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '051',
			  nombre: 'Coyutla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Coyutla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '052',
			  nombre: 'Cuichapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cuichapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '053',
			  nombre: 'Cuitl�huac',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cuitl�huac' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '054',
			  nombre: 'Chacaltianguis',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chacaltianguis' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '055',
			  nombre: 'Chalma',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chalma' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '056',
			  nombre: 'Chiconamel',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chiconamel' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '057',
			  nombre: 'Chiconquiaco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chiconquiaco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '058',
			  nombre: 'Chicontepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chicontepec de Tejeda' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '059',
			  nombre: 'Chinameca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chinameca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '060',
			  nombre: 'Chinampa de Gorostiza',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chinampa de Gorostiza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '061',
			  nombre: 'Las Choapas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Las Choapas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '062',
			  nombre: 'Chocam�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chocam�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '063',
			  nombre: 'Chontla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chontla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '064',
			  nombre: 'Chumatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chumatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '065',
			  nombre: 'Emiliano Zapata',
			  claveCabecera: '0001',
			  nombreCabecera: 'Dos R�os' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '066',
			  nombre: 'Espinal',
			  claveCabecera: '0001',
			  nombreCabecera: 'Espinal' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '067',
			  nombre: 'Filomeno Mata',
			  claveCabecera: '0001',
			  nombreCabecera: 'Filomeno Mata' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '068',
			  nombre: 'Fort�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Fort�n de las Flores' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '069',
			  nombre: 'Guti�rrez Zamora',
			  claveCabecera: '0001',
			  nombreCabecera: 'Guti�rrez Zamora' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '070',
			  nombre: 'Hidalgotitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Hidalgotitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '071',
			  nombre: 'Huatusco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huatusco de Chicuellar' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '072',
			  nombre: 'Huayacocotla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huayacocotla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '073',
			  nombre: 'Hueyapan de Ocampo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Hueyapan de Ocampo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '074',
			  nombre: 'Huiloapan de Cuauht�moc',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huiloapan de Cuauht�moc' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '075',
			  nombre: 'Ignacio de la Llave',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ignacio de la Llave' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '076',
			  nombre: 'Ilamatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ilamatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '077',
			  nombre: 'Isla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Isla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '078',
			  nombre: 'Ixcatepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ixcatepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '079',
			  nombre: 'Ixhuac�n de los Reyes',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ixhuac�n de los Reyes' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '080',
			  nombre: 'Ixhuatl�n del Caf�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ixhuatl�n del Caf�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '081',
			  nombre: 'Ixhuatlancillo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ixhuatlancillo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '082',
			  nombre: 'Ixhuatl�n del Sureste',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ixhuatl�n del Sureste' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '083',
			  nombre: 'Ixhuatl�n de Madero',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ixhuatl�n de Madero' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '084',
			  nombre: 'Ixmatlahuacan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ixmatlahuacan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '085',
			  nombre: 'Ixtaczoquitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ixtaczoquitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '086',
			  nombre: 'Jalacingo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jalacingo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '087',
			  nombre: 'Xalapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Xalapa-Enr�quez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '088',
			  nombre: 'Jalcomulco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jalcomulco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '089',
			  nombre: 'J�ltipan',
			  claveCabecera: '0001',
			  nombreCabecera: 'J�ltipan de Morelos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '090',
			  nombre: 'Jamapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jamapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '091',
			  nombre: 'Jes�s Carranza',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jes�s Carranza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '092',
			  nombre: 'Xico',
			  claveCabecera: '0001',
			  nombreCabecera: 'Xico' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '093',
			  nombre: 'Jilotepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jilotepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '094',
			  nombre: 'Juan Rodr�guez Clara',
			  claveCabecera: '0001',
			  nombreCabecera: 'Juan Rodr�guez Clara' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '095',
			  nombre: 'Juchique de Ferrer',
			  claveCabecera: '0001',
			  nombreCabecera: 'Juchique de Ferrer' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '096',
			  nombre: 'Landero y Coss',
			  claveCabecera: '0001',
			  nombreCabecera: 'Landero y Coss' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '097',
			  nombre: 'Lerdo de Tejada',
			  claveCabecera: '0001',
			  nombreCabecera: 'Lerdo de Tejada' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '098',
			  nombre: 'Magdalena',
			  claveCabecera: '0001',
			  nombreCabecera: 'Magdalena' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '099',
			  nombre: 'Maltrata',
			  claveCabecera: '0001',
			  nombreCabecera: 'Maltrata' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '100',
			  nombre: 'Manlio Fabio Altamirano',
			  claveCabecera: '0001',
			  nombreCabecera: 'Manlio Fabio Altamirano' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '101',
			  nombre: 'Mariano Escobedo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mariano Escobedo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '102',
			  nombre: 'Mart�nez de la Torre',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mart�nez de la Torre' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '103',
			  nombre: 'Mecatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mecatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '104',
			  nombre: 'Mecayapan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mecayapan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '105',
			  nombre: 'Medell�n de Bravo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Medell�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '106',
			  nombre: 'Miahuatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Miahuatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '107',
			  nombre: 'Las Minas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Las Minas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '108',
			  nombre: 'Minatitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Minatitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '109',
			  nombre: 'Misantla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Misantla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '110',
			  nombre: 'Mixtla de Altamirano',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mixtla de Altamirano' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '111',
			  nombre: 'Moloac�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Moloac�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '112',
			  nombre: 'Naolinco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Naolinco de Victoria' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '113',
			  nombre: 'Naranjal',
			  claveCabecera: '0001',
			  nombreCabecera: 'Naranjal' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '114',
			  nombre: 'Nautla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nautla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '115',
			  nombre: 'Nogales',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nogales' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '116',
			  nombre: 'Oluta',
			  claveCabecera: '0001',
			  nombreCabecera: 'Oluta' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '117',
			  nombre: 'Omealca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Omealca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '118',
			  nombre: 'Orizaba',
			  claveCabecera: '0001',
			  nombreCabecera: 'Orizaba' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '119',
			  nombre: 'Otatitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Otatitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '120',
			  nombre: 'Oteapan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Oteapan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '121',
			  nombre: 'Ozuluama de Mascare�as',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ozuluama de Mascare�as' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '122',
			  nombre: 'Pajapan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Pajapan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '123',
			  nombre: 'P�nuco',
			  claveCabecera: '0001',
			  nombreCabecera: 'P�nuco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '124',
			  nombre: 'Papantla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Papantla de Olarte' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '125',
			  nombre: 'Paso del Macho',
			  claveCabecera: '0001',
			  nombreCabecera: 'Paso del Macho' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '126',
			  nombre: 'Paso de Ovejas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Paso de Ovejas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '127',
			  nombre: 'La Perla',
			  claveCabecera: '0001',
			  nombreCabecera: 'La Perla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '128',
			  nombre: 'Perote',
			  claveCabecera: '0001',
			  nombreCabecera: 'Perote' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '129',
			  nombre: 'Plat�n S�nchez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Plat�n S�nchez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '130',
			  nombre: 'Playa Vicente',
			  claveCabecera: '0001',
			  nombreCabecera: 'Playa Vicente' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '131',
			  nombre: 'Poza Rica de Hidalgo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Poza Rica de Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '132',
			  nombre: 'Las Vigas de Ram�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Las Vigas de Ram�rez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '133',
			  nombre: 'Pueblo Viejo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cd. Cuauht�moc' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '134',
			  nombre: 'Puente Nacional',
			  claveCabecera: '0001',
			  nombreCabecera: 'Puente Nacional' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '135',
			  nombre: 'Rafael Delgado',
			  claveCabecera: '0001',
			  nombreCabecera: 'Rafael Delgado' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '136',
			  nombre: 'Rafael Lucio',
			  claveCabecera: '0001',
			  nombreCabecera: 'Rafael Lucio' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '137',
			  nombre: 'Los Reyes',
			  claveCabecera: '0001',
			  nombreCabecera: 'Los Reyes' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '138',
			  nombre: 'R�o Blanco',
			  claveCabecera: '0001',
			  nombreCabecera: 'R�o Blanco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '139',
			  nombre: 'Saltabarranca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Saltabarranca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '140',
			  nombre: 'San Andr�s Tenejapan',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Andr�s Tenejapan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '141',
			  nombre: 'San Andr�s Tuxtla',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Andr�s Tuxtla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '142',
			  nombre: 'San Juan Evangelista',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Juan Evangelista' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '143',
			  nombre: 'Santiago Tuxtla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santiago Tuxtla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '144',
			  nombre: 'Sayula de Alem�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Sayula de Alem�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '145',
			  nombre: 'Soconusco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Soconusco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '146',
			  nombre: 'Sochiapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Sochiapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '147',
			  nombre: 'Soledad Atzompa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Soledad Atzompa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '148',
			  nombre: 'Soledad de Doblado',
			  claveCabecera: '0001',
			  nombreCabecera: 'Soledad de Doblado' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '149',
			  nombre: 'Soteapan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Soteapan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '150',
			  nombre: 'Tamal�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tamal�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '151',
			  nombre: 'Tamiahua',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tamiahua' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '152',
			  nombre: 'Tampico Alto',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tampico Alto' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '153',
			  nombre: 'Tancoco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tancoco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '154',
			  nombre: 'Tantima',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tantima' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '155',
			  nombre: 'Tantoyuca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tantoyuca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '156',
			  nombre: 'Tatatila',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tatatila' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '157',
			  nombre: 'Castillo de Teayo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Castillo de Teayo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '158',
			  nombre: 'Tecolutla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tecolutla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '159',
			  nombre: 'Tehuipango',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tehuipango' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '160',
			  nombre: '�lamo Temapache',
			  claveCabecera: '0001',
			  nombreCabecera: '�lamo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '161',
			  nombre: 'Tempoal',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tempoal de S�nchez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '162',
			  nombre: 'Tenampa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tenampa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '163',
			  nombre: 'Tenochtitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tenochtitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '164',
			  nombre: 'Teocelo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Teocelo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '165',
			  nombre: 'Tepatlaxco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepatlaxco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '166',
			  nombre: 'Tepetl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepetl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '167',
			  nombre: 'Tepetzintla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepetzintla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '168',
			  nombre: 'Tequila',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tequila' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '169',
			  nombre: 'Jos� Azueta',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Azueta' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '170',
			  nombre: 'Texcatepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Texcatepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '171',
			  nombre: 'Texhuac�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Texhuac�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '172',
			  nombre: 'Texistepec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Texistepec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '173',
			  nombre: 'Tezonapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tezonapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '174',
			  nombre: 'Tierra Blanca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tierra Blanca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '175',
			  nombre: 'Tihuatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tihuatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '176',
			  nombre: 'Tlacojalpan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlacojalpan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '177',
			  nombre: 'Tlacolulan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlacolulan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '178',
			  nombre: 'Tlacotalpan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlacotalpan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '179',
			  nombre: 'Tlacotepec de Mej�a',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlacotepec de Mej�a' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '180',
			  nombre: 'Tlachichilco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlachichilco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '181',
			  nombre: 'Tlalixcoyan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlalixcoyan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '182',
			  nombre: 'Tlalnelhuayocan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlalnelhuayocan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '183',
			  nombre: 'Tlapacoyan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlapacoyan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '184',
			  nombre: 'Tlaquilpa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlaquilpa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '185',
			  nombre: 'Tlilapan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlilapan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '186',
			  nombre: 'Tomatl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tomatl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '187',
			  nombre: 'Tonay�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tonay�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '188',
			  nombre: 'Totutla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Totutla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '189',
			  nombre: 'Tuxpan',
			  claveCabecera: '0001',
			  nombreCabecera: 'T�xpam de Rodr�guez Cano' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '190',
			  nombre: 'Tuxtilla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tuxtilla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '191',
			  nombre: 'Ursulo Galv�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ursulo Galv�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '192',
			  nombre: 'Vega de Alatorre',
			  claveCabecera: '0001',
			  nombreCabecera: 'Vega de Alatorre' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '193',
			  nombre: 'Veracruz',
			  claveCabecera: '0001',
			  nombreCabecera: 'Veracruz' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '194',
			  nombre: 'Villa Aldama',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Aldama' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '195',
			  nombre: 'Xoxocotla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Xoxocotla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '196',
			  nombre: 'Yanga',
			  claveCabecera: '0001',
			  nombreCabecera: 'Yanga' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '197',
			  nombre: 'Yecuatla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Yecuatla' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '198',
			  nombre: 'Zacualpan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zacualpan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '199',
			  nombre: 'Zaragoza',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zaragoza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '200',
			  nombre: 'Zentla',
			  claveCabecera: '0001',
			  nombreCabecera: 'Colonia Manuel Gonz�lez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '201',
			  nombre: 'Zongolica',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zongolica' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '202',
			  nombre: 'Zontecomatl�n de L�pez y Fuentes',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zontecomatl�n de L�pez y Fuentes' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '203',
			  nombre: 'Zozocolco de Hidalgo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zozocolco de Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '204',
			  nombre: 'Agua Dulce',
			  claveCabecera: '0001',
			  nombreCabecera: 'Agua Dulce' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '205',
			  nombre: 'El Higo',
			  claveCabecera: '0001',
			  nombreCabecera: 'El Higo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '206',
			  nombre: 'Nanchital de L�zaro C�rdenas del R�o',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nanchital de L�zaro C�rdenas del R�o' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '207',
			  nombre: 'Tres Valles',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tres Valles' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '208',
			  nombre: 'Carlos A. Carrillo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Carlos A. Carrillo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '209',
			  nombre: 'Tatahuicapan de Ju�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tatahuicapan' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '210',
			  nombre: 'Uxpanapa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Poblado 10' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '211',
			  nombre: 'San Rafael',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Rafael' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '30',
			  clave: '212',
			  nombre: 'Santiago Sochiapan',
			  claveCabecera: '0001',
			  nombreCabecera: 'Xochiapa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '001',
			  nombre: 'Abal�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Abal�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '002',
			  nombre: 'Acanceh',
			  claveCabecera: '0001',
			  nombreCabecera: 'Acanceh' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '003',
			  nombre: 'Akil',
			  claveCabecera: '0001',
			  nombreCabecera: 'Akil' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '004',
			  nombre: 'Baca',
			  claveCabecera: '0001',
			  nombreCabecera: 'Baca' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '005',
			  nombre: 'Bokob�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Bokob�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '006',
			  nombre: 'Buctzotz',
			  claveCabecera: '0001',
			  nombreCabecera: 'Buctzotz' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '007',
			  nombre: 'Cacalch�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cacalch�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '008',
			  nombre: 'Calotmul',
			  claveCabecera: '0001',
			  nombreCabecera: 'Calotmul' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '009',
			  nombre: 'Cansahcab',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cansahcab' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '010',
			  nombre: 'Cantamayec',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cantamayec' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '011',
			  nombre: 'Celest�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Celest�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '012',
			  nombre: 'Cenotillo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cenotillo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '013',
			  nombre: 'Conkal',
			  claveCabecera: '0001',
			  nombreCabecera: 'Conkal' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '014',
			  nombre: 'Cuncunul',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cuncunul' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '015',
			  nombre: 'Cuzam�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Cuzam�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '016',
			  nombre: 'Chacsink�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chacsink�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '017',
			  nombre: 'Chankom',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chankom' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '018',
			  nombre: 'Chapab',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chapab' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '019',
			  nombre: 'Chemax',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chemax' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '020',
			  nombre: 'Chicxulub Pueblo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chicxulub Pueblo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '021',
			  nombre: 'Chichimil�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chichimil�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '022',
			  nombre: 'Chikindzonot',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chikindzonot' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '023',
			  nombre: 'Chochol�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chochol�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '024',
			  nombre: 'Chumayel',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chumayel' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '025',
			  nombre: 'Dz�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Dz�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '026',
			  nombre: 'Dzemul',
			  claveCabecera: '0001',
			  nombreCabecera: 'Dzemul' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '027',
			  nombre: 'Dzidzant�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Dzidzant�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '028',
			  nombre: 'Dzilam de Bravo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Dzilam de Bravo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '029',
			  nombre: 'Dzilam Gonz�lez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Dzilam Gonz�lez' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '030',
			  nombre: 'Dzit�s',
			  claveCabecera: '0001',
			  nombreCabecera: 'Dzit�s' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '031',
			  nombre: 'Dzoncauich',
			  claveCabecera: '0001',
			  nombreCabecera: 'Dzoncauich' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '032',
			  nombre: 'Espita',
			  claveCabecera: '0001',
			  nombreCabecera: 'Espita' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '033',
			  nombre: 'Halach�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Halach�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '034',
			  nombre: 'Hocab�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Hocab�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '035',
			  nombre: 'Hoct�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Hoct�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '036',
			  nombre: 'Hom�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Hom�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '037',
			  nombre: 'Huh�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huh�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '038',
			  nombre: 'Hunucm�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Hunucm�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '039',
			  nombre: 'Ixil',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ixil' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '040',
			  nombre: 'Izamal',
			  claveCabecera: '0001',
			  nombreCabecera: 'Izamal' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '041',
			  nombre: 'Kanas�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Kanas�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '042',
			  nombre: 'Kantunil',
			  claveCabecera: '0001',
			  nombreCabecera: 'Kantunil' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '043',
			  nombre: 'Kaua',
			  claveCabecera: '0001',
			  nombreCabecera: 'Kaua' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '044',
			  nombre: 'Kinchil',
			  claveCabecera: '0001',
			  nombreCabecera: 'Kinchil' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '045',
			  nombre: 'Kopom�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Kopom�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '046',
			  nombre: 'Mama',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mama' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '047',
			  nombre: 'Man�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Man�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '048',
			  nombre: 'Maxcan�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Maxcan�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '049',
			  nombre: 'Mayap�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mayap�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '050',
			  nombre: 'M�rida',
			  claveCabecera: '0001',
			  nombreCabecera: 'M�rida' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '051',
			  nombre: 'Mococh�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mococh�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '052',
			  nombre: 'Motul',
			  claveCabecera: '0001',
			  nombreCabecera: 'Motul de Carrillo Puerto' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '053',
			  nombre: 'Muna',
			  claveCabecera: '0001',
			  nombreCabecera: 'Muna' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '054',
			  nombre: 'Muxupip',
			  claveCabecera: '0001',
			  nombreCabecera: 'Muxupip' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '055',
			  nombre: 'Opich�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Opich�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '056',
			  nombre: 'Oxkutzcab',
			  claveCabecera: '0001',
			  nombreCabecera: 'Oxkutzcab' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '057',
			  nombre: 'Panab�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Panab�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '058',
			  nombre: 'Peto',
			  claveCabecera: '0001',
			  nombreCabecera: 'Peto' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '059',
			  nombre: 'Progreso',
			  claveCabecera: '0001',
			  nombreCabecera: 'Progreso' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '060',
			  nombre: 'Quintana Roo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Quintana Roo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '061',
			  nombre: 'R�o Lagartos',
			  claveCabecera: '0001',
			  nombreCabecera: 'R�o Lagartos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '062',
			  nombre: 'Sacalum',
			  claveCabecera: '0001',
			  nombreCabecera: 'Sacalum' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '063',
			  nombre: 'Samahil',
			  claveCabecera: '0001',
			  nombreCabecera: 'Samahil' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '064',
			  nombre: 'Sanahcat',
			  claveCabecera: '0001',
			  nombreCabecera: 'Sanahcat' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '065',
			  nombre: 'San Felipe',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Felipe' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '066',
			  nombre: 'Santa Elena',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Elena' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '067',
			  nombre: 'Sey�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Sey�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '068',
			  nombre: 'Sinanch�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Sinanch�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '069',
			  nombre: 'Sotuta',
			  claveCabecera: '0001',
			  nombreCabecera: 'Sotuta' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '070',
			  nombre: 'Sucil�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Sucil�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '071',
			  nombre: 'Sudzal',
			  claveCabecera: '0001',
			  nombreCabecera: 'Sudzal' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '072',
			  nombre: 'Suma',
			  claveCabecera: '0001',
			  nombreCabecera: 'Suma' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '073',
			  nombre: 'Tahdzi�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tahdzi�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '074',
			  nombre: 'Tahmek',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tahmek' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '075',
			  nombre: 'Teabo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Teabo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '076',
			  nombre: 'Tecoh',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tecoh' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '077',
			  nombre: 'Tekal de Venegas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tekal de Venegas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '078',
			  nombre: 'Tekant�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tekant�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '079',
			  nombre: 'Tekax',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tekax de �lvaro Obreg�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '080',
			  nombre: 'Tekit',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tekit' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '081',
			  nombre: 'Tekom',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tekom' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '082',
			  nombre: 'Telchac Pueblo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Telchac' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '083',
			  nombre: 'Telchac Puerto',
			  claveCabecera: '0001',
			  nombreCabecera: 'Telchac Puerto' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '084',
			  nombre: 'Temax',
			  claveCabecera: '0001',
			  nombreCabecera: 'Temax' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '085',
			  nombre: 'Temoz�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Temoz�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '086',
			  nombre: 'Tepak�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepak�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '087',
			  nombre: 'Tetiz',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tetiz' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '088',
			  nombre: 'Teya',
			  claveCabecera: '0001',
			  nombreCabecera: 'Teya' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '089',
			  nombre: 'Ticul',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ticul' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '090',
			  nombre: 'Timucuy',
			  claveCabecera: '0001',
			  nombreCabecera: 'Timucuy' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '091',
			  nombre: 'Tinum',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tinum' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '092',
			  nombre: 'Tixcacalcupul',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tixcacalcupul' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '093',
			  nombre: 'Tixkokob',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tixkokob' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '094',
			  nombre: 'Tixmehuac',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tixmehuac' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '095',
			  nombre: 'Tixp�hual',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tixp�hual' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '096',
			  nombre: 'Tizim�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tizim�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '097',
			  nombre: 'Tunk�s',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tunk�s' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '098',
			  nombre: 'Tzucacab',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tzucacab' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '099',
			  nombre: 'Uayma',
			  claveCabecera: '0001',
			  nombreCabecera: 'Uayma' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '100',
			  nombre: 'Uc�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Uc�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '101',
			  nombre: 'Um�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Um�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '102',
			  nombre: 'Valladolid',
			  claveCabecera: '0001',
			  nombreCabecera: 'Valladolid' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '103',
			  nombre: 'Xocchel',
			  claveCabecera: '0001',
			  nombreCabecera: 'Xocchel' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '104',
			  nombre: 'Yaxcab�',
			  claveCabecera: '0001',
			  nombreCabecera: 'Yaxcab�' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '105',
			  nombre: 'Yaxkukul',
			  claveCabecera: '0001',
			  nombreCabecera: 'Yaxkukul' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '31',
			  clave: '106',
			  nombre: 'Yoba�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Yoba�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '001',
			  nombre: 'Apozol',
			  claveCabecera: '0001',
			  nombreCabecera: 'Apozol' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '002',
			  nombre: 'Apulco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Apulco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '003',
			  nombre: 'Atolinga',
			  claveCabecera: '0001',
			  nombreCabecera: 'Atolinga' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '004',
			  nombre: 'Benito Ju�rez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Florencia' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '005',
			  nombre: 'Calera',
			  claveCabecera: '0001',
			  nombreCabecera: 'V�ctor Rosales' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '006',
			  nombre: 'Ca�itas de Felipe Pescador',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ca�itas de Felipe Pescador' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '007',
			  nombre: 'Concepci�n del Oro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Concepci�n del Oro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '008',
			  nombre: 'Cuauht�moc',
			  claveCabecera: '0001',
			  nombreCabecera: 'San Pedro Piedra Gorda' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '009',
			  nombre: 'Chalchihuites',
			  claveCabecera: '0001',
			  nombreCabecera: 'Chalchihuites' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '010',
			  nombre: 'Fresnillo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Fresnillo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '011',
			  nombre: 'Trinidad Garc�a de la Cadena',
			  claveCabecera: '0001',
			  nombreCabecera: 'Trinidad Garc�a de la Cadena' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '012',
			  nombre: 'Genaro Codina',
			  claveCabecera: '0001',
			  nombreCabecera: 'Genaro Codina' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '013',
			  nombre: 'General Enrique Estrada',
			  claveCabecera: '0001',
			  nombreCabecera: 'General Enrique Estrada' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '014',
			  nombre: 'General Francisco R. Murgu�a',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nieves' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '015',
			  nombre: 'El Plateado de Joaqu�n Amaro',
			  claveCabecera: '0001',
			  nombreCabecera: 'El Plateado de Joaqu�n Amaro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '016',
			  nombre: 'General P�nfilo Natera',
			  claveCabecera: '0001',
			  nombreCabecera: 'General P�nfilo Natera' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '017',
			  nombre: 'Guadalupe',
			  claveCabecera: '0001',
			  nombreCabecera: 'Guadalupe' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '018',
			  nombre: 'Huanusco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Huanusco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '019',
			  nombre: 'Jalpa',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jalpa' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '020',
			  nombre: 'Jerez',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jerez de Garc�a Salinas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '021',
			  nombre: 'Jim�nez del Teul',
			  claveCabecera: '0001',
			  nombreCabecera: 'Jim�nez del Teul' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '022',
			  nombre: 'Juan Aldama',
			  claveCabecera: '0001',
			  nombreCabecera: 'Juan Aldama' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '023',
			  nombre: 'Juchipila',
			  claveCabecera: '0001',
			  nombreCabecera: 'Juchipila' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '024',
			  nombre: 'Loreto',
			  claveCabecera: '0001',
			  nombreCabecera: 'Loreto' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '025',
			  nombre: 'Luis Moya',
			  claveCabecera: '0001',
			  nombreCabecera: 'Luis Moya' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '026',
			  nombre: 'Mazapil',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mazapil' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '027',
			  nombre: 'Melchor Ocampo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Melchor Ocampo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '028',
			  nombre: 'Mezquital del Oro',
			  claveCabecera: '0001',
			  nombreCabecera: 'Mezquital del Oro' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '029',
			  nombre: 'Miguel Auza',
			  claveCabecera: '0001',
			  nombreCabecera: 'Miguel Auza' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '030',
			  nombre: 'Momax',
			  claveCabecera: '0001',
			  nombreCabecera: 'Momax' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '031',
			  nombre: 'Monte Escobedo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Monte Escobedo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '032',
			  nombre: 'Morelos',
			  claveCabecera: '0001',
			  nombreCabecera: 'Morelos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '033',
			  nombre: 'Moyahua de Estrada',
			  claveCabecera: '0001',
			  nombreCabecera: 'Moyahua de Estrada' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '034',
			  nombre: 'Nochistl�n de Mej�a',
			  claveCabecera: '0001',
			  nombreCabecera: 'Nochistl�n de Mej�a' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '035',
			  nombre: 'Noria de �ngeles',
			  claveCabecera: '0001',
			  nombreCabecera: 'Noria de �ngeles' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '036',
			  nombre: 'Ojocaliente',
			  claveCabecera: '0001',
			  nombreCabecera: 'Ojocaliente' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '037',
			  nombre: 'P�nuco',
			  claveCabecera: '0001',
			  nombreCabecera: 'P�nuco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '038',
			  nombre: 'Pinos',
			  claveCabecera: '0001',
			  nombreCabecera: 'Pinos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '039',
			  nombre: 'R�o Grande',
			  claveCabecera: '0001',
			  nombreCabecera: 'R�o Grande' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '040',
			  nombre: 'Sain Alto',
			  claveCabecera: '0001',
			  nombreCabecera: 'Sain Alto' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '041',
			  nombre: 'El Salvador',
			  claveCabecera: '0001',
			  nombreCabecera: 'El Salvador' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '042',
			  nombre: 'Sombrerete',
			  claveCabecera: '0001',
			  nombreCabecera: 'Sombrerete' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '043',
			  nombre: 'Susticac�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Susticac�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '044',
			  nombre: 'Tabasco',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tabasco' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '045',
			  nombre: 'Tepechitl�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepechitl�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '046',
			  nombre: 'Tepetongo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tepetongo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '047',
			  nombre: 'Te�l de Gonz�lez Ortega',
			  claveCabecera: '0001',
			  nombreCabecera: 'Te�l de Gonz�lez Ortega' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '048',
			  nombre: 'Tlaltenango de S�nchez Rom�n',
			  claveCabecera: '0001',
			  nombreCabecera: 'Tlaltenango de S�nchez Rom�n' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '049',
			  nombre: 'Valpara�so',
			  claveCabecera: '0001',
			  nombreCabecera: 'Valpara�so' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '050',
			  nombre: 'Vetagrande',
			  claveCabecera: '0001',
			  nombreCabecera: 'Vetagrande' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '051',
			  nombre: 'Villa de Cos',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa de Cos' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '052',
			  nombre: 'Villa Garc�a',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Garc�a' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '053',
			  nombre: 'Villa Gonz�lez Ortega',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Gonz�lez Ortega' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '054',
			  nombre: 'Villa Hidalgo',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villa Hidalgo' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '055',
			  nombre: 'Villanueva',
			  claveCabecera: '0001',
			  nombreCabecera: 'Villanueva' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '056',
			  nombre: 'Zacatecas',
			  claveCabecera: '0001',
			  nombreCabecera: 'Zacatecas' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '057',
			  nombre: 'Trancoso',
			  claveCabecera: '0001',
			  nombreCabecera: 'Trancoso' }).exec(function(err, tp){});
			Municipio.create({ claveEntidad: '32',
			  clave: '058',
			  nombre: 'Santa Mar�a de la Paz',
			  claveCabecera: '0001',
			  nombreCabecera: 'Santa Mar�a de la Paz' }).exec(function(err, tp){});
*/
		}
	});

/*
  Promocion.find({activo: true}).then(function(promociones) {
	for(var i in promociones ){
		var promocion = promociones[i];
		var kupon = {promocionId:promocion.promocionId, subCategoriaId:promocion.subCategoriaId};
		Kupon.create(kupon).then(function( kuponNuevo ){
			var venta = { user:1, promocion:kuponNuevo.promocionId, cantidad:1, total: 30};
			Venta.create(venta).then(function(ventaNueva){
				Promocion.update({promocionId:ventaNueva.promocion},{cantidadCreados:1})
				.then(function(promoUpd){});
			})
		})
	}
  });
*/
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)

  cb();


};
