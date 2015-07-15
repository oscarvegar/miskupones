/**
 * Main AngularJS Web Application
 */
'use strict';

var module = angular.module('miskupones.kupones', [ 'ngFileUpload', 'oitozero.ngSweetAlert', 'daterangepicker', 'checklist-model' ]);	// , 'ngSails' ]);

/**
 * Configure the Routes
 */
module.config(function($routeProvider) {});
/*
//OPTIONAL! Set socket URL!
module.config(['$sailsProvider', function ($sailsProvider) {
    $sailsProvider.url = 'http://localhost:1337';
}]);

module.directive('input', ['$filter', function($filter){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		require: '?ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function(scope, iElm, iAttrs, ngModel) {
			if (!ngModel || (iAttrs.type !== "date" && iAttrs.type !== "datetime-local")) {
				console.log('queryType...' + iAttrs.type + '...noCoincide');
				return;
			}

            // Using AngularJS built in date filter, convert our date to RFC 3339
            ngModel.$formatters = [function(value) {
            	console.log('ngModel.$formatters.value..' + value);
            	console.log('ngModel.$formatters.boolDate..' + angular.isDate(value));
                return value && angular.isDate(value)
                    ? $filter('date')(value, 'yyyy-MM-dd')
                    : '';
            }];

            // Convert the string value to Date object.
            ngModel.$parsers = [function(value) {
            	console.log('ngModel.$parsers.value..' + value);
            	console.log('ngModel.$parsers.boolString..' + angular.isString(value));
                return value && angular.isString(value)
                    ? new Date(value)
                    : null;
            }];
		}
	};
}]);

module.directive('input', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		require: '?ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function(scope, element, attrs, ngModel) {
			if ( ( attrs.type == "date" || attrs.type == "datetime-local" ) && ngModel ) {
				element.bind('change', function () {
					scope.$apply(function() {
						ngModel.$setViewValue(element.val());
					});
				});
			}
		}
	};
});

module.directive('spinner', function() {
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			id: '@',
			group: '@?',
			showSpinner: '@?',
			loadingText: '@?',
			doneText: '@?',
			onRegisterComplete: '&?'
		}, // {} = isolate, true = child, false/undefined = no change
		controller: function($scope, $element, $attrs, $transclude, spinnerService) {
			// Register the spinner with the spinner service.
			spinnerService._register($scope);

			// Invoke the onRegisterComplete expression, if any.
			// Expose the spinner service for easy access.
			$scope.onRegisterComplete({ $spinnerService: spinnerService });
		},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		template: [
			//'<div>',
			'<span ng-show="{{showSpinner}}">',
			'  <img ng-show="{{showSpinner}}" src="/img/loading-orange-t2.gif" style="padding-right: 7px; width: {{ spinnerSize }}; position: absolute; left: 50%; top: 50%; display: block;" />',
			'  <span ng-show="{{loadingText && showSpinner}}">{{ loadingText }}</span>',
			'  <span ng-show="{{doneText && !showSpinner}}">{{ doneText }}</span>',
			'</span>'
			//,'</div>'
		].join(''),
		// templateUrl: '',
		replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			// Check for pre-defined size aliases and set pixel width accordingly.
			if (iAttrs.hasOwnProperty('size')) {
				iAttrs.size = iAttrs.size.toLowerCase();
			}
			switch (iAttrs.size) {
				case 'tiny':
					$scope.spinnerSize = '15px';
					break;
				case 'small':
					$scope.spinnerSize = '25px';
					break;
				case 'medium':
					$scope.spinnerSize = '35px';
					break;
				case 'large':
					$scope.spinnerSize = '64px';
					break;
				default:
					$scope.spinnerSize = '50px';
					break;
			}
		}
	};
});

*
 * The spinner-service is used by the spinner directive to register new spinners.
 * It's also used by anyone who wishes to interface with the API to hide/show spinners on the page.
 *
module.factory('spinnerService', function() {
	var cache = {};
	return {

		// A private function intended for spinner directives to register themselves with the service.
		_register: function(spinnerScope) {
			// If no id is passed in, throw an exception.
			if (!spinnerScope.id) {
				throw new Error("A spinner must have an ID to register with the spinner service.");
			}

			// Add our spinner directive's scope to the cache.
			cache[spinnerScope.id] = spinnerScope;
		},

		// A private function exposed just in case the user really needs to manually unregister a spinner.
		_unregister: function(spinnerId) {
			delete cache[spinnerId];
		},

		// A private function that will remove an entire spinner group if needed.
		_unregisterGroup: function(group) {
			for (var spinnerId in cache) {
				if (cache.hasOwnProperty(spinnerId)) {
					if (cache[spinnerId].group === group) {
						delete cache[spinnerId];
					}
				}
			}
		},

		// A private function that will clear out all spinners from the cache.
		_unregisterAll: function() {
			for (var spinnerId in cache) {
				if (cache.hasOwnProperty(pinnerId)) {
					delete cache[spinnerId];
				}
			}
		},

		// Show the specified spinner.
		// If loadingText is specified, replace the loadingText specified on the directive as we show the spinner.
		show: function(spinnerId, loadingText) {
			if (cache.hasOwnProperty(spinnerId)) {
				var spinnerScope = cache[spinnerId];
				spinnerScope.showSpinner = true;
				if (loadingText !== undefined) {
					spinnerScope.loadingText = loadingText;
				}
			}
		},

		// Hide the specified spinner.
		// If doneText is specified, replace the doneText specified on the directive as we hide the spinner.
		hide: function(spinnerId, doneText) {
			if (cache.hasOwnProperty(spinnerId)) {
				var spinnerScope = cache[spinnerId];
				spinnerScope.showSpinner = false;
				if (doneText !== undefined) {
					spinnerScope.doneText = doneText;
				}
			}
		},

		// Iterate over all spinners and invoke the show function on all in the specified group.
		// If the loadingText is specified, pass it to the show function on each one.
		showGroup: function(group, loadingText) {
			for (var spinnerId in cache) {
				if (cache.hasOwnProperty(spinnerId)) {
					var spinnerScope = cache[spinnerId];
					if (spinnerScope.group === group) {
						this.show(spinnerId, loadingText);
					}
				}
			}
		},

		// Iterate over all spinners and invoke the hide function on all in the specified group.
		// If the doneText is specified, pass it to the hide function on each one.
		hideGroup: function(group, doneText) {
			for (var spinnerId in cache) {
				if (cache.hasOwnProperty(spinnerId)) {
					var spinnerScope = cache[spinnerId];
					if (spinnerScope.group === group) {
						this.hide(spinnerId, doneText);
					}
				}
			}
		},

		// Iterate over all spinners and invoke the show function on each one.
		// If the loadingText is specified, pass it to the show function on each one.
		showAll: function(loadingText) {
			for (var spinnerId in cache) {
				if (cache.hasOwnProperty(spinnerId)) {
					this.show(spinnerId, loadingText);
				}
			}
		},

		// Iterate over all spinners and invoke the hide function on each one.
		// If doneText is specified, pass it to the hide function on each one.
		hideAll: function(doneText) {
			for (var spinnerId in cache) {
				if (cache.hasOwnProperty(spinnerId)) {
					this.hide(spinnerId, doneText);
				}
			}
		}

	};
})

module.filter('categoryById', function($http, $log, $timeout) {
	return function(categoryId) {
		$log.info('filterCategoryById :: ' + categoryId);
		if(categoryId) {
			$http.get('/categoria/filterById/' + categoryId)
				.success(function(data, status, headers, config) {
				// this callback will be called asynchronously
				// when the response is available
					$timeout(function() {
						console.log(data.categoria.descripcion);
						var rtrnStr = data.categoria.descripcion;
						return rtrnStr;
					});
				})
				.error(function(err, status, headers, config) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
					console.error(err);
				});
			} else {
				return '';
			}
	};
});
*/

