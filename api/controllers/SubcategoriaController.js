/**
 * SubcategoriaController
 *
 * @description :: Server-side logic for managing Subcategorias
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	readAllSubCategoriasBy: function(req, res) {
		console.log('readAllSubCategoriasBy');
		if(req.session.user) {
			var categoriaIdPrm = req.param('categoriaId');
			console.log(categoriaIdPrm);
			Categoria.findOne({categoriaId: categoriaIdPrm}).populate('subcategorias')
				.then(function(categoriaDb) {
					return res.json({status:200, subCategorias: categoriaDb.subcategorias});
				}).catch(function(error) {
					return res.json(error);
				});
		} else {
			res.redirect('/provlogin');
		}
	}
};

