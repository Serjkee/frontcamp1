var express = require('express');
const bodyParser = require('body-parser');
var app = express();

const articles = require('./routes/route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
  console.log(`${new Date().toUTCString()} - ${req.hostname}${req.url} - ${req.method}`);
  next();
});

app.get('/', function (req, res, next) {
  res.send('Hello World!');
});
app.use('/articles', articles);
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
