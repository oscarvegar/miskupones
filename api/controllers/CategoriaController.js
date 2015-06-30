/**
 * CategoriaController
 *
 * @description :: Server-side logic for managing Categorias
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	readAllCategorias: function(req, res) {
		console.log('readAllCategorias');
		if(req.session.user) {
			Categoria.find()
				.then(function(categoriasDb) {
					return res.ok({categorias: categoriasDb});
				}).catch(function(error) {
					return res.serverError(error);
				});
		} else {
			return res.redirect('/login');
		}
	},
	viewCategoria: function(req, res) {
		console.log('viewCategoria ::: ' + req.param('categoriaId'));
		if(req.session.user) {
			Categoria.findOne({categoriaId: req.param('categoriaId')}).populate('subcategorias')
				.then(function(categoriaDb) {
					return res.ok({categoria: categoriaDb});
				}).catch(function(error) {
					return res.serverError(error);
				});
		} else {
			return res.badRequest({error: '¡¡Usuario no autenticado!!'});
		}
	},
	filterCategoriaById: function(req, res) {
		console.log('filterCategoriaById ::: ' + req.param('categoriaId'));
		if(req.session.user) {
			Categoria.findOne({categoriaId: req.param('categoriaId')})
				.then(function(categoriaDb) {
					return res.ok({categoria: categoriaDb});
				}).catch(function(error) {
					return res.serverError(error);
				});
		} else {
			return res.badRequest({error: '¡¡Usuario no autenticado!!'});
		}
	},

	getCategoriasForMovil: function(req, res) {
		console.log("user in sesion: ", req.session.user);
		Categoria.find({},{select:['categoriaId', 'descripcion']})
			.then(function(categoriasDb) {
				var respuesta = {categorias: categoriasDb, subcategorias: null};
				if( categoriasDb.length > 0 ) {
					Subcategoria.find({categoriaId: categoriasDb[0].categoriaId},
						{select: ['subCategoriaId', 'categoriaId', 'descripcion']}).then(function(subcategorias){
							respuesta.subcategorias = subcategorias;
							return res.ok( respuesta );
						});
				}else{
					return res.ok( respuesta );
				}
			}).catch(function(error) {
				return res.serverError(error);
			});
	},

	getSubCategoriasForMovil: function(req, res) {
		var categoriaId = req.allParams().categoriaId;
		console.log("categoriaId for use :: ", categoriaId);
		Subcategoria.find({categoriaId:categoriaId}, {select:['subCategoriaId', 'categoriaId', 'descripcion']})
			.then(function(categoriasDb) {
				console.log("Subcategorias finded :: ", categoriasDb)
				return res.json( categoriasDb )
			}).catch(function(error) {
				return res.serverError(error);
			});
	}

};

