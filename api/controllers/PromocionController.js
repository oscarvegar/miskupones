/**
 * PromocionController
 *
 * @description :: Server-side logic for managing Promocions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

function processUploadedFile(file, cb) {

    file.upload({ dirname: '../../assets/uploadImages'}, cb);

}

module.exports = {
    /**
     *
     *
     */
    createKupon: function(req, res) {
        console.log('KuponController.createKupon :: ');
        if(req.session.user) {
            // console.log(req.session.user);
            console.log(req.files);
            var reqUser = req.session.user;
            var allReqParams = req.allParams();
            var reqFile = req.file('kuponFile');
            var dataProm = JSON.parse(req.param('data'));
            // console.log(allReqParams);
            // console.log(req);
            console.log(dataProm);
/*
            reqFile.upload({ dirname: '../../assets/uploadImages'}, function onUploadComplete (err, files) {                
            // Earlier it was ./assets/uploadImages .. Changed to ../../assets/uploadImages
            //  Files will be uploaded to ./assets/uploadImages
            // Access it via localhost:1337/uploadImages/file-name

                console.log(err);
                if (err) return res.serverError(err);                                   
                //  IF ERROR Return and send 500 error
                
                console.log(files);
                dataProm.imagenesNames = [files[0].filename];
                // dataProm.imagenesUrls = [require('util').format('%s/kupon/image/%s', sails.getBaseUrl(), files[0].fd.substr(files[0].fd.lastIndexOf("/")+1)];
                // dataProm.imagenesUrls = [require('util').format('%s%s', req.baseUrl, files[0].fd.substr(files[0].fd.lastIndexOf("/uploadImages")))];
                dataProm.imagenesUrls = [require('util').format('%s', files[0].fd.substr(files[0].fd.lastIndexOf("/uploadImages")))];
                dataProm.imagenesFds = [files[0].fd];
                dataProm.vigencia = new Date(dataProm.vigenciaTime);
                delete dataProm.vigenciaTime;
                console.log(dataProm);

                User.findOne({activationcode: reqUser.activationcode}).populate('proveedor')
                    .then(function(userDb) {
                        console.log('afterUserFindOne');
                        console.log(userDb);
                        dataProm.proveedorId = userDb.proveedor;
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
*/

            var onUploadComplete = function(err, files) {               
            // Earlier it was ./assets/uploadImages .. Changed to ../../assets/uploadImages
            //  Files will be uploaded to ./assets/uploadImages
            // Access it via localhost:1337/uploadImages/file-name

                console.log(err);
                if (err) return res.serverError(err);                                   
                //  IF ERROR Return and send 500 error
                
                console.log(files);
                dataProm.imagenesNames = [files[0].filename];
                // dataProm.imagenesUrls = [require('util').format('%s/kupon/image/%s', sails.getBaseUrl(), files[0].fd.substr(files[0].fd.lastIndexOf("/")+1)];
                // dataProm.imagenesUrls = [require('util').format('%s%s', req.baseUrl, files[0].fd.substr(files[0].fd.lastIndexOf("/uploadImages")))];
                dataProm.imagenesUrls = [require('util').format('%s%s', dataProm._remoteHost, files[0].fd.substr(files[0].fd.lastIndexOf("/uploadImages")))];
                dataProm.imagenesFds = [files[0].fd];
                console.log(dataProm);

                User.findOne({activationcode: reqUser.activationcode}).populate('proveedor')
                    .then(function(userDb) {
                        console.log('afterUserFindOne');
                        console.log(userDb);
                        dataProm.proveedorId = userDb.proveedor;
                        return Promocion.create(dataProm);
                    }).then(function(promoCreated) {
                        console.log('afterPromotionCreated');
                        console.log(promoCreated);
                        return res.json({status:200, promocion: promoCreated});
                    }).catch(function(error) {
                        console.log(error);
                        return res.json(400, error);
                    });
            };

            processUploadedFile(reqFile, onUploadComplete);

            // res.redirect('#/kupones/create');
            // return res.view('default');
        } else {
            return res.redirect('/login');
        }
    },
    readAllKupons: function(req, res) {
        console.log('KuponController.readAllKupons :: ');
        console.log(req.session);
        if(req.session.user) {
            var sessionUser = req.session.user;
            var allReqParams = req.allParams();
            console.log(allReqParams);

            User.findOne({activationcode: sessionUser.activationcode}).populate('proveedor')
                .then(function(userDb){
                    console.log('afterUserFindOne');
                    console.log(userDb);
                    if(!userDb) return res.view(404);
                    var provInUsr = userDb.proveedor;
                    return Proveedor.findOne({proveedorId: provInUsr.proveedorId}).populate('promociones', {eliminado: false});
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
            return res.redirect('/login');
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
            return res.redirect('/login');
        }
    },
    updateKupon: function(req, res) {
        console.log('KuponController.updateKupon');
        if(req.session.user) {
            var kuponId = req.param('kuponId');
            console.log('KuponController.updateKupon.kuponId :: ' + kuponId);
            var reqFile = req.file('kuponFile');
            console.log(reqFile);
            var allReqParams = req.allParams();
            console.log(allReqParams);
            var dataProm = JSON.parse(req.param('data'));
            console.log(dataProm);

            var fileLength = reqFile._files.length,
                upload = fileLength > 0 ? reqFile._files[0].stream : null,
                headers = upload != null ? upload.headers : null,
                byteCount = upload != null ? upload.byteCount : null;
            if(fileLength > 0) {
                console.log('fileLength :: ' + fileLength);
                console.log('upload :: ' + upload);
                console.log('headers :: ' + headers);
                console.log('byteCount :: ' + byteCount);

                var onUploadComplete = function(err, files) {               
                // Earlier it was ./assets/uploadImages .. Changed to ../../assets/uploadImages
                //  Files will be uploaded to ./assets/uploadImages
                // Access it via localhost:1337/uploadImages/file-name

                    console.log(err);
                    if (err) return res.serverError(err);                                   
                    //  IF ERROR Return and send 500 error
                    
                    console.log(files);
                    dataProm.imagenesNames = [files[0].filename];
                    // dataProm.imagenesUrls = [require('util').format('%s/kupon/image/%s', sails.getBaseUrl(), files[0].fd.substr(files[0].fd.lastIndexOf("/")+1)];
                    // dataProm.imagenesUrls = [require('util').format('%s%s', req.baseUrl, files[0].fd.substr(files[0].fd.lastIndexOf("/uploadImages")))];
                    dataProm.imagenesUrls = [require('util').format('%s%s', dataProm._remoteHost, files[0].fd.substr(files[0].fd.lastIndexOf("/uploadImages")))];
                    dataProm.imagenesFds = [files[0].fd];
                    delete dataProm.promocionId;
                    console.log(dataProm);

                    Promocion.update({promocionId: kuponId}, dataProm)
                        .then(function(promoUpdated) {
                            console.log('afterPromotionWithFileUpdated');
                            console.log(promoUpdated);
                            return res.json({status:200, promocion: promoUpdated});
                        }).catch(function(error) {
                            console.log(error);
                            return res.json(400, error);
                        });
                };

                processUploadedFile(reqFile, onUploadComplete);
            } else {
                var dropFictitionalFile = function(err, files) {
                    console.log(err);
                    console.log(files);

                    Promocion.update({promocionId: kuponId}, dataProm)
                        .then(function(promoUpdated) {
                            console.log('afterPromotionWithOutFileUpdated');
                            console.log(promoUpdated);
                            return res.json({status:200, promocion: promoUpdated});
                        }).catch(function(error) {
                            console.log(error);
                            return res.json(400, error);
                        });
                }
                processUploadedFile(reqFile, dropFictitionalFile);
            }

            // res.redirect('/');
            // return res.view('default');
        } else {
            return res.redirect('/login');
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
                    promocionDb.eliminado = true;
                    promocionDb.save();
                    return res.ok({kupon: promocionDb});
                }).catch(function(error) {
                    console.log(error);
                    return res.serverError(error);
                });

            // res.redirect('/');
            // return res.view('default');
        } else {
            return res.redirect('/login');
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
    },
    /**
     *
     *
     */

    findByLimit: function(request, response ){
        var data = request.allParams.limit;
        var criteria = null
        if( data ) {
            criteria = {where: {activo: true}, limit: data};
        } else {
            criteria = {where: {activo: true}};
        }
        Promocion.find(criteria).sort({"updatedAt":"desc"}).then(function (promociones) {
            return response.json(promociones);
        }).catch(function (err) {
            console.error("Error al buscar promociones por limite :: ", err);
        });
    },

    findById: function(request, response ){
        var data = request.allParams().id;
        console.log("data.: ", data);
        Promocion.findOne({promocionId:data, activo:true}).then(function (promocion) {
            console.log("==>", promocion)
            return response.json(promocion);
        }).catch(function (err) {
            console.error("Error al buscar promociones por id :: ",err);
        });
    },

    viewPromocion: function(req,res){
        var id = req.param('id');
        console.log(id)
        Promocion.findOne({promocionId:id}).then(function(data){
            if(!data)return res.view("404");
            res.view(
                'promocion/detail',
                {
                    layout:'liteLayout',
                    metas:{
                        title : data.titulo,
                        image : data.imagenesUrls,
                        description : data.descripcionCorta
                    },
                    promocion : data
                }
            )
        }).fail(function(err){
            console.error(err);
            res.view('500')
        });
    }
};

