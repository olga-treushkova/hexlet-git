const getRandom = (min, max) => {
  const getRandomNumber = Math.floor(Math.random() * (max - min + 1));
  return getRandomNumber;
};

export default getRandom;
