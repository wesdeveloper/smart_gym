const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const index = require('./routes/indexRouter');
const gyms = require('./routes/gymsRouter');
const gymmers = require('./routes/gymmersRouter');
const series = require('./routes/seriesRouter');
const records = require('./routes/recordsRouter');

const app = express();
require('./config/db');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api/gyms', gyms);
app.use('/api/gymmers', gymmers);
app.use('/api/series', series);
app.use('/api/records', records);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  const error = app.get('env') === 'development' ? err : {};
  const status = err.status || 500;

  // respond to client
  res.status(status).json(error);
});

module.exports = app;
