/**
 * ChartController
 *
 * @description :: Server-side logic for managing Charts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	show:function(req,res){
		console.info("ENTRA A CTRL CHART");
		res.view('graphics',{ layout: 'emptyLayout' });

	}
};

