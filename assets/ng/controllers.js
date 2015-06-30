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
/*
$scope.$evalAsync(function() { 
    $http.get('/dashboardmapa/'+fechaFin+'/'+ fechaInicio)
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
    
  });*/




})
.controller("DashboardCtrl",function($scope,$http){
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


    var d = new Date();
    var anio = d.getFullYear();
    var mes =  d.getMonth();
    var dia = d.getDate()+1;
    var aniofin = d.getFullYear();
    var mesfin =  d.getMonth()-1;
    var diafin =  d.getDate();
    var aniofin2 = d.getFullYear()-2;
    
    if(mes == '0'){
      mes = '01';
    }else if(mes == '1'){
      mes = '02';
    }else if(mes == '2'){
      mes = '03';
    }else if(mes == '3'){
      mes = '04'; 
    }else if(mes == '4'){
      mes = '05';
    }else if(mes == '5'){
      mes = '06';
    }else if(mes == '6'){
      mes = '07';
    }else if(mes == '7'){
      mes = '08';
    }else if(mes == '8'){
      mes = '09';
    }else if(mes == '9'){
      mes = '10';
    }else if(mes == '10'){
      mes = '11';
    }else if(mes == '11'){
      mes = '12';
    }
    
    
    if(mesfin == '0'){
      mesfin = '01';
    }else if(mesfin == '1'){
      mesfin = '02';
    }else if(mesfin == '2'){
      mesfin = '03';
    }else if(mesfin == '3'){
      mesfin = '04';
    }else if(mesfin == '4'){
      mesfin = '05';
    }else if(mesfin == '5'){
      mesfin = '06';
    }else if(mesfin == '6'){
      mesfin = '07';
    }else if(mesfin == '7'){
      mesfin = '08';
    }else if(mesfin == '8'){
      mesfin = '09';
    }else if(mesfin == '9'){
      mesfin = '10';
    }else if(mesfin == '10'){
      mesfin = '11';
    }else if(mesfin == '11'){
      mesfin = '12';
    }

    $scope.dia = dia;
    $scope.mes = mes;
    $scope.anio = anio; 
    $scope.diafin = diafin;
    $scope.mesfin = mesfin;
    $scope.aniofin = aniofin;   

    var fechaInicial = new Date(anio,mes-1,dia);
    var fechaFinalOrigen = new Date(aniofin,mesfin-1,diafin);
    var fechaInicio = anio+'-'+mes+'-'+dia;
    var fechaFin = aniofin+'-'+mesfin+'-'+diafin;
    var fechaFin2 = aniofin2+'-'+mesfin+'-'+diafin;

    $scope.fechaInicio = fechaInicio;
    $scope.fechaFin = fechaFin;
    $scope.fechaFin2 = fechaFin2;
    
    console.log("Fechas de Origen");

    console.log(fechaInicial);
    console.log(fechaFinalOrigen);
    


    $http.get('/getdashboard/'+fechaFin+'/'+ fechaInicio).success(function(data) {
                console.log("Grafica Ventas");

                $scope.ventasKupon=data;

                console.log($scope.ventasKupon);

                var fechaMinima = fechaFinalOrigen;    
                var fechaFinal = fechaInicial;

                var ventas = [];
                var tmpStrDate = "";
                var dataArreglo = {};
                var idVenta = "";
                var idVentaKupon = "";
    

    
                var idpromocion = 0;

                for (var i = 0; i < $scope.ventasKupon.length; i++) {

                    idVenta = $scope.ventasKupon[i].promocion;
                    idVentaKupon = $scope.ventasKupon[i].promocion;
                
                   if(dataArreglo[idVenta]) {
                        var arrFecha = [];

                        tmpStrDate = Date.UTC($scope.ventasKupon[i].fecha.substring(0,4),  $scope.ventasKupon[i].fecha.substring(5,7)-1,   $scope.ventasKupon[i].fecha.substring(8,10));
                        arrFecha.push(tmpStrDate,$scope.ventasKupon[i].total);  

                        ventas[idpromocion].data.push(arrFecha);     



                    } else {
                        dataArreglo[idVentaKupon] = idVenta;

                         ventas.push({
                            name: "Kupon#"+$scope.ventasKupon[i].promocion, data:[[Date.UTC($scope.ventasKupon[i].fecha.substring(0,4),  $scope.ventasKupon[i].fecha.substring(5,7)-1,   $scope.ventasKupon[i].fecha.substring(8,10)),$scope.ventasKupon[i].total]]
                        });
                         
                          idpromocion = ventas.length-1;

                    }    
                    
                }


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
                            type: 'datetime',
                            tickInterval: 24 * 3600 * 1000,
                             tickPixelInterval: 2000000,
                            dateTimeLabelFormats: {
                                month: '%b\ %y',
                                day: '%e. %b',
                                year: '%Y'
                            },
                            title: {
                                text: 'Fecha'
                            }
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
                        series: ventas
                    });


             }).error(function(data, status, headers, config) {
                 console.log("Error Servicio");

             }); //Termina Genero General 





	//Cupones Compartidos
  console.log("FECHAS");
  console.log(fechaInicio);
  console.log(fechaFin);
  console.log(fechaFin2);


    $http.get('/dashboardmapa/'+fechaFin+'/'+ fechaInicio)
    .success(function(data){
     
      $scope.mapa=data;

      
      var labels = {};
      var colors = {};


      for (var i = 0; i < $scope.mapa.length; i++) {

        
           var myVar = $scope.mapa[i].estado;

           labels[myVar] =  $scope.mapa[i].total + " pesos";


           colors[myVar] =  $scope.mapa[i].color;

               
      }

 /*  labels=[{ "PUE" :'100 ventas',
      "CHH" :'200 ventas',
      "BCS" :"300 ventas" 
   }];
     
    colors=[{
      "PUE" :"#33CC00",
      "CHH" :'#339900',
      "BCS" :"#336600"
    }];


     console.log(labels);
     console.log(colors);
    

var data = {};
  for (var i = 0; i < labels.length; ++i){

    data.labels =  labels[i];
  }

   for (var i = 0; i < colors.length; ++i){

    data.colors = colors[i];
  }
    */


      $('#map').vectorMap({
        map: 'Mexico',
        series: {
          regions: [{
            values: colors,
              attribute: 'fill',

              normalizeFunction: 'polynomial'
            }]
          },
        backgroundColor: '#eef3f7',
        onRegionLabelShow: function(e, el, code){
          console.log(code);
          var text = labels[code]?labels[code]:'0 Ventas';
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
    });
    
  


  $http.get('/getdashboardcompartidos/'+fechaFin+'/'+ fechaInicio).success(function(data) {
    console.log("Kupones Compartidos");

      $scope.compartidos=data;

      var kuponesCompartidos = [];

      for (var i = 0; i < $scope.compartidos.length; i++) {

           kuponesCompartidos.push({
              type: 'column', name: "Kupon#"+$scope.compartidos[i].promocion, data:[$scope.compartidos[i].compartidos],pointPlacement: 'on'
          });
               
      }


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

        series: kuponesCompartidos

    });

    }).error(function(data, status, headers, config) {
                 console.log("Error Servicio");

    }); //Termina Kupones Compartidos



    // Inicia Dashboard por mes
    $http.get('/getdashboardxmes/'+fechaFin+'/'+ fechaInicio).success(function(data) {
    
        $scope.VentasMes=data;
        console.log("Grafica Ventas x mes ");



        var arrMeses = [];
        var arrTotal =[];


        for (var i = 0; i < $scope.VentasMes.length; i++) {

            if($scope.VentasMes[i].meses == '1'){
             $scope.VentasMes[i].meses = 'Enero';
            }else if($scope.VentasMes[i].meses == '2'){
              $scope.VentasMes[i].meses = 'Febrero';
            }else if($scope.VentasMes[i].meses == '3'){
              $scope.VentasMes[i].meses = 'Marzo';
            }else if($scope.VentasMes[i].meses == '4'){
              $scope.VentasMes[i].meses = 'Abril';
            }else if($scope.VentasMes[i].meses == '5'){
              $scope.VentasMes[i].meses = 'Mayo';
            }else if($scope.VentasMes[i].meses == '6'){
              $scope.VentasMes[i].meses = 'Junio';
            }else if($scope.VentasMes[i].meses == '7'){
              $scope.VentasMes[i].meses = 'Julio';
            }else if($scope.VentasMes[i].meses == '8'){
              $scope.VentasMes[i].meses = 'Agosto';
            }else if($scope.VentasMes[i].meses == '9'){
              $scope.VentasMes[i].meses = 'Septiembre';
            }else if($scope.VentasMes[i].meses == '10'){
              $scope.VentasMes[i].meses = 'Octubre';
            }else if($scope.VentasMes[i].meses == '11'){
              $scope.VentasMes[i].meses = 'Noviembre';
            }else if($scope.VentasMes[i].meses == '12'){
              $scope.VentasMes[i].meses = 'Diciembre';
            }


            arrMeses.push($scope.VentasMes[i].meses);
                            
            arrTotal.push($scope.VentasMes[i].total)
        }



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
                  categories: arrMeses,
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
                  data: arrTotal

              }]
          });

     }).error(function(data, status, headers, config) {
                 console.log("Error Servicio ");

     }); //Termina Dashboard x Mes


    
    // Ventas por SO
 $http.get('/getdashboardso/'+fechaFin+'/'+ fechaInicio).success(function(data) {

    console.log("kupones SO");

    $scope.VentasMes = data;

    var arrMeses = [];
    var arrTotalA =[];
    var arrTotalI =[];
    var arrTotalW=[];
    var arrTotalB =[];


    for (var i = 0; i < $scope.VentasMes.length; i++) {

        if($scope.VentasMes[i].meses == '1'){
         $scope.VentasMes[i].meses = 'Enero';
        }else if($scope.VentasMes[i].meses == '2'){
          $scope.VentasMes[i].meses = 'Febrero';
        }else if($scope.VentasMes[i].meses == '3'){
          $scope.VentasMes[i].meses = 'Marzo';
        }else if($scope.VentasMes[i].meses == '4'){
          $scope.VentasMes[i].meses = 'Abril';
        }else if($scope.VentasMes[i].meses == '5'){
          $scope.VentasMes[i].meses = 'Mayo';
        }else if($scope.VentasMes[i].meses == '6'){
          $scope.VentasMes[i].meses = 'Junio';
        }else if($scope.VentasMes[i].meses == '7'){
          $scope.VentasMes[i].meses = 'Julio';
        }else if($scope.VentasMes[i].meses == '8'){
          $scope.VentasMes[i].meses = 'Agosto';
        }else if($scope.VentasMes[i].meses == '9'){
          $scope.VentasMes[i].meses = 'Septiembre';
        }else if($scope.VentasMes[i].meses == '10'){
          $scope.VentasMes[i].meses = 'Octubre';
        }else if($scope.VentasMes[i].meses == '11'){
          $scope.VentasMes[i].meses = 'Noviembre';
        }else if($scope.VentasMes[i].meses == '12'){
          $scope.VentasMes[i].meses = 'Diciembre';
        }


        arrMeses.push($scope.VentasMes[i].meses);
                        
        arrTotalA.push($scope.VentasMes[i].Android);

        arrTotalI.push($scope.VentasMes[i].iPhone);

        arrTotalW.push($scope.VentasMes[i].Windows);

        arrTotalB.push($scope.VentasMes[i].BlackBerry);


    }


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
                categories: arrMeses,
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
                  '<td style="padding:0"><b>{point.y:.0f} ventas</b></td></tr>',
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
            series: [

              {
                  name: 'Android',
                  data: arrTotalA

              },

              {
                  name: 'iPhone',
                  data: arrTotalI

              },
              {
                  name: 'Windows',
                  data: arrTotalW

              },
              {
                  name: 'BlackBerry',
                  data: arrTotalB

              }


            ]
        });

     }).error(function(data, status, headers, config) {
                 console.log("Error Servicio ");

    }); //Termina Dashboard SO


      // Inicia Dashboard Anual
    $http.get('/getdashboardanual/'+fechaFin2+'/'+ fechaInicio).success(function(data) {
                
        $scope.VentasAnual=data;
        console.log("Grafica Ventas Anual");


        var arrMeses = [];
        var arrTotal =[];


        for (var i = 0; i < $scope.VentasAnual.length; i++) {

            if($scope.VentasAnual[i].meses == '1'){
             $scope.VentasAnual[i].meses = 'Enero';
            }else if($scope.VentasAnual[i].meses == '2'){
              $scope.VentasAnual[i].meses = 'Febrero';
            }else if($scope.VentasAnual[i].meses == '3'){
              $scope.VentasAnual[i].meses = 'Marzo';
            }else if($scope.VentasAnual[i].meses == '4'){
              $scope.VentasAnual[i].meses = 'Abril';
            }else if($scope.VentasAnual[i].meses == '5'){
              $scope.VentasAnual[i].meses = 'Mayo';
            }else if($scope.VentasAnual[i].meses == '6'){
              $scope.VentasAnual[i].meses = 'Junio';
            }else if($scope.VentasAnual[i].meses == '7'){
              $scope.VentasAnual[i].meses = 'Julio';
            }else if($scope.VentasAnual[i].meses == '8'){
              $scope.VentasAnual[i].meses = 'Agosto';
            }else if($scope.VentasAnual[i].meses == '9'){
              $scope.VentasAnual[i].meses = 'Septiembre';
            }else if($scope.VentasAnual[i].meses == '10'){
              $scope.VentasAnual[i].meses = 'Octubre';
            }else if($scope.VentasAnual[i].meses == '11'){
              $scope.VentasAnual[i].meses = 'Noviembre';
            }else if($scope.VentasAnual[i].meses == '12'){
              $scope.VentasAnual[i].meses = 'Diciembre';
            }


            arrMeses.push($scope.VentasAnual[i].meses + "-" + $scope.VentasAnual[i].anios);
                            
            arrTotal.push($scope.VentasAnual[i].total)
        }



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
                  categories: arrMeses
              },
              yAxis: {
                  title: {
                      text: 'Ventas'
                  }
              },
              tooltip: {
                  shared: true,
                  valueSuffix: ' pesos'
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
                  data: arrTotal
              }]
          });

    }).error(function(data, status, headers, config) {
                 console.log("Error Servicio");

    }); //Termina Dashboard Anual

      // inicia Dashboard Likes
      $http.get('/getdashboardlikes/'+fechaInicial.getTime()+'/'+ fechaFinalOrigen.getTime()).success(function(data) {
        console.log("kupones likeados");

        $scope.likeados=data;

        var kuponesLike = [];

        for (var i = 0; i < $scope.likeados.length; i++) {

             kuponesLike.push({
                type: 'column', name: "Promocion#"+$scope.likeados[i].promocion, data:[$scope.likeados[i].total],pointPlacement: 'on'
            });
                 
        }

        $('#KuponesLikes').highcharts({

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
              categories: ['Likeados'],
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

          series: kuponesLike

      });

    }).error(function(data, status, headers, config) {
                 console.log("Error Servicio");

    }); //Termina Dashboard Likes



})