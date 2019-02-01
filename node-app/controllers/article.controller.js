const Article = require('../model/article.model');

// CRUD OPERATIONS

exports.create = function (req, res, next) {
  const createArticle = new Article({
    author: req.body.author, 
    description: req.body.description
  })

  createArticle.save(function(err) {
    if(err) return console.log(err);
    res.send('created succesfully');
  });
};

exports.read = function (req, res, next) {
  console.log(req.isAuthenticated());
  Article.findById( req.params.id, function(err, article) {
    if(err) return console.log(err);
    console.log(article);
    res.send('read succesfully');
  });
};

exports.update = function (req, res, next) {
  let documentToReplace = {
    author: req.body.author,
    description: req.body.description
  }

  Article.findByIdAndUpdate(req.params.id, documentToReplace, function(err) {
    if(err) return console.log(err);
    res.send('updated succesfully');
  })
};

exports.delete = function (req, res, next) {
  Article.findByIdAndDelete(req.params.id, function(err) {
    if(err) return console.log(err);
    res.send('deleted succesfully');
  })
};
