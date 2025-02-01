// Questions and Answers
const popQuiz = [
    {
        question: 'Which nation is the largest producer of pasta?',
        answer: 'China',
    },
    {
        question: 'Who played Saruman in the Lord of the Rings trilogy?',
        answer: 'Christopher Lee',
    },    
    {
        question: 'What do you call a brightly colored diamond?',
        answer: 'fancy',
    },
    {
        question: 'What popular PC game series was created by Wil Wright?',
        answer: 'The Sims',
    },
    {
        question: 'Which state has made it illegal to mispronounce its name?',
        answer: 'Arkansas',
    },
    {
        question: 'What are eggplants called in the United Kingdom?',
        answer: 'aubergines',
    },
];

// Randomizer
const randomQuestion = Math.round(Math.random() * popQuiz.length - 1);

// Quiz Prompt
const userAnswer = window.prompt(popQuiz[randomQuestion].question);

// Answer Popup
window.alert('You answered ' + userAnswer + '. \nThe correct answer was ' + popQuiz[randomQuestion].answer + '.');