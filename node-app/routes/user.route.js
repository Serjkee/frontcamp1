const express = require('express');
const router = express.Router();
var passport = require('passport');

const userAuth = require('../controllers/user.controller');

let choosingLocalStrategy = passport.authenticate('local');

router.post('/login', choosingLocalStrategy, userAuth.login);
router.post('/register', userAuth.register);
router.get('/logout', userAuth.logout);

module.exports = router;
