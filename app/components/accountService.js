app.factory('accountService', function() {

    function statusChangeCallback(response) {
        console.log('statusChangeCallback');
        console.log(response);

        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
            console.log('Logged in');
        } else {
            // The person is not logged into your app or we are unable to tell.
            document.getElementById('status').innerHTML = 'Please log ' +
                'into this app.';
        }
    }

    return {

        fbLogin: function () {
            FB.login(function (response) {
                if (response.authResponse) {
                    console.log('Welcome!  Fetching your information.... ');
                    FB.api('/me', function (response) {
                        console.log('Good to see you, ' + response.name + '.');
                    });
                } else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            })
        },

        fbInit: function () {
            FB.init({
                appId: '1648610375442724',
                status: true,
                cookie: true,
                xfbml: true,
                version: 'v2.8'
            });

        },

        loginState: function () {
            FB.getLoginStatus(function(response){
                statusChangeCallback(response);
            });
        }

    }});
