import { InputGroup } from './input-group.js';
import {Login} from './login.js';
import {setScreen} from '../app.js';

class Register{
    $container;
    $title;

    $formRegister;
    $inputGroupDisplayName;
    $inputGroupEmail;
    $inputGroupPassword;
    $inputGroupConfirmPassword;

    $feedbackMessage;
    $btnSubmit;
    $linkToLogin;

    constructor(){
        this.$container = document.createElement('div');
        this.$container.classList.add('center', 'h-screen', 'flex-col', 'login-container');
        this.$title = document.createElement('span');
        this.$title.classList.add('login-title');
        this.$title.innerHTML = 'Register';

        this.$formRegister = document.createElement('form');
        this.$formRegister.classList.add('login-form');
        this.$formRegister.addEventListener('submit', this.handleSubmit);

        this.$inputGroupEmail = new InputGroup('email', 'email', 'Email');
        this.$inputGroupDisplayName = new InputGroup('text', 'display name', 'Display Name')
        this.$inputGroupPassword = new InputGroup('password', 'password', 'Password');
        this.$inputGroupConfirmPassword = new InputGroup('password', 'confirm password', 'Confirm Password');
        this.$inputGroupPassword.showPassword('flex');
        this.$inputGroupConfirmPassword.showPassword('flex');

        this.$feedbackMessage = document.createElement('div');

        this.$btnSubmit = document.createElement('button');
        this.$btnSubmit.classList.add('btn-submit');
        this.$btnSubmit.type = 'submit';
        this.$btnSubmit.innerHTML = 'Register';

        this.$linkToLogin = document.createElement('div');
        this.$linkToLogin.classList.add('btn-link');
        this.$linkToLogin.innerHTML = '< Back to Login';
        this.$linkToLogin.addEventListener('click', this.moveToLogin);
    };

    moveToLogin = () => {
        const login = new Login();
        setScreen(login);
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const email = this.$inputGroupEmail.getInputValue();
        const displayName = this.$inputGroupDisplayName.getInputValue();
        const password = this.$inputGroupPassword.getInputValue();
        const confirmPassword = this.$inputGroupConfirmPassword.getInputValue();

        this.$inputGroupEmail.setError(null);
        this.$inputGroupPassword.setError(null);
        this.$inputGroupDisplayName.setError(null);
        this.$inputGroupConfirmPassword.setError(null);

        if(!email){
            this.$inputGroupEmail.setError('Email cannot be empty!');
        }
        if(!displayName){
            this.$inputGroupDisplayName.setError('Display name cannot be empty');
        }
        if(password.length < 6){
            this.$inputGroupPassword.setError('Password length must be greater or equal than 6!');
        }
        if(confirmPassword != password){
            this.$inputGroupConfirmPassword.setError('Confirm password not matched!');
        }

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.$feedbackMessage.innerHTML = 'Register successfully! Please check your inbox';
                firebase.auth().currentUser.sendEmailVerification();
                this.$inputGroupEmail.setInputValue('');
                this.$inputGroupDisplayName.setInputValue('');
                this.$inputGroupPassword.setInputValue('');
                this.$inputGroupConfirmPassword.setInputValue('');
            })
            .catch((error) => {
                console.log(error);
            })
        }
        render(){
            this.$formRegister.appendChild(this.$inputGroupEmail.render());
            this.$formRegister.appendChild(this.$inputGroupDisplayName.render());
            this.$formRegister.appendChild(this.$inputGroupPassword.render());
            this.$formRegister.appendChild(this.$inputGroupConfirmPassword.render());
            this.$formRegister.appendChild(this.$btnSubmit);
    
            this.$container.appendChild(this.$title);
            this.$container.appendChild(this.$feedbackMessage);
            this.$container.appendChild(this.$formRegister);
            this.$container.appendChild(this.$linkToLogin);
            return this.$container;
        }
    
    };
export { Register }
