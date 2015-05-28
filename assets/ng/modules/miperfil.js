angular.module("miskupones.perfil",[])
.controller('PerfilCtrl',function($http,$scope,$rootScope,$route){
	console.log("PERFIL CTRL")
	$scope.user = {};
	$scope.block=true;
	$scope.estados = ["Aguascalientes","Baja California","Baja California Sur","Campeche","Coahuila","Colima","Chiapas","Chihuahua","Distrito Federal","Durango",
	                   "Guanajuato","Guerrero","Hidalgo","Jalisco","México","Michoacán","Morelos","Nayarit","Nuevo León","Oaxaca",
	                   "Puebla","Querétaro","Quintana Roo","San Luis Potosí","Sinaloa","Sonora","Tabasco","Tamaulipas","Tlaxcala","Veracruz",
	                   "Yucatán","Zacatecas"];

	$scope.ciudades = ["Aguascalientes","Mexicali","La Paz","Campeche","Saltillo","Colima","Tuxtla Gutiérrez","Chihuahua","Ciudad de México","Durango",
	                   "Guanajuato","Chilpancingo","Pachuca","Guadalajara","Toluca","Morelia","Cuernavaca","Tepic","Monterrey","Oaxaca",
	                   "Puebla","Querétaro","Chetumal","San Luis Potosí","Culiacán","Hermosillo","Villahermosa","Ciudad Victoria","Tlaxcala","Xalapa",
	                   "Mérida","Zacatecas"];

	$scope.init = function() {

  	$http.get("/getperfil").success(function (data){
            $scope.user = data;
            var fechaNac = $scope.user.fechaNacimiento;
            $scope.user.fechaNacimiento = fechaNac.substring(0,10);
     });

	};

	$scope.init();
	
	$scope.perfil = function(){

		$http.post("/updateperfil",$scope.user)
		.success(function(data){
				$http.get("/getperfil").success(function (data){
					$scope.user = data;
					var fechaNac = $scope.user.fechaNacimiento;
                    $scope.user.fechaNacimiento = fechaNac.substring(0,10);
					$rootScope.modal.title = "Éxito";
					$rootScope.modal.msg = "Se han actualizado los datos correctamente.";
					$('#myModal').modal('show');
			     });
			
		}).error(function(err){
			console.error(err);
		})



	};
});


app.directive('uiDate', function ($parse) {
    return function (scope, element, attrs, controller) {
        var ngModel = $parse(attrs.ngModel);
        $(function(){
            element.datepicker({
                changeYear:true,
                changeMonth:true,
                dateFormat:'yy-mm-dd',
                maxDate: new Date(),
                yearRange: '1920:new Date().getFullYear()',
                onSelect:function (dateText, inst) {
                    scope.$apply(function(scope){
                        // Change binded variable
                        ngModel.assign(scope, dateText);
                    });
                }
            });
        });
    }
});