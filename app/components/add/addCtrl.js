app.controller('addCtrl', function ($scope, $rootScope, mapService, postService) {
    $scope.latitude = 0;
    $scope.longitude = 0;
    $scope.name = "";
    $scope.description = "";
    $scope.tags = "";
    $scope.categories = "";

    $scope.addLocation = function () {
        postService.addLocation($scope.latitude, $scope.longitude, $scope.name, $scope.description, $scope.tags,
            $scope.categories);
    };

    $('map-view').on('click', function () {
        $scope.$apply(function () {
            $scope.latitude = mapService.returnLan();
            $scope.longitude = mapService.returnLng();
        });
    });
});
