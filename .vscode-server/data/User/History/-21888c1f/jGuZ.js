import readlineSync from 'readline-sync';
const roundsCount = 3;

const startGame = (task, getRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(task);
  
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correct] = getRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correct) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correct}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default startGame;
