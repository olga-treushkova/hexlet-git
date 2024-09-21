import startGame from '../index.js';
import getRandom from '../helpers.js';

const task = 'What is the result of the expression?';

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  const randomNumber = Math.floor(Math.random() * operations.length);
  return operations[randomNumber];
};

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
  const number1 = getRandom(1, 100);
  const number2 = getRandom(1, 100);
  const operation = getRandomOperation();
  const question = `${number1} ${operation} ${number2}`;
  const correctAnswer = String(calc(number1, operation, number2));
  return [question, correctAnswer];
};

const runCalc = () => {
  startGame(task, getRound);
};

export default runCalc;
