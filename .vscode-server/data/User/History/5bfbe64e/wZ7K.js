const getRandom = () => {
  const getNumber = Math.floor(Math.random() * 100) + 1;
  return getNumber;
};

export default getRandom;

const getRandomIndex = () => {
  const length = Math.floor(Math.random() * 6) + 5;
  const first = Math.floor(Math.random() * 10) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  return [length, first, step];
};

export { getRandomIndex };
