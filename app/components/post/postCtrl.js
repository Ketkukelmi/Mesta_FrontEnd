app.controller('postCtrl', function ($scope, postService) {
    // Location and Comments for it
    $scope.location = [];
    $scope.comments = [];

    // Fetch new ID whenever broadcasted and download location information based on that ID.
    $scope.$on('location_id', function (event, location_id) {
        $scope.location_id = location_id;
        // Download & Save
        postService.getLocationById(location_id).then( function(location) {
            $scope.location = location;
            // Process tags received & attach to scope
            var prerocessedTags = $scope.location.tags;
            $scope.location.tags = [];
            prerocessedTags.forEach(function (prerocessedTag) {
                $scope.location.tags.push('#' + prerocessedTag);
            });
        });
    });

    // Add new comment to server and attach it to the view.
    $scope.comment = function (location_id) {
        // Push to the view
        $scope.location.comments.push($scope.newComment);
        // Send to the server
        postService.addComment(location_id, $scope.newComment);
        // Delete from the textarea
        $scope.newComment = "";
    }
});
