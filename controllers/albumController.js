const config = require('../config');
const spotifyToken = require("../utils/spotifyToken");

const fetch = require('node-fetch');

exports.album_details = async function(req, res, next) {
    const albumId = req.params.id;
    const spotifyApiURL = `${config.spotifyAlbumAPI}${albumId}/tracks`;
    
    try {
        const token = await spotifyToken();
        const response = await fetch(spotifyApiURL, {
            "method": "GET",
            "headers": {
                "Authorization": `Bearer ${token.access_token}`
            },
        });
        const data = await response.json();
        let tracksToDisplay = [];
        if(data.total >= 1){
            const tempTracksArray = data.items;
            tracksToDisplay = tempTracksArray.filter(track => { 
                return track.preview_url ? true : false;
            });            
        }
        // res.send(tracksToDisplay);
        res.render("tracks.njk", {tracksToDisplay});
        
    } catch (error) {
        next(error);
    }
}