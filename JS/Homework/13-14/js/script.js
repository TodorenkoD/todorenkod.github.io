$(function(){

'use strict';

// test is our object

var test = [
  {
    title: 'Сколько будет 2+2?',
    points: 1,
      answers: [{
      answer: '4',
      right: true
    },
    {
      answer: '5',
      right: false
    },
    {
      answer: '6',
      right: false
    }
  ]},
  {
    title: 'Сколько будет 2*4?',
    points: 1,
    answers: [{
      answer: '4',
      right: false
    },
    {
      answer: '6',
      right: false
    },
    {
      answer: '8',
      right: true
    }]
  },
  {
    title: 'Сколько будет 2-4?',
    points: 1,
    answers: [{
      answer: '0',
      right: false
    },
    {
      answer: '-2',
      right: true
    },
    {
      answer: '4',
      right: false
    }]
  }
];


// sending object to local storage

var preparedTest = JSON.stringify( test );
var localTest = localStorage.setItem( "test", preparedTest );

// and retrieving it

var recievedTest = localStorage.getItem( "test" );
var actualTest = JSON.parse( recievedTest );

// preparing template

var $html = $( '#template' ).html();

var tmpl = _.template( $html );

var content = tmpl({
  data: actualTest
});

// inserting template into DOM

var $form = $( '#test' );
$form.prepend( content );

// test check section

var i, j;
var $inputs = $('input:checkbox');

$inputs.on( 'click', function() {

  $(this).parent().siblings().children().each(function(){

    if ( $(this).attr('disabled') ) {

      $(this).attr('disabled', false);

    } else {

      $(this).attr('disabled', true);
    }
  });
});

var checkResults = function(e) {

  e.preventDefault();
  var rightAnswers = [];

  var getRightAnswers = function() {

    for ( i = 0; i < actualTest.length; i++ ) {

      var testAnswers = actualTest[i].answers;

      for (j = 0; j < testAnswers.length; j++) {

        var currentAnswer = actualTest[i].answers[j].right;
        rightAnswers.push(currentAnswer);

      }
    }
  };

  var givenAnswers = [];

  var getGivenAnswers = function() {


    $inputs.each(function () {

      if ( $(this).prop('checked') ) {

        givenAnswers.push(true);

      } else {

        givenAnswers.push(false);

      }
    });
  };

  var answered = 0;

  var check = function () {

    for (var i = 0; i < rightAnswers.length; i++) {

      if ( rightAnswers[i] === true ) {

        if ( rightAnswers[i] === givenAnswers[i] ) {
          answered++;
        }

      }
    }
  };

  var questionsQuantity = 0;

  var sumQuestions = function () {
    for (var i = 0; i < actualTest.length; i++) {
      questionsQuantity++;
    }

  };

  var passed = 0;
  var testOK= false;

  var testPassed = function () {
    passed = answered /questionsQuantity;
    if ( passed > 0.65 ) {
      testOK = true;
    }
  };

  getRightAnswers();
  console.log('rightAnswers= ', rightAnswers);

  getGivenAnswers();
  console.log('givenAnswers= ', givenAnswers);

  check();
  console.log('answered= ', answered);

  sumQuestions();

  testPassed();
  console.log('passed= ', passed);

  console.log('testOK= ', testOK);


// building modal with test results

  var modal;
  var $body = $( 'body' );

  if ( testOK ){

    modal = ('<div class="modal"><div class="modal-inner"><div class="text-center"><p>Поздравляем!!!</p><p>Вы прошли тест</p><p>Верных ответов '+
     answered +' из '+ questionsQuantity +'</p></div><div class="footer-center"><button id="exit">Закрыть</button></div></div></div>');
  } else {

    modal = ('<div class="modal"><div class="modal-inner"><div class="text-center"><p>Вы не прошли тест ;(</p><p>Верных ответов '+
     answered +' из '+ questionsQuantity +'</p></div><div class="footer-center"><button id="exit">Закрыть</button></div></div></div>');
  }


  $body.append(modal);

  var $exit = $( '#exit' );

  var reset = function() {

    $( 'input:checkbox' ).prop( 'checked', false ).prop( 'disabled', false );
    var $modal = $( '.modal' );
    $modal.remove();

    return false;
  };

  $exit.on( 'click', reset );

};

var $checkResults = $( '#check-results' );
$checkResults.on( 'click', checkResults );

});