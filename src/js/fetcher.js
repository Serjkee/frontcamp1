export default class Fetcher {
  constructor(container, importFunc) {
    this.baseUrl = `https://newsapi.org/v2/everything?`;
    this.apiKey = `50e7f6495b2b43a9a2cff93bcd0399da`;
    this.container = container;
    this.importFunc = importFunc;
  }

  generateRequestUrl(chanel, amount) {
    return `${this.baseUrl}${chanel}sortBy=publishedAt&${amount}language=en&apiKey=${this.apiKey}`
  }

  fetchAndRenderData(chanel, amount) {
    fetch(this.generateRequestUrl(chanel, amount))
    .then(res => res.json())
    .then(res => this.renderData(res.articles));
  }

  renderData(articles) {
    this.importFunc().then(module => module.renderArticles(this.container, articles))
  }
}