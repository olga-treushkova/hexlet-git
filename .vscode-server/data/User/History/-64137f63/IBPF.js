import readlineSync from 'readline-sync';
import gameLogic from '../index.js';
import getRandom from '../randomNumber.js';

const task = 'What number is missing in the progression?';
const progression = [];
  
const getHiddenIndex = () => {
    const hiddenIndex = Math.floor(Math.random() * length);
    const hiddenNumber = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    return;
};
const getRound = () => {
    const currentNumber = first + '..' * step;
    progression.push(currentNumber);
    const hiddenNumber = getRandom();
    const question = `${progression.join(' ')}`;
    const correct = getHiddenIndex(hiddenNumber);
    return [question, correct];
  };
 
const proGame = () => {
  gameLogic(task, getRound);
};

export default proGame;
