import startGame from '../index.js';
import getRandom from '../randomNumber.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const start = (number) => {
  const userAnswer = (number % 2 === 0);
  return userAnswer;
};

const getRound = () => {
  const number = getRandom();
  const question = `${number}`;
  const correctAnswer = start(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runEven = () => {
  startGame(task, getRound);
};

export default runEven;
