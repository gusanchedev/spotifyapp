require('dotenv').config();

const config = {
    port: process.env.PORT,
    db: process.env.MONGO_DB,
    dbUser: process.env.MONGO_USER,
    dbPassword: process.env.MONGO_PASSWORD
}

module.exports = config;