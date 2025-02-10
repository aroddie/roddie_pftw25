let questionInput;
let currentQuestion;
let response;
let responseColor = 'green';
let heading;
let wrongTally = 0;
let restart;
// questions
let statements = [
    {
        question: 'Which nation is the largest producer of pasta?',
        answer: 'china',
    },
    {
        question: 'Who played Saruman in the Lord of the Rings trilogy?',
        answer: 'christopher lee',
    },    
    {
        question: 'What do you call a brightly colored diamond?',
        answer: 'fancy',
    },
    {
        question: 'What popular PC game series was created by Wil Wright?',
        answer: 'the sims',
    },
    {
        question: 'Which state has made it illegal to mispronounce its name?',
        answer: 'arkansas',
    },
    {
        question: 'What are eggplants called in the United Kingdom?',
        answer: 'aubergines',
    },
]

function next() {
    // wins the game when all questions are answered
    if(statements.length < 1) {
        winCondition();
        return;
    }
    // randomizes questions
    const randomIdx = Math.ceil(Math.random() * statements.length - 1);
    return statements[randomIdx];
}
function checkQuestion() {
  if (currentQuestion.answer === questionInput.value().toLowerCase()) {
    // remove correct answer from array
    statements = statements.filter(statementObj=> {
        return currentQuestion.answer !== statementObj.answer;
    });
    // this is the correct answer condition
    response = 'Correct! Next Question:'
    responseColor = 'green'
  } else {
    // this is the wrong answer condition
    response = 'Oops! That wasn\'t quite right! Try another:';
    responseColor = 'red';
    wrongTally ++
  }
  // ends the game at more than 5 wrong answers
  if(wrongTally === 5) {
    loseCondition(); 
  }
  currentQuestion = next();
  questionInput.value('');
  if(currentQuestion) {
    message = currentQuestion.question;
  }

}

currentQuestion = next();
let message = currentQuestion.question;

function setup() {
  createCanvas(900, 600);
  // heading
  heading = createElement('h1', ['Random Pop Quiz!']);
  heading.position(100, 50);
  // Answer Input
  questionInput = createInput('');
  questionInput.size(250, 24)
  questionInput.position(100, 250);
  // submit button
  submitAnswerButton = createButton('submit answer');
  submitAnswerButton.size(250, 24);
  submitAnswerButton.mousePressed(checkQuestion);
  submitAnswerButton.position(100, 290);
}

function draw() {
  background('lavender');
  textSize(24);
  fill('purple');
  text(message, 100, 220);
  fill(responseColor);
  text(response, 100, 170);
  // wrong answer tally
  fill(0);
  textSize(12);
  text('Wrong Answers: ' + wrongTally + '/5', 100, 350);
}
function winCondition() {
    response = 'Congratulations, you won!';
    responseColor = 'green';
    hideQuiz();
}
function loseCondition() {
    response = 'Game Over';
    responseColor = 'red';
    statements = [''];
    hideQuiz();
}
function hideQuiz() {
    questionInput.hide();
    submitAnswerButton.hide();
    message = '';
    // restart button
    restart = createButton('Try Again?');
    restart.size(250, 24);
    restart.position(100, 200);
    restart.mousePressed(startOver);
}



function startOver() {
    restart.hide();
    // reset statements
    statements = [
        {
            question: 'Which nation is the largest producer of pasta?',
            answer: 'china',
        },
        {
            question: 'Who played Saruman in the Lord of the Rings trilogy?',
            answer: 'christopher lee',
        },    
        {
            question: 'What do you call a brightly colored diamond?',
            answer: 'fancy',
        },
        {
            question: 'What popular PC game series was created by Wil Wright?',
            answer: 'the sims',
        },
        {
            question: 'Which state has made it illegal to mispronounce its name?',
            answer: 'arkansas',
        },
        {
            question: 'What are eggplants called in the United Kingdom?',
            answer: 'aubergines',
        },
    ]
    response = '';
    responseColor = 'green'
    currentQuestion = next();
    message = currentQuestion.question;
    questionInput.show();
    submitAnswerButton.show();
    // reset Wrong Tally
    wrongTally = 0
}
