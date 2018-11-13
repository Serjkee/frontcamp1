let articles = [];
let insertArticles = [];
let container = document.querySelector('#content');
let chanel = `sources=${document.querySelector('#chanel').value ? document.querySelector('#chanel').value : 'cnn'}&`;
let amount = `pageSize=${document.querySelector('#amount').value ? document.querySelector('#amount').value : 10}&`;
let url = `https://newsapi.org/v2/everything?${chanel}sortBy=publishedAt&${amount}language=en&apiKey=50e7f6495b2b43a9a2cff93bcd0399da`;

function* getArticles() {
  let urlFetch = yield fetch(url);
  let urlPromise = yield urlFetch.json();

  articles = urlPromise.articles;
  insertArticles = articles.map( art => {
    return `<div class="item-wrapper">
    <div class="item-header">
      <div class="image">
        <img src="${art.urlToImage ? art.urlToImage : 'noimage.jpg'}" alt="article image">
      </div>
      <div class="item-utility">
        <p class="chanel">News chanel: <span>${art.source.name}</span></p>
        <p class="date">Published date: <span>${art.publishedAt.slice(0, 10)}</span></p>
      </div>
    </div>
    <div class="item-content">
      <h2 class="title">${art.title}</h2>
      <p class="description">${art.description ? art.description : 'No description.'}</p>
    </div>
    <div class="item-footer">
      <p class="author">Article author: <span>${art.author ? art.author : 'Unknown Author'}</span></p>
      <a href="${art.url}">Read more</a>
    </div>
    </div>`
  } );
  container.innerHTML = insertArticles.join('');
  
  return insertArticles;
}

let execute = (generator, yieldValue) => {
  let next = generator.next(yieldValue);

  if (!next.done) {
    next.value.then(
      result => execute(generator, result),
      err => generator.throw(err)
    );
  }
}

let searchArticles = () => {
  event.preventDefault();
  execute( getArticles() );
}