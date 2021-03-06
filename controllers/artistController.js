const config = require("../config");
const spotifyToken = require("../utils/spotifyToken");

const Artist = require("../models/artist");
const fetch = require("node-fetch");
const { spotifySearchAPI } = require("../config");

exports.get_artists = async function(req, res, next){
    const {name, market} = req.query;
    const spotifyApiURL = `${config.spotifySearchAPI}?q=${name}&type=artist&market=${market}&limit=10`;
    
    try {
        const token = await spotifyToken();
        const response = await fetch(spotifyApiURL, {
            "method": "GET",
            "headers": {
                "Authorization": `Bearer ${token.access_token}`
            },
        });
        const data = await response.json();
        console.log(data);
        let artistsToDisplay = [];
        if(data.artists.total >= 1){
            const tempArtistsArray = data.artists.items;
            artistsToDisplay = tempArtistsArray.filter(artist => { 
                return artist.images.length >= 1 ? true : false;
            });
            console.log(artistsToDisplay);

            
        }
        // res.send(artistsToDisplay);
        res.render("artists.njk", {artistsToDisplay});
        
    } catch (error) {
        next(error);
    }
}

exports.get_artist_details = async function(req, res, next){

    const artistId = req.params.id;
    const spotifyApiURL = `${config.spotifyArtistsAPI}${artistId}/albums`;
    
    try {
        const token = await spotifyToken();
        const response = await fetch(spotifyApiURL, {
            "method": "GET",
            "headers": {
                "Authorization": `Bearer ${token.access_token}`
            },
        });
        const data = await response.json();
        let albumsToDisplay = [];
        if(data.total >= 1){
            const tempAlbumsArray = data.items;
            albumsToDisplay = tempAlbumsArray.filter(album => { 
                return album.images.length >= 1 ? true : false;
            });
        }
        // res.send(data);
        res.render("albums.njk", { albumsToDisplay });
        
    } catch (error) {
        next(error);
    }
}