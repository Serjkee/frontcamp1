let userAuthCheck = function(req, res, next) {
  if (req.isAuthenticated()) {
    console.log('darova');
    return next()
  }
  res.status(308).send('Please log in')
}

module.exports = userAuthCheck;