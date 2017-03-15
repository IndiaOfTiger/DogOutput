/*$(
    
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
        zoom: 17,
        zoomControl: false,
        scaleControl: false,
        scrollwheel: false,
        center: new google.maps.LatLng(24.7867109,120.9972336),
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
      };
      var map = new google.maps.Map(document.getElementById('Location-map'),
        mapOptions);

      //Associate the styled map with the MapTypeId and set it to display.
      map.mapTypes.set('map_style', styledMap);
      map.setMapTypeId('map_style');
    }
);*/
$(function(){
        

        function iot_app(){

            
        }
        
        var profile = {
            'dm_name': 'FindDog',
            'odf_list': [],
            'idf_list': [],
            'origin_odf_list': [],
            'origin_idf_list': [],
            'is_sim': false,
            'df_list':[],
        }
        var ida = {
            'iot_app': iot_app,
        }; // How iot device receive data (format)
        dai(profile,ida);
       
        
});
