let firstNum = 5;
let secondNum = 20;
let operation = "multiplication"
let secondStage = false;
let display = "";
let result = 0;
function add(a,b) {
  return a+b;
}

function subtract(a,b) {
  return a-b;
}

function multiply(a,b) {
  return a*b;
}

function divide() {
  return a/b;
}

function operate(operation,firstNum,secondNum) {
  if (operation == "multiplication") {
    firstNum * secondNum;
  }
  if (operation == "division") {
    firstNum / secondNum;
  }
  if (operation == "addition") {
    firstNum + secondNum;
  }
  if (operation == "subtraction") {
    firstNum - secondNum;
  }
}

const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");
const button5 = document.querySelector(".button5");
const button6 = document.querySelector(".button6");
const button7 = document.querySelector(".button7");
const button8 = document.querySelector(".button8");
const button9 = document.querySelector(".button9");
const button0 = document.querySelector(".button0");
const buttonClear = document.querySelector(".buttonClear");
const buttonEnter = document.querySelector(".buttonEnter");
const buttonAdd = document.querySelector(".buttonAdd");
const buttonSubtract = document.querySelector(".buttonMinus");
const buttonMultiply = document.querySelector(".buttonMultiply");
const buttonDivide = document.querySelector(".buttonDivide");

const output = document.querySelector(".output");


button1.addEventListener("click",function () {
  secondStage ? secondNum = 1: firstNum = 1;
  display = "1";
  output.textContent = display;
});
button2.addEventListener("click",function () {
  secondStage ? secondNum = 2: firstNum = 2;
  display = "2";
  output.textContent = display;
});
button3.addEventListener("click",function () {
  secondStage ? secondNum = 3: firstNum = 3;
  display = "3";
  output.textContent = display;
});
button4.addEventListener("click",function () {
  secondStage ? secondNum = 4: firstNum = 4;
  display = "4";
  output.textContent = display;
});
button5.addEventListener("click",function () {
  secondStage ? secondNum = 5: firstNum = 5;
  display = "5";
  output.textContent = display;
});
button6.addEventListener("click",function () {
  secondStage ? secondNum = 6: firstNum = 6;
  display = "6";
  output.textContent = display;
});
button7.addEventListener("click",function () {
  secondStage ? secondNum = 7: firstNum = 7;
  display = "7";
  output.textContent = display;
});
button8.addEventListener("click",function () {
  secondStage ? secondNum = 8: firstNum = 8;
  display = "8";
  output.textContent = display;
});
button9.addEventListener("click",function () {
  secondStage ? secondNum = 9: firstNum = 9;
  display = "9";
  output.textContent = display;
});
button0.addEventListener("click",function () {
  secondStage ? secondNum = 0: firstNum = 0;
  display = "0";
  output.textContent = display;
});
buttonClear.addEventListener("click",function () {
  secondStage = false;
  display = "";
  output.textContent = display;
  firstNum = 0;
  secondNum = 0;
  result = 0;
});
buttonEnter.addEventListener("click",function () {
  secondStage = false;

  switch(operation) {
    case "add":
      result = firstNum + secondNum;
    break;
    case "subtract":
      result = firstNum - secondNum;
    break;
    case "multiply":
      result = firstNum * secondNum;
    break;
    case "divide":
      result = firstNum / secondNum;
    break;
    defualt:
      result = firstNum;
  }

  display = result;
  output.textContent = display;
  firstNum = result;
  secondNum = 0;
  result = 0;
});
buttonAdd.addEventListener("click",function () {
  secondStage = true;
  display = "+";
  output.textContent = display;
  operation = "add";
});
buttonSubtract.addEventListener("click",function () {
  secondStage = true;
  display = "-";
  output.textContent = display;
  operation = "subtract";
});
buttonMultiply.addEventListener("click",function () {
  secondStage = true;
  display = "*";
  output.textContent = display;
  operation = "multiply";
});
buttonDivide.addEventListener("click",function () {
  secondStage = true;
  display = "/";
  output.textContent = display;
  operation = "divide";
});



