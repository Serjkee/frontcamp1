import 'promise-polyfill/src/polyfill';
import '../scss/styles.scss';
import { fetcher } from  './fetcher';
import './main.json';
import { newsRenderer } from './renderer';
import { loaderRenderer } from './loader';

import '../img/news-image.jpg';

let submitButton = document.querySelector('#search');

submitButton.addEventListener('click', (event) => {
  const chanel = `sources=${document.querySelector('#chanel').value ? document.querySelector('#chanel').value : 'cnn'}&`;
  const amount = `pageSize=${document.querySelector('#amount').value ? document.querySelector('#amount').value : 10}&`;
  event.preventDefault();
  loaderRenderer.showLoader();
  fetcher.fetchAndRenderData(chanel, amount)
      .then(data => newsRenderer.render(data.articles)
          .then(() => loaderRenderer.hideLoader()));
});
