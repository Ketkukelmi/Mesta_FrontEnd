app.controller('addCtrl', function ($scope, $rootScope, mapService, postService) {
    $scope.latitude = 0;
    $scope.longitude = 0;
    $scope.name = "";
    $scope.description = "";
    $scope.tags = "";
    $scope.categories = "";

    $scope.addLocation = function () {
        postService.addLocation($scope.latitude, $scope.longitude, $scope.name, $scope.description, $scope.tags,$scope.categories);
    };

    $scope.uploadFile = function(elem) {
        var files = elem.files;

        for (var i = 0, f; f = files[i]; i++) {
            if (!f.type.match('image.*')) {
                continue;
            }
        }

        var reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = (function(theFile) {
            return function(e) {
                document.getElementById("imgPreview").src = e.target.result;
            };
        })(f);

        // Read in the image file as a data URL.
        reader.readAsDataURL(f);
    }

    $('map-view').on('click', function () {
        $scope.$apply(function () {
            $scope.latitude = mapService.returnLan();
            $scope.longitude = mapService.returnLng();
        });
    });

});
