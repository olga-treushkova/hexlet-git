import gameLogic from '../index.js';
import { getRandomIndex } from '../randomNumber.js';

const task = 'What number is missing in the progression?';
const progression = [];
for (let i = 0; i < length; i += 1) {
    const currentNumber = first + i * step;
    progression.push(currentNumber);
  }
  const getHiddenIndex = () => {
    const hiddenIndex = Math.floor(Math.random() * length);
    const hiddenNumber = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    return;
};

const getRound = () => {
    const number = getRandomIndex();
    const question = `${progression.join(' ')}`;
    const correct = getHiddenIndex(number);
    return [question, correct];
};

const proGame = () => {
  gameLogic(task, getRound);
};

export default proGame;
