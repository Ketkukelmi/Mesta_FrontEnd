app.controller('sidebarCtrl', function ($scope) {
    $scope.searchType = "popular";

    $scope.toggleSearchType = function () {
        if ($scope.searchType == "popular") {
            $scope.searchType = "nearby";
        }
        else {
            $scope.searchType = "popular";
        }
    };

    $scope.locations = [];

    // Get the locations from the service
    $scope.$on('locations', function (event, locations) {
        $scope.$apply(function () {
            $scope.locations = locations;
            console.log($scope.locations);
        });
    });
});
