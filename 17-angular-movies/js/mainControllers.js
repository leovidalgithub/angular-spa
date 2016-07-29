angular.module( 'mainControllers', [] )

	.controller( 'indexController', function( $scope, $location ) { // INDEX
		$scope.home = function() {
			$location.path('/upcoming');
		}
	})

	.controller('homeController', function( $scope, $rootScope ) { // HOME
		$rootScope.showSearch = false;
	})

	.controller('popularController', function( $scope, $rootScope, appFactory ) { // POPULAR MOVIES

			$rootScope.searchType = 'Popular';
			$rootScope.showSearch = true;

			appFactory.apiResult( 'popular' )
				.then( function ( dataReceived ) {
					$scope.moviesArray =  dataReceived.data.results;
				})
	})

	.controller('upcomingController', function( $scope, $rootScope, appFactory ) { // UPCOMING MOVIES
			$rootScope.searchType = 'Upcoming';
			$rootScope.showSearch = true;

			appFactory.apiResult( 'upcoming' )
				.then( function ( dataReceived ) {
					$scope.moviesArray =  dataReceived.data.results;
				})
	})

	.controller('nowPlayingController', function( $scope, $rootScope, appFactory ) { // NOW-PLAYING MOVIES
			$rootScope.searchType = 'Now Playing';
			$rootScope.showSearch = true;

			appFactory.apiResult( 'now_playing' )
				.then( function ( dataReceived ) {
					$scope.moviesArray =  dataReceived.data.results;
				})
	})

	.controller('top_ratedController', function( $scope, $rootScope, appFactory ) { // TOP-RATED MOVIES
			$rootScope.searchType = 'Top Rated';
			$rootScope.showSearch = true;

			appFactory.apiResult( 'top_rated' )
				.then( function ( dataReceived ) {
					$scope.moviesArray =  dataReceived.data.results;
				})
	})

