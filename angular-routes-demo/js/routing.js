	angular.module("myAppConfig", [])
	.run( function( $rootScope ) {
			$rootScope.msg = "Hello everybody (from running)!!!";
	})
	.config( function( $routeProvider ) {

			$routeProvider
				.when('/',{
					templateUrl: '/templates/home.html',
					controller: 'HomeViewController'
				})
				.when('/home',{
					templateUrl: '/templates/home.html',
					controller: 'HomeViewController'
				})
				.when('/about',{
					templateUrl: '/templates/about.html',
					controller: 'AboutViewController'
				})
				.when('/product/:ID',{
					templateUrl: '/templates/product.html',
					controller: 'ProductViewController'
				})
				.otherwise({ redirectTo: '/' }); ;

	})