'use strict';

var testData = {
    name: 'Programming test',
    questions: [{ index: 1,
        text: 'Question #1',
        answers: ['Answer #1', 'Answer #2', 'Answer #3', 'Answer #4'],
        correct: [1, 0, 1, 1]
    }, {
        index: 2,
        text: 'Question #2',
        answers: ['Answer #1', 'Answer #2', 'Answer #3', 'Answer #4'],
        correct: [0, 1, 1, 0]
    }, {
        index: 3,
        text: 'Question #3',
        answers: ['Answer #1', 'Answer #2', 'Answer #3', 'Answer #4'],
        correct: [1, 1, 0, 0]
    }, {
        index: 4,
        text: 'Question #4',
        answers: ['Answer #1', 'Answer #2', 'Answer #3', 'Answer #4'],
        correct: [1, 0, 1, 0]
    }, {
        index: 5,
        text: 'Question #5',
        answers: ['Answer #1', 'Answer #2', 'Answer #3', 'Answer #4'],
        correct: [0, 0, 0, 1]
    }],
    numberOfCorrectAnswers: function numberOfCorrectAnswers() {
        var total = 0;
        this.questions.forEach(function (item) {
            item.correct.forEach(function (item) {
                item === 1 ? total += 1 : 0;
            });
        });
        return total;
    },

    correctAnswers: function correctAnswers() {
        var correct = [];
        for (var i = 0; i < this.questions.length; i++) {
            correct.push(this.questions[i].correct);
        };
        return correct;
    }
};

module.exports = testData;
