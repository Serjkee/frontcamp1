const basicUrl = require('./basic.route');
const users = require('./user.route');
const articles = require('./article.route');

module.exports = {
  basicUrl: basicUrl,
  users: users,
  articles: articles
}