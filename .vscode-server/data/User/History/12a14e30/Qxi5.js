import startGame from '../index.js';
import randomNumber from '../helpers.js';

const task = 'Find the greatest common divisor of given numbers.';
const min = 0;
const max = 100;

const gcd = (a, b) => {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const getRound = () => {
  const number1 = randomNumber(min, max);
  const number2 = randomNumber(min, max);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(gcd(number1, number2));
  return [question, correctAnswer];
};

const runGcd = () => {
  startGame(task, getRound);
};

export default runGcd;
