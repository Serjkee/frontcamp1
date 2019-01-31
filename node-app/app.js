var express = require('express');
const bodyParser = require('body-parser');
var app = express();

// Mongoose settings
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/articles', {useNewUrlParser: true});

// Toutes
const articles = require('./routes/article.route');
const users = require('./routes/user.route');

// BodyParses settings.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Logger.
app.use(function(req, res, next) {
  console.log(`${new Date().toUTCString()} - ${req.hostname}${req.url} - ${req.method}`);
  next();
});

// Passport JS
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
const User = require('./model/user.model');
var session = require('express-session')

app.use(session({
  key: 'sid',
  secret: 'thissecretrocks',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new LocalStrategy(
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
));

passport.use(new FacebookStrategy({
  clientID: '1963663287275999',
  clientSecret: '1012a15a8e57601b68e280613d21a0bd',
  callbackURL: "http://localhost:3000/user/facebook/callback"
},
function(accessToken, refreshToken, profile, cb) {
  User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    return cb(err, user);
  });
}
));

// Routes and middlewares.
app.get('/', function (req, res, next) {
  res.send('Hello World!');
});
app.use('/user', users);
app.use('/articles', articles);
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
