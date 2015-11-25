(function(){
	var _port = '8085';
	
	var _root = '/partials/';
	
	var getPort = function(){
		return _port;
	}
	
	var getRoot = function(){
	    return _root;
	}
	
	if(typeof define === "function" && define.amd){
		define(function(){
			return { getPort : getPort , getRoot:getRoot };			
		});
	}
	else{
		return { getPort : getPort , getRoot:getRoot };
	}
	
})();