const btoa = require("btoa");
const config = require("../config");
const fetch = require("node-fetch");

async function getSpotifyToken() {
    const params = new URLSearchParams("grant_type=client_credentials");
    const spotifyString = `${config.spotifyClient}:${config.spotifySecret}`;
    const spotifyBase64String = btoa(spotifyString);
    const spotifyKey = `Basic ${spotifyBase64String}`;
    const uri = config.spotifyAuthUri;
    const response = await fetch(uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": spotifyKey,
      },
      body: params,
    });
    const json = await response.json();
    return json;

}

module.exports = getSpotifyToken;