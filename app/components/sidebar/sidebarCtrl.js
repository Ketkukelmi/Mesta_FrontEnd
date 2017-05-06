app.controller('sidebarCtrl', ['postService', '$scope', '$rootScope', '$timeout', function (postService, $scope, $rootScope, $timeout) {
    $scope.searchType = "popular";

    // Toggle between search modes
    $scope.toggleSearchType = function () {
        if ($scope.searchType == "popular") {
            $scope.searchType = "nearby";
        }
        else {
            $scope.searchType = "popular";
        }
    };

    var changed = false;

    $scope.$watch('searchValue', function() {
        changed = true;
    });

    function updateSearch() {
        if (changed) {
            postService.searchLocationsByName($scope.searchValue);
            changed = false;
        }

        $timeout(updateSearch, 1000);
    }

    updateSearch();

    var container = document.getElementById('container');
    Ps.initialize(container);

    // Initialize locations array (from location/all will be stored here)
    $scope.locations = [];

    // Get the locations from the service
    $scope.$on('locations', function (event, locations) {
        $scope.locations = locations;
    });

    // Open the clicked location in the post view (broadcast selected location ID to the post view)
}]);
