import readlineSync from 'readline-sync';

const getRandom = () => {
    const getNumber = Math.floor(Math.random() * 100) + 1;
    return getNumber;
};
export default getRandom;


