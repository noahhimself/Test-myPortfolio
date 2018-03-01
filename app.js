var express = require('express');
var mg = require('mailgun');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// Get Methods
app.get('/', function(req, res, next) {
    res.render('/index');
});

// Post Methods
app.post('/', function(req, res, next) {
    var api_key = 'key-a7fd0cd8bd08c7a85d4e930992ef5d1c';
    var domain = 'sandboxf71719309ed34e85870094a9e99dfdc7.mailgun.org';
    var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

    var data = {
        from: 'myPortfolio <postmaster@sandboxf71719309ed34e85870094a9e99dfdc7.mailgun.org>',
        to: 'noahhimself@gmail.com',
        subject: req.body.userName + " Sent you a message",
        html: "<b>Email: </b>" + req.body.email + "<br><b>Message: </b>" + req.body.message
    };

    mailgun.messages().send(data, function (error, body) {
        console.log(body);
        if (!error)
        {
            res.redirect('/#contact');
        }
        else
        {
            res.send("Mail not sent");
        }
    });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
