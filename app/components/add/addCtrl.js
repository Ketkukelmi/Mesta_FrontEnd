app.controller('addCtrl', ['$scope', '$rootScope', 'mapService', 'postService', function ($scope, $rootScope, mapService, postService) {
    $scope.latitude = 0;
    $scope.longitude = 0;
    $scope.name = "";
    $scope.description = "";
    $scope.tags = "";
    $scope.categories = "";

    $scope.submitFiles = function($files) {
        angular.forEach($files, function (value, key) {
            $scope.image = value;
        });
    }

    $scope.addLocation = function () {
        console.log($scope.images);
        postService.addLocation($scope.latitude, $scope.longitude, $scope.name, $scope.description, $scope.tags,$scope.categories, $scope.image);
    };

    $('map-view').on('click', function () {
        $scope.$apply(function () {
            $scope.latitude = mapService.returnLan();
            $scope.longitude = mapService.returnLng();
        });
    });

}]);

app.directive("ngFiles", ["$parse", function ($parse) {
    return function(scope, element, attrs) {
        var onChange = $parse(attrs.ngFiles);
        element.on("change", function (event) {
            onChange(scope, { $files: event.target.files });
        });
    };
} ]);
