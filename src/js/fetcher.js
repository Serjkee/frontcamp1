class Fetcher {
  constructor(baseUrl = `https://newsapi.org/v2/everything?`, apiKey = `50e7f6495b2b43a9a2cff93bcd0399da`, method = {method: 'GET'}) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
    this.method = method;
  }

  generateRequestUrl(chanel, amount) {
    return `${this.baseUrl}${chanel}sortBy=publishedAt&${amount}language=en&apiKey=${this.apiKey}`
  }

  fetchAndRenderData(chanel, amount) {
    return fetch(this.generateRequestUrl(chanel, amount), this.method)
            .then(res => res.json());
  }
}

export const fetchFactory = function(baseUrl, apiKey, method) {
  return new Fetcher(baseUrl, apiKey, method);
}
