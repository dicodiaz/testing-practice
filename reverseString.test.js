const reverseString = require('./reverseString');

test('"hello" returns "olleh', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('"hello world." returns ".dlrow olleh', () => {
  expect(reverseString('hello world.')).toBe('.dlrow olleh');
});
