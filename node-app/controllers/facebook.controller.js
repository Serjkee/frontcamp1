module.exports.login = function(req, res, next) {
  console.log('succesfully logged in facebook-' + req.isAuthenticated());
  res.status(200).redirect('/');
};