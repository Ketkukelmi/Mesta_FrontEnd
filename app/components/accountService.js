app.factory('accountService', ['$http', '$q', '$cookies', function($http, $q, $cookies) {
    var serverUrl = "http://api.the-mesta.com";
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
        },

        getFBlogin: function (response) {
            // Set the API endpoint
            var url = serverUrl + '/account/fblogin/' + response.authResponse.userID + '/' + response.authResponse.accessToken + '/';
            return $q(function (resolve, reject) {
                $http.get(url).then(function (response) {
                    console.log(response);
                    resolve(response.data);
                });
            });
        }
    }}]);

