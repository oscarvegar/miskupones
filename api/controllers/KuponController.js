/**
 * KuponController
 *
 * @description :: Server-side logic for managing Kupons
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	createKupon: function(req, res) {
		console.log('KuponController.createKupon :: ');
		if(req.session.user) {
			console.log(req.session.user);
			var reqUser = req.session.user;
			var allReqParams = req.allParams();
			var reqFile = req.file('kuponFile');
			var dataProm = JSON.parse(req.param('data'));
			// console.log(allReqParams);
			// console.log(req);
			console.log(dataProm);

			reqFile.upload({ dirname: '../../assets/uploadImages'}, function onUploadComplete (err, files) {				
			// Earlier it was ./assets/uploadImages .. Changed to ../../assets/uploadImages
			//	Files will be uploaded to ./assets/uploadImages
			// Access it via localhost:1337/uploadImages/file-name

				console.log(err);
				if (err) return res.serverError(err);									
				//	IF ERROR Return and send 500 error
				
				console.log(files);
				dataProm.imagenesNames = [files[0].filename];
				// dataProm.imagenesUrls = [require('util').format('%s/kupon/image/%s', sails.getBaseUrl(), files[0].fd.substr(files[0].fd.lastIndexOf("/")+1)];
				dataProm.imagenesUrls = [require('util').format('%s%s', sails.getBaseUrl(), files[0].fd.substr(files[0].fd.lastIndexOf("/uploadImages")))];
				dataProm.imagenesFds = [files[0].fd];
				dataProm.vigencia = new Date(dataProm.vigenciaTime);
				delete dataProm.vigenciaTime;
				console.log(dataProm);

				User.findOne({activationcode: reqUser.activationcode}).populate('proveedor')
					.then(function(userDb) {
						console.log('afterUserFindOne');
						console.log(userDb);
						dataProm.proveedorId = userDb.proveedor[0];
						return Promocion.create(dataProm);
					}).then(function(promoCreated) {
						console.log('afterPromotionCreated');
						console.log(promoCreated);
						return res.json({status:200, promocion: promoCreated});
					}).catch(function(error) {
						console.log(error);
						return res.json(400, error);
					});

				// res.redirect('#/kupones');
			});

			// res.redirect('#/kupones/create');
			// return res.view('default');
		} else {
			res.redirect('/login');
		}
	},
	readAllKupons: function(req, res) {
		if(req.session.user) {
			var sessionUser = req.session.user;
			var allReqParams = req.allParams();
			console.log('KuponController.readAllKupons :: ');
			console.log(allReqParams);

			User.findOne({activationcode: sessionUser.activationcode}).populate('proveedor')
				.then(function(userDb){
					console.log('afterUserFindOne');
					console.log(userDb);
					if(!userDb) return res.view(404);
					var provInUsr = userDb.proveedor[0];
					return Proveedor.findOne({proveedorId: provInUsr.proveedorId}).populate('promociones', {activo: true});
				}).then(function(provPromo) {
					console.log('afterPromocionFind');
					return res.json({status:200, kupones: provPromo.promociones});
				}).catch(function(error) {
					console.log('onCatch');
					console.log(error);
					return res.json(400,error);
				});

			// res.redirect('/');
			// return res.view('default');
		} else {
			res.redirect('/login');
		}
	},
	viewKupon: function(req, res) {
		if(req.session.user) {
			var kuponId = req.param('kuponId');
			console.log('KuponController.viewKupon.kuponId :: ' + kuponId);

			Promocion.findOne({promocionId: kuponId}).populate('subCategoriaId')
				.then(function(promocionDb) {
					console.log('afterPromocionFindOne');
					console.log(promocionDb);
					var promoCat = Categoria.findOne({categoriaId: promocionDb.subCategoriaId.categoriaId});
					return [promocionDb, promoCat];
				}).spread(function(promocionDb, promoCat) {
					console.log('afterSpreadPromocionFindOne');
					promocionDb.subCategoriaId.categoriaId = promoCat;
					return res.json({status:200, kupon: promocionDb});
				}).catch(function(error) {
					console.log(error);
					return res.json(400,error);
				});

			// res.redirect('/');
			// return res.view('default');
		} else {
			res.redirect('/login');
		}
	},
	updateKupon: function(req, res) {
		if(req.session.user) {
			var kuponId = req.param('kuponId');
			console.log('KuponController.updateKupon.kuponId :: ' + kuponId);
			// res.redirect('/');
			// return res.view('default');
		} else {
			res.redirect('/login');
		}
	},
	deleteKupon: function(req, res) {
		if(req.session.user) {
			var kuponId = req.param('kuponId');
			console.log('KuponController.deleteKupon.kuponId :: ' + kuponId);

			Promocion.findOne({promocionId: kuponId})
				.then(function(promocionDb) {
					console.log('afterPromocionFindOne');
					console.log(promocionDb);
					promocionDb.activo = false;
					promocionDb.save();
					return res.ok({kupon: promocionDb});
				}).catch(function(error) {
					console.log(error);
					return res.serverError(error);
				});

			// res.redirect('/');
			// return res.view('default');
		} else {
			res.redirect('/login');
		}
	},
	imageKupon: function (req, res) {

		req.validate({
			imgId: 'string'
		});

		var imgId = req.param('imgId');
		var SkipperDisk = require('skipper-disk');
		var fileAdapter = SkipperDisk(/* optional opts */);

		// Stream the file down
		fileAdapter.read(user.avatarFd)
		.on('error', function (err){
			return res.serverError(err);
		})
		.pipe(res);
	}
};

