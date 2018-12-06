class ArticleRenderer {
    constructor() {
        this.contentContainer = document.querySelector('#content');
    }

    importTemplate () {
        return import('./showNews');
    }

    cleanArticles() {
        return this.importTemplate()
            .then(templater => templater.renderArticles(this.contentContainer, []));
    }

    renderArticles(data) {
        return this.importTemplate()
            .then(templater => templater.proxiedArticles(this.contentContainer, data))
    }
}

export const articleRenderer = new ArticleRenderer();
