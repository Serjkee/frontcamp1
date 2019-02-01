const localStrategy = require('./localStrategy');
const facebookStrategy = require('./facebookStrategy');
const serializeUser = require('./serializeUser');
const deserializeUser = require('./deserializeUser');
const passportSession = require('./passportSession');

module.exports = {
  localStrategy: localStrategy,
  facebookStrategy: facebookStrategy,
  serializeUser: serializeUser,
  deserializeUser: deserializeUser,
  passportSession: passportSession
}