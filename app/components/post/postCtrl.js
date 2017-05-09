app.controller('postCtrl', ['$scope', 'postService', 'accountService', function ($scope, postService) {
    // Location and Comments for it
    $scope.location;
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

        updateComments();
    });

    // Fetches the boolean when the user becomes signed in
    $scope.$on('signedIn', function (event, signedIn) {
        $scope.signedIn = signedIn;
    });

    //Scope the accountView
    $scope.toggleAccountView = function () {
        toggleAccountView();
    };

    $scope.getFirstOrDefaultImage = function() {
        if ($scope.location.images.length > 0) {
            return $scope.location.images[0];
        } else {
            return "http://i.the-mesta.com/0";
        }
    }

    // Add new comment to server and attach it to the view.
    $scope.comment = function (location) {
        // Push to the view
        //$scope.location.comments.push($scope.newComment);
        // Send to the server
        if($scope.newComment != "" || $scope.newComment != null || $scope.newComment != undefined){
            postService.addComment(location, $scope.newComment, $scope.location.comments).then(function(result) {
                if (result == "SUCCES") {
                    updateComments();
                } else if (result == "TOKEN_NOT_VALID") {
                    alert("Stop trying to hack bitch");
                }
            });
        }
        // Delete from the textarea
        $scope.newComment = "";
    };

    function updateComments() {
        $scope.location.comments.forEach(function(comment) {
            postService.getFBName(comment.facebookID).then(function(result) {
                comment.name = result.name;
            }).catch(function(error) {
                console.log(error);
            });
        });
    }

    $scope.$on('setFBObj', function (event, FBobject) {
        $scope.FBId = FBobject.authResponse.userID;
    });
}]);
