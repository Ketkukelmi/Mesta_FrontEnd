app.controller('addCtrl', function ($scope, $rootScope) {

    $scope.latitude = 0;
    $scope.longitude = 0;
    $scope.returnLatitude = function(){
        $scope.latitude = $rootScope.returnLan();
    }
    $scope.returnLongitude = function(){
        $scope.longitude = $rootScope.returnLng();
    }



    $scope.$on('Lat', function(events, args){
        console.log("lat runs")
        $scope.latitude = args; //now we've registered!
        console.log(args);
    })
    $scope.$on('Lng', function(events, args){

        $scope.longitude = args; //now we've registered!
        console.log(args);

    })

});
