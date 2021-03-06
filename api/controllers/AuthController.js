/**
 * Authentication Controller
 *
 * This is merely meant as an example of how your Authentication controller
 * should look. It currently includes the minimum amount of functionality for
 * the basics of Passport.js to work.
 */
var AuthController = {
  /**
   * Render the login page
   *
   * The login form itself is just a simple HTML form:
   *
      <form role="form" action="/auth/local" method="post">
        <input type="text" name="identifier" placeholder="Username or Email">
        <input type="password" name="password" placeholder="Password">
        <button type="submit">Sign in</button>
      </form>
   *
   * You could optionally add CSRF-protection as outlined in the documentation:
   * http://sailsjs.org/#!documentation/config.csrf
   *
   * A simple example of automatically listing all available providers in a
   * Handlebars template would look like this:
   *
      {{#each providers}}
        <a href="/auth/{{slug}}" role="button">{{name}}</a>
      {{/each}}
   *
   * @param {Object} req
   * @param {Object} res
   */
  login: function (req, res) {
    console.log("in login controller param m :: ", req.param("m"));
    var strategies = sails.config.passport
      , providers  = {};

    // Get a list of available providers for use in your templates.
    Object.keys(strategies).forEach(function (key) {
      if (key === 'local') {
        return;
      }

      providers[key] = {
        name: strategies[key].name
      , slug: key
      , icon: strategies[key].icon
      };
    });
    var msg="";

    if(req.param('m'))
      msg = "Tu cuenta se ha activado ya puedes iniciar sesión."
    // Render the `auth/login.ext` view
    res.view({
      layout:'liteLayout',
      providers : providers,
      errors    : req.flash('error'),
      msg       : msg
    });
  },

  loginUserapp: function (req, res) {
    var strategies = sails.config.passport
        , providers  = {};

    // Get a list of available providers for use in your templates.
    Object.keys(strategies).forEach(function (key) {
      if (key === 'local') {
        return;
      }

      providers[key] = {
        name: strategies[key].name
        , slug: key
        , icon: strategies[key].icon
      };
    });
    var msg="";

    if(req.param('m'))
      msg = "Tu cuenta se ha activado ya puedes iniciar sesión."
    // Render the `auth/login.ext` view
    res.view({
      layout:'liteAppLayout',
      providers : providers,
      errors    : req.flash('error'),
      msg       : msg
    });
  },

  /**
   * Log out a user and return them to the homepage
   *
   * Passport exposes a logout() function on req (also aliased as logOut()) that
   * can be called from any route handler which needs to terminate a login
   * session. Invoking logout() will remove the req.user property and clear the
   * login session (if any).
   *
   * For more information on logging out users in Passport.js, check out:
   * http://passportjs.org/guide/logout/
   *
   * @param {Object} req
   * @param {Object} res
   */
  logout: function (req, res) {
    req.logout();
    
    // mark the user as logged out for auth purposes
    req.session.authenticated = false;
    req.session.user = false;
    res.redirect('/provlogin');
  },

  logoutKupones: function (req, res) {
    req.logout();
    
    // mark the user as logged out for auth purposes
    req.session.authenticated = false;
    req.session.user = false;
    res.redirect('/userapp');
  },

  /**
   * Render the registration page
   *
   * Just like the login form, the registration form is just simple HTML:
   *
      <form role="form" action="/auth/local/register" method="post">
        <input type="text" name="username" placeholder="Username">
        <input type="text" name="email" placeholder="Email">
        <input type="password" name="password" placeholder="Password">
        <button type="submit">Sign up</button>
      </form>
   *
   * @param {Object} req
   * @param {Object} res
   */
  register: function (req, res) {
    res.view({
      errors: req.flash('error')
    });
  },

  /**
   * Create a third-party authentication endpoint
   *
   * @param {Object} req
   * @param {Object} res
   */
  provider: function (req, res) {
    passport.endpoint(req, res);
  },

  /**
   * Create a authentication callback endpoint
   *
   * This endpoint handles everything related to creating and verifying Pass-
   * ports and users, both locally and from third-aprty providers.
   *
   * Passport exposes a login() function on req (also aliased as logIn()) that
   * can be used to establish a login session. When the login operation
   * completes, user will be assigned to req.user.
   *
   * For more information on logging in users in Passport.js, check out:
   * http://passportjs.org/guide/login/
   *
   * @param {Object} req
   * @param {Object} res
   */
  callback: function (req, res) {

    function tryAgain (err,cerr) {

      // Only certain error messages are returned via req.flash('error', someError)
      // because we shouldn't expose internal authorization errors to the user.
      // We do return a generic error and the original request body.
      var flashError = req.flash('error')[0];
      if(cerr){
        req.flash('error', cerr);
      } else if (err && !flashError ) {
        req.flash('error', 'Error.Passport.Generic');
      } else if (flashError) {
        req.flash('error', flashError);
      }
      req.flash('form', req.body);

      // If an error was thrown, redirect the user to the
      // login, register or disconnect action initiator view.
      // These views should take care of rendering the error messages.
      var action = req.param('action');

      switch (action) {
        case 'register':
          if(req.param('wreck')){
            console.log("error registro ... ");
            res.json(403,{code:-1, error:err});
          }else{
            res.redirect('/provlogin');
          }
          break;
        case 'disconnect':
          res.redirect('back');
          break;  
        default:
          res.redirect('/provlogin');
      }
    }

    console.log(req.allParams())
    passport.callback(req, res, function (err, user, challenges, statuses) {
      console.log("En callback ....");
      if (err || !user) {
        console.log("en err y no user, ", err);
        if( req.param('wreck') ){
          return tryAgain(err, challenges);
        } else {
          return tryAgain(challenges);
        }
      }
      if( req.param('wreck') ){
        if(req.param('action')=='register'){
          user.perfil = Constantes.perfiles.APP;
          User.update({id:user.id},{perfil:Constantes.perfiles.APP}).then(console.info);
          //Cliente.create({user:user}).then(console.info)
        }
        return res.json(user);
      }else{
        console.log("ACTION >>>>>",req.action)
        console.log("USER >>>>>",user)
        if(req.param('action')=='register'){
          console.info("REGISTER DE PROVEEDOR >>>>>",user)
          user.perfil = Constantes.perfiles.PROVEEDOR;
          User.update({id:user.id},{perfil:Constantes.perfiles.PROVEEDOR}).then(console.info);
        }

      }

      if(!user.status || user.status<0) {
        console.log("en donde no hay estatus o es menor a 0")
        return tryAgain(err,"Tu usuario se encuentra inactivo, revisa tu email para activar tu cuenta.(No olvides revisar el spam)");
      }
      
      req.login(user, function (err) {
        if (err) {
          return tryAgain(err);
        }
        
        // Mark the session as authenticated to work with default Sails sessionAuth.js policy
        req.session.authenticated = true
        req.session.user = user;
        // Upon successful login, send the user to the homepage were req.user
        // will be available.
        // console.log("login seccess", user);
        if( user.perfil === "APP" ) {
          console.log("logged user app redirect promociones");
          res.redirect('/#/promociones');
        } else {
          res.redirect('/');
        }
      });
    });
  },

  /**
   * Disconnect a passport from a user
   *
   * @param {Object} req
   * @param {Object} res
   */
  disconnect: function (req, res) {
    passport.disconnect(req, res);
  },

  forgot:function(req,res){
    res.view('auth/forgot',{layout:'liteLayout'})
  },

  resetPassword:function(req,res){
    var mail = req.param('email');
    var code = new Date().getTime();
    code = code *  Math.random();
    code = code.toString(16);
    
    var options = {};
    options.to = mail;
    options.subject = "Reestablecer contraseña";
    options.html =  "<h3>Has solicitado reestablecer la contraseña</h3>\
      <br><br>\
      Si has sido tu, da clic en el siguiente link para reestablecer tu contraseña.\
      <br><br>\
      http://miskupones.com/resetview/"
      +code+
      "<br><br>\
      En caso de no haber sido tu, has caso omiso a este correo.\
      <br><br>\
      Excelente día te desea el equipo Mis Kupones";
    User.update({email:mail},{resetcode:code}).then(function(user){
      if(user.length > 0){
        MailService.send(options);
      }
      res.view('auth/forgot',{msg:"Hemos enviado un correo a tu cuenta, sigue los pasos para poder reestablecer tu contraseña"})
    })
  },

  solicitarCambioPasswordApp:function(req,res){
    var mail = req.param('email');
    var code = new Date().getTime();
    code = code *  Math.random();
    code = code.toString(16);
    console.log("Email a cambiar pwd tempora :", mail);
    var options = {};
    options.to = mail;
    options.subject = "Reestablecer contraseña";
    options.html =  "<h3>Has solicitado reestablecer la contraseña</h3>\
      <br><br>\
      Ingresa a la app usando la siguiente contraseña temporal .\
      <br><br>\
      contraseña: "
    +code+
    "<br><br>\
    Te recomendamos que una vez que ingreses a tu cuenta, cambies tu constraseña.\
    <br><br>\
    Excelente día te desea el equipo Mis Kupones";

    User.findOne({email:mail})
        .then(function(user){
          return user;
        })
        .then(function(user){
          if( !user ){
            return res.json( {error:true, msg:"El correo electrónico no existe"} );
          }

          return Passport.update({user:user.id},{password:code}).then(function(updatedUser){
            console.info("Cambio la contraseña usuario",updatedUser);
            MailService.send(options);
            User.update({id:user.id},{resetcode:null});
            return res.json({msg:"OK"});
          });

        })
        .catch(function(err){
          return res.json(500, {msg:"ERROR", error: err});
        });
  },

  reestablecerview:function(req,res){
    var id = req.param('id');
    req.errors = [];
    console.log("ID",id)
    User.findOne({resetcode:{$exists:true},resetcode:id}).then(function(user){
      console.log("USER",user)
      if(!user) return res.view(404);
      req.session.resetuser = user;
      res.view('auth/reset',{layout:'liteLayout'});
    })
  },

  reestablecerPwd:function(req,res){
    var pass = req.param('password');
    var user = req.session.resetuser;
    if(!user)user = req.session.user;
    if(!user)return res.view(404);
    Passport.update({user:user.id},{password:pass}).then(function(updatedUser){
      console.info("Cambio la contraseña usuario",updatedUser);
      User.update({id:user.id},{resetcode:null})
      return res.redirect("/provlogin");
    })
  },

  changepassview:function(req,res){
    res.view('reset','emptyLayout');
  },

  changepass:function(req,res){
    var anterior = req.param('actual');
    var nuevo = req.param('nueva');
    var user = req.session.user;
    var mail = req.session.email;
    Passport.findOne({user:user.id}).then(function(passport){
      passport.validatePassword(anterior,function(err,comp){
        if(comp == true){
          passport.password = nuevo;
          passport.save(function(respass){
            var options = {};
            options.to = mail;
            options.subject = "Cambio de contraseña";
            options.html =  "<h3>Hemos detectado un cambio de contraseña en tu cuenta.</h3>\
              <br><br>\
              En caso de no haber sido tu te recomendamos entres a la siguiente liga e inicies el proceso de recuperación de contraseña:\
              <br><br>\
              httl://miskupones.com/forgot\
              <br><br>\
              <h3>Atte. Equipo MisKupones</h3>";
            MailService.send(options);
            return res.json({code:0})
          })
        }else{
          return res.json(403,{});
        }

      });


    })
      
  },

  loginApp : function(req,res){
    console.info(req.allParams())
    passport.callback(req, res, function (err, user, challenges, statuses) {
      console.log("USER LOGIN",user)
      if (err || !user) {
        //return tryAgain(challenges);
        console.log("ERROR LOGIN ")
        return res.json(403,{});
      }
     
      console.log("USER",user);

      if( user.perfil !== "APP" ){
        return res.json(403, {msg:"El usuario no existe"})
      }

      req.login(user, function (err) {
        if (err) {
          return res.json(403)
        }
        
        // Mark the session as authenticated to work with default Sails sessionAuth.js policy
        req.session.authenticated = true
        req.session.user = user;
        // Upon successful login, send the user to the homepage were req.user
        // will be available.
        res.json(user)
      });
    });
  },

  logoutApp: function (req, res) {
    req.logout();
    // mark the user as logged out for auth purposes
    req.session.authenticated = false;
    req.session.user = false;
    res.json("OK");
  },

  activate:function(req,res){
    var id=req.param('id');
    User.findOne({status:-1,activationcode:id})
    .then(function(user){
      if(!user) return res.view(404);
      console.log("ACTIVATE USER: ", user);
      user.status=1;
      Proveedor.create({userId:user,username:user.username,email:user.email}).then(function(prov){
        user.proveedor = prov;
        user.save();
        Cliente.create({user:user.id}).then(function(cte){
          user.cliente = cte;
          user.save();
          if( user.perfil === "APP" ){
            res.redirect("/userapp?m=1")
          }else{
            res.redirect("/provlogin?m=1")
          }
        })
      })



    })

  },

  getperfil:function(req,res){    
    var user= req.session.user.username;
    Proveedor.findOne({username:user}).then(function(user,err){
      if(!user) return res.json(400,err);
      req.session.resetuser = user;
      res.json(user);
    })
  },


  updateperfil:function(req,res){

console.log("parametros aactualizar");
 var data = req.allParams();
      Proveedor.update({username:req.allParams().username},data).then(function(user){
          res.json(user);
      }).fail(function(err){
          console.log(err);
          res.send(500)
      })

  },





};

module.exports = AuthController;
