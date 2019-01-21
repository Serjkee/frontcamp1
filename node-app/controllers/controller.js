let data = [];

exports.create = function (req, res, next) {
  try {
    if (!req.body.author || !req.body.description) {
      throw new Error('Missing parameters');
    }
    let item = {
      id: (Math.random()*1000).toFixed(),
      author: req.body.author, 
      description: req.body.description
    }
    data.push(item);
    console.log(data);
    res.send('created succesfully');
  } catch(err) {
    next(err);
  }
};

exports.read = function (req, res, next) {
  try {
    data.map( obj => {
      obj.id === req.params.id ? console.log(obj) : null;
    });
    res.send('read');
  } catch(err) {
    next(err);
  }
};

exports.update = function (req, res, next) {
  try {
    if(!req.body.author || !req.body.description) {
      throw new Error('No body or description provided');
    }
    data.map( obj => {
      if(obj.id === req.params.id) {
        let updatedItem = {
          id: obj.id,
          author: req.body.author, 
          description: req.body.description
        }
        let currentItemIndex = data.indexOf(obj);
        data.splice(currentItemIndex, 1, updatedItem);
      }
    });
    console.log(data);
    res.send('updated');
  } catch(err) {
    next(err);
  }
};

exports.delete = function (req, res, next) {
  try {
    data.map( obj => {
      if(obj.id === req.params.id) {
        let currentItemIndex = data.indexOf(obj);
        data.splice(currentItemIndex, 1);
      }
    });
    console.log(data);
    res.send('deleted');
  } catch(err) {
    next(err);
  }
};
