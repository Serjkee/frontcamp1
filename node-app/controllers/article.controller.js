const Article = require('../model/article.model');

// CRUD OPERATIONS

exports.create = function (req, res, next) {
  const createArticle = new Article({
    author: req.body.author, 
    description: req.body.description
  })

  createArticle.save(function(err) {
    if(err) return next(err);
    res.status(200).send('created succesfully');
  });
};

exports.read = function (req, res, next) {
  console.log(req.isAuthenticated());
  Article.findById( req.params.id, function(err, article) {
    if(err) return next(err);
    console.log(article);
    res.status(200).json(article);
  });
};

exports.update = function (req, res, next) {
  let documentToReplace = {
    author: req.body.author,
    description: req.body.description
  }

  Article.findByIdAndUpdate(req.params.id, documentToReplace, function(err) {
    if(err) return next(err);
    res.status(200).json(documentToReplace);
  })
};

exports.delete = function (req, res, next) {
  Article.findByIdAndDelete(req.params.id, function(err) {
    if(err) return next(err);
    res.status(200).send('deleted succesfully');
  })
};
