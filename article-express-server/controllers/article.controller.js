const Article = require('../models/article.model');

// CRUD OPERATIONS.

// Create.
exports.article_create = function (req, res, next) {
  let article = new Article(
      {
          author: req.body.author,
          description: req.body.description
      }
  );

  article.save(function (err) {
      if (err) {
          return next(err);
      }
      res.send('Article Created successfully')
  })
};


// Read.
exports.article_details = function (req, res, next) {
  Article.findById(req.params.id, function (err, article) {
      if (err) return next(err);
      res.send(article);
  })
};

// Update.
exports.article_update = function (req, res, next) {
  Article.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, article) {
      if (err) return next(err);
      res.send('Article udpated.');
  });
};

// Delete.
exports.article_delete = function (req, res, next) {
  Article.findByIdAndRemove(req.params.id, function (err) {
      if (err) return next(err);
      res.send('Deleted successfully!');
  })
};
