let logger = function(req, res, next) {
  console.log(`${new Date().toUTCString()} - ${req.hostname}${req.url} - ${req.method}`);
  next();
};

module.exports = logger;