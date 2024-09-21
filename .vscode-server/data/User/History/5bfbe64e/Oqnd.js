import readlineSync from 'readline-sync';

const getRandom = () => {
    const getNumber = Math.floor(Math.random() * 100) + 1;
    return getNumber;
};
export default getRandom;


const getRandomCalc = (min = 1, max = 100) => {
    const getNumber = Math.floor(Math.random() * (max - min) + 1) + min;
    return getNumber;
};
export default getRandomCalc;
