var subwayController = angular.module('subwayController', []);

subwayController.controller('bloorController', ['$scope', '$http', function($scope, $http) {
	$http.get('js/data/bloor_line.json').success(function(data) {
		$scope.bloor_line = data;
	});
}]);

subwayController.controller('sheppardController', ['$scope', '$http', function($scope, $http) {
	$http.get('js/data/sheppard_line.json').success(function(data) {
		$scope.sheppard_line = data;
	});
}]);

subwayController.controller('yongeController', ['$scope', '$http', function($scope, $http) {
	$http.get('js/data/yonge_line.json').success(function(data) {
		$scope.yonge_line = data;
	});
}]);

subwayController.controller('scarController', ['$scope', '$http', function($scope, $http) {
	$http.get('js/data/scar_line.json').success(function(data) {
		$scope.scar_line = data;
	});
}]);