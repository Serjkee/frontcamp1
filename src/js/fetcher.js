class Fetcher {
  constructor() {
    this.baseUrl = `https://newsapi.org/v2/everything?`;
    this.apiKey = `50e7f6495b2b43a9a2cff93bcd0399da`;
  }

  generateRequestUrl(chanel, amount) {
    return `${this.baseUrl}${chanel}sortBy=publishedAt&${amount}language=en&apiKey=${this.apiKey}`
  }

  fetchAndRenderData(chanel, amount) {
    return fetch(this.generateRequestUrl(chanel, amount))
            .then(res => res.json());
  }
}

export const fetcher = new Fetcher();
