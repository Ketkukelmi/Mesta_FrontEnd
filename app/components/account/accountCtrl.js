app.controller('accountCtrl', ['$scope', '$rootScope', '$window', 'accountService', '$cookies', function ($scope, $rootScope, $window, accountService, $cookies) {
    $window.fbAsyncInit = function()
    {
        FB.init({
            appId      : '1648610375442724',
            cookie     : true,  // enable cookies to allow the server to access the session
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.8' // use graph api version 2.8
        });

        FB.getLoginStatus(function(response) {
            login(response);
        });

        FB.Event.subscribe('auth.login', function(response) {
            login(response);
            toggleAccountView();
        });
    };
    fbAsyncInit();

    function login(response) {
        accountService.statusChangeCallback(response);
        accountService.getFBlogin(response);
    }

    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}]);
