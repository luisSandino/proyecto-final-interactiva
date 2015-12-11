var application = angular.module('allCrFutbol',['ngRoute','firebase','allCrFutbol.controllers','allCrFutbol.myFactory']);

 application.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	
	.when('/', {
	    templateUrl: 'views/inicio.html',
	    controller: 'InicioController'
	})

	.when('/calendario', {
	    templateUrl: 'views/calendario.html',
	    controller: 'CalendarioController'
	})
	
	.when('/jornadas', {
	    templateUrl: 'views/jornadas.html',
	    controller: 'JornadasController'
	})
	.when('/tabla', {
	    templateUrl: 'views/tabla.html',
	    controller: 'TablaController'
	})
	
	.otherwise({
	  	redirectTo: '/'
	});
}]);