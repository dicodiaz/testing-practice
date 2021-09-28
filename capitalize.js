const capitalize = (string) => {
  if (typeof string !== 'string') throw new Error('Tne input has to be a string');
  return string.charAt(0).toUpperCase() + string.slice(1);
};

module.exports = capitalize;
