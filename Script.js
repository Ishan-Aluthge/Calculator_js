let display = document.getElementById('display');
let currentNumber = '';
let operator = '';
let previousNumber = '';

function appendNumber(num) {
  currentNumber += num;
  display.value = currentNumber;
}

function appendOperator(op) {
  if (currentNumber !== '') {
    if (previousNumber !== '') {
      calculate();
    } else {
      previousNumber = currentNumber;
    }
    operator = op;
    currentNumber = '';
  }
}

function calculate() {
  let result;
  switch (operator) {
    case '+':
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case '-':
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case '*':
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case '/':
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
  }
  display.value = result;
  currentNumber = result;
  previousNumber = '';
}

function clearDisplay() {
  display.value = '';
  currentNumber = '';
  operator = '';
  previousNumber = '';
}