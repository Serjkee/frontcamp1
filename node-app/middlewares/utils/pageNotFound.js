let pageNotFound = function(req, res) {
  res.status(404).send('Sorry, page doesn\'t exist');
}

module.exports = pageNotFound;