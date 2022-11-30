var createError = require('http-errors');
var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res) => {
  res.sendFile(path.join(__dirname,"views","home.html"))
})

app.use(function(req, res, next) {
  next(createError(404));
});


// app.use(function(err, req, res, next) {
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
