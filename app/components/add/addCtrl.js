app.controller('addCtrl', function ($scope, $rootScope) {
    var langitude, longitude;
    $scope.returnLangitude= function(){
        langitude = $rootScope.returnLan();
        return langitude;
    }
    $scope.returnLongitude= function(){
        longitude = $rootScope.returnLng();
        return longitude;
    }
    
});
