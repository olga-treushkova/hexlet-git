import startGame from '../index.js';
import getRandomNumber from '../helpers.js';

const operations = ['+', '-', '*'];
const task = 'What is the result of the expression?';
const min = 0;
const max = 100;

const calc = (number1, operation, number2) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operation: '${operation}'!`);
  }
};

const getRound = () => {
  const randomOperation = operations.length(getRandomNumber);
  const number1 = getRandomNumber(min, max);
  const number2 = getRandomNumber(min, max);
  const operation = randomOperation;
  const question = `${number1} ${operation} ${number2}`;
  const correctAnswer = String(calc(number1, operation, number2));
  return [question, correctAnswer];
};

const runCalc = () => {
  startGame(task, getRound);
};

export default runCalc;
