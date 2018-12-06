class ErrorRenderer {
  constructor() {
      this.contentContainer = document.querySelector('#content');
      this.errorContainer = document.querySelector('#error');
  }

  importTemplate () {
      return import('./showNews');
  }

  importError () {
      return import('./errorMessage');
  }

  renderError() {
      this.importTemplate()
          .then(templater => templater.renderArticles(this.contentContainer, []))
      return this.importError()
          .then(error => error.errorMessage.showError())
  }
}

export const errorRenderer = new ErrorRenderer();
