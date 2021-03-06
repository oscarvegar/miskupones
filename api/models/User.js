var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    username  : { type: 'string', unique: true },
    email     : { type: 'email',  unique: true },
    passports : { collection: 'Passport', via: 'user' },
    resetcode : 'string',
    activationcode : 'string',
    status : {type:'integer',defaultsTo:-1},
    proveedor: {
      model: 'Proveedor',
      columnName: 'proveedor_id'
    },
    cliente: {
      model:"Cliente",
      columnName: 'cliente_id'
    },
    perfil:'string'
  },
  	beforeCreate: function(user, next){
      var code = new Date().getTime();
      code = code *  Math.random();
      code = code.toString(16);
      user.activationcode = code;
      var options = {};
      options.to = user.email;
      options.subject = "Bienvenido a MisKupones";
      if( user.status === 1 ){
          options.html =  "<h3>Felicidades! ahora eres parte de MisKupones</h3>\
        <br><br>\
        Tu usuario registrado es: <b>"+ user.username + "</b> \
        <br><br>\
        Tenemos muchas promociones para ti, esperalas!!!" +
          "<br><br>\
          Feliz día te desea el Equipo Tus Kupones";
      }else {
          options.html = "<h3>Felicidades! ahora eres parte de MisKupones</h3>\
        <br><br>\
        Para activar tu cuenta da clic en el siguiente link:\
        <br><br>\
        http://miskupones.com/activate/"
          + code +
          "<br><br>\
          Feliz día te desea el Equipo Tus Kupones";
      }
        MailService.send(options)
        next();
	}   

};

module.exports = User;
