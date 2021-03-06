
$(function(){

        var map;

        function initialize() {

          // Create an array of styles.
          var styles = 
          [
              {
                  "featureType": "water",
                  "elementType": "geometry.fill",
                  "stylers": [
                      {
                          "color": "#d3d3d3"
                      }
                  ]
              },
              {
                  "featureType": "transit",
                  "stylers": [
                      {
                          "color": "#808080"
                      },
                      {
                          "visibility": "off"
                      }
                  ]
              },
              {
                  "featureType": "road.highway",
                  "elementType": "geometry.stroke",
                  "stylers": [
                      {
                          "visibility": "on"
                      },
                      {
                          "color": "#b3b3b3"
                      }
                  ]
              },
              {
                  "featureType": "road.highway",
                  "elementType": "geometry.fill",
                  "stylers": [
                      {
                          "color": "#ffffff"
                      }
                  ]
              },
              {
                  "featureType": "road.local",
                  "elementType": "geometry.fill",
                  "stylers": [
                      {
                          "visibility": "on"
                      },
                      {
                          "color": "#ffffff"
                      },
                      {
                          "weight": 1.8
                      }
                  ]
              },
              {
                  "featureType": "road.local",
                  "elementType": "geometry.stroke",
                  "stylers": [
                      {
                          "color": "#d7d7d7"
                      }
                  ]
              },
              {
                  "featureType": "poi",
                  "elementType": "geometry.fill",
                  "stylers": [
                      {
                          "visibility": "on"
                      },
                      {
                          "color": "#ebebeb"
                      }
                  ]
              },
              {
                  "featureType": "administrative",
                  "elementType": "geometry",
                  "stylers": [
                      {
                          "color": "#a7a7a7"
                      }
                  ]
              },
              {
                  "featureType": "road.arterial",
                  "elementType": "geometry.fill",
                  "stylers": [
                      {
                          "color": "#ffffff"
                      }
                  ]
              },
              {
                  "featureType": "road.arterial",
                  "elementType": "geometry.fill",
                  "stylers": [
                      {
                          "color": "#ffffff"
                      }
                  ]
              },
              {
                  "featureType": "landscape",
                  "elementType": "geometry.fill",
                  "stylers": [
                      {
                          "visibility": "on"
                      },
                      {
                          "color": "#efefef"
                      }
                  ]
              },
              {
                  "featureType": "road",
                  "elementType": "labels.text.fill",
                  "stylers": [
                      {
                          "color": "#696969"
                      }
                  ]
              },
              {
                  "featureType": "administrative",
                  "elementType": "labels.text.fill",
                  "stylers": [
                      {
                          "visibility": "on"
                      },
                      {
                          "color": "#737373"
                      }
                  ]
              },
              {
                  "featureType": "poi",
                  "elementType": "labels.icon",
                  "stylers": [
                      {
                          "visibility": "off"
                      }
                  ]
              },
              {
                  "featureType": "poi",
                  "elementType": "labels",
                  "stylers": [
                      {
                          "visibility": "off"
                      }
                  ]
              },
              {
                  "featureType": "road.arterial",
                  "elementType": "geometry.stroke",
                  "stylers": [
                      {
                          "color": "#d6d6d6"
                      }
                  ]
              },
              {
                  "featureType": "road",
                  "elementType": "labels.icon",
                  "stylers": [
                      {
                          "visibility": "off"
                      }
                  ]
              },
              {},
              {
                  "featureType": "poi",
                  "elementType": "geometry.fill",
                  "stylers": [
                      {
                          "color": "#dadada"
                      }
                  ]
              }
          ];
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
            center: new google.maps.LatLng(24.7899711, 120.9967021),
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

        // Map Set

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

        // Set Two Triangles Indicating Monitor Area

        var receiveTime;
        var id;
        var lat;
        var lng;
        var description;

        // We Will Recieve These Info From Input

        var LastLatLng = generate_latLng(24,121);;
        var ThisLastLng;
        
        function rad(x){
          return x*Math.PI/180;
        }
        
        function getDistance(p1, p2) {
            var Earth_R = 6378137; // Earth’s mean radius in meter
            var dLat = rad(p2.lat() - p1.lat());
            var dLong = rad(p2.lng() - p1.lng());
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(rad(p1.lat())) * Math.cos(rad(p2.lat())) *
                    Math.sin(dLong / 2) * Math.sin(dLong / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = Earth_R * c;
            return d; // returns the distance in meter
        }

        function generate_latLng(lat,lng)
        {
            var temp = new google.maps.LatLng(lat , lng);
            return temp;
        }

        // For Rounding Error

        var posDom = $('#PosSec > span');
        var idDom = $('#IDSec > span');
        var timeDom = $('#TimeSec > span');

        function IDGeoLoTime_O  (data){
           console.log(data[0]);
           id = data[0].TrackerID;
           lat = parseFloat(data[0].N);
           lng = parseFloat(data[0].E);
           ThisLastLng = generate_latLng(lat,lng);
           receiveTime = data[0].Time;
           var latandlng = "(" + lat + "," + lng + ")";
           posDom.text(latandlng);
           idDom.text(id);
           timeDom.text(receiveTime);
           description = id + ': ' + receiveTime;
           if(id == "0" && getDistance(LastLatLng,ThisLastLng) > 1)
           {
               addMarker(lat, lng, id);
               LastLatLng = generate_latLng(lat,lng);
           }
           // id = 0 Since We Only Have One Dog Now
           // Don't Add If Same Position
           // getDistance(LastLatLng,ThisLastLng) < 1 ---> At Same Point 
           // (1M Is Our Rounding Error)
        }

        var polyCoordinates = [];
        var lineColor;
        var linR, linG, linB;
        var polyLines = [];
        function addPolyLine(counterID, markerArr){
            //removeLine();
            var max = markerArr.length - 1;
            for(var i = 0; i < max; i++){ // Draw 9 lines Max
              polyCoordinates = [];              
              polyCoordinates.push(markerArr[counterID%10].position);
              counterID--;
              if(counterID == -1)
                counterID = 9;
              polyCoordinates.push(markerArr[counterID%10].position);
              if(counterID == -1)
                counterID = 9;
              //linR = Math.floor((Math.random() * 255) + 1);
              //linG = Math.floor((Math.random() * 255) + 1);
              //linB = Math.floor((Math.random() * 255) + 1);
              //lineColor = rgbToHex(linR,linG,linB).toString();
              //lineColor = "#" + lineColor;
              lineColor = "#000000";
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

        // PolyLine To Trace Route

        function setMapOnAll(map, markerArr, notClearID) {
          for (var i = 0; i < markerArr.length; i++) {
            if(i == notClearID);
            else markerArr[i].setMap(map);
          }
        }

        function clearMarkers(markerArr, notClearID) {
          setMapOnAll(null, markerArr, notClearID);
        }

        // To Show/Hide Markers

        var markersID1 = [];
        var markersID2 = [];
        var counterID1 = 0;
        var counterID2 = 0;

        // We Only Use ID1 ATM , Because Only 1 Dog

        function addMarker(lat, lng, id)
        {          
            changepinImage(89,193,84); // Change Color

            var infowindow = new google.maps.InfoWindow({
              content: description
            });

            var marker = new google.maps.Marker({
                position:{ lat: lat, lng: lng },
                map: map, 
                fillOpacity: 0.4,
                icon: pinImage
                });

            marker.addListener('click', function() {
                               infowindow.open(map, marker);
                               });

            clearMarkers(markersID1, counterID1);
            markersID1[counterID1] = marker;
            addPolyLine(counterID1, markersID1);
            counterID1++;
            displayVideo(lat, lng); // Check If Inside Monitor
        }
        
        function displayVideo(lat, lng)
        {
            var markerPos = new google.maps.LatLng({ lat: lat, lng: lng });
            var isWithinMonitor1 = google.maps.geometry.poly.containsLocation(markerPos, monitorArea1);
            var isWithinMonitor2 = google.maps.geometry.poly.containsLocation(markerPos, monitorArea2);
            monitorDisplay(isWithinMonitor1, isWithinMonitor2);
        }

        // Check If Inside Monitor

        var previousMarker;
        var currentMarker;
        var firstCurrent = true;
        var infowindowAlert;
        
        function monitorDisplay(inMonitorArea1, inMonitorArea2)
        {
            if(inMonitorArea1 || inMonitorArea2)
            {

              var monitorPosition;

              if(inMonitorArea1)
              {
                monitorPosition = monitorCoordinates1[1];
                monitorArea1.setOptions({strokeColor:'#FF0000'}); // Red
                $('#Video-Display').attr('src','http://admin:5131339@140.113.124.221/video1.mjpg');
              }
              else // inMonitorArea2
              {
                monitorPosition = monitorCoordinates2[1];
                monitorArea2.setOptions({strokeColor:'#FF0000'}); // Red
                $('#Video-Display').attr('src','http://admin:5131339@140.113.124.220/GetData.cgi?CH=1');
              }
            }
            else
            {
                monitorArea1.setOptions({strokeColor:'#000000'});
                monitorArea2.setOptions({strokeColor:'#000000'}); 
                $('#Video-Display').attr('src','https://www.youtube.com/embed/hfJ5JEAccvo"');
                //infowindowAlert.close(map, markerAlert);
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
            //pinR = Math.floor((Math.random() * 255) + 1);
            //pinG = Math.floor((Math.random() * 255) + 1);
            //pinB = Math.floor((Math.random() * 255) + 1);
            pinColor = rgbToHex(r,g,b).toString();
            pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
            new google.maps.Size(21, 34),
            new google.maps.Point(0,0),
            new google.maps.Point(10, 34));
        }

        // Change Marker Color


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






