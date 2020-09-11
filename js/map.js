"use strict";

export const getMap = (lat, long, isp) => {
  const map = L.map("map", {
    center: [lat, long],
    zoom: 11,
  });

  L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 18,
  }).addTo(map);

  L.control.scale().addTo(map);

  var marker = L.marker([lat, long], { draggable: true }).addTo(
    map
  );
  marker.bindPopup(`${isp}`).openPopup();
};
