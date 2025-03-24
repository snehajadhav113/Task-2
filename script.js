// script.js
let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      // Clear the display and reset variables
      currentInput = '';
      operator = '';
      firstOperand = '';
      secondOperand = '';
      display.value = '';
    } else if (value === '=') {
      // Perform calculation
      if (firstOperand && operator && currentInput) {
        secondOperand = currentInput;
        const result = calculate(firstOperand, secondOperand, operator);
        display.value = result;
        currentInput = result;
        operator = '';
        firstOperand = '';
      }
    } else if (['+', '-', '*', '/'].includes(value)) {
      // Handle operator input
      if (currentInput) {
        firstOperand = currentInput;
        operator = value;
        currentInput = '';
      }
    } else {
      // Handle number and decimal input
      currentInput += value;
      display.value = currentInput;
    }
  });
});

function calculate(a, b, op) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return 0;
  }
}