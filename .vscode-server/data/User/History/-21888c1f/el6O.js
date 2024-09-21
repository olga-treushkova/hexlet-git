import readlineSync from 'readline-sync';

const getNumber = () => {
  const number = Math.floor(Math.random() * 100);
  return number;
};
function getName() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
}
function getAnswer() {
  const number = Math.floor(Math.random() * 100);
  const userName = readlineSync.question('May I have your name? ');
  const correctAnswer = (number % 2 === 0);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    return;
  }
  console.log('Correct!');
}
console.log(`Congratulations, ${userName}!`);

export { getNumber, getName, getAnswer };
