const express = require('express');
const router = express.Router();

const crud = require('../controllers/controller.js');

router.post('/create', crud.create);
router.get('/:id', crud.read);
router.put('/:id/update', crud.update);
router.delete('/:id/delete', crud.delete);

module.exports = router;
