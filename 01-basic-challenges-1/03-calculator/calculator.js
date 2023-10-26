function calculator(a, b, operator) {
  let result;

  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
    default:
      console.log(Error);
  }

  return result;
}

module.exports = calculator;
