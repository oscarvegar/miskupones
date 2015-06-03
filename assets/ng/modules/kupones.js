/**
 * Main AngularJS Web Application
 */
'use strict';

var module = angular.module('miskupones.kupones', [ 'ngFileUpload', 'oitozero.ngSweetAlert' ]);	// , 'ngSails' ]);

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
*/
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
	var dMin = new Date(new Date().setHours(0, 0, 0, 0));
	// d.setHours(0,0,0,0);
	$scope.minDate = dMin;
	var dMax = new Date(new Date().setHours(24, 0, 0, 0));
	var dMax = dMax.setFullYear(dMax.getFullYear() + 5);
	$scope.maxDate = dMax;

	$log.info('KuponesCtrl..action..' + $scope.action);
	$log.info('KuponesCtrl..showContent..' + $scope.showContent);
	// spinnerService.hide('mySpinner', "Stuff loaded.");

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

	$scope.viewKupon = function(kuponId) {
		alert('createKupon');
		$http.get('./')
			.success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available

			})
			.error(function(err, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
				console.error(err);
			});
	};


	$scope.readAllCategorias = function() {
		console.log('readAllCategorias');
		$http.get('/categoria/readAll')
			.success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
				// console.error(data);
				$scope.categorias = data.categorias;
			})
			.error(function(err, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
				console.error(err);
			});
	};

	$scope.readAllSubCategoriasBy = function(catPromo) {
		console.log('readAllSubCategoriasBy');
		console.log($scope.catPromo);
		console.log(catPromo);
		$http.get('/subcategoria/readAllBy/' + $scope.catPromo.categoriaId)
			.success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
				// console.error(data);
				$scope.subcategorias = data.subCategorias;
			})
			.error(function(err, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
				console.error(err);
			});
	}

	$scope.readAllKupons = function() {
		$http.get('/kupon/readAll')
			.success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
				$log.info('success');
				$log.info('data');
				$log.info(data);
				$log.info('status');
				$log.info(status);
				$log.info('headers');
				$log.info(headers);
				$log.info('config');
				$log.info(config);
				$scope.kupones = data.kupones;
			})
			.error(function(err, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
				$log.info('error');
				$log.info('err');
				$log.info(err);
				$log.info('status');
				$log.info(status);
				$log.info('headers');
				$log.info(headers);
				$log.info('config');
				$log.info(config);
				console.error(err);
			});
	};

	$scope.uploadUsingUpload = function(files) {
		var self = $scope;
		if(!$scope.currentKupon.vigencia) {
			//$scope.currentKupon.vigencia = new Date($scope.kuponesFormNg.vigencia.$viewValue);
			$scope.currentKupon.vigencia = $scope.vigencia;
			$scope.currentKupon.vigenciaTime = $scope.currentKupon.vigencia.getTime();
		}
		// $scope.currentKupon.subCategoriaId = $scope.

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
				url: '/kupon/create',
				method: 'POST',
				headers: {
					'my-header' : 'my-header-value'
				},
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
				console.log('file ' + config.file[0].name + ' is uploaded successfully. Response: ' + data);
				$timeout(function() {
					$log.info('success');
					// $log.info(response);
					file.result = data;
					// $window.alert('Se ha almacenado el registro con exito!!');
					// SweetAlert.swal('¡¡Se ha almacenado el registro con exito!!');
					$rootScope.modal.title = 'Éxito';
					$rootScope.modal.msg = '¡¡Se ha almacenado el registro con exito!!';
					$('#myModal').modal('show');

					$scope.currentKupon = {};
					$scope.vigencia = '';
					$scope.picFile = null;
					$scope.kuponesFormNg.$setPristine();
					document.forms["kuponesFormNg"].reset();
					// spinnerService.hide('mySpinner', "Stuff loaded.");
				});
			}).error(function(err) {
				/* access or attach event listeners to the underlying XMLHttpRequest */
				$log.info('error');
				$log.info(err);
				if (err.status > 0)
					$scope.errorMsg = err.status + ': ' + err.data;
					// spinnerService.hide('mySpinner', "An error occurred while trying to load stuff.");
			}).xhr(function(xhr) {
				// xhr.upload.addEventListener('abort', function(){console.log('abort complete')}, false);
			}).finally(function() {
				// called no matter success or failure
				$scope.loading = false;
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
				method: 'POST',
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
			$http.post('https://angular-file-upload-cors-srv.appspot.com/upload', $scope.currentKupon, {})
			.success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			})
			.error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
			});

			$http.put(url, data, config)
			.success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			})
			.error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
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

	$scope.cancelEditViewKupon = function() {
		$location.url('/kupones');
	};

	$scope.init = function() {
		$log.info('KuponesCtrl..init..scope.params.');
		$log.info($scope.params);
		$log.info('KuponesCtrl..init..action..' + $scope.action);
		switch ($scope.action) {
			case 'C':
				$scope.readAllCategorias();
				$scope.showContent = true;
				break;
			case 'R':
				// $scope.kupones.push({id: 1, titulo: 'Título 1', descripcionCorta: 'descripcion Corta 1', vigencia: '12/12/15'});
				// $scope.kupones.push({id: 2, titulo: 'Título 2', descripcionCorta: 'Descripcion Corta 2', vigencia: '11/11/15'});
				// $scope.kupones.push({id: 3, titulo: 'Título 3', descripcionCorta: 'Descripcion corta 3', vigencia: '10/10/15'});
				$scope.readAllKupons();
				$scope.showContent = true;
				break;
			case 'V':
				//$scope.currentKupon = $scope.kupones[$scope.params.kuponId - 1];
				$scope.currentKupon = {id: 2, titulo: 'Título 2', descripcionCorta: 'Descripcion Corta 2', vigencia: '11/11/15'};
				$scope.showContent = true;
				break;
			case 'U':
				$scope.readAllCategorias();
				$scope.showContent = true;
				break;
			case 'D':
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
