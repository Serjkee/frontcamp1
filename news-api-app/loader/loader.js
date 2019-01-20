const options = require('loader-utils');

module.exports = function (source) {
  const jsonObject = JSON.parse(source);
  const opt = options.getOptions(this);
  const keyArray = Object.keys(jsonObject).map(key => typeof key === opt.type ? key : null);
  const keyObject = {...keyArray}
  return JSON.stringify(keyObject);
}