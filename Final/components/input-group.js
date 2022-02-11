class InputGroup{
    $container;
    $input;
    $focusInput;
    $btnShowPassword;
    showPass;
    $i;

    constructor(type, name, placeholder){
        this.$container = document.createElement('div');
        this.$container.classList.add('input-group');
        
        this.$input = document.createElement('input');
        this.$input.type = type;
        this.$input.name = name;
        this.$input.placeholder = placeholder;

        this.$focusInput = document.createElement('span')
        this.$focusInput.classList.add('focus-input');

        this.$btnShowPassword = document.createElement('span');
        this.$btnShowPassword.classList.add('btn-show-pass');
        this.$i = document.createElement('i');
        this.$i.classList.add('fa', 'fa', 'fa-eye');
        this.$btnShowPassword.appendChild(this.$i);
        this.$btnShowPassword.addEventListener('click', this.handleShowPassword);
        this.$container.appendChild(this.$btnShowPassword);
        this.showPass = 0;
        this.$btnShowPassword.style.display = 'none';
    }
    getInputValue() {
        return this.$input.value;
    }
    setInputValue(newValue){
        this.$input.value = newValue;
    }

    setError(message){
        if(message){
            this.$container.setAttribute('data-validate', message);
            this.$container.classList.add('has-error');
            
        } else{
            this.$container.classList.remove('has-error');
        }
        this.$container.oninput = () => {
            if(this.$container.classList.contains('has-error')){
                this.$container.classList.remove('has-error');
                }
            }
    }

    handleShowPassword = () => {
            if(this.showPass == 0) {
                this.$input.type = 'text';
                this.$i.classList.remove('fa-eye');
                this.$i.classList.add('fa-eye-slash');
                this.showPass = 1;  
            } else {
                this.$input.type = 'password';
                this.$i.classList.remove('fa-eye-slash');
                this.$i.classList.add('fa-eye');
                this.showPass = 0;
            }
        }

    showPassword(display) {
        this.$btnShowPassword.style.display = display;
    }
    

    render(){
        this.$container.appendChild(this.$input);
        this.$container.appendChild(this.$focusInput);
        this.$container.appendChild(this.$btnShowPassword);
        
        return this.$container;
    }
}

export { InputGroup };

