/**
 * Created by Roman on 2/18/2017.
 */

app.src = "//connect.facebook.net/en_US/sdk.js";

app.factory('accountService', function($q) {
    return {
        getMyLastName: function() {
            var deferred = $q.defer();
            FB.api('/me', {
                fields: 'last_name'
            }, function(response) {
                if (!response || response.error) {
                    deferred.reject('Error occured');
                } else {
                    deferred.resolve(response);
                }
            });
            return deferred.promise;
        }
    }
});
