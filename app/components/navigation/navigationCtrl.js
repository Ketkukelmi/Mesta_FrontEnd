app.controller('navigationCtrl', function ($scope, accountService) {

    FB.getLoginStatus(function(response) {
        // this will be called when the roundtrip to Facebook has completed
        console.log(accountService.signedIn(response) + " navictrl");
    });
});
