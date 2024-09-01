import allGames from '../src/index.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
    const question = getRandom(1, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    return [String(question), correctAnswer];
};

export default () => allGames(gameDescription, generateRound);