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
    $rootScope.addLike = function (id) {
        // Show/hide like
        currentUser = "TestMesta";
        var thumbsUp = $('#locationID_' + id).find('i.thumbs.up');
        if ($rootScope.locations[id].likes.indexOf(currentUser) == -1) {
            $rootScope.locations[id].likes.push(currentUser);
        }
        else {
            $rootScope.locations[id].likes.splice($rootScope.locations[id].likes.indexOf(currentUser), 1);
        }
        // $rootScope.$broadcast('locations', $rootScope.locations);
        // $rootScope.$broadcast('location_id', id);
        // Send the like/unlike to the server
        postService.addLike(id);
    };
    $rootScope.togglePostView = function (id) {
        $rootScope.$broadcast('location_id', id);
        togglePostView();
    };
}]);
