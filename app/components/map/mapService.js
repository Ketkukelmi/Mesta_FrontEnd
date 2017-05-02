app.factory('mapService', ['$rootScope', function($rootScope) {
    var markers = [];
    var map;
    var newLat = 0;
    var newLong = 0;
    var canAddMarker = false;
    var eventtemp;
    var serverUrl = "http://api.the-mesta.com";

    var image = 'https://nmc.ae/site-images/bluemarker.png';

    function initMap(){
        map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 65.008802, lng: 25.472814
            },
            zoom: 15,
            mapTypeControlOptions: {
                mapTypeIds: []
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        google.maps.event.addListener(map, 'click', function(event) {
            eventtemp = event;
            if(canAddMarker)
            {
                clearMarkers();
                placeMarker(event.latLng);
            }
        });

        function placeMarker(location) {

            var marker = new google.maps.Marker({
                position: location,
                map: map

            });

            markers.splice(markers.length-1, 1);
            markers.push(marker);

            newLat = marker.position.lat();
            newLong = marker.position.lng();
        }

        initLocation();

    };

    function initLocation(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                map.setCenter(pos);
            }, function() {
                handleLocationError(true, map.getCenter());
            });
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, map.getCenter());
        }
    };

    function showLocationMarkers(locations) {
        deleteMarkers();

        for (i = 0; i < locations.length; i++) {
            var location = new google.maps.LatLng(locations[i]["latitude"], locations[i]["longitude"]);
            var marker = new google.maps.Marker({
                map: map,
                title: locations[i]["name"],
                position: location
            });

            markers[i] = marker;

            (function(i) {
                google.maps.event.addListener(markers[i], 'mouseover', function() {
                    markers[i].setIcon(image);
                });

                google.maps.event.addListener(markers[i], 'mouseout', function() {
                    markers[i].setIcon(null);
                });

                google.maps.event.addListener(markers[i], 'click', function () {
                    //$on('location_id', function (){
                    $rootScope.$broadcast('location_id', locations[i]);
                    openPostView();
                });
            })(i);
        }
    }

    function handleLocationError(browserHasGeolocation, pos) {
        console.log("Geolocation is not supported by browser");
    };

    function clearMarkers() {
        setMapOnAll(null);
    }

    function showMarkers() {
        setMapOnAll(map);
    }

    function deleteMarkers() {
        clearMarkers();
        markers = [];
    }

    function setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
        }
    }

    return {
        initMapReturn: function(){
            initMap();
        },
        returnLan: function(){
            return newLat;
        },
        returnLng: function(){
            return newLong;
        },
        clearMarkers: function () {
            clearMarkers();
        },
        showMarkers:function () {
            showMarkers();
        },
        changeCanAddMarker:function () {
            if(canAddMarker)
            {
                clearMarkers();
                canAddMarker = false;
                showMarkers()
            }
            else
            {
                canAddMarker = true;
                clearMarkers();
            }
        },
        goToLocation: function(lat, long){
            var pos = {
                    lat: lat,
                    lng: long
                };
            map.setCenter(pos);
        },
        setLocations: function(locations) {
            showLocationMarkers(locations);
        }
    }

}]);
