/**
 * Main AngularJS Web Application
 */
'use strict';

var module = angular.module('miskupones.promociones', [ 'ngFileUpload']);	// , 'ngSails' ]);

/**
 * Controls all other Pages
 */
module.controller('PromocionesCtrl', function($scope, $location, $http, $route, $routeParams, $rootScope, $log, $timeout, Upload, $window, SweetAlert) {
	$scope.params = $routeParams;
	
	$scope.action = $route.current.action;
	$scope.showContent = false;

	$scope.getPromocionesView = function() {
		$log.info('getPromociones');
		// return $db.query( DOC_PROMOS );
	};


	$scope.init = function() {
		console.log("Promociones");
		switch ($scope.action) {
			case 'R':
				$scope.getPromocionesView();
				$scope.showContent = true;
				break;
		
		}
	};

	$scope.$evalAsync(function() {
		$scope.init();
	});
});