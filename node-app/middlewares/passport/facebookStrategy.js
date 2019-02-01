const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../../model/user.model');

let facebookStrategy = new FacebookStrategy({
  clientID: '1963663287275999',
  clientSecret: '1012a15a8e57601b68e280613d21a0bd',
  callbackURL: 'http://localhost:3000/user/facebook/callback'
},
function(accessToken, refreshToken, profile, cb) {
  User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    return cb(err, user);
  });
}
)

module.exports = facebookStrategy;