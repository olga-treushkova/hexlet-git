import {getNumber, start} from '../src/index.js';

const result = () => {
  const progression = [];
  const first = getNumber();
  for (let i = first; i < first + 10; i += 1) {
    progression.push(i);
  }
  const currentIndex = Math.floor(Math.random() * 10);
  const missingIndex = progression[currentIndex];
  progression[currentIndex] = '..';
  const question = `Question: ${progression.join(' ')}`;
  const correct = missingIndex.toString();
  return [question, correct];
};

const game = () => {
  const newMessage = 'What number is missing in the progression?';
  start(newMessage, result);
};

export default game;