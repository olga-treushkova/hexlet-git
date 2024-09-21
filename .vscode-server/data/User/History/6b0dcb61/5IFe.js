import startGame from '../index.js';
import randomNumber from '../helpers.js';

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
      return null;
  }
};

const getRound = () => {
  const number1 = randomNumber(min, max);
  const number2 = randomNumber(min, max);
  const operation = operations;
  const question = `${number1} ${operation} ${number2}`;
  const correctAnswer = String(calc(number1, operation, number2));
  return [question, correctAnswer];
};

const runCalc = () => {
  startGame(task, getRound);
};

export default runCalc;
