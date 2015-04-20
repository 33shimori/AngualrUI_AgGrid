module.exports = function(config){
	config.set({
		frameworks: ['mocha', 'chai'],
		files: [
			'../assets/angular/angular.js',
			'../assets/angular-route/angular-route.js',
			'../assets/angular-mocks/angular-mocks.js',
			'../ng/**/module.js',
			'../ng/**/*.js',
			'../test/ng/**/*.spec.js'
		],
		reporters: ['mocha'],
		port: 9876,
		color: true,
		logLevel: config.LOG_DISABLE,
		autowatch: true,
		browsers:['PhantomJS'],
		singleRun: false
	});
};


