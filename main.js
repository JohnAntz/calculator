const display = document.getElementById("display");
const keys = document.getElementById("keys");
const operators = document.querySelectorAll(".operator");
const digits = document.querySelectorAll(".digit");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");

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

digits.forEach((digit) => {
  digit.addEventListener("click", () => {
    getNumber(digit.innerText);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    getOperator(operator.innerText);
  });
});

clear.addEventListener("click", () => {
  clearDisplay();
});

equal.addEventListener("click", () => {
  calculate();
});

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
  step = 0;
  firstNumber = null;
  secondNumber = null;
  operation = null;
  firstNumberArray = [];
  secondNumberArray = [];
}
