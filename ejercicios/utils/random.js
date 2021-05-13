const random = (array) => {
  const random = Math.floor(Math.random() * array.length);
  return random;
};

module.exports = { random };
