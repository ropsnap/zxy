const express = require('express'),
	  path = require('path'),
	  cookieParser = require('cookie-parser'),
	  basicAuth = require('express-basic-auth'),
	  logger = require('morgan');

const env = process.env;

// single index router
var router = require('./router.js'),
	app = express();

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(basicAuth({
    users: { [env.USERNAME]: env.PASSWORD }
}))

app.use('/', router);

module.exports = app;
