import readlineSync from 'readline-sync';

const playRound = () => {
  const length = Math.floor(Math.random() * 6) + 5;
  const first = Math.floor(Math.random() * 10) + 1;
  const step = Math.floor(Math.random() * 10) + 1;

  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const currentNumber = first + i * step;
    progression.push(currentNumber);
  }
  const hiddenIndex = Math.floor(Math.random() * length);
  const hiddenNumber = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  console.log(`Question: ${progression.join(' ')}`);
  const userAnswer = Number(readlineSync.question('Your answer: '));

  if (userAnswer === hiddenNumber) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${hiddenNumber}.`);
  return false;
};

const proGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');

  const rounds = 3;
  for (let i = 0; i < rounds; i += 1) {
    const isCorrect = playRound();
    if (!isCorrect) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default proGame;
