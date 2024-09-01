import allGames from '../src/index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';


const generateRound = () => {
    let number1 = getRandom(1, 100);
    let number2 = getRandom(1, 100);
    const operation = getRandomOperation();


    const question = '${number1} ${number2}';
    const correctAnswer = String(gcd(number1, number2));
    return [question, correctAnswer];

};

export default () => allGames(gameDescription, generateRound);

