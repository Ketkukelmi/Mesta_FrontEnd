app.factory('accountService', ['$http', '$q', '$cookies', '$rootScope', function($http, $q, $cookies, $rootScope) {
    var serverUrl = "http://api.the-mesta.com";
    return {

        statusChangeCallback: function (response) {
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

            if(response.status === 'connected')
            {
                // Set the API endpoint
                var account = $rootScope.FBObj;
                $cookies.put("fbLoginID", account.authResponse.userID, {domain: ".the-mesta.com"});
                $cookies.put("AccessToken", account.authResponse.accessToken, {domain: ".the-mesta.com"});

                // Request for logging in
                var req = {
                    method: 'POST',
                    url: serverUrl + '/account/fblogin',
                    headers: {
                        'Content-Type': 'application/json;',
                        "Access-Control-Request-Credentials": "true"
                    },
                    withCredentials: true,
                    data: {
                        fbLoginID: account.authResponse.userID,
                        AccessToken: account.authResponse.accessToken
                    }
                };
            }
            else
            {
                return;
            }
            return $q(function (resolve) {
                $http(req).then(function (response) {
                    console.log(response);
                    resolve(response.data);
                });
            });
        }
    }}]);

