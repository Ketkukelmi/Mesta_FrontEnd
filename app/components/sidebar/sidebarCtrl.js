app.controller('sidebarCtrl', function ($scope, $rootScope) {
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

    $scope.togglePostView = function(id) {
        $rootScope.$broadcast('location_id', id);
        togglePostView();
    }
});
