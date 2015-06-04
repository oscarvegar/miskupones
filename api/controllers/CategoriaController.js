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
	}
};

