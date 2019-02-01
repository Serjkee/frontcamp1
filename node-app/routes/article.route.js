const express = require('express');
const router = express.Router();

const crud = require('../controllers/article.controller.js');
const utils = require('../middlewares/utils/utils');

router.post('/create', utils.userAuthCheck, crud.create);
router.get('/:id', utils.userAuthCheck, crud.read);
router.put('/:id/update', utils.userAuthCheck, crud.update);
router.delete('/:id/delete', utils.userAuthCheck, crud.delete);

module.exports = router;
