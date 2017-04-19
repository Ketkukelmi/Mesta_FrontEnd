app.factory('postService', ['$http', '$q', '$cookies', function ($http, $q, $cookies) {
    serverUrl = "http://api.the-mesta.com";
    return {
        getAllLocations: function () {
            // Set the API endpoint
            var url = serverUrl + '/location/all';
            return $q(function (resolve, reject) {
                // Send the crafted request for getting all posts with all of their data
                $http.get(url).then(function (response) {
                    // Attach found posts to the response data sent to client
                    resolve(response.data);
                });
            });
        },
        getNearbyLocations: function (longitude, latitude, offset) {
            // Set the API endpoint
            var url = serverUrl + '/location/nearby/' + latitude + '/' + longitude + '/' + offset;
            return $q(function (resolve, reject) {
                $http.get(url).then(function (response) {
                    resolve(response.data);
                });
            });
        },
        //TODO: Ask for in API endpoints requests
        getPopularLocations: function (longitude, latitude, offset) {
            // Set the API endpoint
            var url = serverUrl + '/location/popular/' + latitude + '/' + longitude + '/' + offset;
            return $q(function (resolve, reject) {
                $http.get(url).then(function (response) {
                    resolve(response.data);
                });
            });
        },
        getLocationById: function (location_id) {
            // Set the API endpoint
            var url = serverUrl + '/location/' + location_id;
            return $q(function (resolve, reject) {
                // Send the crafted request for getting photo/post with all of its data
                $http.get(url).then(function (response) {
                    // Attach found post to the response data sent to client
                    resolve(response.data);
                });
            });
        },
        addLocation: function (latitude, longitude, name, description, tags, categories) {
            // Credentials
            var tags = tags.split(',');
            $cookies.put("fbLoginID", "TestMesta", {domain: ".the-mesta.com"});
            $cookies.put("token", "iHjQMJc44QUXtN56U3GT2he55wN4mlwucgJ4xxPwpyjUQRRXDWSZcu9IdtXWYf7wPkQSEJYJfkIhEBj2FhGtGiJWg6ZPsRGhwzWNYcyopIZbbfaZbU56WxVwPzdagcBaaRZ5KJXaSUVDMWo7rnDR4pXFJKTFqZcaLmKaQoIhDYYs5paNKBpdNpms18CJ64NcAYVggQ3Fri3jJEQirlkbojcbW8Dz3QSVi9GEaqn24j9wsQUjYmn1nyxq68FcC8", {domain: ".the-mesta.com"});
            // Request for adding location
            var req = {
                method: 'POST',
                url: serverUrl + '/location/save',
                headers: {
                    'Content-Type': 'application/json;',
                    "Access-Control-Request-Credentials" : "true"
                },
                withCredentials: true,
                data: {
                    latitude: latitude,
                    longitude: longitude,
                    name: name,
                    description: description,
                    tags: tags,
                    category: categories
                }
            };
            // Send the crafted request for adding location
            $http(req).then(function succesCallback(response) {
                response.data
            }, function errorCallback(response) {
                console.log(response);
            });
        },
        addComment: function (location_id, newComment) {
            // Credentials
            $cookies.put("fbLoginID", "TestMesta", {domain: ".the-mesta.com"});
            $cookies.put("token", "iHjQMJc44QUXtN56U3GT2he55wN4mlwucgJ4xxPwpyjUQRRXDWSZcu9IdtXWYf7wPkQSEJYJfkIhEBj2FhGtGiJWg6ZPsRGhwzWNYcyopIZbbfaZbU56WxVwPzdagcBaaRZ5KJXaSUVDMWo7rnDR4pXFJKTFqZcaLmKaQoIhDYYs5paNKBpdNpms18CJ64NcAYVggQ3Fri3jJEQirlkbojcbW8Dz3QSVi9GEaqn24j9wsQUjYmn1nyxq68FcC8", {domain: ".the-mesta.com"});
            // Request for adding comment
            var req = {
                method: 'POST',
                url: serverUrl + '/location/comment/save',
                headers: {
                    'Content-Type': 'application/json;',
                    "Access-Control-Request-Credentials" : "true"
                },
                withCredentials: true,
                data: {
                    locationID: location_id,
                    date: Date.now(),
                    comment: newComment
                }
            };
            // Send the crafted request for adding comment
            $http(req).then(function succesCallback(response) {
                resolve(response.data);
            }, function errorCallback(response) {
                console.log(response);
            });
        },
        addLike: function (location_id) {
            // Credentials
            $cookies.put("fbLoginID", "TestMesta", {domain: ".the-mesta.com"});
            $cookies.put("token", "iHjQMJc44QUXtN56U3GT2he55wN4mlwucgJ4xxPwpyjUQRRXDWSZcu9IdtXWYf7wPkQSEJYJfkIhEBj2FhGtGiJWg6ZPsRGhwzWNYcyopIZbbfaZbU56WxVwPzdagcBaaRZ5KJXaSUVDMWo7rnDR4pXFJKTFqZcaLmKaQoIhDYYs5paNKBpdNpms18CJ64NcAYVggQ3Fri3jJEQirlkbojcbW8Dz3QSVi9GEaqn24j9wsQUjYmn1nyxq68FcC8", {domain: ".the-mesta.com"});
            // Request for adding comment
            var req = {
                method: 'POST',
                url: serverUrl + '/location/like/' + location_id,
                headers: {
                    'Content-Type': 'application/json;',
                    "Access-Control-Request-Credentials" : "true"
                },
                withCredentials: true
            };
            // Send the crafted request for adding comment
            $http(req).then(function succesCallback(response) {
                resolve(response.data);
            }, function errorCallback(response) {
                console.log(response);
            });
        }
    }
}]);
