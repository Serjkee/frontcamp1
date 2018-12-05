class Fetcher {
    constructor(baseUrl = `https://newsapi.org/v2/everything?`, apiKey = `50e7f6495b2b43a9a2cff93bcd0399da`, parameters = {method: 'GET'}) {
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
        this.parameters = parameters;
        return new Proxy(this.fetchAndRenderData, {
            apply: (target, thisValue, arg) => {
              console.log('Im called with proxy', thisValue);
              return Reflect.apply(target, that, arg);
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

class FethcerGet extends Fetcher{
  constructor(baseUrl, apiKey) {
    super(baseUrl, apiKey, {method: 'GET'});
  }

  fetchAndRenderData(chanel, amount) {
    console.log('request from fetcherGet', super.fetchAndRenderData);
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
        return new FethcerGet(baseUrl, apiKey);
      case 'POST':
        return new FetcherPost(baseUrl, apiKey);
      default:
        return new Fetcher(baseUrl, apiKey, parameters);
  }
};
