onSuccess = function (googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
}
onFailure = function (error) {
    console.log(error);
}

app.factory('accountService', function() {
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

        renderGoogleButton: function () {
            gapi.signin2.render('my-signin2', {
                'scope': 'profile email',
                'width': 240,
                'height': 50,
                'longtitle': true,
                'theme': 'dark',
                'onsuccess': onSuccess,
                'onfailure': onFailure
            });
        },

        onSuccess: function (googleUser) {
            console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
        },

        onFailure: function (error) {
            console.log(error);
        }
    }});
