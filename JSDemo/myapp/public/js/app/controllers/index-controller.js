define(['modules/index-module','js/config-server',
	'ctrls/student-controller'
],function(ng){
	'use strict';
	var config = require('js/config-server');
	
	var port  = config.getPort();
	
	ng.controller('index-controller',['$scope',function($scope){
		
		$scope.user={ name : 'AAA' };
	    
		$scope.clickFun = function(){
			alert($scope.user.name);
						
		}
		
	}]);
	
});