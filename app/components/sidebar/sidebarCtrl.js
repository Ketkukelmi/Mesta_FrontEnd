app.controller('sidebarCtrl', ['postService', '$scope', '$rootScope', '$timeout', function (postService, $scope, $rootScope, $timeout) {
    $scope.searchType = "popular";
    $scope.signedIn = false;

    // Toggle between search modes
    $scope.toggleSearchType = function () {
        if ($scope.searchType == "popular") {
            $scope.searchType = "nearby";
        }
        else {
            $scope.searchType = "popular";
        }
    };

    $scope.getFirstOrDefaultImage = function(location) {
        if (location.images.length > 0) {
            return location.images[0];
        } else {
            return "http://i.the-mesta.com/0";
        }
    }

    $scope.toggleAccountView = function () {
        toggleAccountView();
    };

    // Fetches the boolean when the user becomes signed in
    $scope.$on('signedIn', function (event, signedIn) {
        $scope.signedIn = signedIn;
    });

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


    // Initialize locations array (from location/all will be stored here)
    $scope.locations = [];

    // Get the locations from the service
    $scope.$on('locations', function (event, locations) {
        console.log(locations.length);
        $scope.locations = locations;
    });

    $scope.$on('setFBObj', function (event, FBobject) {
        $scope.FBId = FBobject.authResponse.userID;
    });

    // Open the clicked location in the post view (broadcast selected location ID to the post view)
}]);
