let serializeUser = function(user, done) {
  done(null, user);
}

module.exports = serializeUser;