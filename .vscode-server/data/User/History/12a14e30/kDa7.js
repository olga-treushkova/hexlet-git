import gameLogic from '../index.js';
import getRandom from '../randomNumber.js';

const task = 'Find the greatest common divisor of given numbers.';

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
  const number1 = getRandom(1, 100);
  const number2 = getRandom(1, 100);
  const question = `${number1} ${number2}`;
  const correct = String(gcd(number1, number2));
  return [question, correct];
};

const runGcd = () => {
  gameLogic(task, getRound);
};

export default runGcd;
