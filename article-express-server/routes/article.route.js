const express = require('express');
const router = express.Router();

// Exporting controllers.
const article_controller = require('../controllers/article.controller');

// Defining routes and related controllers
router.post('/create', article_controller.article_create);
router.get('/:id', article_controller.article_details);
router.put('/:id/update', article_controller.article_update);
router.delete('/:id/delete', article_controller.article_delete);

module.exports = router;
