var mymap = L.map('map').setView([30.3, 120.3], 13);

var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    osm = L.tileLayer(osmUrl, {maxZoom: 17});
osm.addTo(mymap);
//创建marker
var marker = L.marker([30.3, 120.3]).addTo(mymap);
//创建infowindow
marker.bindPopup('这个是infowindow对象');


L.marker([30.3, 120.3]).addTo(mymap)
    .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

L.circle([30.28, 120.2], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(mymap).bindPopup("I am a circle.");

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);

