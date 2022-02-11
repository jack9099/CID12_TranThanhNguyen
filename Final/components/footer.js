

class Footer {
    $container;
    $div1;
    $logo;
    $text1;

    $div2;
    $logo2;
    $text2;
    $text3;
    $text4;

    $div3;
    $logo3;
    $text5;
    $text6;
    $text7;
    $text8;
    $div4;

    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add('footer');

        this.$div1 = document.createElement('div');
        this.$div1.classList.add('div1');
        this.$logo = document.createElement('div');
        this.$logo.classList.add('footer-logo');
        this.$logo.innerHTML = 'DEMO STORE';
        this.$text1 = document.createElement('div');
        this.$text1.classList.add('footer-text');
        this.$text1.innerHTML = 'The customer is at the heart of our unique business model, which includes design.';
        this.$div1.appendChild(this.$logo);
        this.$div1.appendChild(this.$text1);
        
        this.$div2 = document.createElement('div');
        this.$div2.classList.add('div2');
        this.$logo2 = document.createElement('div');
        this.$logo2.classList.add('footer-logo2');
        this.$logo2.innerHTML = 'SHOPPING';
        this.$text2 = document.createElement('div');
        this.$text2.classList.add('footer-text');
        this.$text2.innerHTML = 'Trending Store';
        this.$text3 = document.createElement('div');
        this.$text3.classList.add('footer-text');
        this.$text3.innerHTML = 'Accessories';
        this.$text4 = document.createElement('div');
        this.$text4.classList.add('footer-text');
        this.$text4.innerHTML = 'Sale';
        this.$div2.appendChild(this.$logo2);
        this.$div2.appendChild(this.$text2);
        this.$div2.appendChild(this.$text3);
        this.$div2.appendChild(this.$text4);

        this.$div3 = document.createElement('div');
        this.$div3.classList.add('div3');
        this.$logo3 = document.createElement('div');
        this.$logo3.classList.add('footer-logo3');
        this.$logo3.innerHTML = 'SHOPPING';
        this.$text5 = document.createElement('div');
        this.$text5.classList.add('footer-text');
        this.$text5.innerHTML = 'Contact Us';
        this.$text6 = document.createElement('div');
        this.$text6.classList.add('footer-text');
        this.$text6.innerHTML = 'Payment Methods';
        this.$text7 = document.createElement('div');
        this.$text7.classList.add('footer-text');
        this.$text7.innerHTML = 'Delivary';
        this.$text8 = document.createElement('div');
        this.$text8.classList.add('footer-text');
        this.$text8.innerHTML = 'Return & Exchanges';
        this.$div3.appendChild(this.$logo3);
        this.$div3.appendChild(this.$text5);
        this.$div3.appendChild(this.$text6);
        this.$div3.appendChild(this.$text7);
        this.$div3.appendChild(this.$text8);


    }

    render() {
        this.$container.appendChild(this.$div1);
        this.$container.appendChild(this.$div2);
        this.$container.appendChild(this.$div3);

        return this.$container;
    }
}

export { Footer };