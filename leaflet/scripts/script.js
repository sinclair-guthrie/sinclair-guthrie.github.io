var mymap = L.map('mapid', {
    zoomControl: false,
    dragging: false,
    doubleClickZoom: false
}).setView([51.505, -0.09], 14);

L.tileLayer('https://api.mapbox.com/styles/v1/sinkzor/ckcxugrrp17ya1iqu9jrshvki/tiles/512/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 14,
    minZoom: 14,
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2lua3pvciIsImEiOiJja2M0ODVuZnAwNWF3MzNvOTY4dHI5M2VvIn0.VSzGUFeL_wYV2ex96gGUIg'
}).addTo(mymap);

/* var marker = L.marker([51.5, -0.09]).addTo(mymap);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);

var popup = L.popup(); */

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}
    
mymap.on('click', onMapClick);