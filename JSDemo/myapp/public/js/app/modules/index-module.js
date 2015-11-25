define(['angular','js/config-server'],function(ng){
	'use strict';
	var config  = require('js/config-server');
	var app = ng.module('index-module',['ngCookies','ngRoute']);
	
	app.config(['$routeProvider',function($routeProvider){
		$routeProvider
		.when('/', {controller:'index-controller', templateUrl: config.getRoot() + '_index.html'})
		.when('/student',{controller:'student-controller',templateUrl:config.getRoot()+'_student.html'})
		.otherwise({redirectTo:'/register'});		
	}]);
	
    return app;
});



