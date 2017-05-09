app.factory('accountService', ['$http', '$q', '$cookies', '$rootScope', function($http, $q, $cookies, $rootScope) {
    var serverUrl = "http://api.the-mesta.com";
    return {

        statusChangeCallback: function (response) {
            if (response.status === 'connected')
            {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', function(response) {
                    console.log('Successful login for: ' + response.name);
                });
            }
        },

        signedIn: function (response) {
            return (response.status === 'connected');
        },

        getFBlogin: function (response) {
            if (response.status === 'connected') {
                $rootScope.$broadcast("setFBObj", response);

                // Set the API endpoint
                $cookies.put("fbLoginID", response.authResponse.userID, {domain: ".the-mesta.com"});
                $cookies.put("AccessToken", response.authResponse.accessToken, {domain: ".the-mesta.com"});

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
                        fbLoginID: response.authResponse.userID,
                        AccessToken: response.authResponse.accessToken
                    }
                };

                return $q(function (resolve, reject) {
                    $http(req).then(function (response) {
                        $rootScope.$broadcast('signedIn', true);
                        resolve(response.data);
                    });
                });
            }
            else
            {
                return null;
            }
        }
    }
}]);