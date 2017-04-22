app.controller('accountCtrl', function ($scope, $rootScope, $window, accountService) {
var bool;
    $window.fbAsyncInit = function()
    {
        FB.init({
            appId      : '1648610375442724',
            cookie     : true,  // enable cookies to allow the server to access
                                // the session
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.8' // use graph api version 2.8
        });

        FB.getLoginStatus(function(response) {
            accountService.statusChangeCallback(response);
            console.log(accountService.signedIn(response));
            $scope.$apply(function () {
                $scope.signin = accountService.signedIn(response);
            });
            $rootScope.FBObj = response;
            accountService.getFBlogin(response);
            if(response != null)
            {
                bool = true;
                $rootScope.$broadcast('signedIn', bool);
            }
        });
    };
    fbAsyncInit();

    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
});


