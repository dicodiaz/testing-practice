class Calculator {
  add(...numbers) {
    return numbers.reduce((prev, next) => prev + next, 0);
  }

  subtract(minuend, ...subtrahends) {
    return subtrahends.reduce((prev, next) => prev - next, minuend);
  }

  divide(dividend, ...divisors) {
    return divisors.reduce((prev, next) => prev / next, dividend);
  }

  multiply(...numbers) {
    return numbers.reduce((prev, next) => prev * next, 1);
  }
}

module.exports = Calculator;
