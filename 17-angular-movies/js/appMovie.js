angular.module( 'appMovie', [ 'mainControllers', 'appConfig' ] )

	.run( function( $rootScope ) {
		$rootScope.showSearch = false;
		$rootScope.submit = function() {
			alert( 'Sorry, this feature is not working yet!' );
		}	
})
