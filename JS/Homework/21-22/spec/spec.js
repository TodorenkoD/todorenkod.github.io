var testData = require('./js/testData.js');

describe("testData", function() {
  it("number of questions", function() {
    var questions = testData.questions.length;
    expect(questions).toEqual(5);
  });

  it("number of correct answers", function() {
    var answers = testData.numberOfCorrectAnswers();
    expect(answers).toEqual(10);
  });

  it("array of answers, where 0 = incorrect answer and 1 = correct answer", function() {
    var array = testData.correctAnswers();
    var resultArr = [[1, 0, 1, 1], [0, 1, 1, 0], [1, 1, 0, 0], [1, 0, 1, 0], [0, 0, 0, 1]];
    expect(array).toEqual(resultArr);
  });

});