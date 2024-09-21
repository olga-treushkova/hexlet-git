const getRandom = (min, max) => {
  const min = 0;
  const max = 100;
  const getRandomNumber = Math.floor(Math.random() * 100) + 1;
  return getRandomNumber;
};

export default getRandom;