import { ProductItem } from "./product-item.js";

class ProductContainer {
    $container;
    $item1;
    $item2;
    $item3;
    $item4;
    $item5;
    $item6;
    $item7;
    $item8;
    $item9;

    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add('product-container');

        this.$item1 = new ProductItem('./pics/daygone.jpeg', 'Days Gone', '42$');
        this.$item2 = new ProductItem('./pics/battlefield2042.jpeg', 'BattleField 2042', '54$');
        this.$item3 = new ProductItem('./pics/dyinglight2.jpeg', 'Dying Light 2', '59.9$');
        this.$item4 = new ProductItem('./pics/godofwar.jpeg', 'God Of War 4', '41.6$');
        this.$item5 = new ProductItem('./pics/inscryption.jpeg', 'Inscryption', '19.9$');
        this.$item6 = new ProductItem('./pics/ittakestwo.jpeg', 'It Takes Two', '25$');
        this.$item7 = new ProductItem('./pics/hades.jpeg', 'Hades', '9.99$');
        this.$item8 = new ProductItem('./pics/ghost.png', 'Ghost Of Tsusima', '59.9$');
        this.$item9 = new ProductItem('./pics/doom.jpeg', 'Doom Eternal', '49.9$');
        
    }

    render() {
        this.$container.appendChild(this.$item1.render());
        this.$container.appendChild(this.$item2.render());
        this.$container.appendChild(this.$item3.render());
        this.$container.appendChild(this.$item4.render());
        this.$container.appendChild(this.$item5.render());
        this.$container.appendChild(this.$item6.render());
        this.$container.appendChild(this.$item7.render());
        this.$container.appendChild(this.$item8.render());
        this.$container.appendChild(this.$item9.render());

        return this.$container;
    }
}

export { ProductContainer };