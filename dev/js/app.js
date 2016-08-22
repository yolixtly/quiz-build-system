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