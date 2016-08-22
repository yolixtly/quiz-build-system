exports.resetScore = function() {
    scoreElement.text(0);
};

exports.increaseScore = function() {
    var score = parseInt(scoreElement.text(), 10);
    scoreElement.text(score + 1);
};