
$(function(){
    

        var map;

        function initialize() {

          // Create an array of styles.
          var styles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#3e606f"},{"weight":2},{"gamma":0.84}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"weight":0.6},{"color":"#008f80"},{"saturation":"0"},{"visibility":"on"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#008f80"},{"saturation":"0"},{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"color":"#008f80"},{"saturation":"0"},{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#008f80"},{"saturation":"0"}]},{"featureType":"administrative.province","elementType":"geometry.fill","stylers":[{"color":"#008f80"},{"saturation":"0"},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"geometry.fill","stylers":[{"color":"#008f80"},{"visibility":"on"}]},{"featureType":"administrative.neighborhood","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#008f80"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.fill","stylers":[{"color":"#008f80"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#2c5a71"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#008f80"},{"saturation":"0"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"color":"#008f80"},{"saturation":"0"},{"visibility":"on"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"color":"#008f80"},{"saturation":"0"},{"visibility":"on"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#2c5a71"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#29768a"},{"lightness":-37}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#004841"},{"saturation":"0"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#193341"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#00c5ff"},{"saturation":"-44"},{"lightness":"-4"}]}];
          // Create a new StyledMapType object, passing it the array of styles,
          // as well as the name to be displayed on the map type control.
          var styledMap = new google.maps.StyledMapType(styles,
            {name: "Styled Map"});

          // Create a map object, and include the MapTypeId to add
          // to the map type control.
          var mapOptions = {
            zoom: 19,
            zoomControl: false,
            scaleControl: false,
            scrollwheel: false,
            center: new google.maps.LatLng(24.7900711, 120.9967021),
            mapTypeControlOptions: {
              mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
            }
          };
          map = new google.maps.Map(document.getElementById('Location-map'),
            mapOptions);

          //Associate the styled map with the MapTypeId and set it to display.
          map.mapTypes.set('map_style', styledMap);
          map.setMapTypeId('map_style');
        }

        initialize();

        var lineSymbol = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 1,
          scale: 4
        };

        var monitorCoordinates1 = [
            {lat:24.789686160586442, lng:120.9966042183876},
            {lat:24.789798175790296, lng:120.9968796710968},
            {lat:24.789821309352384, lng:120.99669348955154},
            {lat:24.789686160586442, lng:120.9966042183876},
        ];
        console.log(monitorCoordinates1);
        var monitorArea1 = new google.maps.Polyline({
            path: monitorCoordinates1,
            geodesic: true,
            strokeColor: '#000000',
            icons: [{
              icon: lineSymbol,
              offset: '0',
              repeat: '20px'
            }],
            strokeOpacity: 1.0,
            strokeWeight: 2
        });

        var monitorVertex1_1 = new google.maps.Marker({
            position: monitorCoordinates1[0],
            map: map,
            icon: {
              url: "image/flag1.png",
              scaledSize: new google.maps.Size(32, 32)
            }
        });
        var monitorVertex1_2 = new google.maps.Marker({
            position: monitorCoordinates1[1],
            map: map,
            icon: {
              url: "image/flag1.png",
              scaledSize: new google.maps.Size(32, 32)
            }
        });
        var monitorVertex1_3 = new google.maps.Marker({
            position: monitorCoordinates1[2],
            icon: {
              url: "image/flag1.png",
              scaledSize: new google.maps.Size(32, 32)
            },
            map: map
        });
        
        monitorArea1.setMap(map);


        var monitorCoordinates2 = [
            {lat:24.789596160586442, lng:120.9969042183876},
            {lat:24.789708175790296, lng:120.9971796710968},
            {lat:24.789731309352384, lng:120.99699348955154},
            {lat:24.789596160586442, lng:120.9969042183876}
        ];
        var monitorArea2 = new google.maps.Polyline({
            path: monitorCoordinates2,
            geodesic: true,
            strokeColor: '#000000',
            icons: [{
              icon: lineSymbol,
              offset: '0',
              repeat: '20px'
            }],
            strokeOpacity: 1.0,
            strokeWeight: 2
        });

        var monitorVertex2_1 = new google.maps.Marker({
            position: monitorCoordinates2[0],
            map: map,
            icon: {
              url: "image/flag2.png",
              scaledSize: new google.maps.Size(32, 32)
            }
        });
        var monitorVertex2_2 = new google.maps.Marker({
            position: monitorCoordinates2[1],
            map: map,
            icon: {
              url: "image/flag2.png",
              scaledSize: new google.maps.Size(32, 32)
            }
        });
        var monitorVertex2_3 = new google.maps.Marker({
            position: monitorCoordinates2[2],
            icon: {
              url: "image/flag2.png",
              scaledSize: new google.maps.Size(32, 32)
            },
            map: map
        });

        monitorArea2.setMap(map);

        var receiveTime;
        var id;
        var lat;
        var lng;
        var description;

        function IDGeoLoTime_O  (data){
           console.log(data[0]);
           id = data[0].TrackerID;
           lat = parseFloat(data[0].N);
           lng = parseFloat(data[0].E);
           receiveTime = data[0].Time;
           description = id + ': ' + receiveTime;
           if(id == "0")
            addMarker(lat, lng, id);
        }

        var polyCoordinates = [];
        var lineColor;
        var linR, linG, linB;
        var polyLines = [];

        function addPolyLine(counterID, markerArr){
            //removeLine();
            var max = markerArr.length - 1;
            console.log("Max: ", max);
            console.log("CounterID: ", counterID);
            for(var i = 0; i < max; i++){ // Draw 9 lines Max
              console.log("CounterID: ", counterID);

              polyCoordinates = [];              
              //console.log(markerArr);
              polyCoordinates.push(markerArr[counterID%10].position);
              counterID--;
              if(counterID == -1)
                counterID = 9;
              //console.log(markerArr[counterID%10]);
              polyCoordinates.push(markerArr[counterID%10].position);
              //counterID--;
              if(counterID == -1)
                counterID = 9;
              linR = Math.floor((Math.random() * 255) + 1);
              linG = Math.floor((Math.random() * 255) + 1);
              linB = Math.floor((Math.random() * 255) + 1);
              lineColor = rgbToHex(linR,linG,linB).toString();
              lineColor = "#" + lineColor;
              var markersLine = new google.maps.Polyline({
                  path: polyCoordinates,
                  geodesic: true,
                  strokeColor: lineColor,
                  strokeOpacity: 1,
                  strokeWeight: 2
                });
              markersLine.setMap(map);
              polyLines.push(markersLine);
              //polyCoordinates.length = 0;
            }
        }

        function removeLine() {
          for(var i = 0; i < polyLines.length; i++){
            polyLines[i].setMap(null);
          }
        }

        function setMapOnAll(map, markerArr, notClearID) {
          for (var i = 0; i < markerArr.length; i++) {
            if(i == notClearID);
            else markerArr[i].setMap(map);
          }
        }

        function clearMarkers(markerArr, notClearID) {
          setMapOnAll(null, markerArr, notClearID);
        }

        var markersID1 = [];
        var markersID2 = [];
        var counterID1 = 0;
        var counterID2 = 0;

        function addMarker(lat, lng, id)
        {          
            // Don't add markers with same position into array
            if(counterID1 == 0); // only the first marker will have counterID = 0
            else if(parseFloat(markersID1[counterID1-1].position.lat()).toPrecision(12) == parseFloat(lat).toPrecision(12) && parseFloat(markersID1[counterID1-1].position.lng()).toPrecision(12) == parseFloat(lng).toPrecision(12)){
                console.log("Same");
                console.log("Same ID: ", counterID1-1);
                //markersID1[counterID1-1].infoWindow.setContentHTML(description);
                //Should update infoWindow, the upper syntax doesn't work. Fix it later.
                return;
            } 
            console.log("Diff ID: ", counterID1-1);
            console.log("---------------------");
            if(counterID1 == 0);
            else console.log(markersID1[counterID1-1].position.lat(), markersID1[counterID1-1].position.lng());
            console.log(lat, lng);
            console.log("---------------------");
            changepinImage(89,193,84);
            console.log(lat);
            console.log(lng);
            var infowindow = new google.maps.InfoWindow({
              content: description
            });
            var marker = new google.maps.Marker({
                position:{ lat: lat, lng: lng },
                map: map, 
                fillOpacity: 0.4,
                icon: pinImage
                });
            console.log(marker);

            marker.addListener('click', function() {
                               infowindow.open(map, marker);
                               });
            //infowindow.open(map,marker);
            clearMarkers(markersID1, counterID1%10);
            counterID1 = counterID1 % 10;
            markersID1[counterID1] = marker;
            addPolyLine(counterID1, markersID1);
            counterID1++;
            console.log(markersID1[counterID1-1].position.lat());
            console.log(lat);
            displayVideo(lat, lng);
        }
        
        function displayVideo(lat, lng)
        {
            var markerPos = new google.maps.LatLng({ lat: lat, lng: lng });
            var isWithinMonitor1 = google.maps.geometry.poly.containsLocation(markerPos, monitorArea1);
            var isWithinMonitor2 = google.maps.geometry.poly.containsLocation(markerPos, monitorArea2);
            monitorDisplay(isWithinMonitor1);
            monitorDisplay(isWithinMonitor2);
        }

        function monitorDisplay(inMonitorArea)
        {
            if(inMonitorArea)
            {
              changepinImage(177,26,26);
              var markerAlert = new google.maps.Marker({
                  position:{ lat: lat, lng: lng },
                  map: map, 
                  fillOpacity: 0.4,
                  icon: pinImage
                  });
              var contentString = '<div style="color:black">' +
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/jYvVG8D837A" frameborder="0" allowfullscreen></iframe>'
              + '</div>';
              var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });
              infowindow.open(map,markerAlert);
            }
        }

        function rgbToHex(r, g, b) {
            return componentToHex(r) + componentToHex(g) + componentToHex(b);
        }

        function componentToHex(c) {
            var hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }

        function changepinImage(r,g,b)
        {
            //console.log('hi');
            //pinR = Math.floor((Math.random() * 255) + 1);
            //pinG = Math.floor((Math.random() * 255) + 1);
            //pinB = Math.floor((Math.random() * 255) + 1);
            pinColor = rgbToHex(r,g,b).toString();
            //console.log(pinColor);
            pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
            new google.maps.Size(21, 34),
            new google.maps.Point(0,0),
            new google.maps.Point(10, 34));
            //console.log(pinImage);
        }

        function iot_app(){

            
        }
        
        var profile = {
            'dm_name': 'DogOutput',
            'df_list': [IDGeoLoTime_O],
        }

        var ida = {
            'iot_app': iot_app,
        }; // How iot device receive data (format)
        dai(profile,ida);
       
        
});
