import readlineSync from 'readline-sync';

const getRandom = (min = 1, max = 100) => Math.floor(Math.random() * (max - min) + 1) + min;

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  const randomNumber = Math.floor(Math.random() * operations.length);
  return operations[randomNumber];
};

let number1();
let number2();
let operation();

const calc = (number1, operation, number2) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
  }
};
const newGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const number1 = getRandom(1, 100);
    const number2 = getRandom(1, 100);
    const operation = getRandomOperation();

    const correctAnswer = calc(number1, operation, number2);

    console.log(`Question: ${number1} ${operation} ${number2}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
}
 console.log(`Congratulations, ${userName}!`);
};
  
  export default newGame;
