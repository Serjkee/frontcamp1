const express = require('express');
const router = express.Router();

const crud = require('../controllers/article.controller.js');

let userAuthCheck = function(req, res, next) {
  if (req.isAuthenticated()) {
    console.log('darova');
    return next()
  }
  res.redirect('/user')
}

router.post('/create', userAuthCheck, crud.create);
router.get('/:id', userAuthCheck, crud.read);
router.put('/:id/update', userAuthCheck, crud.update);
router.delete('/:id/delete', userAuthCheck, crud.delete);

module.exports = router;
