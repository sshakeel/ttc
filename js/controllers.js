var subwayController = angular.module('subwayController', []);

subwayController.controller('subwayController', ['$scope', '$http', function($scope, $http) {
	$http.get('js/data/ttc.json').success(function(data) {
		$scope.bloor_line = data.bloor_line;
		$scope.sheppard_line = data.sheppard_line;
		$scope.yonge_line = data.yonge_line;
		$scope.scar_line = data.scar_line;

	});
	//$scope.popupHeight = $window.innerHeight;
}]);

// subwayController.controller('sheppardController', ['$scope', '$http', function($scope, $http) {
// 	$http.get('js/data/sheppard_line.json').success(function(data) {
// 		$scope.sheppard_line = data;
// 	});
// }]);

// subwayController.controller('yongeController', ['$scope', '$http', function($scope, $http) {
// 	$http.get('js/data/yonge_line.json').success(function(data) {
// 		$scope.yonge_line = data;
// 	});
// }]);

// subwayController.controller('scarController', ['$scope', '$http', function($scope, $http) {
// 	$http.get('js/data/scar_line.json').success(function(data) {
// 		$scope.scar_line = data;
// 	});
// }]);