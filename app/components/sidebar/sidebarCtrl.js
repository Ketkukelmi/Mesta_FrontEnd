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
});
