angular.module('kupon.business', [])
.service('$kuponServices', function( $q, $http){

    var promociones = null;
    var estados = null;
    var categorias = null;
    var subcategorias = null;
    var cliente = null;

    this.loadCliente = function(){
        return $http.post( CLIENTE_INSESSION_WS).then(function(result){
            console.log("Se cargo el cliente :::::: ", result.data);
            cliente = result.data;
        });
    }

    this.getCliente = function(){
        return cliente;
    }

    this.getPromociones = function(){
        return promociones;
    }

    this.setPromociones = function( promos ){
        promociones = promos;
    }

	this.initApp = function( ) {
        console.log("PROMOS: ", GET_PROMOS_WS);
        return $http.post(GET_PROMOS_WS).then(function(result) {
            //console.log("Data >>> ", result.data );
            localStorage[ LOCAL_ESTADO_SELECTED ] = result.data.estadoId;
            promociones = result.data;
            return result.data;
        });
	}

    this.getPromosPorEstado = function( estadoId ){
        return $http.post(GET_PROMOS_ESTADO_WS, {estadoId:estadoId}).then(function(result) {
            console.log("PROMOS POR ESTADO BD >>> ", result.data );
            return result.data;
        });
    }

    this.getPromosPorTitulo = function( criterio, promociones ) {
        if( criterio === "*" ){
            console.log("Regresando todas las promociones");
            return promociones;
        }
        var promocionesEncontradas = [];
        for(var i = 0; i < promociones.length; i++){
            if( promociones[i].titulo.toUpperCase().indexOf( criterio.toUpperCase() ) >= 0 ) {
                promocionesEncontradas.push( promociones[i] );
            }
        }
        console.log("Regresando todas las promociones encontradas");
        return promocionesEncontradas;
    }

    this.registraUsuario = function( user ) {
        return $db.query( DOC_USER ).then(function(doc) {
            // El documento existe, lo borramos primero
            console.log("user :::::: ", user);
            console.log("El documento del usuario existe :: ", doc);
            console.log("El documento existe, lo actualizamos en doc : " + DOC_USER );
            return $db.db.put({_id: DOC_USER, _rev: doc._rev, user: user })
                .then(function(resultUpd){
                    return user;
                });
        }, function(err) {
            if(err.status ===  404 ){
                // El documento no existe, lo creamos
                console.log("El documento no existe, lo creamos");
                return $db.insert({_id:DOC_USER,user:user});
            }else{
                throw err;
            }
        });
    }

    this.actualizarCantidadPromo = function( cantidad, index){
        console.log("Actualizando la promo con index :: " + index + " y la cantdiad:: " + cantidad );
        return $db.query( DOC_PROMOS ).then( function(result){
            console.log("Promos encontradas: ", result)
            result.promociones[index].cantidadCreados += eval(cantidad);
            console.log("nueva cantidad en creados: ", result.promociones[index].cantidadCreados )
            return $db.db.put({_id: DOC_PROMOS, _rev: result._rev, promociones: result.promociones })
                .then(function(resultUpd){
                    resultUpd.data = result.data;
                    return resultUpd;
                });
        });
    }

    this.loadEstados = function(){
        return $http.get(ESTADOS_ALL_WS).then(function(resultWS){
            estados = resultWS.data;
            return estados;
        });
    }

    this.getEstados = function(){
        return estados;
    }


    this.loadCategorias = function(){
        $http.post(CATEGORIAS_WS).then(function(result){
            console.log(" Categorias encontradas xxx:: ", result.data);
            categorias = result.data.categorias;
            subcategorias = result.data.subcategorias;
        }).catch(function(err){
            console.error("Error al cargar las categorias:: ", err)
            throw err;
        });
    }

    this.getCategorias = function(){
        return categorias;
    }

    this.getSubCategorias = function(){
        return subcategorias;
    }

})







