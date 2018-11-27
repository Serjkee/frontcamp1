import { getOptions } from 'loader-utils';

module.exports = function (source) {
  const jsonObject = JSON.parse(source);
  Object.keys(jsonObject).map(key => typeof key === 'string' ? true : null);
  console.log(this);
  return `module.exports = '${jsonObject}'`
}