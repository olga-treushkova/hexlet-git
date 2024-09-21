import gameLogic from '../index.js';
import getRandom from '../randomNumber.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getRound = () => {
  const number = getRandom();
  const question = `${number}`;
  const correct = isPrime(number) ? 'yes' : 'no';
  return [question, correct];
};

const game = () => {
  gameLogic(task, getRound);
};

export default game;
