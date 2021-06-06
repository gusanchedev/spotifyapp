const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const nunjucks = require("nunjucks");

const artistRouter = require('./routes/artist');
const albumRouter =  require('./routes/album');
const myplayListRouter = require('./routes/myplaylist');

const app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
});
nunjucks.configure('views', { autoescape: true });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/spotifyapp/', function(req, res, next) {
    res.redirect('/');
})
app.use('/spotifyapp/artist', artistRouter);
app.use('/spotifyapp/album', albumRouter);
app.use('/spotifyapp/myplaylist', myplayListRouter);

module.exports = app;
