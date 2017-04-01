app.factory('accountService', function() {
var user;
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
                user = true;
                console.log("e" , user)
                return true;
            }
            else{
                user = false;
                return false;
            }
        },
        returnUser: function(){
            return user;
        }
    }});

