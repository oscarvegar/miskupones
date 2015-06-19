/**
 * ShareController
 *
 * @description :: Server-side logic for managing Shares
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	fb:function(req,res){
		var id = req.param('id');
		Promocion.findOne({promocionId:id}).then(function(data){
			console.log(data)
			if(!data.fbshare)data.fbshare = 1;
			else data.fbshare++;
			data.save();
			res.json({code:0})
		})
	}
};

