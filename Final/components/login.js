import { setScreen } from '../app.js';
import { InputGroup } from './input-group.js';
import { Register } from './register.js';

class Login {
    $container;
    $loginTitle;
    $btnLoginWithFacebook;
    $btnLoginWithTwitter;
    $btnLoginWithGoogle;
    $loginEmailTitle;
    $inputGroupEmail;
    $inputGroupPassword;
    $form;
    $btnSubmit;
    $txt;
    $linkToRegister;

    constructor() {
        this.$container = document.createElement('div');
        this.$container.classList.add('center', 'h-screen', 'flex-col', 'login-container');

        this.$loginTitle = document.createElement('span');
        this.$loginTitle.classList.add('login-title');
        this.$loginTitle.innerHTML = 'Login';

        this.$btnLoginWithFacebook = document.createElement('button');
        this.$btnLoginWithFacebook.classList.add('btn-login-with', 'facebook-bg');
        this.$btnLoginWithFacebook.innerHTML = `<i class="fa fa-facebook-official"></i>`  + `Login with Facebook`;
        this.$btnLoginWithFacebook.addEventListener('click', this.hadleLoginWithFacebook);

        this.$btnLoginWithTwitter = document.createElement('button');
        this.$btnLoginWithTwitter.classList.add('btn-login-with', 'twitter-bg');
        this.$btnLoginWithTwitter.innerHTML = `<i class="fa fa-twitter"></i>` + `Login with Twitter`;
        this.$btnLoginWithTwitter.addEventListener('click', this.hadleLoginWithTwitter);

        this.$btnLoginWithGoogle = document.createElement('button');
        this.$btnLoginWithGoogle.classList.add('btn-login-with', 'google-bg', 'btnGoogle');
        this.$btnLoginWithGoogle.innerHTML = `<i class="fa fa-google"></i>` + `Login with Google`;
        this.$btnLoginWithGoogle.addEventListener('click', this.hadleLoginWithGoogle);

        this.$loginEmailTitle = document.createElement('span');
        this.$loginEmailTitle.classList.add('login-email-title');
        this.$loginEmailTitle.innerHTML = 'Login with email';

        this.$inputGroupEmail = new InputGroup('email', 'email', 'Email');
        this.$inputGroupPassword = new InputGroup('password', 'password', 'Password');
        this.$inputGroupPassword.showPassword('flex');
        
        this.$form = document.createElement('form');
        this.$form.classList.add('login-form');
        this.$form.addEventListener('submit', this.handleSubmit);

        this.$btnSubmit = document.createElement('button');
        this.$btnSubmit.classList.add('btn-submit');
        this.$btnSubmit.type = 'submit';
        this.$btnSubmit.innerHTML = 'Login';

        this.$txt = document.createElement('span');
        this.$txt.classList.add('txt');
        this.$txt.innerHTML = `Don't have an account?`;

        this.$linkToRegister = document.createElement('div');
        this.$linkToRegister.classList.add('btn-link');
        this.$linkToRegister.innerHTML = 'SIGN UP NOW';
        this.$linkToRegister.addEventListener('click', this.moveToRegister);
    };

    moveToRegister = () => {
        const register = new Register();
        setScreen(register);
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const email = this.$inputGroupEmail.getInputValue();
        const password = this.$inputGroupPassword.getInputValue();

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userInfo) => {
            console.log(userInfo);
        })
        .catch((err) => {
            console.log(err);
        })

        this.$inputGroupEmail.setError(null);
        this.$inputGroupPassword.setError(null);

        if(!email){
            this.$inputGroupEmail.setError('Please enter email: ex@abc.xyz');
        }
        if(!password){
            this.$inputGroupPassword.setError('Please enter password');
        }
    };

    render() {
        this.$form.appendChild(this.$inputGroupEmail.render());
        this.$form.appendChild(this.$inputGroupPassword.render());
        this.$form.appendChild(this.$btnSubmit);

        this.$container.appendChild(this.$loginTitle);
        this.$container.appendChild(this.$btnLoginWithFacebook);
        this.$container.appendChild(this.$btnLoginWithTwitter);
        this.$container.appendChild(this.$btnLoginWithGoogle);
        this.$container.appendChild(this.$loginEmailTitle);
        this.$container.appendChild(this.$form);
        this.$container.appendChild(this.$txt);
        this.$container.appendChild(this.$linkToRegister);

        return this.$container;
    }
}

export { Login };