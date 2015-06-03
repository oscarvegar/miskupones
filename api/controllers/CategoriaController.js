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
					return res.json({status:200, categorias: categoriasDb});
				}).catch(function(error) {
					return res.json(error);
				});
		} else {
			res.redirect('/login');
		}
	}
};

