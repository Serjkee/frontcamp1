const options = require('loader-utils');
const path = require('path');

module.exports = function (source) {
  const jsonObject = JSON.parse(source);
  const keyArray = Object.keys(jsonObject).map(key => typeof key === 'string' ? key : null);
  const keyObject = {...keyArray}
  console.log(keyArray);
  this.emitFile(path.basename(this.resourcePath), JSON.stringify(keyObject));
  return `module.exports = '${JSON.stringify(keyObject)}'`
}