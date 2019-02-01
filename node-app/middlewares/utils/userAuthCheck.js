let userAuthCheck = function(req, res, next) {
  if (req.isAuthenticated()) {
    console.log('darova');
    return next()
  }
  res.redirect('/user')
}

module.exports = userAuthCheck;