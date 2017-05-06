app.filter('getFBName', ['$q', '$http',function ($q, $http) {
    return function (ID) {

        var req = {
            method: 'GET',
            url: "https://graph.facebook.com/"+ID+"?access_token=1648610375442724|457b6d1b4d0d23b7d489277ca599dd7d",
            headers: {
                'Content-Type': 'application/json;',
                'Access-Control-Allow-Origin': "*"
            }
        };
        return $q(function (resolve, reject) {
            $http(req).then(function (response) {
                console.log(response.data.name);
                return resolve(response.data.name);
            });
        });
    };
}]);
app.controller('postCtrl', ['$scope', 'postService', function ($scope, postService) {
    // Location and Comments for it
    $scope.location;
    $scope.comments = [];
    $scope.signedIn = false;

    // Fetch new ID whenever broadcasted and download location information based on that ID.
    $scope.$on('location_id', function (event, location_id) {
        $scope.location = location_id;
        // Download & Save
        // Process tags received & attach to scope
        var prerocessedTags = $scope.location.tags;
        $scope.location.tags = [];
        prerocessedTags.forEach(function (prerocessedTag) {
            if(prerocessedTag.indexOf("#") == -1)
                $scope.location.tags.push('#' + prerocessedTag);
            else
                $scope.location.tags.push( prerocessedTag);
        });
    });

    // Fetches location if location is updated (e.g. liked by the user)
    $scope.$on('location', function (event, location) {
        $scope.location = location;
    });

    // Fetches the boolean when the user becomes signed in
    $scope.$on('signedIn', function (event, signedIn) {
        $scope.signedIn = signedIn;
    });

    // Add new comment to server and attach it to the view.
    $scope.comment = function (location_id) {
        // Push to the view
        //$scope.location.comments.push($scope.newComment);
        // Send to the server
        if($scope.newComment != ""){
            postService.addComment(location_id, $scope.newComment, $scope.location.comments);
        }
        // Delete from the textarea
        $scope.newComment = "";
    };
}]);
