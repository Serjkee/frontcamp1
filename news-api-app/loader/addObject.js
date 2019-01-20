const options = require('loader-utils');
const path = require('path');

module.exports = function (source) {
  const jsonObject = JSON.parse(source);
  const opt = options.getOptions(this);
  const newObj = Object.assign({}, jsonObject,opt.addObj);
  this.emitFile(path.basename(this.resourcePath), JSON.stringify(newObj));
  return `module.exports = ${JSON.stringify(newObj)}`;
}