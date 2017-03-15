app.controller('mapCtrl', function ($scope, mapService) {

    $scope.initMap = function(){
        mapService.initMapReturn();
    }

});
