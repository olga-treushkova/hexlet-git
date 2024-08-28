#!/usr/bin/env node 

function startGame() {

  console.log("Welcome to the Brain Games!");
  const userName = prompt("May I have your name?");
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
      let number = Math.floor(Math.random() * 100) + 1; 
      console.log(`Question: ${number}`);
      let userAnswer = prompt("Your answer:");

      let correctAnswer = (number % 2 === 0) ? 'yes' : 'no';

      if (userAnswer === correctAnswer) {
          console.log("Correct!");
          correctAnswers ++;
      } else {
          console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
          console.log(`Let's try again, ${userName}!`);
          correctAnswers = 0;
        }
  }

  console.log(`Congratulations, ${userName}!`);
}

startGame();
