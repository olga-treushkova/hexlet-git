import gameLogic from '../index.js';
import getRandom from '../randomNumber.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const start = (number) => {
    const correctAnswer = (number % 2 === 0);
    return correctAnswer;
};

const getRound = () => {
const number = getRandom(0, 100);
const questionToString = number.toString();
const correct = start(number) ? 'yes' : 'no';
return [questionToString, correct];
};

const startGame = () => {
    gameLogic(task, getRound);
};  
   
export default startGame;
