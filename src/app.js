const express = require('express');
const logger = require('morgan');
require('dotenv').config({ path: `${__dirname}/../.env` });
// var path = require('path');
// var cookieParser = require('cookie-parser');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/');
var categoriesRouter = require('./routes/categories');
require('./db/db');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/categories', categoriesRouter);

module.exports = app;
