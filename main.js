const display = document.getElementById("display");
const keys = document.getElementById("keys");

let step = 0;
let firstNumber;
let firstNumberArray = [];
let secondNumber;
let secondNumberArray = [];
let operation;
let result = 0;

const add = function (a, b) {
  const result = a + b;
  return result;
};
const subtract = function (a, b) {
  const result = a - b;
  return result;
};
const multiply = function (a, b) {
  const result = a * b;
  return result;
};
const divide = function (a, b) {
  const result = a / b;
  return result;
};

function getNumber(num) {
  if (step === 0 || step === 1) {
    firstNumberArray.push(num);
    step = 1;
    firstNumber = Number(firstNumberArray.join(""));
    display.value = firstNumber;
  } else if (step === 2) {
    secondNumberArray.push(num);
    secondNumber = Number(secondNumberArray.join(""));
    display.value = secondNumber;
  }
}
function getOperator(op) {
  step = 2;
  operation = op;
}
function calculate() {
  if (operation === "+") {
    result = firstNumber + secondNumber;
    display.value = result;
  } else if (operation === "-") {
    result = firstNumber - secondNumber;
    display.value = result;
  } else if (operation === "*") {
    result = firstNumber * secondNumber;
    display.value = result;
  } else if (operation === "/") {
    result = firstNumber / secondNumber;
    display.value = result;
  }
}
function clearDisplay() {
  display.value = "";
  result = 0;
  firstNumber = null;
  secondNumber = null;
  operation = null;
  firstNumberArray = [];
  secondNumberArray = [];
}
