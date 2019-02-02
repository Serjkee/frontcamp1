const errorHandler = require('./errorHandler');
const logger = require('./logger');
const userAuthCheck =require('./userAuthCheck');
const pageNotFound = require('./pageNotFound');

module.exports = {
  errorHandler: errorHandler,
  logger: logger,
  userAuthCheck: userAuthCheck,
  pageNotFound: pageNotFound
}