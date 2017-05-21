'use strict';

var test = {
    elements: {
        wrapper: document.createElement('form'),
        header: document.createElement('h1'),
        headerText: document.createTextNode("Тест по программированию"),
        container: document.createElement('div'),
        btn: document.createElement('button'),
        btnText: document.createTextNode("Проверить мои результаты")
    },

    questions: [
        {
        title: "Вопрос №1",
        answers: ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"]
        },
        {
            title: "Вопрос №2",
            answers: ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"]
        },
        {
            title: "Вопрос №3",
            answers: ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"]
        }
    ],

    createElements: function() {
        this.elements.wrapper.className = "test-form";
        document.body.appendChild(this.elements.wrapper);

        // this.elements.header.className = "header";
        this.elements.wrapper.appendChild(this.elements.header);
        this.elements.header.appendChild(this.elements.headerText);

        this.elements.container.className = "test";
        this.elements.wrapper.appendChild(this.elements.container);
        this.elements.btn.className = "btn";
        this.elements.btn.type = 'submit';

        this.elements.wrapper.appendChild(this.elements.btn);
        this.elements.btn.appendChild(this.elements.btnText);
    },

    createTree: function() {
        for (var j = 0, questionLength = this.questions.length; j < questionLength; j++) {
            var questionFieldset = document.createElement('fieldset'),
                question = document.createElement('legend');

            question.innerHTML = (j + 1 + '. ' + this.questions[j].title);
            question.className = "questions";
            questionFieldset.className = "test_block";

            this.elements.container.appendChild(questionFieldset);
            questionFieldset.appendChild(question);

            for (var i = 0, answersLength = this.questions[j].answers.length; i < answersLength; i++ ) {
                var label = document.createElement('label'),
                    input = document.createElement('input'),
                    answer = document.createTextNode(this.questions[j].answers[i]);

                label.className = "answers";
                input.type = "checkbox";
                label.appendChild(input);
                label.appendChild(answer);
                questionFieldset.appendChild(label);
            }
        }
      },

      createDocument: function() {
        this.createElements();
        this.createTree();
      }
};

test.createDocument();


