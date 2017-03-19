app.controller('accountCtrl', function ($scope, $window, accountService) {

    $window.fbAsyncInit = function () {
        accountService.fbInit();
    }

    fbAsyncInit();

    $scope.fbLogin = function () {
        accountService.fbLogin();
    }

});
