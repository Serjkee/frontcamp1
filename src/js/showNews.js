import '../scss/showNews.scss';

import '../img/noimage.jpg';

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
