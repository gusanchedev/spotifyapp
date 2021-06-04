require('dotenv').config();

const config = {
    port: process.env.PORT,
    db: process.env.MONGO_DB,
    dbUser: process.env.MONGO_USER,
    dbPassword: process.env.MONGO_PASSWORD,
    spotifyAuthUri: process.env.SPOTIFY_AUTH_URI,
    spotifyClient: process.env.SPOTIFY_CLIENT,
    spotifySecret: process.env.SPOTIFY_SECRET,
    spotifySearchAPI: process.env.SPOTIFY_SEARCH_API,
    spotifyArtistsAPI: process.env.SPOTIFY_ARTISTS_API,
    spotifyAlbumAPI: process.env.SPOTIFY_ALBUM_API,
}

module.exports = config;