const express = require('express'),
	  path = require('path'),
	  cookieParser = require('cookie-parser'),
	  basicAuth = require('express-basic-auth'),
	  logger = require('morgan');

const env = process.env;

// single index router
var router = require('./router.js'),
	app = express();

console.log('Setting express app object')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// PARSES
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

console.log(env.USER)
console.log(env.PASS)

// app.use(basicAuth({
//     users: { [env.USER]: env.PASS }
// }))

app.use('/', router);

module.exports = app;
