var QUESTIONS  = require('./questions.js').QUESTIONS;

var showResults = require('./view.js').showResults;
var showQuestions = require('./view.js').showQuestions;
var setQuestion = require('./view.js').setQuestion;

var resetScore = require('./model.js').resetScore;
var increaseScore = require('./model.js').increaseScore;

var questionsPageElement = $('.questions-page');
var questionCurrentElement = $('.question-current');
var questionsTotalElement = $('.questions-total');
var questionElement = $('.question');
var answersElement = $('.answers');

var resultsPageElement = $('.results-page');
var scoreElement = $('.score');
var restartButtonElement = $('.restart-button');



answersElement.on('click', 'button', function() {
    var choice = $(this).parent().index();
    var questionIndex = parseInt(questionCurrentElement.text(), 10);
    var question = QUESTIONS[questionIndex];
    if (question.correct === choice) {
        increaseScore();
    }

    if (questionIndex + 1 < QUESTIONS.length) {
        setQuestion(questionIndex + 1);
    }
    else {
        showResults();
    }
});

restartButtonElement.click(function() {
    setQuestion(0);
    resetScore();
    showQuestions();
});

$(document).ready(function() {
    questionsTotalElement.text(QUESTIONS.length);
    setQuestion(0);
});

//ES6 Example : 
//arrow example 
var evens = [2, 4, 6];
var odds = evens.map(v => v + 1);
console.log(odds);

// ${example}
var name = "Bob";
var time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

//default value
var withDefaults = function(x, y=12) {
  return x + y;
};
withDefaults(3) === 15;
console.log(withDefaults(20));

//rest as parameter 
var withRest = function(x, ...w) {
  // y is an Array
  console.log(w);
  return x * w.length;
};
withRest(3, "hello", true) === 6;
console.log(withRest(2, 1,2,3,4,5));


//spread
var withSpread = function(x, y, z) {
  return x + y + z;
}

// as arguments : by passing the '...' it takes the array elemetns as indivual parameters
var array =[ 1, 2, 3];
withSpread(...array) === 6;
console.log(withSpread(array, 'hello', 'bye'));
console.log(withSpread(...array));



