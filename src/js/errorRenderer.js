class ErrorRenderer {
  constructor() {
      this.errorContainer = document.querySelector('#error');
  }

  importError () {
      return import('./errorMessage');
  }

  showError() {
      return this.importError()
          .then(error => error.errorMessage.showError())
  }

  hideError() {
    return this.importError()
        .then(error => error.errorMessage.hideError())
}
}

export const errorRenderer = new ErrorRenderer();
