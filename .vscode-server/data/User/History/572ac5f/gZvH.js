#!/usr/bin/env node

import readlineSync from 'readline-sync';

const gcd = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

const getRandom = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const runGame = () => {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const number1 = getRandom(1, 100);
    const number2 = getRandom(1, 100);
    const correctAnswer = gcd(number1, number2);

    console.log(`Question: ${number1} ${number2}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));

    if (userAnswer === correctAnswer) {
      console.log("Correct!");
      correctAnswers+=1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

runGame();
