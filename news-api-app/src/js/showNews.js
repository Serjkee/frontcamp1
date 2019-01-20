import '../scss/showNews.scss';

import '../img/noimage.jpg';

const customNews = {
  author: "Siarhei",
  content: "MY CUSTOM NEWS",
  description: "MY CUSTOM NEWS",
  publishedAt: "2018-12-05T16:20:59Z",
  source: {
    id: "my custom",
    name: "my custom"
  },
  title: "MY CUSTOM NEWS",
  url: "https://github.com/Serjkee/frontcamp1",
  urlToImage: null
}

export const renderArticles = function(container, articles) {
  const insertArticles = articles.map( art => {
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
}

export const proxiedArticles = new Proxy(renderArticles, {
  apply: (target, thisVal, arg) => {
    arg[1].unshift(customNews);
    return Reflect.apply(target, this, arg);
}
});