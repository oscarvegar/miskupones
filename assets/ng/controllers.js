angular.module("miskupones.controllers",["chart.js",'highcharts-ng'])
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

    
    //Venta de Kupones

	$('#ventaKupones').highcharts({
        title: {
            text: '',
            x: -20
        },
        subtitle: {
            text: '',
            x: -20
        },
         credits: {
            enabled: false
        },
        xAxis: {
            categories: ['1/06', '2/06', '3/06', '4/06', '5/06', '6/06',
                '7/06']
        },
        yAxis: {
            title: {
                text: 'Kupones Vendidos'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ' Kupones'
        },
        legend: {
            align: 'center',
        },
        series: [{
            name: 'Kupon#123',
            data: [7, 6, 9, 14, 18, 21, 25]
        }, {
            name: 'Kupon#13',
            data: [2, 8, 5, 11, 17, 22, 24]
        }, {
            name: 'Kupon#1',
            data: [9, 6, 3, 8, 13, 17, 19]
        }]
    });


	//Cupones Compartidos

	$('#KuponesCompartidos').highcharts({

        chart: {
            polar: true,
            type: 'line'
        },

        title: {
            text: '',
            x: -80
        },

        pane: {
            size: '100%'
        },
        credits:{
             enabled: false
        },
        xAxis: {
            categories: ['Compartidos'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'circle',
            lineWidth: 0,
            min: 0
        },

        tooltip: {
            shared: false,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },

        legend: {
            align: 'center',
            layout: 'horizontal'
        },

        series: [{
            type: 'column',
            name: 'Kupon#1',
            data: [300],
            pointPlacement: 'on'
        }, {
            type: 'column',
            name: 'Kupon#2',
            data: [100],
            pointPlacement: 'on'
        },{
            type: 'column',
            name: 'Kupon#3',
            data: [200],
            pointPlacement: 'on'
        },{
            type: 'column',
            name: 'Kupon#4',
            data: [50],
            pointPlacement: 'on'
        }]

    });


	//ventas x mes

	$('#ventasxmes').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        credits:{
             enabled: false
        },
        xAxis: {
            categories: [
                'Enero',
                'Febrero',
                'Marzo',
                'Abril',
                'Mayo',
                'Junio',
                'Julio'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Ventas'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} pesos</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Ventas en Miles de Pesos',
            data: [49, 71, 106, 129, 144, 176, 135]

        }]
    });


    // Ventas por dispositivo

 $('#ventasDispositivo').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        credits:{
             enabled: false
        },
        xAxis: {
            categories: [
                'Enero',
                'Febrero',
                'Marzo',
                'Abril',
                'Mayo',
                'Junio',
                'Julio'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Ventas'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} pesos</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'IOS',
            data: [49, 71, 106, 129, 144, 176, 135]

        }
        , {
            name: 'Android',
            data: [83, 78, 98, 93, 106, 84, 105]

        }, {
            name: 'Windows',
            data: [48, 38, 39, 41, 47, 48, 59]

        }]
    });


//ventas x año
  $('#ventasAnuales').highcharts({
        chart: {
            type: 'areaspline'
        },
        title: {
            text: ''
        },
        legend: {
            layout: 'vertical',
            align: 'center',
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            categories: [
                'Septiembre 14',
                'Octubre 14',
                'Noviembre 14',
                'Diciembre 14',
                'Enero 15',
                'Febrero 15',
                'Marzo 15'
            ]
        },
        yAxis: {
            title: {
                text: 'Ventas'
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' units'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'Ventas en miles de pesos',
            data: [3, 4, 3, 5, 4, 10, 12]
        }]
    });


})