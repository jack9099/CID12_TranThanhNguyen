

class ProductItem {
    $container;
    $picLink;
    $name;
    $price;

    constructor(picLink, name, price) {
        this.$container = document.createElement('div');
        this.$container.classList.add('product-item');

        this.$picLink = document.createElement('img');
        this.$picLink.classList.add('pic-link');
        this.$picLink.src = picLink;

        this.$name = document.createElement('div');
        this.$name.classList.add('name');
        this.$name.innerHTML = name;

        this.$price = document.createElement('div');
        this.$price.classList.add('price');
        this.$price.innerHTML = price;

    }
    render() {
        this.$container.appendChild(this.$picLink);
        this.$container.appendChild(this.$name);
        this.$container.appendChild(this.$price);

        return this.$container;
    }
}

export { ProductItem };