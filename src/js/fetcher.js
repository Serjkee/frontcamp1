class Fetcher {
    constructor(baseUrl = `https://newsapi.org/v2/everything?`, apiKey = `50e7f6495b2b43a9a2cff93bcd0399da`, parameters = {method: 'GET'}) {
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
        this.parameters = parameters;
        return new Proxy(this.fetchAndRenderData, {
            apply: (target, thisValue, arg) => {
              return Reflect.apply(target, this, arg);
          }
        });
    }

    generateRequestUrl(chanel, amount) {
        return `${this.baseUrl}${chanel}sortBy=publishedAt&${amount}language=en&apiKey=${this.apiKey}`
    }

    fetchAndRenderData(chanel, amount) {
        return fetch(this.generateRequestUrl(chanel, amount), this.parameters)
            .then(res => res.json());
    }
}

class FetcherGet extends Fetcher{
  constructor(baseUrl, apiKey) {
    super(baseUrl, apiKey, {method: 'GET'});
  }

  fetchAndRenderData(chanel, amount) {
    return super.fetchAndRenderData(chanel, amount);
  }
}

class FetcherPost extends Fetcher {
    constructor(baseUrl, apiKey) {
        super(baseUrl, apiKey, {method: 'POST'});
    }
}

export const fetchFactory = function(baseUrl, apiKey, parameters) {
  switch (parameters.method) {
      case 'GET':
        return new FetcherGet(baseUrl, apiKey);
      case 'POST':
        return new FetcherPost(baseUrl, apiKey);
      default:
        return new Fetcher(baseUrl, apiKey, parameters);
  }
};
