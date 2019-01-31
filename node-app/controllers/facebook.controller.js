module.exports.login = function(req, res, next) {
  console.log('succesfully logged in facebook-' + req.isAuthenticated());
  res.redirect('/');
};