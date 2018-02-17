var express = require('express'); //load the express package (from package.json)
var path = require('path'); //loads the path package (from node)
var favicon = require('serve-favicon'); //loads the serve-facicon package (package.json)
var logger = require('morgan'); //loads the morgan package (package.json)
var cookieParser = require('cookie-parser'); //loads cookie-parser (package.json)

/*
Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

This module provides the following parsers:
JSON body parser
Raw body parser
Text body parser
URL-encoded form body parser
*/
var bodyParser = require('body-parser');


//loads are custom routes
var index = require('./routes/index');
var users = require('./routes/users');

//sets up express
var app = express();

// view engine setup
// __dirname points to this directory, provided by node
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//the following use functions act as "middleware" for each request and are called before the requests get handled. 

/*
User agents request favicon.ico frequently and indiscriminately, so you may wish to exclude these requests from your logs by using this middleware before your logger middleware.
This module caches the icon in memory to improve performance by skipping disk access.
This module provides an ETag based on the contents of the icon, rather than file system properties.
This module will serve with the most compatible Content-Type.
*/
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

/*

http request logger middleware
makes req logs pretty
other options are combined, short, tiny
*/
app.use(logger('dev'));

//Returns middleware that only parses json and only looks at requests where the Content-Type header matches "application/json"
app.use(bodyParser.json());

//Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option.
//This parser accepts only UTF-8 encoding of the body and supports automatic inflation of gzip and deflate encodings.
//The "extended" syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded
app.use(bodyParser.urlencoded({ extended: false }));

//Parse Cookie header and populate req.cookies with an object keyed by the cookie names. 
//Optionally you may enable signed cookie support by passing a secret string, which assigns req.secret so it may be used by other middleware.
app.use(cookieParser());

//sets up a directory from which to load static assets, assets contained in this folder are served from the root i.e. http://localhost/css/style.css
app.use(express.static(path.join(__dirname, 'public')));

//tells express to actually start using our routes, its important that these are loaded AFTER any middleware we want to run. 
//each route will typically end the response stream by sending its results
app.use('/', index);
app.use('/users', users);

// NodeJS handles 404's not through a specific error but by allowing requests to fall through. 
// If it made it here without finding an appropriate route / handler then the request must be a 404.
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


//We define error-handling middleware functions in the same way as other middleware functions, except error-handling functions have four arguments instead of three: (err, req, res, next)
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
