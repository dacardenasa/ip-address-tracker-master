import { getMap } from "./map.js";
import { getIp, ValidateIPaddress } from "./ip.js";

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
        getMap(lat, lng, isp);
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
  if ($("#ip-address").hasClass("show-error")) $("#ip-address").removeClass("show-error");

  if (ValidateIPaddress(ip)) {
    $.ajax({
      method: "GET",
      url:
        "https://geo.ipify.org/api/v1?apiKey=at_v9esYDBygHGaFR0BiEXUE9rS4LuuM&ipAddress=" + ip,
      dataType: "json",
    })
      .done(function (response) {
        const { lat, lng, region, city, postalCode, timezone } = response.location;
        const { isp } = response;
        map.remove();
        $("#main-container").append("<div id='map' style='height: 70vh; z-index: 0;'></div>");
        getMap(lat, lng, isp);
        $("#address-data").text(ip);
        $("#location-data").text(`${region}, ${city}, ${postalCode}`);
        $("#zone-data").text("UTC" + timezone);
        $("#isp-data").text(isp);
      })
      .fail(function (error) {
        console.log(error);
      });
  } else {
    $("#ip-address").addClass("show-error");
  }

});







