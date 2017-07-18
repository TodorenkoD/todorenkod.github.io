let testData = {
    name: 'ТЕСТ',
    questions: [{
            index: 1,
            text: 'Вопрос #1',
            answers: ['Ответ #1', 'Ответ #2', 'Ответ #3', 'Ответ #4'],
            correct: [1, 0, 1, 1]
        },

        {
            index: 2,
            text: 'Вопрос #2',
            answers: ['Ответ #1', 'Ответ #2', 'Ответ #3', 'Ответ #4'],
            correct: [0, 1, 1, 0]
        },

        {
            index: 3,
            text: 'Вопрос #3',
            answers: ['Ответ #1', 'Ответ #2', 'Ответ #3', 'Ответ #4'],
            correct: [1, 1, 0, 0]
        },

        {
            index: 4,
            text: 'Вопрос #4',
            answers: ['Ответ #1', 'Ответ #2', 'Ответ #3', 'Ответ #4'],
            correct: [1, 0, 1, 0]
        },

        {
            index: 5,
            text: 'Вопрос #5',
            answers: ['Ответ #1', 'Ответ #2', 'Ответ #3', 'Ответ #4'],
            correct: [0, 0, 0, 1]
        }
    ],
    numberOfCorrectAnswers: function() {
        let total = 0;
        this.questions.forEach((item) => {
            item.correct.forEach((item) => {
                item === 1 ? total += 1 : 0;
            });
        });
        return total;
    },

    correctAnswers: function() {
        let correct = [];
        for (let i = 0; i < this.questions.length; i++) {
            correct.push(this.questions[i].correct);
        };
        return correct;
    }
};

try {
    module.exports = testData;
} catch (e) {}