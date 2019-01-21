const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const morgan = require('morgan');

const article = require('./routes/article.route');
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let db_url = 'mongodb://anyuser:anyuser1@ds115198.mlab.com:15198/articles';
let mongoDB = process.env.MONGODB_URI || db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Defining error handlers.
const clientErrorHandler = (req, res, next) => {
  err = new Error('Page Not Found');
  err.status = 404;
  next(err);
}

const errorHandler = (err, req, res, next) => {
  res.render('index', {
    message: err.message,
    error: {}
  });
}

// Render pug template in './views/index.pug' 
app.set('view engine', 'pug');
app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});

// Logger setting.
const logStream = fs.createWriteStream('logger.txt', { flags: 'a' });
app.use(morgan(':url :date[web]', { stream: logStream }));

// 'Use' settings.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/article', article);
app.use(clientErrorHandler);
app.use(errorHandler);

// Setting up server.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});