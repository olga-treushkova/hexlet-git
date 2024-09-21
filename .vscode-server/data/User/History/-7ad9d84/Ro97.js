import startGame from '../index.js';
import randomNumber from '../helpers.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const min = 0;
const max = 100;

const isEven = (number) => {
  const result = number % 2 === 0;
  return result;
};

const getRound = () => {
  const number = randomNumber(min, max);
  const question = String(number);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEven = () => {
  startGame(task, getRound);
};

export default runEven;
