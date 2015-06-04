/**
 * Main AngularJS Web Application
 */
'use strict';

var module = angular.module('miskupones.categorias', [ 'ngFileUpload', 'oitozero.ngSweetAlert', 'daterangepicker' ]);	// , 'ngSails' ]);

/**
 * Controls all other Pages
 */
module.controller('CategoriasCtrl', function($scope, $location, $http, $route, $routeParams, $rootScope, $log, $timeout, Upload, $window, SweetAlert) {
	$scope.params = $routeParams;
	
	$scope.action = $route.current.action;
	$scope.showContent = false;

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
		// $log.info(catPromo);
		$scope.readAllSubCategoriasBy($scope.catPromo, function(error, data) {
			if(error) {
				$log.error(error);
			} else {
				$scope.subcategorias = data.subCategorias;
			}
		});
	};

	$scope.viewCategoriaById = function(categoriaId, cb) {
		$log.info('viewCategoriaById');
		$http.get('/categoria/view/' + categoriaId)
			.success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
				cb(null, data);
			}).error(function(err, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
				cb(error);
			});
	};

	$scope.viewCategoriaView = function(categoriaId){
		$log.info('viewCategoriaView');
		$scope.viewCategoriaById(categoriaId, function(error, data) {
			if(error) {
				$log.error(error);
			} else {
				$scope.curCategoria = data.categoria;
				$scope.subcategorias = data.categoria.subcategorias;
				/*
				$scope.catPromo = {
					categoriaId: categoriaId
				};
				$scope.readAllSubCategorias($scope.catPromo);
				*/
			}
		});
	};

	$scope.cancelEditViewCategoria = function() {
		$location.url('/categorias');
	};

	$scope.init = function() {
		switch ($scope.action) {
			case 'C':
				$scope.showContent = true;
				break;
			case 'R':
				$scope.readAllCategorias();
				$scope.showContent = true;
				break;
			case 'V':
				$scope.viewCategoriaView($scope.params.categoriaId);
				$scope.showContent = true;
				break;
			case 'U':
				$scope.updateEditCategoriaView($scope.params.categoriaId);
				$scope.showContent = true;
				break;
			case 'D':
				$scope.deleteCategoriaView($scope.params.categoriaId);
				$scope.showContent = true;
				break;
		}
	};

	$scope.$evalAsync(function() {
		$scope.init();
	});
});