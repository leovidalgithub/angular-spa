angular.module("myAppControllers", [])

	.controller("ExtraControllerInsideAnotherController", function( $scope ) {
			$scope.name = "juanma"
	})

	.controller("HomeViewController", function( $scope,  $http ) {
			$scope.section ="Home Page"

			$http.get('data/phones.json')
				.then(function(dataJson) {
					$scope.phones = dataJson.data;
					console.log ($scope.phones);
				})
	})

	.controller("AboutViewController", function( $scope ) {
			$scope.section ="About Page (parent)"
	})

	.controller("ProductViewController", function( $scope, $http, $routeParams ) {

			var json = 'data/<%NAME%>.json'
			var productId = $routeParams.ID;

			$scope.productId = productId
			$scope.section ="About Page"

			$http.get(json.replace('<%NAME%>', productId))
				.then(function(dataJson) {
					$scope.dataProduct = dataJson.data
				})
	})