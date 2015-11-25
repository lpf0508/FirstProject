require.config({
	baseUrl:'/js/lib',
	paths:{
		'angular':'/angular/angular',
		'angular-cookies': '/angular/angular-cookies',
		'angular-route':'/angular/angular-route',
		
		'js':'/js',
		'modules':'/js/app/modules',
		'ctrls':'/js/app/controllers'
	},
	shim:{
		'angular': {
            exports: 'angular'
        },
        'angular-cookies': {
            deps: ['angular']
        },
		'angular-route':{
			deps:['angular']
		},
		
	}
});