module.filter('nl2br', ['$sce', function($sce){
	return function(text) {
		// return text ? text.replace(/\n/g, '<br>') : '';
		return text ? $sce.trustAsHtml(text.replace(/\n/g, '<br/>')) : '';
	};
}]);

module.run(['$location', '$rootScope', function($location, $rootScope) {
	$rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
		$rootScope.pageTitle = current.$$route.pageTitle;
	});
}]);

/**
 * Controls all other Pages
 */
module.controller('KuponesCtrl', function($scope, $location, $http, $route, $routeParams, $rootScope, $log, $timeout, Upload, $window, SweetAlert) {	// , spinnerService, $sails) {
	$scope.params = $routeParams;
	$scope.action = $route.current.action;
	$scope.showContent = false;
	
	$scope.kupones = new Array();
	$scope.currentKupon = {};
	$scope.currentKupon.activo = true;

	var dMin = moment().subtract(1, 'days').hours(0).minutes(0).seconds(0);
	$scope.minDate = dMin;
	var dMax = moment().add(5, 'years').hours(0).minutes(0).seconds(0);
	$scope.maxDate = dMax;
	$scope.vigencia = {
		startDate: moment(),
		endDate: moment().add(5, 'years')
		//startDate: null,
		//endDate: null
	};
	$scope.dtRngOptns = {
		ranges: {
			'Hoy': [moment(), moment()]
			, 'Mañana': [moment().add(1, 'days'), moment().add(1, 'days')]
			//, 'Últimos 7 Días': [moment().subtract(6, 'days'), moment()]
			//, 'Últimos 30 Días': [moment().subtract(29, 'days'), moment()]
			, 'Este Mes': [moment().startOf('month'), Date.today().moveToLastDayOfMonth()]
			//, 'Último Mes': [moment().startOf('month').subtract(1, 'months'), moment().startOf('month').subtract(1, 'days')]
		},
		opens: 'left',
		format: 'DD/MM/YYYY',
		separator: ' a ',
		minDate: $scope.minDate,
		maxDate: $scope.maxDate,
		locale: {
			applyLabel: 'Aceptar',
			cancelLabel: 'Cancelar',
			fromLabel: 'Desde',
			toLabel: 'A',
			customRangeLabel: 'Periodo Personalizado',
			daysOfWeek: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
			monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Augosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
			firstDay: 1
		},
		showWeekNumbers: true,
		timePicker: true,
		timePickerIncrement: 30,
		buttonClasses: ['btn-danger']
	};

	$log.info('KuponesCtrl..action..' + $scope.action);
	$log.info('KuponesCtrl..showContent..' + $scope.showContent);
	// spinnerService.hide('mySpinner', "Stuff loaded.");

	$scope.findAllEstados = function(cb) {
		$log.info('findAllEstados');

		$http.get('/estado/getEstados')
			.success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
				cb(null, data);
			}).error(function(error, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
				cb(error);
			});
	};

	$scope.fillEstados = function() {
		$log.info('fillEstados');

		var cb = function(error, data) {
			if(error) {
				$log.error(error);
			} else {
				$scope.estados = data;
			}
		}

		$scope.findAllEstados(cb);
	};

	$scope.createKupon = function() {
		$scope.action = 'C';
		$scope.showContent = true;
		$log.info($scope.action);
		$log.info($scope.showContent);
		
		if(!$scope.currentKupon.vigencia) {
			//$scope.currentKupon.vigencia = new Date($scope.kuponesFormNg.vigencia.$viewValue);
			$scope.currentKupon.vigencia = $scope.vigencia;
		}
		
		$log.info($scope.currentKupon);
		$log.info($scope.kuponesFormNg);
		alert('createKupon');
		/*
		$http.get('./')
		.success(function(response) {
			console.log(response);
		});
		 */
	};

	$scope.fillArrayEdos = function(kupon) {
		$log.info('fillArrayEdos');

		var cb = function(error, edos) {
			if(error) {
				$log.error(error);
			} else {
				var curKupEdosDb = kupon.promocionEstados;
				var curKupEdosTmp = new Array();
				for (var i = 0; i < curKupEdosDb.length; i++) {
					for (var j = 0; j < edos.length; j++) {
						if(curKupEdosDb[i].estadoId == edos[j].id) {
							curKupEdosTmp.push(edos[j]);
							break;
						}
					};
				};
				kupon.estadosAsociados = curKupEdosTmp;
			}
		}
		$scope.findAllEstados(cb);
	};

	$scope.viewKuponById = function(kuponId, cb) {
		$log.info('viewKuponById');
		$http.get('/kupon/view/' + kuponId)
			.success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
				cb(null, data);
			}).error(function(error, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
				cb(error);
			});
	};

	$scope.viewKuponView = function(kuponId) {
		$log.info('viewKuponView');
		$scope.viewKuponById(kuponId, function(error, data) {
			if(error) {
				$log.error(error);
			} else {
				$scope.currentKupon = data.kupon;
				$scope.fillArrayImages(data.kupon);
				$scope.fillArrayEdos(data.kupon);
			}
		});
	};

	$scope.readAllCategorias = function() {
		$log.info('readAllCategorias');
		$http.get('/categoria/readAll')
			.success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
				// console.error(data);
				$scope.categorias = data.categorias;
			}).error(function(err, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
				$log.error(err);
			});
	};

	$scope.readAllSubCategoriasBy = function(categoria, cb) {
		$log.info('readAllSubCategoriasBy');
		$http.get('/subcategoria/readAllBy/' + categoria.categoriaId)
			.success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
				// console.error(data);
				cb(null, data);
			}).error(function(err, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
				cb(err);
			});
	};

	$scope.readAllSubCategorias = function(catPromo) {
		$log.info('readAllSubCategorias');
		$log.info($scope.catPromo);
		$log.info(catPromo);
		$scope.readAllSubCategoriasBy($scope.catPromo, function(error, data) {
			if(error) {
				$log.error(error);
			} else {
				$scope.subcategorias = data.subCategorias;
			}
		});
	};

	$scope.readAllKupons = function() {
		$log.info('readAllKupons');
		$http.get('/kupon/readAll')
			.success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
				$log.info('success');
				$log.info(data);
				$scope.kupones = data.kupones;
			}).error(function(err, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
				$log.error('error');
				$log.error(err);
			});
	};

	$scope.uploadUsingUpload = function(files) {
		var self = $scope;

		$scope.currentKupon._remoteHost =  $location.protocol() + '://' + $location.host() + ($location.port() == 80 ? '' : ':' + $location.port());

		var ppURL = null,
			ppMETHOD = null,
			headers = null;
		if($scope.action == 'C') {
			ppURL = '/kupon/create';
			ppMETHOD = 'POST';
		} else if($scope.action == 'U') {
			ppURL = '/kupon/update/' + $scope.currentKupon.promocionId;
			ppMETHOD = 'PUT';
			// ppMETHOD = 'POST';
			// headers = {'Content-Type': undefined };
		}

		if(!files) {
			files = $scope.kuponesFormNg.picFile ? $scope.kuponesFormNg.picFile.$modelValue : null;
		}

		// if(!$scope.currentKupon.iniVigencia || !$scope.currentKupon.finVigencia) {
			// $scope.currentKupon.vigencia = new Date($scope.kuponesFormNg.vigencia.$viewValue);
			$scope.currentKupon.iniVigencia = $scope.vigencia.startDate;
			$scope.currentKupon._iniVigenciaTime = $scope.vigencia.startDate.valueOf();
			$scope.currentKupon.finVigencia = $scope.vigencia.endDate;
			$scope.currentKupon._finVigenciaTime = $scope.vigencia.endDate.valueOf();
		// }
		// $scope.currentKupon.subCategoriaId = $scope.subCatPromo;

		if($scope.action == 'C' && (files == null || files.length == 0)) {
			SweetAlert.swal('Debe de agregar un archivo de imagen.');
			return;
		}
		
		if (files != null) {
			$scope.loading = true;
			// spinnerService.show('mySpinner', "Loading stuff...");
			var file = files[0];

			/*
			file.upload = Upload.upload({
				url: '/createKupon',
				method: 'POST',
				headers: {
					'my-header' : 'my-header-value'
				},
				fields: {username: $scope.username},
				file: file,
				fileFormDataName: 'kuponFile',
				data: $scope.currentKupon
			});

			file.upload.then(function(response) {
				$timeout(function() {
					$log.info('success');
					$log.info(response);
					file.result = response.data;
					// $window.alert('Se ha almacenado el registro con exito!!');
					SweetAlert.swal('¡¡Se ha almacenado el registro con exito!!');
					$scope.currentKupon = {};
					$scope.vigencia = '';
					$scope.picFile.shift();
					// spinnerService.hide('mySpinner', "Stuff loaded.");
				});
			}, function(response) {
				$log.info('error');
				$log.info(response);
				if (response.status > 0)
					$scope.errorMsg = response.status + ': ' + response.data;
					// spinnerService.hide('mySpinner', "An error occurred while trying to load stuff.");
			}).finally(function() {
				// called no matter success or failure
				$scope.loading = false;
			});

			file.upload.progress(function(evt) {
				// Math.min is to fix IE which reports 200% sometimes
				file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
			});

			file.upload.xhr(function(xhr) {
				// xhr.upload.addEventListener('abort', function(){console.log('abort complete')}, false);
			});
			*/

			var upload = Upload.upload({
				url: ppURL,
				method: ppMETHOD,
				headers: headers,
				fields: {username: $scope.username},
				// file: file,
				file: files,
				// fileFormDataName: 'kuponFile',
				fileFormDataName: ['kuponFile', 'kuponFile2', 'kuponFile3'],
				data: $scope.currentKupon
			}).progress(function(evt) {
				// Math.min is to fix IE which reports 200% sometimes
				file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
			}).success(function(data, status, headers, config) {
				// file is uploaded successfully
				$log.info('file ' + config.file[0].name + ' is uploaded successfully. Response: ' + data);
				$timeout(function() {
					$log.info('success');
					// $log.info(response);
					file.result = data;

					if($scope.action == 'C') {

						// $window.alert('Se ha almacenado el registro con exito!!');
						// SweetAlert.swal('¡¡Se ha almacenado el registro con exito!!');
						$rootScope.modal.title = 'Éxito';
						$rootScope.modal.msg = '¡¡Se ha almacenado el registro con exito!!';
						$('#myModal').modal('show');

						$scope.currentKupon = {};
						$scope.vigencia = {
							startDate: moment(),
							endDate: moment().add(5, 'years')
						};
						$scope.picFile = null;
						$scope.kuponesFormNg.$setPristine();
						document.forms["kuponesFormNg"].reset();
						// spinnerService.hide('mySpinner', "Stuff loaded.");

					} else if($scope.action == 'U') {
						$rootScope.modal.title = 'Éxito';
						$rootScope.modal.msg = '¡¡Se ha actualizado el registro con exito!!';
						$('#myModal').modal('show');
					}
				});
			}).error(function(err) {
				/* access or attach event listeners to the underlying XMLHttpRequest */
				$log.error('error');
				$log.error(err);
				if (err.status > 0)
					$scope.errorMsg = err.status + ': ' + err.data;
					// spinnerService.hide('mySpinner', "An error occurred while trying to load stuff.");
			}).xhr(function(xhr) {
				// xhr.upload.addEventListener('abort', function(){console.log('abort complete')}, false);
			}).finally(function() {
				// called no matter success or failure
				$scope.loading = false;

				if($scope.action == 'U') {
					$timeout(function() {
						$scope.irViewViewKupon();
					}, 2000);
				}
			});

			/* then promise (note that returned promise doesn't have progress, xhr and cancel functions. */
			// var promise = upload.then(success, error, progress)
			/*
			.finally(function() {
				// called no matter success or failure
				$scope.loading = false;
			});
			var upload = Upload.upload({
				url: '/createKupon',
				method: 'POST',user
				headers: {
					'my-header' : 'my-header-value'
				},
				fields: {username: $scope.username},
				file: file,
				fileFormDataName: 'kuponFile',
				data: $scope.currentKupon
			});
			upload.xhr(function(xhr) {
				// xhr.upload.addEventListener('abort', function(){console.log('abort complete')}, false);
			});
			var success = function(response) {
				$timeout(function() {
					$log.info('success');
					$log.info(response);
					file.result = response.data;
					// $window.alert('Se ha almacenado el registro con exito!!');
					SweetAlert.swal('¡¡Se ha almacenado el registro con exito!!');
					$scope.currentKupon = {};
					$scope.vigencia = '';
					$scope.picFile.shift();
					// spinnerService.hide('mySpinner', "Stuff loaded.");
				});
			};
			var error = function(response) {
				$log.info('error');
				$log.info(response);
				if (response.status > 0)
					$scope.errorMsg = response.status + ': ' + response.data;
					// spinnerService.hide('mySpinner', "An error occurred while trying to load stuff.");
			};
			var progress = function(evt) {
				// Math.min is to fix IE which reports 200% sometimes
				file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
			};
			*/

			/* cancel/abort the upload in progress. */
			// upload.abort();

		} else {
/*	NEW-FASHION
			$http.post('https://angular-file-upload-cors-srv.appspot.com/upload', $scope.currentKupon, {})
			.success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			})
			.error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
			});
*/

			$scope.loading = true;
			$http.put(ppURL, {data: JSON.stringify($scope.currentKupon)})
			.success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
				$timeout(function() {
					$log.info('success');
					$log.info(data);

					$rootScope.modal.title = 'Éxito';
					$rootScope.modal.msg = '¡¡Se ha actualizado el registro con exito!!';
					$('#myModal').modal('show');

					$scope.loading = false;
					
					$scope.irViewViewKupon();
				});
			}).error(function(error, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
				$log.error('error');
				$log.error(error);
			});

