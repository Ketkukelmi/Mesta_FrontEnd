app.factory('mapService', function($rootScope) {
    var markers = [];
    var map;
    var infoWindow;
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
        infoWindow = new google.maps.InfoWindow({map: map});

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


        $.getJSON(serverUrl + "/location/all", function(result) {
            for (i = 0; i < result.length; i++) {
                var location = new google.maps.LatLng(result[i]["latitude"], result[i]["longitude"]);
                markers[i] = new google.maps.Marker({
                    map: map,
                    title: result[i]["name"],
                    position: location
                });

				var infowindow = new google.maps.InfoWindow();

                google.maps.event.addListener(markers, 'click', (function(markers, content, infowindow) {
                    return function() {
						hideInfoWindows();
                        infowindow.setContent(content);
                        infowindow.open(map, marker);
                    };
                })(markers, result[i]["description"], infowindow));

				markers.push(infowindow);

                (function(i) {
                    google.maps.event.addListener(markers[i], 'mouseover', function() {
                        markers[i].setIcon(image);
                    });

                    google.maps.event.addListener(markers[i], 'mouseout', function() {
                        markers[i].setIcon(null);
                    });
                    google.maps.event.addListener(markers[i], 'click', function () {
                        console.log("clicked a marker boiiii");
                        //$on('location_id', function (){
                        $rootScope.$broadcast('location_id', result[i].id);
                        togglePostView();
                    });
                })(i);

            }
            // Broadcast locations to all views (sideview uses it)
            $rootScope.$broadcast('locations', result);
        })
    };
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
    };

    function clearMarkers() {
        setMapOnAll(null);
    }

    // Shows any markers currently in the array.
    function showMarkers() {
        setMapOnAll(map);
    }
    function setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
        }
        markers[markers.length-1].setMap(null);
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
        }
    }

});
