let localErrorHandler = function(err, req, res, next) {
  console.error(err.stack);
  res.status(403).send('Something broke!');
}

module.exports = localErrorHandler;