/*	OLD-FASHION
			$http('POST', 'https://angular-file-upload-cors-srv.appspot.com/upload', $scope.currentKupon, function(status, response){
				// success
			}, function(status, response){
				// error
			});
*/
		}

	};

	$scope.fileNameChanged = function() {
		$log.info("select file");
	};

	$scope.fillArrayImages = function(kupon) {

		$scope.currPath = '#' + $location.path() + '#';
		$scope.arryImgns = new Array();
		for(var i = 0; i < kupon.imagenesNames.length; i++){
			var objImg = {
				imgName: kupon.imagenesNames[i],
				imgUrl: kupon.imagenesUrls[i]
			};
			$scope.arryImgns.push(objImg);
		}

	};

	$scope.updateEditKuponView = function(kuponId) {
		$scope.viewKuponById(kuponId, function(error, data) {
			if(error) {
				$log.error(error);
			} else {
				$scope.readAllSubCategoriasBy(data.kupon.subCategoriaId.categoriaId, function(errorSC, dataSC) {
					if(errorSC) {
						$log.error(errorSC);
					} else {
						$scope.subcategorias = dataSC.subCategorias;

						var tmpKupon = angular.copy(data.kupon);
						// tmpKupon.subCategoriaId = tmpKupon.subCategoriaId.subCategoriaId;
						$scope.catPromo = angular.copy(data.kupon.subCategoriaId.categoriaId);
						$scope.currentKupon = tmpKupon;
						// $scope.currentKupon.subCategoriaId.categoriaId = $scope.currentKupon.subCategoriaId.categoriaId.categoriaId;
						$scope.vigencia = {
							startDate: moment(tmpKupon.iniVigencia, moment.ISO_8601),
							endDate: moment(tmpKupon.finVigencia, moment.ISO_8601)
						};
						// new Date(new Date(data.kupon.vigencia).getTime())
						$scope.fillArrayImages(tmpKupon);
						$log.info('tmpKupon.subCategoriaId.subCategoriaId :: ' + tmpKupon.subCategoriaId.subCategoriaId);
						for(var subCat in $scope.subcategorias) {
							if($scope.subcategorias[subCat].subCategoriaId == tmpKupon.subCategoriaId.subCategoriaId) {
								// $scope.currentKupon.subCategoriaId = $scope.subcategorias[subCat];
								$scope.currentKupon._subCategoria = $scope.subcategorias[subCat];
								break;
							}
						}
						$scope.fillArrayEdos(tmpKupon);
					}
				});
			}
		});
	};


    $scope.checkAll = function () {

    	 if ($scope.selectedAll) {
            $scope.selectedAll = true;
             $scope.currentKupon.estadosAsociados = angular.copy($scope.estados);
        } else {
            $scope.selectedAll = false;
             $scope.currentKupon.estadosAsociados = [];
        }
       
    };


	$scope.updateKupon = function() {
		// a
	};

	$scope.$watch('kuponesFormNg.$dirty', function(newValue, oldValue) {
		$log.info(newValue);
		$log.info(oldValue);
		if(newValue != oldValue) {
			$scope.currentKupon.isDirty = $scope.currentKupon.isDirty || newValue;
		}
	}, true);

	$scope.deleKuponAction = function(kuponId, cb) {
		$log.info('deleKuponAction');
		$http.delete('/kupon/delete/' + kuponId)
			.success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
				cb(data);
			}).error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
				$log.error(err);
			});
	};

	$scope.deleteKuponView = function(kuponId){
		$log.info('deleteKuponView');
		/*
		SweetAlert.swal({
			title: "¿¿Usted esta seguró de eliminar el registro??",
			text: "¡¡Usted no podrá recuperar la informacion una vez realizada esta acción!!",
			type: "warning",
			showCancelButton: true,
			confirmButtonColor: "#DD6B55",
			confirmButtonText: "¡¡SI, eliminar!!",
			closeOnConfirm: false
		}, function(){ 
			SweetAlert.swal("¡¡El registro se ha eliminado exitosamente!!");
		});
		*/
		SweetAlert.swal({
			title: "¿¿Esta usted seguró de eliminar el registro??",
			text: "¡¡No podrá recuperar la informacion una vez realizada esta acción!!",
			type: "warning",
			showCancelButton: true,
			confirmButtonColor: "#DD6B55",
			confirmButtonText: "¡¡SI, eliminar!!",
			cancelButtonText: "Cancelar",
			closeOnConfirm: false,
			closeOnCancel: false
		}, function(isConfirm){ 
			if (isConfirm) {
				$scope.deleKuponAction(kuponId, function(promoDeleted) {
					SweetAlert.swal({
						title: "¡¡El registro se ha eliminado exitosamente!!",
						type:  "success",
						confirmButtonText: "Aceptar"
					});
					$location.path('/kupones');
				});
			} else {
				SweetAlert.swal({
					title: "Cancelado",
					text: "No se realizo ningun cambio al registro :)",
					type:  "error",
					confirmButtonText: "Aceptar"
				});
				$location.path('/kupones');
			}
		});
	};

	$scope.irViewViewKupon = function() {
		$log.info('irViewViewKupon');
		$location.url('/kupones/view/' + $scope.currentKupon.promocionId);
	};

	$scope.irEditViewKupon = function() {
		$log.info('irEditViewKupon');
		$location.url('/kupones/update/' + $scope.currentKupon.promocionId);
	};

	$scope.cancelEditViewKupon = function() {
		$log.info('cancelEditViewKupon');
		$location.url('/kupones');
	};

	/**
	 * Custom Photo Gallery - BEGIN
	 *
	 */
    // initial image index
    $scope._Index = 0;

    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev image
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.arryImgns.length - 1;
    };

    // show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.arryImgns.length - 1) ? ++$scope._Index : 0;
    };

    // show a certain image
    $scope.showPhoto = function (index) {
        $scope._Index = index;
    };
	/**
	 *
	 * Custom Photo Gallery - END
	 */

	$scope.init = function() {
		$log.info('KuponesCtrl..init..scope.params.');
		$log.info($scope.params);
		$log.info('KuponesCtrl..init..action..' + $scope.action);
		switch ($scope.action) {
			case 'C':
				$scope.readAllCategorias();
				$scope.fillEstados();
				$scope.showContent = true;
				break;
			case 'R':
				$scope.readAllKupons();
				$scope.showContent = true;
				break;
			case 'V':
				$scope.viewKuponView($scope.params.kuponId);
				$scope.showContent = true;
				break;
			case 'U':
				$scope.readAllCategorias();
				$scope.fillEstados();
				$scope.updateEditKuponView($scope.params.kuponId);
				$scope.showContent = true;
				break;
			case 'D':
				$scope.deleteKuponView($scope.params.kuponId);
				$scope.showContent = true;
				break;
		}
/*
		$sails.get("/readAllKupons")
		.then(function(resp){
			$scope.bars = resp.data;
		}, function(resp){
			alert('Houston, we got a problem!');
		});
*/
	};

	$scope.$evalAsync(function() {
		$scope.init();
	});
});
