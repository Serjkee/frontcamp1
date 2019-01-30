const User = require('../model/user.model');

module.exports.login = function(req, res, next) {
  console.log('succesfully logged-' + req.isAuthenticated());
  res.redirect('/');
};

module.exports.logout = function(req, res) {
  console.log(req.isAuthenticated());
  req.logout();
  console.log(req.isAuthenticated());
  res.redirect('/');
};

module.exports.register = function(req, res, next) {
  const newUser = new User({ username: req.body.username, password: req.body.password});
  newUser.save(function(err) {
    if(err) return console.log(err);
    res.send('user created succesfully');
  });
};