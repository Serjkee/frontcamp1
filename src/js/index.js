import 'promise-polyfill/src/polyfill';
import '../scss/styles.scss';
import Fetcher from  './fetcher';
import test from './main.json';

import '../img/news-image.jpg';

console.log(test);


let submitButton = document.querySelector('#search');
let container = document.querySelector('#content');
const newsModuleLoader = () => import('./showNews');

const newsFetcher = new Fetcher(container, newsModuleLoader);
submitButton.addEventListener('click', (event) => {
  const chanel = `sources=${document.querySelector('#chanel').value ? document.querySelector('#chanel').value : 'cnn'}&`;
  const amount = `pageSize=${document.querySelector('#amount').value ? document.querySelector('#amount').value : 10}&`;
  event.preventDefault();
  newsFetcher.fetchAndRenderData(chanel, amount);
});