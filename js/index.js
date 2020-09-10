import { getMap } from "./map.js";
import { getIp } from "./getIp.js";

(async function(){
  try {
    const data = await getIp();
    $.ajax({
      method: "GET",
      url:
        "https://geo.ipify.org/api/v1?apiKey=at_v9esYDBygHGaFR0BiEXUE9rS4LuuM&ipAddress=" + data.ip,
      dataType: "json",
    })
      .done(function (response) {
        const { lat, lng, region, city, postalCode, timezone } = response.location;
        const { isp } = response;
        getMap(lat, lng);
        $("#address-data").text(data.ip);
        $("#location-data").text(`${region}, ${city}, ${postalCode}`);
        $("#zone-data").text("UTC" + timezone);
        $("#isp-data").text(isp);
      })
      .fail(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
}());

$("#btn-search").on("click", function(){
  const ip = $("#ip-address").val();

  $.ajax({
    method: "GET",
    url:
      "https://geo.ipify.org/api/v1?apiKey=at_v9esYDBygHGaFR0BiEXUE9rS4LuuM&ipAddress=" + ip,
    dataType: "json",
  })
    .done(function (response) {
      const { lat, lng, region, city, postalCode, timezone } = response.location;
      const { isp } = response;
      console.log(response);
      map.remove();
      $("#main-container").append("<div id='map' style='height: 70vh; z-index: 0;'></div>");
      getMap(lat, lng);
      $("#address-data").text(ip);
      $("#location-data").text(`${region}, ${city}, ${postalCode}`);
      $("#zone-data").text("UTC" + timezone);
      $("#isp-data").text(isp);
    })
    .fail(function (error) {
      console.log(error);
    });

});





