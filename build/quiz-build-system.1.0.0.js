/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var QUESTIONS = __webpack_require__(1).QUESTIONS;
	
	var showResults = __webpack_require__(2).showResults;
	var showQuestions = __webpack_require__(2).showQuestions;
	var setQuestion = __webpack_require__(2).setQuestion;
	
	var resetScore = __webpack_require__(3).resetScore;
	var increaseScore = __webpack_require__(3).increaseScore;
	
	var questionsPageElement = $('.questions-page');
	var questionCurrentElement = $('.question-current');
	var questionsTotalElement = $('.questions-total');
	var questionElement = $('.question');
	var answersElement = $('.answers');
	
	var resultsPageElement = $('.results-page');
	var scoreElement = $('.score');
	var restartButtonElement = $('.restart-button');
	
	answersElement.on('click', 'button', function () {
	    var choice = $(this).parent().index();
	    var questionIndex = parseInt(questionCurrentElement.text(), 10);
	    var question = QUESTIONS[questionIndex];
	    if (question.correct === choice) {
	        increaseScore();
	    }
	
	    if (questionIndex + 1 < QUESTIONS.length) {
	        setQuestion(questionIndex + 1);
	    } else {
	        showResults();
	    }
	});
	
	restartButtonElement.click(function () {
	    setQuestion(0);
	    resetScore();
	    showQuestions();
	});
	
	$(document).ready(function () {
	    questionsTotalElement.text(QUESTIONS.length);
	    setQuestion(0);
	});
	
	//ES6 Example : 
	//arrow example 
	var evens = [2, 4, 6];
	var odds = evens.map(function (v) {
	    return v + 1;
	});
	console.log(odds);
	
	// ${example}
	var name = "Bob";
	var time = "today";
	console.log('Hello ' + name + ', how are you ' + time + '?');
	
	//default value
	var withDefaults = function withDefaults(x) {
	    var y = arguments.length <= 1 || arguments[1] === undefined ? 12 : arguments[1];
	
	    return x + y;
	};
	withDefaults(3) === 15;
	console.log(withDefaults(20));
	
	//rest as parameter 
	var withRest = function withRest(x) {
	    for (var _len = arguments.length, w = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        w[_key - 1] = arguments[_key];
	    }
	
	    // y is an Array
	    console.log(w);
	    return x * w.length;
	};
	withRest(3, "hello", true) === 6;
	console.log(withRest(2, 1, 2, 3, 4, 5));
	
	//spread
	var withSpread = function withSpread(x, y, z) {
	    return x + y + z;
	};
	
	// as arguments : by passing the '...' it takes the array elemetns as indivual parameters
	var array = [1, 2, 3];
	withSpread.apply(undefined, array) === 6;
	console.log(withSpread(array, 'hello', 'bye'));
	console.log(withSpread.apply(undefined, array));

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	var QUESTIONS = [{
	    text: '<:48:x<:65:=<:6C:$=$=$$~<:03:+$~<:ffffffffffffffbd:+$<:ffffffffffffffb1:+$<:57:~$~<:18:x+$~<:03:+$~<:06:x-$x<:0e:x-$=x<:43:x-$',
	    answers: ['0815', '2B', 'BAM128', 'Barely'],
	    correct: 0
	}, {
	    text: '+0+0+0+0+0+0+0+2)+0+0+9)+7))+3)-0-0-0-0-0-0-0-9)+0+0+0+0+0+0+0+0+7)-8)+3)-6)-8)-7-0-0-0-0-0-0)',
	    answers: ['0815', '2B', 'BAM128', 'Barely'],
	    correct: 1
	}, {
	    text: '*6*3p*4*3*2*0p*2*1*0pp>0*1*0p*5*4*0p*5*4*2*1*0p*4*3p*1*0p/+0p+0*6*5*2p+0*5*0p',
	    answers: ['0815', '2B', 'BAM128', 'Barely'],
	    correct: 2
	}, {
	    text: ']xhhhhooooooooohhhhhhxooooooooxooooooxjjjxhoooohhhxhohhhhhhhxhhhhjjjhhhxhhhhooooooooohhhhhhxjjjxxjjjjjjjxjhhhhxjhhhhhhhhjjjhh~',
	    answers: ['0815', '2B', 'BAM128', 'Barely'],
	    correct: 3
	}];
	
	exports.QUESTIONS = QUESTIONS;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var questionsPageElement = $('.questions-page');
	var questionCurrentElement = $('.question-current');
	var questionsTotalElement = $('.questions-total');
	var questionElement = $('.question');
	var answersElement = $('.answers');
	
	var resultsPageElement = $('.results-page');
	var scoreElement = $('.score');
	var restartButtonElement = $('.restart-button');
	
	var QUESTIONS = __webpack_require__(1).QUESTIONS;
	exports.showResults = function () {
	    questionsPageElement.hide();
	    resultsPageElement.show();
	};
	exports.showQuestions = function () {
	    resultsPageElement.hide();
	    questionsPageElement.show();
	};
	exports.setQuestion = function (questionIndex) {
	    var question = QUESTIONS[questionIndex];
	    questionCurrentElement.text(questionIndex);
	    questionElement.text(question.text);
	    answersElement.empty();
	    for (var i = 0; i < question.answers.length; i++) {
	        var answer = question.answers[i];
	        answersElement.append('<li><button type="button">' + answer + '</button></li>');
	    }
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	exports.resetScore = function () {
	    scoreElement.text(0);
	};
	
	exports.increaseScore = function () {
	    var score = parseInt(scoreElement.text(), 10);
	    scoreElement.text(score + 1);
	};

/***/ }
/******/ ]);
//# sourceMappingURL=quiz-build-system.1.0.0.js.map