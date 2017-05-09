app.controller('navigationCtrl', [ '$scope', 'accountService', 'postService', function ($scope, accountService, postService) {
    $scope.signedIn = false;

    $scope.$on('signedIn', function (event, signedIn) {
        $scope.signedIn = signedIn;
    });

    $scope.$on('setFBObj', function (event, FBobject) {
        postService.getFBName(FBobject.authResponse.userID).then(function(result) {
            $scope.FBName = result.name;
        }).catch(function(error) {
            console.log("Error when retrieving facebook name");
        });
    });

}]);
