const getRandom = (min, max) => {
  const getRandomNumber = Math.floor(Math.random() * 100) + 1;
  return getRandomNumber;
};

export default getRandom;

