import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const min = 0;
const max = 100;

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  const maxDivisor = Math.sqrt(num);

  for (let i = 2; i <= maxDivisor; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getRound = () => {
  const number = getRandomNumber(min, max);
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const runPrime = () => {
  startGame(task, getRound);
};

export default runPrime;
