angular.module('kupon.business', [])
.service('$kuponServices', function( $q, $http){

    var promociones = null;
    var estados = null;

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
        /*
        return $http.post(GET_PROMOS_ESTADO_WS, {estadoId:estadoId}).then(function(result) {
            console.log("PROMOS POR ESTADO BD >>> ", result.data );
            return $db.query( DOC_PROMOS ).then(function(doc) {
                return $db.db.put({_id: DOC_PROMOS, _rev: doc._rev, promociones: result.data.promociones })
                    .then(function(resultUpd){
                        resultUpd.data = result.data.promociones;
                        return resultUpd;
                    });
            }, function(err) {
                if(err.status ===  404 ){
                    // El documento no existe, lo creamos
                    console.log("El documento no existe, lo creamos");
                    return $db.insert({_id:DOC_PROMOS,promociones:result.data.promociones});
                }else{
                    throw err;
                }
            });

        });
        */
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
        $http.get(ESTADOS_ALL_WS).then(function(resultWS){
            estados = resultWS.data;
        });
    }

    this.getEstados = function(){
        return estados;
    }


    this.getCategorias = function(){
        return $http.post(CATEGORIAS_WS)
        .then(function(result){
                //console.log(" Categorias encontradas:: ", result.data);
                return result.data;
            })
        .catch(function(err){
                console.error("Error al cargar las categorias:: ", err)
                return err;
            });
    }

})







