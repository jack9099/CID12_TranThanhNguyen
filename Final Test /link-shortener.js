class LinkShortener {
    $container;
    $title;
    $main;
    $mainTitle;
    $linkInput;
    $btnCreateLink;
    $ShortDomain;


    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add('container', 'd-flex', 'flex-col');

        this.$title = document.createElement('span');
        this.$title.classList.add('title');
        this.$title.innerHTML = 'The privacy-friendly URL Shortener';

        this.$main = document.createElement('div');
        this.$main.classList.add('main', 'd-flex', 'flex-col');

        this.$mainTitle = document.createElement('span');
        this.$mainTitle.classList.add('main-title');
        this.$mainTitle.innerHTML = 'Link Shortener';

        this.$linkInput = document.createElement('div');
        this.$linkInput.classList.add('d-flex');
        const p1 = document.createElement('p');
        p1.innerHTML = 'Enter a Link: ';
        const input = document.createElement('input');
        input.placeholder = 'https://example.com';
        this.$btnCreateLink = document.createElement('button');
        this.$btnCreateLink.classList.add('btn-create-link');
        this.$btnCreateLink.innerHTML = '>';
        this.$btnCreateLink.addEventListener('click', this.handleCreateLink);
        this.$linkInput.appendChild(p1);
        this.$linkInput.appendChild(input);
        this.$linkInput.appendChild(this.$btnCreateLink);

        this.$ShortDomain = document.createElement('div');
        this.$ShortDomain.classList.add('d-flex');
        const p2 = document.createElement('p');
        p2.innerHTML = 'Short Domain: ';
        const shrtco = document.createElement('button');
        


    }
}