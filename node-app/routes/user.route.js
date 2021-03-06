const express = require('express');
const router = express.Router();
const passport = require('passport');

const userAuth = require('../controllers/user.controller');
const facebookAuth = require('../controllers/facebook.controller');

let choosingLocalStrategy = passport.authenticate('local');
let choosungFacebookStrategy = passport.authenticate('facebook', { failureRedirect: '/login' });

router.post('/login', choosingLocalStrategy, userAuth.login);
router.post('/register', userAuth.register);
router.get('/logout', userAuth.logout);
router.get('/facebook', choosungFacebookStrategy);
router.get('/facebook/callback', choosungFacebookStrategy, facebookAuth.login);

module.exports = router;
