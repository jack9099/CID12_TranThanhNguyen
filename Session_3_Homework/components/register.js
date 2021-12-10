import { InputGroup } from "./input_group.js";

class Register{
    $container;
    $image;
    $title;

    $formRegister;
    $inputGroupDisplayName;
    $inputGroupUserName;
    $inputGroupEmail;
    $inputGroupBirthDate;
    $inputGroupPassword;
    $inputGroupConfirmPassword;
    $inputGroupPhoneNumber;

    $feedbackMessage;
    $btnSubmit;

    constructor(){

        this.$container = document.createElement('div');
        this.$container.classList.add('container');
        this.$image = document.createElement('img');
        this.$image.classList.add('container-image');
        this.$image.src = './bg-heading-03.jpg';
        
        this.$title = document.createElement('h3');
        this.$title.innerHTML = 'Sign Up';

        this.$formRegister = document.createElement('form');
        this.$formRegister.classList.add('container-formRegister');
        this.$formRegister.addEventListener('submit', this.handleSubmit);

        this.$inputGroupEmail = new InputGroup('email', 'Email', 'email', 'Email address...');
        this.$inputGroupDisplayName = new InputGroup('text', 'Full Name', 'FullName','Name...');
        this.$inputGroupUserName = new InputGroup('text','Username','username','Username...');
        this.$inputGroupBirthDate = new InputGroup('date', 'Birth Date', 'birthDate','Birthdate...');
        this.$inputGroupPassword = new InputGroup('password', 'Password', 'password','**********');
        this.$inputGroupConfirmPassword = new InputGroup('password', 'Confirm Password', 'confirmPassword','**********');
        this.$inputGroupPhoneNumber = new InputGroup('number', 'Phone Number', 'phoneNumber','Phone number...');

        this.$feedbackMessage = document.createElement('div');
        
        this.$btnSubmit = document.createElement('button');
        this.$btnSubmit.classList.add('form-submit');
        this.$btnSubmit.type = 'submit';
        this.$btnSubmit.innerHTML = 'Sign Up';
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const email = this.$inputGroupEmail.getInputValue();
        const displayName = this.$inputGroupDisplayName.getInputValue();
        const username = this.$inputGroupUserName.getInputValue();
        const birthDate = this.$inputGroupBirthDate.getInputValue();
        const password = this.$inputGroupPassword.getInputValue();
        const confirmPassword = this.$inputGroupConfirmPassword.getInputValue();
        const phoneNumber = this.$inputGroupPhoneNumber.getInputValue();

        this.$inputGroupEmail.setError(null);
        this.$inputGroupDisplayName.setError(null);
        this.$inputGroupUserName.setError(null);
        this.$inputGroupBirthDate.setError(null);
        this.$inputGroupPassword.setError(null);
        this.$inputGroupConfirmPassword.setError(null);
        this.$inputGroupPhoneNumber.setError(null);

        if(!email){
            this.$inputGroupEmail.setError('Email cannot be empty!');
        }
        if(!displayName){
            this.$inputGroupDisplayName.setError('Display name cannot be empty!');
        }
        if(!username){
            this.$inputGroupUserName.setError('Username cannot be empty!');
        }
        if(!birthDate){
            this.$inputGroupUserName.setError('Birthdate cannot be empty!');
        }
        if(password.length < 6){
            this.$inputGroupPassword.setError('Password length must be greater or equal than 6!');
        }
        if(confirmPassword != password){
            this.$inputGroupConfirmPassword.setError('Confirm password not matched!');
        }
        if(!phoneNumber){
            this.$inputGroupPhoneNumber.setError('Phone number cannot be empty!');
        }

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.$feedbackMessage.innerHTML = 'Register successfully! Please check your inbox.';
                firebase.auth().currentUser.sendEmailVerification();
                this.$inputGroupEmail.setInputValue('');
                this.$inputGroupDisplayName.setInputValue('');
                this.$inputGroupUserName.setInputValue('');
                this.$inputGroupBirthDate.setInputValue('');
                this.$inputGroupPassword.setInputValue('');
                this.$inputGroupConfirmPassword.setInputValue('');
                this.$inputGroupPhoneNumber.setInputValue('');
            })
            .catch((error) => {
                this.$feedbackMessage.innerHTML = error.toString();
                console.log(error);
            }); 
    };
    
    render(){
        this.$formRegister.appendChild(this.$title);
        this.$formRegister.appendChild(this.$inputGroupEmail.render());
        this.$formRegister.appendChild(this.$inputGroupDisplayName.render());
        this.$formRegister.appendChild(this.$inputGroupUserName.render());
        this.$formRegister.appendChild(this.$inputGroupBirthDate.render());
        this.$formRegister.appendChild(this.$inputGroupPassword.render());
        this.$formRegister.appendChild(this.$inputGroupConfirmPassword.render());
        this.$formRegister.appendChild(this.$inputGroupPhoneNumber.render());
        this.$formRegister.appendChild(this.$btnSubmit);
        this.$formRegister.appendChild(this.$feedbackMessage);

        this.$container.appendChild(this.$image);
        this.$container.appendChild(this.$formRegister);
        return this.$container;
    }
}

export {Register};