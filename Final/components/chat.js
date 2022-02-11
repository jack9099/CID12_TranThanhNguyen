import { Footer } from "./footer.js";
import { Navbar } from "./navbar.js";
import { ProductContainer } from "./product-container.js";


class Chat {
    $container;
    $navbar;
    $productContainer;
    $footer;

    constructor() {
        this.$container = document.createElement('div');

        this.$navbar = new Navbar();

        this.$productContainer = new ProductContainer();

        this.$footer = new Footer();
    }

    handleLogout = () => {
        firebase.auth().signOut();
    };

    render() {
        this.$container.appendChild(this.$navbar.render());
        this.$container.appendChild(this.$productContainer.render());
        this.$container.appendChild(this.$footer.render());

        return this.$container;
    }
}

export { Chat };