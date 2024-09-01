import allGames from '../src/index.js';

const operations = ['+', '-', '*'];

const gameDescription = 'What is the result of the expression?';

const calc = (num1, operation, num2) => {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
    }
};

const generateRound = () => {
    let number1 = getRandom(1, 100);
    let number2 = getRandom(1, 100);
    const operation = getRandomOperation();


    const question = '${number1} ${operation} ${number2}';
    const correctAnswer = String(calc(number1, operation, number2));

    return [question, correctAnswer];
};

export default () => allGames(gameDescription, generateRound);