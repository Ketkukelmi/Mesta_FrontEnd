app.src = "//connect.facebook.net/en_US/all.js";

app.controller('accountCtrl', function ($scope, $window, accountService) {

    $window.fbAsyncInit = function () {
        accountService.fbInit();
    };

    fbAsyncInit();

    $scope.fbLogin = function () {
        accountService.fbLogin();
    }

    onSuccess = function (googleUser) {
        console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
    }
    onFailure = function (error) {
        console.log(error);
    }
    $scope.renderButton = function () {
        gapi.signin2.render('my-signin2', {
            'scope': 'profile email',
            'width': 240,
            'height': 50,
            'longtitle': true,
            'theme': 'dark',
            'onsuccess': onSuccess,
            'onfailure': onFailure
        });
    }
});
