var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const UserDB = require('./module/user');
const userDB = new UserDB();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use( async (req, res, next) => {
  let user = await userDB.checkLogin(req);
  if (user) {
    req.user = user;
  }
  next();
});

app.use("/logout", (req, res, next) => {
  res.clearCookie('uuid');
  res.redirect("/");
});

app.use('/', indexRouter);
app.use('/login', require('./routes/login'));
app.use('/users', usersRouter);
app.use('/about', require('./routes/about'));
app.use('/contact', require('./routes/contact'));
app.use('/products', require('./routes/products'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
