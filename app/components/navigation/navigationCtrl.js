app.controller('navigationCtrl', function ($scope, accountService) {
var bool;

     FB.getLoginStatus(function(response) {
        // This will be called when the roundtrip to Facebook has completed
        console.log(accountService.signedIn(response) + " navictrl");
        bool = accountService.signedIn(response);
        console.log("boolean", bool );

         $scope.$apply(function () {
             $scope.user = bool;
         });
    });
});
