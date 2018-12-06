import 'promise-polyfill/src/polyfill';
import '../scss/styles.scss';
import '../scss/loader.scss'
import './main.json';

import { fetchFactory } from  './fetcher';
import { articleRenderer } from './articleRenderer';
import { errorRenderer } from './errorRenderer';
import { loaderRenderer } from './loader';
import { filtersRenderer } from './filters';

import '../img/news-image.jpg';

const fetcherGet = fetchFactory(void 0, void 0, {method: 'GET'});
const fetcherPost = fetchFactory(void 0, void 0, {method: 'POST'});

filtersRenderer.submitButton.addEventListener('click', (event) => {
    const chanel = filtersRenderer.chanelValue;
    const amount = filtersRenderer.amountValue;
    event.preventDefault();
    loaderRenderer.showLoader();
    fetcherGet(chanel, amount).then(data => articleRenderer.renderArticles(data.articles).then(() => errorRenderer.hideError()).then(() => loaderRenderer.hideLoader()))
        .catch(() => {
            articleRenderer.cleanArticles();
            errorRenderer.showError();
        }).then(() => loaderRenderer.hideLoader());
});
