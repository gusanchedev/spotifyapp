const options = {
    enableHighAccuracy: true
}
function error(err) {
    console.warn(err);
}
async function success(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://geocode.xyz/${lat},${lng}?geoit=json`;
    const response = await fetch(url);
    const json = await response.json();
    const citySpan = document.querySelector("#city");
    const countrySpan =  document.querySelector("#country");
    citySpan.textContent = json.city[0].toUpperCase() + json.city.slice(1).toLowerCase();
    countrySpan.textContent = json.prov;
}
if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error, options);
}
