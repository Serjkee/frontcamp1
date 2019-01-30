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





// let data = [];

// exports.create = function (req, res, next) {
//   try {
//     if (!req.body.author || !req.body.description) {
//       throw new Error('Missing parameters');
//     }
//     let item = {
//       id: (Math.random()*1000).toFixed(),
//       author: req.body.author, 
//       description: req.body.description
//     }
//     data.push(item);
//     console.log(data);
//     res.send('created succesfully');
//   } catch(err) {
//     next(err);
//   }
// };

// exports.read = function (req, res, next) {
//   try {
//     if (isNaN(req.params.id)) {
//       throw new Error('Wrong id type (expected number)');
//     }
//     let objectToDisplay = data.find( obj => obj.id === req.params.id);
//     console.log(objectToDisplay)
//     res.send('read');
//   } catch(err) {
//     next(err);
//   }
// };

// exports.update = function (req, res, next) {
//   try {
//     if(!req.body.author || !req.body.description) {
//       throw new Error('No body or description provided');
//     }

//     let currentItemIndex = data.findIndex( obj => obj.id === req.params.id);
//     let objId = data[currentItemIndex].id;

//     let updatedItem = {
//       id: objId,
//       author: req.body.author, 
//       description: req.body.description
//     }

//     data.splice(currentItemIndex, 1, updatedItem);
//     console.log(data);
//     res.send('updated');
//   } catch(err) {
//     next(err);
//   }
// };

// exports.delete = function (req, res, next) {
//   try {
//     if(isNaN(req.params.id)) {
//       throw new Error('Wrong id type (expected number)');
//     }
//     let currentItemIndex = data.findIndex( obj => obj.id === req.params.id );
//     data.splice(currentItemIndex, 1);
//     console.log(data);
//     res.send('deleted');
//   } catch(err) {
//     next(err);
//   }
// };
