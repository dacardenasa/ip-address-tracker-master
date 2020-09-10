const map = L.map('map', {
  center: [41.4780, -0.09],
  zoom: 11
});
	
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
maxZoom: 18
}).addTo(map);

L.control.scale().addTo(map);

var marker = L.marker([  41.4780103, 2.3043663 ],{draggable: true}).addTo(map);  
marker.bindPopup("Aqui estan nuestras oficinas").openPopup();
