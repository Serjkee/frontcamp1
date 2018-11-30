class NewsRenderer {
    constructor() {
        this.container = document.querySelector('#content');
    }

    getTemplate () {
        return import('./showNews');
    }

    render (data) {
        return this.getTemplate()
            .then(templater => templater.renderArticles(this.container, data))
    }
}

export const newsRenderer = new NewsRenderer();
