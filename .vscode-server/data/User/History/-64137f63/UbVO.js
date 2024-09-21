import gameLogic from '../index.js';
import { getRandomIndex } from '../randomNumber.js';

const task = 'What number is missing in the progression?';

const getRound = () => {
    const length = 10;
    const first = getHiddenIndex(1, 10);
    const step = getRandomIndex(1,5);

const progression = [];
for (let i = 0; i < length; i += 1) {
    const currentNumber = first + i * step;
    progression.push(currentNumber);
}

const hiddenIndex = Math.floor(Math.random() * length);
const hiddenNumber = progression[hiddenIndex];
progression[hiddenIndex] = '..';

const question = `${progression.join(' ')}`;
return [question, String(hiddenNumber)];
};

const proGame = () => {
  gameLogic(task, getRound);
};

export default proGame;
