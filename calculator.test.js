const Calculator = require('./calculator');
const calculator = new Calculator();

describe('calculator', () => {
  test('adding 2 numbers', () => {
    expect(calculator.add(1, 3)).toBe(4);
  });

  test('adding more than 2 numbers', () => {
    expect(calculator.add(1, 3, 5, 7)).toBe(16);
  });

  test('subtracting 2 numbers', () => {
    expect(calculator.subtract(3, 1)).toBe(2);
  });

  test('subtracting more than 2 numbers (from the first one)', () => {
    expect(calculator.subtract(7, 5, 3, 1)).toBe(-2);
  });

  test('dividing 2 numbers', () => {
    expect(calculator.divide(3, 1)).toBe(3);
  });

  test('dividing more than 2 numbers (from the first one)', () => {
    expect(calculator.divide(12, 4, 3, 1)).toBe(1);
  });

  test('multiplying 2 numbers', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  test('multiplying more than 2 numbers', () => {
    expect(calculator.multiply(2, 3, 4, 5)).toBe(120);
  });
});
