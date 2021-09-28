const stringLength = require('./stringLength');

test('Length of "hello" is 5', () => {
  expect(stringLength('hello')).toBe(5);
});

test('Length of "hello Dico" is 10', () => {
  expect(stringLength('hello Dico')).toBe(10);
});

test('Length of "hello world" throws error', () => {
  expect(() => stringLength('hello world')).toThrow();
});

test('Length of empty string throws error', () => {
  expect(() => stringLength('')).toThrow();
});
