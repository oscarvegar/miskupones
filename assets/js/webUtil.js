var webUtil = {

  save: function( key, value ){
    console.log("type value save >> " + typeof(value) );
    if( typeof(value) === "string") {
      localStorage[key] = value;
    }else{
      localStorage[key] = JSON.stringify(value);
    }
  },

  getJSON: function( key ){
    if( localStorage[key]  ) {
      return JSON.parse(localStorage[key]);
    }
    return null;
  },

  get: function(key){
    return localStorage[key];
  },

  getCurrentUrl:function(){
    return window.location.href;
  }

};
