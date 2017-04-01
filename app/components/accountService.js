app.factory('accountService', function() {

    return {

        statusChangeCallback: function (response) {
            console.log('statusChangeCallback');
            console.log(response);
            if (response.status === 'connected')
            {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', function(response) {
                    console.log('Successful login for: ' + response.name);
                });
            }
        },

        signedIn: function (response) {
            if(response.status === 'connected'){
                return true;
            }
            else{
                return false;
            }
        }
    }});

