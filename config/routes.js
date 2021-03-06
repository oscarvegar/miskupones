/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/provlogin': 'AuthController.login',
  '/userapp': 'AuthController.loginUserapp',

  'get /logout': 'AuthController.logout',
  'get /logoutKupones': 'AuthController.logoutKupones', 
  'get /register': 'AuthController.register',
  'get /forgot': 'AuthController.forgot',
  'get /resetview/:id' : 'AuthController.reestablecerview',
  'get /activate/:id' : 'AuthController.activate',

  'post /auth/local': 'AuthController.callback',
  'post /auth/local/:action': 'AuthController.callback',
  'post /forgot': 'AuthController.resetPassword',
  'post /reset' : 'AuthController.reestablecerPwd',
  'post /changepass' : 'AuthController.changepass',
  'post /loginapp' : 'AuthController.loginApp',

  'get /auth/:provider': 'AuthController.provider',
  'get /auth/:provider/callback': 'AuthController.callback',
  'get /auth/:provider/:action': 'AuthController.callback',

  'get /getperfil': 'AuthController.getperfil',
  'post /updateperfil': 'AuthController.updateperfil',
  'get /getdashboard/:fechaInicial/:fechaFinal': 'DashboardController.getdashboard',
  'get /getdashboardxmes/:fechaInicial/:fechaFinal': 'DashboardController.getdashboardxmes',
  'get /getdashboardanual/:fechaInicial/:fechaFinal': 'DashboardController.getdashboardanual',
  'get /getdashboardcompartidos/:fechaInicial/:fechaFinal': 'DashboardController.getdashboardcompartidos',
  'get /getdashboardlikes/:fechaInicial/:fechaFinal': 'DashboardController.getdashboardlikes',
  'get /getdashboardso/:fechaInicial/:fechaFinal': 'DashboardController.getdashboardso',
  'get /dashboardmapa/:fechaInicial/:fechaFinal': 'DashboardController.dashboardmapa',
  'get /v/promocion/:id' : 'PromocionController.viewPromocion',
  'post /notify/payment' : 'VentaController.notify',

  '/': {
    controller: 'MainController',
    action:'root'
  },
  '/index.html': {
    view:'default'
  },
  '/home': {
    controller: 'MainController',
    action:'home'
  },
  '/charts': {
      controller: 'ChartController',
      action: 'show'
   },


  /***************************************************************************
  *                                                                          *
  * José Daniel Routes                                                       *
  *                                                                          *
  ***************************************************************************/
  'post /kupon/create': 'PromocionController.createKupon',
  'get /kupon/readAll': 'PromocionController.readAllKupons',
  'get /kupon/view/:kuponId': 'PromocionController.viewKupon',
  'put /kupon/update/:kuponId': 'PromocionController.updateKupon',
  // 'post /kupon/update/:kuponId': 'PromocionController.updateKupon',
  'delete /kupon/delete/:kuponId': 'PromocionController.deleteKupon',
  'get /kupon/image/:imgId': 'PromocionController.imageKupon',

  'get /categoria/readAll': 'CategoriaController.readAllCategorias',
  'get /categoria/view/:categoriaId': 'CategoriaController.viewCategoria',
  'get /categoria/filterById/:categoriaId': 'CategoriaController.filterCategoriaById',
  'get /subcategoria/readAllBy/:categoriaId': 'SubcategoriaController.readAllSubCategoriasBy'

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  *  If a request to a URL doesn't match any of the custom routes above, it  *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
