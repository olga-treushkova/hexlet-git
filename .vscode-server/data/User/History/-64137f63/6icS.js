import startGame from '../index.js';

const task = 'What number is missing in the progression?';

const getRandomIndex = () => {
    const length = Math.floor(Math.random() * 6) + 5;
    const first = Math.floor(Math.random() * 10) + 1;
    const step = Math.floor(Math.random() * 10) + 1;
    return [length, first, step];
  }
  
  const getRound = () => {
  const [length, first, step] = getRandomIndex();
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

const runProgression = () => {
  startGame(task, getRound);
};

export default runProgression;
