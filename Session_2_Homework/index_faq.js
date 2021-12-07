class Faq {
    $container;
    $question;
    $answer;
    $symbol;

    constructor(question, answer){
        this.$container = document.createElement('div');
        this.$container.classList.add('faq');

        this.$question = document.createElement('button');
        this.$question.classList.add('faq__question');
        let question_text = document.createElement('div');
            question_text.classList.add('question__text');
            question_text.innerText = question;
        this.$question.appendChild(question_text);
        this.$question.addEventListener('click', this.expand);

        this.$symbol = document.createElement('div');
        this.$symbol.classList.add('faq__symbol');
        this.$symbol.innerHTML = '+';
        this.$question.appendChild(this.$symbol);

        this.$answer = document.createElement('div');
        this.$answer.classList.add('faq__answer');
        let answer_text = document.createElement('div');
            answer_text.classList.add('answer__text');
            answer_text.innerText = answer;
        this.$answer.appendChild(answer_text);
 
        this.$answer.style.display = "none";
    };

    expand = () =>{
        if (this.$answer.style.display == "none"){
            this.$answer.style.display = "block"
            this.$symbol.innerHTML = "-";
        }
        else {
            this.$answer.style.display = "none"
            this.$symbol.innerHTML = "+";
        }
    };


    render(){
        this.$container.appendChild(this.$question);
        this.$container.appendChild(this.$answer);
        return this.$container;
    }
}
  

