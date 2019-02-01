const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const route = require('./routes/route');
const utils = require('./middlewares/utils/utils');
const passport = require('passport')
const passportAuth = require('./middlewares/passport/passportAuth');
const session = require('express-session')


// Mongoose settings
const mongoose = require('mongoose');
const db = mongoose.connection;
mongoose.connect('mongodb://localhost:27017/articles', {useNewUrlParser: true});
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  app.listen(3000, function () {
    console.log('connected to db succesfully');
  });
});

// BodyParser settings.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Logger.
app.use(utils.logger);

// Passport JS
app.use(session(passportAuth.passportSession));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(passportAuth.serializeUser);
passport.deserializeUser(passportAuth.deserializeUser);
passport.use(passportAuth.localStrategy);
passport.use(passportAuth.facebookStrategy);

// Routes and middlewares.
app.get('/', route.basicUrl);
app.use('/user', route.users);
app.use('/articles', route.articles);
app.use(utils.errorHandler);
