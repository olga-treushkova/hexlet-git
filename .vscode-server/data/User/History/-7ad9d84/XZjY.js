import gameLogic from '../index.js';
import getRandom from '../randomNumber.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const min = 1;
const max = 100;

const start = (number) => {
    const correctAnswer = (number % 2 === 0);
    return correctAnswer;
};

const getRound = () => {
const number = getRandom(min, max);
const questionToString = `${number}`;
const correct = start(number) ? 'yes' : 'no';
return [questionToString, correct];
};

const startGame = () => {
    gameLogic(task, getRound);
};  
   
export default startGame;
