app.controller('postCtrl', function ($scope, postService) {

    // Fetch new ID whenever broadcasted and download location information based on that ID.
    $scope.$on('location_id', function (event, location_id) {
        $scope.location_id = location_id;
        // Download & Save
        postService.getLocationById(location_id).then( function(location) {
            $scope.location = location;
        });
    });

    $scope.comment = function (location_id) {
        //TODO: Do the commenting function, for the right API
        postService.addComment(location_id, comment, username);
    }
});
