const stringLength = (string) => {
  const length = string.length;
  if (length >= 1 && length <= 10) return length;
  else
    throw new Error(
      `Invalid string length for "${string}": It should be between 1 and 10 characters long but it is ${length} characters long`,
    );
};

module.exports = stringLength;
