const express = require('express'),
	  path = require('path'),
	  cookieParser = require('cookie-parser'),
	  basicAuth = require('express-basic-auth'),
	  logger = require('morgan');

// single index router
var router = require('./router.js'),
	app = express();

const config = require('./config.js'),
	  username = config.username,
	  password = config.password;

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(basicAuth({
    users: { [username]: password }
}))

app.use('/', router);

module.exports = app;
