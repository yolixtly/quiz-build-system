var questionsPageElement = $('.questions-page');
var questionCurrentElement = $('.question-current');
var questionsTotalElement = $('.questions-total');
var questionElement = $('.question');
var answersElement = $('.answers');

var resultsPageElement = $('.results-page');
var scoreElement = $('.score');
var restartButtonElement = $('.restart-button');

var QUESTIONS  = require('./questions.js').QUESTIONS;
exports.showResults = function() {
    questionsPageElement.hide();
    resultsPageElement.show();
};
exports.showQuestions = function() {
    resultsPageElement.hide();
    questionsPageElement.show();
};
exports.setQuestion = function(questionIndex) {
    var question = QUESTIONS[questionIndex];
    questionCurrentElement.text(questionIndex);
    questionElement.text(question.text);
    answersElement.empty();
    for (var i = 0; i < question.answers.length; i++) {
        var answer = question.answers[i];
        answersElement.append('<li><button type="button">' + answer + '</button></li>');
    }
};