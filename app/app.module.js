/* Define AngularJS application and its dependicies */
var app = angular.module("app", ["ngCookies"]);

// Initialization
app.run(['$http', '$rootScope', 'postService', function($http, $rootScope, postService) {

    // Save currently downloaded locations globally
    $rootScope.$on('locations', function (event, locations) {
        $rootScope.$apply(function () {
            $rootScope.locations = locations;
        });
    });

    // Function for liking
    $rootScope.addLike = function (location, fbId) {
        // Show/hide like
        var thumbsUp = $('#locationID_' + location.id).find('i.thumbs.up');
        if ($rootScope.locations[$rootScope.locations.indexOf(location)].likes.indexOf(fbId) == -1) {
            $rootScope.locations[$rootScope.locations.indexOf(location)].likes.push(fbId);
        }
        else {
            $rootScope.locations[$rootScope.locations.indexOf(location)].likes.splice($rootScope.locations[$rootScope.locations.indexOf(location)].likes.indexOf(fbId), 1);
        }
        $rootScope.$broadcast('location', $rootScope.locations[$rootScope.locations.indexOf(location)]);

        // Send the like/unlike to the server
        postService.addLike(location.id);
    };

    // Transmit data to the sidebar view & toggle the sidebar view
    $rootScope.togglePostView = function (location) {
        $rootScope.$broadcast('location_id', location);
        angular.element(document.getElementById("map")).scope().goToLocation(location.latitude, location.longitude);
        togglePostView();
    };
}]);
