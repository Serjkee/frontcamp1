import 'promise-polyfill/src/polyfill';
import '../scss/styles.scss';
import '../scss/loader.scss'
import './main.json';

import { fetchFactory } from  './fetcher';
import { newsRenderer } from './renderer';
import { loaderRenderer } from './loader';
import { filtersRenderer } from './fliters';

import '../img/news-image.jpg';

const fetcherGet = fetchFactory(void 0, void 0, {method: 'GET'});
const fetcherPost = fetchFactory(void 0, void 0, {method: 'POST'});

// console.log(fetcherGet, fetcherPost);
// const funcStorage = fetcherGet.fetchAndRenderData;

filtersRenderer.submitButton.addEventListener('click', (event) => {
  const chanel = filtersRenderer.chanelValue;
  const amount = filtersRenderer.amountValue;
  event.preventDefault();
  loaderRenderer.showLoader();
  fetcherGet(chanel, amount)
      .then(data => newsRenderer.render(data.articles)
          .then(() => loaderRenderer.hideLoader()));
});
