/**
 * Created by zjutvis on 2016/11/14.
 */

var map = L.map('map').setView([30.3, 120.3], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'CSSLIB/images/marker-shadow.png',
        iconSize: [38, 95],
        shadowSize: [50, 64],
        iconAnchor: [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
    }
});

var greenIcon = new LeafIcon({iconUrl: 'CSSLIB/images/marker-icon.png'}),
    redIcon = new LeafIcon({iconUrl: 'CSSLIB/images/marker-icon.png'}),
    orangeIcon = new LeafIcon({iconUrl: 'CSSLIB/images/marker-icon.png'});

L.marker([30.27, 120.27], {icon: greenIcon}).bindPopup("I am a green leaf.").addTo(map);
L.marker([30.28, 120.28], {icon: redIcon}).bindPopup("I am a red leaf.").addTo(map);
L.marker([30.29, 120.29], {icon: orangeIcon}).bindPopup("I am an orange leaf.").addTo(map);


function make(e) {

    L.marker({icon: greenIcon})
        .setLatLng(e.latlng).addTo(map)
        .bindPopup("You clicked the map at " + e.latlng);
}
map.on('click', make);