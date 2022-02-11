import { setScreen } from "../app.js";
import { Register } from "./register.js";
import { Chat } from "./chat.js";

class Navbar {
    $container;

    $headerTop;
    $headerTopContainer;
    $signUpBtn;
    $avatar;
    $logout;

    $headerBot;
    $headerBotContainer;
    $logo;
    $homeBtn;
    $categoriesBtn;
    $aboutBtn;
    $supportBtn;

    constructor() {
        this.$container = document.createElement('header');
        
        this.$headerTop = document.createElement('div');
        this.$headerTop.classList.add('header-top');
        this.$headerTopContainer = document.createElement('div');
        this.$headerTopContainer.classList.add('header-top-container', 'container');
        this.$signUpBtn = document.createElement('button');
        this.$signUpBtn.classList.add('sign-up-btn');
        this.$signUpBtn.innerHTML = 'SIGN UP';
        this.$signUpBtn.addEventListener('click', this.handleSignUp);
        this.$avatar = document.createElement('img');
        this.$avatar.classList.add('avatar');
        this.$logout = document.createElement('button');
        this.$logout.classList.add('logout-btn');
        this.$logout.innerHTML = 'LOG OUT';
        this.$logout.addEventListener('click', this.handleLogOut);

        this.$headerTopContainer.appendChild(this.$signUpBtn);
        this.$headerTopContainer.appendChild(this.$logout);
        this.$headerTop.appendChild(this.$headerTopContainer);

        this.$headerBot = document.createElement('div');
        this.$headerBot.classList.add('header-bot');
        this.$headerBotContainer = document.createElement('div');
        this.$headerBotContainer.classList.add('header-bot-container', 'container');
        this.$logo = document.createElement('div');
        this.$logo.classList.add('logo');
        this.$logo.innerHTML = 'DEMO STORE';
        this.$homeBtn = document.createElement('button');
        this.$homeBtn.classList.add('btn', 'home-btn');
        this.$homeBtn.innerHTML = 'Home';
        this.$categoriesBtn = document.createElement('button');
        this.$categoriesBtn.classList.add('btn', 'categories-btn');
        this.$categoriesBtn.innerHTML = 'Categories';
        this.$aboutBtn = document.createElement('button');
        this.$aboutBtn.classList.add('btn', 'about-btn');
        this.$aboutBtn.innerHTML = 'About';
        this.$supportBtn = document.createElement('button');
        this.$supportBtn.classList.add('btn', 'about-btn');
        this.$supportBtn.innerHTML = 'Support';
        this.$headerBotContainer.appendChild(this.$logo);
        this.$headerBotContainer.appendChild(this.$homeBtn);
        this.$headerBotContainer.appendChild(this.$categoriesBtn);
        this.$headerBotContainer.appendChild(this.$aboutBtn);
        this.$headerBotContainer.appendChild(this.$supportBtn);
        this.$headerBot.appendChild(this.$headerBotContainer);

    }

    handleSignUp = () => {
        const register = new Register();
        setScreen(register);
    }

    handleLogOut = () => {
        firebase.auth().signOut();
    }

    render() {
        this.$container.appendChild(this.$headerTop);
        this.$container.appendChild(this.$headerBot);

        return this.$container;
    }
}

export { Navbar };