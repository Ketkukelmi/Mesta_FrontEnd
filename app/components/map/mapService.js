app.factory('mapService', function() {
    var markers = [];
    var map;
    var infoWindow;
    function initMap(){
        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 65.008802, lng: 25.472814},
            zoom: 15
        });
        infoWindow = new google.maps.InfoWindow({map: map});

        google.maps.event.addListener(map, 'click', function(event) {
            DeleteMarkers();
            placeMarker(event.latLng);

        });
        function placeMarker(location) {

            var marker = new google.maps.Marker({
                position: location,
                map: map

            });
            markers.push(marker);
        }

        function DeleteMarkers() {
            //Loop through all the markers and remove
            for (var i = 0; i < markers.length; i++) {
                markers[i].setMap(null);
            }
            markers = [];
        };

        initLocation();

    };
    function initLocation(){

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                infoWindow.setPosition(pos);
                infoWindow.setContent('User location');
                map.setCenter(pos);
            }, function() {
                handleLocationError(true, infoWindow, map.getCenter());
            });
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, map.getCenter());
        }
    };
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
    };


    return {
        initMapReturn: function(){
            initMap();
        }
    }

});
