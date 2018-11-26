import 'promise-polyfill/src/polyfill';
import '../scss/styles.scss';


import '../img/news-image.jpg';
import '../img/noimage.jpg';

let execute = (generator, yieldValue) => {
  let next = generator.next(yieldValue);

  if (!next.done) {
    next.value.then(
      result => execute(generator, result),
      err => generator.throw(err)
    );
  }
}

let submitButton = document.querySelector('#search');
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  import('./showNews').then(res => execute( res.getArticles() ));
});