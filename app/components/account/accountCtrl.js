app.controller('accountCtrl', function ($scope, $window, accountService) {

    $window.fbAsyncInit = function () {
        FB.init({
            appId: '1648610375442724',
            status: true,
            cookie: true,
            xfbml: true,
            version: 'v2.4'
        });
    };

    console.log("Voi vittu");

    $scope.getMyLastName = function() {
        accountService.getMyLastName()
            .then(function(response) {
                    $scope.last_name = response.last_name;
                }
            );
    };
});
