angular.module("miskupones.controllers",["chart.js"])
.controller('CuponesCtrl',function($http,$scope,$rootScope){
	$rootScope.showSpinner = true;

		//******temporal, solo prueba
		/*
		$http.post("/newUser/", {email:'oscar@gmail.com', password:'123123', username:'Pepe'})
			.then(function(result){
				alert("inserto :: " + JSON.stringify(result.data) );
			});
		*/
		//** Si ves esto, borralo


	$scope.$evalAsync(function() { 
		$http.get("/dashboard/mapa")
		.success(function(data){
			$('#map').vectorMap({
				map: 'Mexico',
				series: {
					regions: [{
						values: data.colors,
							attribute: 'fill',

							normalizeFunction: 'polynomial'
						}]
					},
				backgroundColor: '#eef3f7',
				onRegionLabelShow: function(e, el, code){
					console.log(code);
					var text = data.labels[code]?data.labels[code]:'0 Ventas';
					el.html(el.html()+': '+text);
				},
				regionStyle: {
					initial: {
						fill: 'gray'
					},
					hover: {
						fill: "#A0D1DC"
					}
				}
			});
		})
		
	});



})
.controller("DashboardCtrl",function($scope){
	$scope.line = {};
 	$scope.line.labels = ["1/06", "2/06", "3/06", "4/06", "5/06", "6/06", "7/06"];
  	$scope.line.series = ['Kupon #123', 'Kupon #52', 'Kupon #16'];
	$scope.line.data = [
	  [65, 59, 80, 81, 56, 55, 40],
	  [28, 48, 40, 19, 86, 27, 90],
	  [10, 20, 30, 5, 15, 60, 100],
	];
	$scope.line.onClick = function (points, evt) {
	  console.log(points, evt);
	};

	$scope.polar = {};
	$scope.polar.labels = ["Kupon #1", "Kupon #2", "Kupon #3","Kupon #4","Kupon #5"];
  	$scope.polar.data = [300, 500, 100, 40, 120];

  	$scope.bar = {}
  	 $scope.bar.labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',];
	  $scope.bar.series = ['Ventas en miles de pesos'];

	  $scope.bar.data = [
	    [65, 59, 80, 81, 56, 55, 40]
	  ];

  	$scope.bardis = {}
  	 $scope.bardis.labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',];
	  $scope.bardis.series = ['IOS','Android','Windows'];

	  $scope.bardis.data = [
	    [65, 59, 80, 81, 56, 55, 40],
	    [25, 79, 50, 21, 40, 85, 60],
	    [35, 19, 70, 51, 26, 45, 80]
	  ];


  	$scope.lineyr = {};
 	$scope.lineyr.labels = ["Enero 14","Febrero 14","Marzo 14","Abril 14","Mayo 14","Junio 14","Julio 14",
 		"Agosto 14","Septiembre 14","Octubre 14","Noviembre 14","Diciembre 14","Enero 15","Febrero 15","Marzo 15","Abril 15","Mayo 15","Junio 15"];
  	$scope.lineyr.series = ['Ventas en miles de pesos'];
	$scope.lineyr.data = [
	  [65, 59, 80, 81, 56, 55, 40,20,60,40,90,30,15,35,10,60,90,100]
	];
	$scope.lineyr.onClick = function (points, evt) {
	  console.log(points, evt);
	};
})