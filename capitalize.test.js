const capitalize = require('./capitalize');

describe('capitalize', () => {
  test('"hello" returns "Hello"', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('"dico" returns "Dico"', () => {
    expect(capitalize('dico')).toBe('Dico');
  });

  test('Integer input throws error"', () => {
    expect(() => capitalize(1)).toThrow('Tne input has to be a string');
  });

  test('Null input throws error"', () => {
    expect(() => capitalize(null)).toThrow('Tne input has to be a string');
  });

  test('Undefined input throws error"', () => {
    expect(() => capitalize(undefined)).toThrow('Tne input has to be a string');
  });
});
