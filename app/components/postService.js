app.factory('postService', ['$http', '$q', function ($http, $q) {
    return {
        getAllLocations: function () {
            // Set the API endpoint
            var url = serverUrl + '/location/all';
            return $q(function (resolve, reject) {
                // Send the crafted request for getting photo/post with all of its data
                $http.get(url).then(function (response) {
                    // Attach found post to the response data sent to client
                    resolve(response.data);
                });
            });
        },
        getNearbyLocations: function (longitude, latitude, offset) {
            // Set the API endpoint
            var url = serverUrl + '/location/nearby/' + latitude + '/' + longitude + '/' + offset;
            return $q(function (resolve, reject) {
                // Send the crafted request for getting photo/post with all of its data
                $http.get(url).then(function (response) {
                    // Attach found post to the response data sent to client
                    resolve(response.data);
                });
            });
        },
        //TODO: Ask for in API endpoints requests
        getPopularLocations: function (longitude, latitude, offset) {
            // Set the API endpoint
            var url = serverUrl + '/location/popular/' + latitude + '/' + longitude + '/' + offset;
            return $q(function (resolve, reject) {
                // Send the crafted request for getting photo/post with all of its data
                $http.get(url).then(function (response) {
                    // Attach found post to the response data sent to client
                    resolve(response.data);
                });
            });
        },
        addLocation: function (latitude, longitude, name, description, tags, categories) {
            //TODO: install cookies.
            document.cookie = "fbLoginID=TestMesta;token=iHjQMJc44QUXtN56U3GT2he55wN4mlwucgJ4xxPwpyjUQRRXDWSZcu9IdtXWYf7wPkQSEJYJfkIhEBj2FhGtGiJWg6ZPsRGhwzWNYcyopIZbbfaZbU56WxVwPzdagcBaaRZ5KJXaSUVDMWo7rnDR4pXFJKTFqZcaLmKaQoIhDYYs5paNKBpdNpms18CJ64NcAYVggQ3Fri3jJEQirlkbojcbW8Dz3QSVi9GEaqn24j9wsQUjYmn1nyxq68FcC8";
            //TODO: check why OPTIONS method is used.
            var tags = [tags];
            // Request for adding location
            var req = {
                method: 'POST',
                url: 'http://api.the-mesta.com/location/save',
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8;'
                },
                data: {
                    latitude: latitude,
                    longitude: longitude,
                    name: name,
                    description: description,
                    tags: tags,
                    categories: categories
                }
            };
            // Send the crafted request for adding location
            $http(req).then(function succesCallback(response) {
                resolve(response.data);
            });
        }
    }
}]);
