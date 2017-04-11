app.controller('sidebarCtrl', function (postService, $scope, $rootScope) {
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

    // Initialize locations array (from location/all will be stored here)
    $scope.locations = [];

    // Get the locations from the service
    $scope.$on('locations', function (event, locations) {
        $scope.$apply(function () {
            $scope.locations = locations;
            console.log($scope.locations);
        });
    });

    // Open the clicked location in the post view (broadcast selected location ID to the post view)
    $scope.togglePostView = function (id) {
        $rootScope.$broadcast('location_id', id);
        togglePostView();
    };

    $rootScope.addLike = function (id) {
        // Show/hide like
        currentUser = "TestMesta";
        var thumbsUp = $('#locationID_' + id).find('i.thumbs.up');
        var thumbsUpPost = $('#locationPost').find('i.thumbs.up');
        if ($scope.locations[id].likes.indexOf(currentUser) != -1) {
            thumbsUp.addClass("outline");
            thumbsUpPost.addClass("outline");
        }
        else {
            thumbsUp.removeClass("outline");
            thumbsUpPost.removeClass("outline");
        }
        console.log($scope.locations[id]);
        // Send the like/unlike to the server
        postService.addLike(id);
    };
});
