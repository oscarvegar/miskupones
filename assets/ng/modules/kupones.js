/**
 * Main AngularJS Web Application
 */
var app = angular.module('miskupones.kupones', []);

/**
 * Configure the Routes
 */
app.config(function($routeProvider) {});

app.run(['$location', '$rootScope', function($location, $rootScope) {
	$rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
		$rootScope.pageTitle = current.$$route.pageTitle;
	});
}]);

/**
 * Controls all other Pages
 */
app.controller('KuponesCtrl', function($scope, $location, $http, $route, $rootScope) {
	$scope.action = $route.current.action;
	$scope.showContent = false;
	console.info($scope.action);

	$scope.init = function() {
		switch ($scope.action) {
			case 'C':
				$scope.showContent = true;
				break;
			case 'R':
				$scope.kupones = [
					{titulo: 'Título 1', descripcionCorta: 'descripcion Corta 1', vigencia: '12/12/15'},
					{titulo: 'Título 2', descripcionCorta: 'Descripcion Corta 2', vigencia: '11/11/15'},
					{titulo: 'Título 3', descripcionCorta: 'Descripcion corta 3', vigencia: '10/10/15'}
				];
				$scope.showContent = true;
				break;
			case 'U':
				$scope.showContent = true;
				break;
			case 'D':
				$scope.showContent = true;
				break;
		}
	}

	$scope.$evalAsync(function() {
		$scope.init();
	});
});