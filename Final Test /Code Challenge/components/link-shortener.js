class LinkShortener {
    $container;
    $title;
    $main;
    $mainTitle;
    $linkInput;
    $input;
    $btnCreateLink;
    $ShortDomain;
    $result;


    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add('container', 'd-flex', 'flex-col');

        this.$title = document.createElement('span');
        this.$title.classList.add('title', 'h1');
        this.$title.innerHTML = 'The privacy-friendly URL Shortener';

        this.$main = document.createElement('div');
        this.$main.classList.add('main', 'd-flex', 'flex-col');

        this.$mainTitle = document.createElement('span');
        this.$mainTitle.classList.add('main-title', 'h1');
        this.$mainTitle.innerHTML = 'Link Shortener';

        this.$linkInput = document.createElement('form');
        this.$linkInput.classList.add('d-flex', 'link-input');
        this.$linkInput.addEventListener('submit', this.handleCreateLink);
        const p1 = document.createElement('p');
        p1.innerHTML = 'Enter a Link: ';
        this.$input = document.createElement('input');
        this.$input.placeholder = 'example.com';
        this.$btnCreateLink = document.createElement('button');
        this.$btnCreateLink.classList.add('btn-create-link');
        this.$btnCreateLink.innerHTML = '&rarr;';
        this.$btnCreateLink.type = 'submit';
        this.$linkInput.appendChild(p1);
        this.$linkInput.appendChild(this.$input);
        this.$linkInput.appendChild(this.$btnCreateLink);

        this.$ShortDomain = document.createElement('div');
        this.$ShortDomain.classList.add('d-flex', 'radio-bar');
        const p2 = document.createElement('p');
        p2.innerHTML = 'Short Domain: ';
        
        //////////////////////////////////////////////////
        const shrtco = document.createElement('input');
        shrtco.classList.add('btn-choose');
        shrtco.id = 'domain1';
        shrtco.type = 'radio';
        shrtco.value = 'shrtco.de';
        shrtco.name = 'domain';
        const label1 = document.createElement('label');
        label1.setAttribute('for', 'domain1');
        label1.innerHTML = 'shrtco.de';

        //////////////////////////////////////////////////
        const qr = document.createElement('input');
        qr.classList.add('btn-choose');
        qr.id = 'domain2';
        qr.type = 'radio';
        qr.value = '9qr.de';
        qr.name = 'domain';
        const label2 = document.createElement('label');
        label2.setAttribute('for', 'domain2');
        label2.innerHTML = '9qr.de';


        //////////////////////////////////////////////////
        const shiny = document.createElement('input');
        shiny.classList.add('btn-choose');
        shiny.id = 'domain3';
        shiny.type = 'radio';
        shiny.value = 'shiny.link';
        shiny.name = 'domain';
        const label3 = document.createElement('label');
        label3.setAttribute('for', 'domain3');
        label3.innerHTML = 'shiny.link';

        //////////////////////////////////////////////////

        this.$ShortDomain.appendChild(p2);

        this.$ShortDomain.appendChild(shrtco);
        this.$ShortDomain.appendChild(label1);

        this.$ShortDomain.appendChild(qr);
        this.$ShortDomain.appendChild(label2);

        this.$ShortDomain.appendChild(shiny);
        this.$ShortDomain.appendChild(label3);

        /////////////////////////////////////////////////

        this.$result = document.createElement('div');
        this.$result.classList.add('d-flex', 'flex-col', 'result');

    }

    handleCreateLink = async (evt) => {
        evt.preventDefault();
        const link = 'https://api.shrtco.de/v2/shorten?url=' + this.$input.value;
        console.log(link);
        const response = await fetch(link);
        const myJson = await response.json();
        console.log(myJson);
        
        console.log(myJson.result);
        console.log(myJson.result.short_link);
        console.log(myJson.result.short_link2);
        console.log(myJson.result.short_link3);

        const p3 = document.createElement('p');
        p3.innerHTML = 'Link Generated!';
        this.$result.appendChild(p3);

        const p4 = document.createElement('p');
        p4.innerHTML = 'Link 1: ' + myJson.result.short_link;
        this.$result.appendChild(p4);

        const p5 = document.createElement('p');
        p5.innerHTML = 'Link 2: ' + myJson.result.short_link2;
        this.$result.appendChild(p5);
        
        const p6 = document.createElement('p');
        p6.innerHTML = 'Link 3: ' + myJson.result.short_link3;
        this.$result.appendChild(p6);
        
    }

    render(){
        this.$main.appendChild(this.$mainTitle);
        this.$main.appendChild(this.$linkInput);
        this.$main.appendChild(this.$ShortDomain);

        this.$container.appendChild(this.$title);
        this.$container.appendChild(this.$main);
        this.$container.appendChild(this.$result);

        return this.$container;
    }
}

export { LinkShortener };