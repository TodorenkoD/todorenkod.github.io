window.onload = () => {
    let tmpl = _.template($('#test').html()); 
        let content = document.createElement('div');
        content.innerHTML = tmpl(testData);
        
        const bodyContainer = document.getElementById('container');
        bodyContainer.appendChild(content);

        let numberOfQuestions = testData.questions.length; 
        let numberOfAnswers = testData.numberOfCorrectAnswers(); 
        let answersInOneQuestion = testData.questions[0].answers.length;
        let correctAnswers = testData.correctAnswers();  

        let checkButton = bodyContainer.getElementsByClassName('check')[0];
        let showAnswersButton = bodyContainer.getElementsByClassName('show')[0];
        checkButton.addEventListener('click' , overlay);
        showAnswersButton.addEventListener('click' , showCorrectAnswers);

        let label = bodyContainer.getElementsByTagName('label');
    
        for (let i = 0 ; i < label.length; i++) {
            label[i].addEventListener('click' , addClass); 
            label[i].addEventListener('mouseover' , makeBold); 
            label[i].addEventListener('mouseleave', discardChanges); 
        };
        
        function addClass() {
            this.className = 'checked';
        };

        function makeBold() {
            this.style.color = '#0864ef';
            this.style.fontWeight = '700';
        };

        function discardChanges() {
            this.style.color = '#000';
            this.style.fontWeight = '400';
        };

       

        function overlay() {
            if ($('.modalOverlay')) { $('.modalOverlay').remove(); }; // обход бага - если в браузере открыта отладка (панель разработчика), слой modalOverlay почему-то накладывается не на все окно, и копки отаются доступными  

            let userAnswers = [];
            
            for (let i = 1; i <= numberOfQuestions; i++) {  
                let selected = new Array(answersInOneQuestion); 
                
                for (let j = 0; j < selected.length; j++) {
                    selected[j] = 0;
                };
                
                let activeQ = bodyContainer.getElementsByClassName(i);
                
                for(let i = 0; i < activeQ.length; i++) {
                    let activeQuestion = activeQ[i].getElementsByTagName('input');
                    for (let j = 0; j < activeQuestion.length; j++) {
                        if (activeQuestion[j].checked) {
                            selected[j] = 1;
                        } else {
                            selected[j] = 0;                            
                        }
                    }
                };
                userAnswers.push(selected);
            };    
            
            let userGrade = checkAnswers(userAnswers); 
            (userGrade < 70) ? showModal(false, userGrade) : showModal(true, userGrade); 

            $('a.close').on('click', () => {
                $('.modalOverlay').remove();
                $("input:checked").prop('checked', false);
                $('label.checked').removeClass('checked');
            }); 
        };

         let checkAnswers = (userAnswers) => {
             let answers = userAnswers;
             let totalPoints = 0;
             let result;
                 let points = (100/numberOfQuestions);
             for (let i = 0; i < correctAnswers.length; i++) {  
                 for (let j = 0; j < correctAnswers[i].length; j++) { 
                     if(correctAnswers[i][j] === answers[i][j]) { 
                         result = true;
                     } else {
                         result = false;
                         break;
                     };
                };
                result ? totalPoints += points : false;  
               };
               return Math.round(totalPoints); 
         };


        function showCorrectAnswers() {
             for(let i = 0; i < numberOfQuestions; i++) {
                 let $activeQuestion = $('ul' + '.' + (i + 1));
                 for(let j = 0; j < answersInOneQuestion; j++) {
                    let activeLable = $activeQuestion.find('label:eq(' + j + ')');
                    (correctAnswers[i][j] === 1) ? activeLable.css({color: '#0864ef', fontWeight: 'bold'}) : activeLable.css({color: 'default'});
                 };
             };   
        };


        let showModal = (result, userGrade) => {
            $('#container').prepend("<div class='modalOverlay'><div class='modal'><a href='#' class='close'>X</a><h2 class='resultTitle'></h2><p class='result'></p> </div></div>");
            $('.resultTitle').append(result ? 'Отлично!' : 'Ошибка.');
            $('.result').prepend( 'Ты набрал ' + userGrade + ' баллов из 100');
        };
};


let testData = {
    name: 'ТЕСТ',
    questions: [
        { index: 1,
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
            this.questions.forEach( (item) => {
                item.correct.forEach( (item) => {
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
