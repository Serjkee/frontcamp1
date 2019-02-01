const LocalStrategy = require('passport-local').Strategy;
const User = require('../../model/user.model');

let localStrategy = new LocalStrategy(
  function(username, password, done) {
    User.findOne({username: username, password: password}, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (password !== user.password) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
)

module.exports = localStrategy;