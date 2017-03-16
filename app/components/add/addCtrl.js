app.controller('addCtrl', function ($scope, $rootScope) {
    $scope.latitude = 0;
    $scope.longitude = 0;
    $scope.returnLatitude = function(){
        $scope.latitude = $rootScope.returnLan();
    }
    $scope.returnLongitude = function(){
        $scope.longitude = $rootScope.returnLng();
    }

    $('map-view').on('click', function(){
        $scope.latitude = $rootScope.returnLan();
        $scope.longitude = $rootScope.returnLng();
    })
});
