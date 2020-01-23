//===============================================
// DISPLAY GOOGLE MAPS WITH ULURU
//===============================================

function initMap() {
    // The location of Uluru
    var uluru = {lat: 51.5901, lng: 0.22897};
    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
}