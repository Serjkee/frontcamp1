class Loader {
    constructor() {
        this.container = document.querySelector('#loader');
        this.generateLoaderMarkup();
    }

    generateLoaderMarkup () {
        this.container.innerHTML = `
        <div class="item-1"><div></div></div>
        <div class="item-2"><div></div></div>
        <div class="item-3"><div></div></div>
        <div class="item-4"><div></div></div>
        <div class="item-5"><div></div></div>
        <div class="item-6"><div></div></div>
        <div class="item-7"><div></div></div>
        <div class="item-8"><div></div></div>
        <div class="item-9"><div></div></div>
    `}

    showLoader() {
        this.container.style.display = 'block';
    }

    hideLoader() {
        this.container.style.display = 'none';
    }
}

export const loaderRenderer = new Loader();
// loaderRenderer.generateLoaderMarkup();
// export default loaderRenderer;
