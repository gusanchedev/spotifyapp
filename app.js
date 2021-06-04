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

app.use('/artist', artistRouter);
app.use('/album', albumRouter);
app.use('/myplaylist', myplayListRouter);

module.exports = app;
