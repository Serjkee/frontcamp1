class NewsOrErrorRenderer {
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

    render(data) {
        if (data) {
            this.importError()
                .then(error => error.errorMessage.hideError())
            return this.importTemplate()
                .then(templater => templater.proxiedArticles(this.contentContainer, data))
        } else {
            this.importTemplate()
                .then(templater => templater.renderArticles(this.contentContainer, []))
            return this.importError()
                .then(error => error.errorMessage.showError())
        }
    }
}

export const newsOrErrorRenderer = new NewsOrErrorRenderer();
