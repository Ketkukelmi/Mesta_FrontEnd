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

        fbPOST: function (response) {
            $cookies.put(response.authResponse.userID, response.name, {domain: ".the-mesta.com"});
            $cookies.put("token", "iHjQMJc44QUXtN56U3GT2he55wN4mlwucgJ4xxPwpyjUQRRXDWSZcu9IdtXWYf7wPkQSEJYJfkIhEBj2FhGtGiJWg6ZPsRGhwzWNYcyopIZbbfaZbU56WxVwPzdagcBaaRZ5KJXaSUVDMWo7rnDR4pXFJKTFqZcaLmKaQoIhDYYs5paNKBpdNpms18CJ64NcAYVggQ3Fri3jJEQirlkbojcbW8Dz3QSVi9GEaqn24j9wsQUjYmn1nyxq68FcC8", {domain: ".the-mesta.com"});
            // Request for adding location
            var req = {
                method: 'POST',
                url: serverUrl + '/account/fblogin/{fbLoginID}/{AccessToken}',
                headers: {
                    'Content-Type': 'application/json;',
                    "Access-Control-Request-Credentials": "true"
                },
                withCredentials: true,
                data: {
                    banned: false,
                    facebookid: response.authResponse.userID,
                    admin: true,
                    token: response.authResponse.accessToken,
                }
            };
            return $q(function (resolve, reject) {
                // Send the crafted request for adding location
                $http(req).then(function succesCallback(response) {
                    resolve(response.data);
                }, function errorCallback(response) {
                    console.log(response);
                });
            });
        }
    }}]);

