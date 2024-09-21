import startGame from '../index.js';

const task = 'What number is missing in the progression?';

const generateProgression = (first, step, length) => {
  const progression = [];  
  for (let i = 0; i < length; i += 1) {
    progression.push(first + i * step);
}
return progression; 
};

const getRound = () => {
  const length = Math.floor(Math.random() * 6) + 5;
  const first = Math.floor(Math.random() * 10) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  const progression = generateProgression(first, step, length);
  
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
