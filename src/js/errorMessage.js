import '../scss/errorMessage.scss';

class ErrorMessage {
    constructor() {
        this.container = document.querySelector('#error');
        this.generateErrorMarkup();
    }

    generateErrorMarkup() {
        this.container.innerHTML = `<h2 class="error-message">Sorry. Something went wrong :(</h2>`
    }

    showError() {
        this.container.style.display = 'block';
    }

    hideError() {
        this.container.style.display = 'none';
    }
}

export const errorMessage = new ErrorMessage();
