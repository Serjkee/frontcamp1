var express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.get('*', function(req, res, next) {
  res.json({"raz": "dva"});
})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
