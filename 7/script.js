(function() {
    function Question(questions, answer, correct) {
        this.questions = questions;
        this.answer = answer;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function() {
        console.log(this.questions);
    
        for (var i=0; i< this.answer.length; i++) {
            console.log(i+ " : " +this.answer[i]);
        }
    }
    
    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('Correct answer!');
    
        } else {
            console.log('Wrong answer. Try again :)')
        }
    }
    
    var q1 = new Question("Is java-script is the most interesting language?", ["yes", "no"], 0);
    
    var q2 = new Question("India is great", ["yes", "no"], 0);
    
    var q3 = new Question("father of computer", ["Charles Babbage", "Pranav Rao", "Aryabhata"], 0);
    
    var questions = [q1, q2, q3];
    
    var n = Math.floor(Math.random() * questions.length);
    
    questions[n].displayQuestion();
    
    var answer = parseInt(prompt("Enter the answer?"));
    
    questions[n].checkAnswer(answer);
})();