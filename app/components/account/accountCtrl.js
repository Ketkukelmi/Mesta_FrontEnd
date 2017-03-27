app.controller('accountCtrl', function ($scope, accountService) {

    function statusChangeCallback(response)
    {
        console.log('statusChangeCallback');
        console.log(response);

        if (response.status === 'connected')
        {
            testAPI();
        }
    }

    $scope.checkLoginState = function checkLoginState()
    {
        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });


    };

    window.fbAsyncInit = function()
    {
        FB.init({
            appId      : '1648610375442724',
            cookie     : true,  // enable cookies to allow the server to access
                                // the session
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.8' // use graph api version 2.8
        });

        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
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

    function testAPI()
    {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function(response) {
            console.log('Successful login for: ' + response.name);
        });
    }

});
