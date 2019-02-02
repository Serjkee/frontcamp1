let basicUrl = function (req, res, next) {
  res.status(200).send('Hello World!');
}

module.exports = basicUrl;