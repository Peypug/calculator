let firstNum = "";
let secondNum = "";
let operation = "multiplication"
let secondStage = false;
let display = "";
let result = 0;
let longEvaluation = false;
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
const buttonDecimal = document.querySelector(".decimal");
const buttonBackspace = document.querySelector(".backspace");

const output = document.querySelector(".output");


button1.addEventListener("click",function () {
  OFFBorderOutline();
  secondStage ? secondNum += "1": firstNum += "1";
  makeNegative();
  display = secondStage ? secondNum : firstNum;
  output.textContent = display;
});
button2.addEventListener("click",function () {
  OFFBorderOutline();
  secondStage ? secondNum += "2": firstNum += "2";
  makeNegative();
  display = secondStage ? secondNum : firstNum;
  output.textContent = display;
});
button3.addEventListener("click",function () {
  OFFBorderOutline();
  secondStage ? secondNum += "3": firstNum += "3";
  makeNegative();
  display = secondStage ? secondNum : firstNum;
  output.textContent = display;
});
button4.addEventListener("click",function () {
  OFFBorderOutline();
  secondStage ? secondNum += "4": firstNum += "4";
  makeNegative();
  display = secondStage ? secondNum : firstNum;
  output.textContent = display;
});
button5.addEventListener("click",function () {
  OFFBorderOutline();
  secondStage ? secondNum += "5": firstNum += "5";
  makeNegative();
  display = secondStage ? secondNum : firstNum;
  output.textContent = display;
});
button6.addEventListener("click",function () {
  OFFBorderOutline();
  secondStage ? secondNum += "6": firstNum += "6";
  makeNegative();
  display = secondStage ? secondNum : firstNum;
  output.textContent = display;
});
button7.addEventListener("click",function () {
  OFFBorderOutline();
  secondStage ? secondNum += "7": firstNum += "7";
  makeNegative();
  display = secondStage ? secondNum : firstNum;
  output.textContent = display;
});
button8.addEventListener("click",function () {
  OFFBorderOutline();
  secondStage ? secondNum += "8": firstNum += "8";
  makeNegative();
  display = secondStage ? secondNum : firstNum;
  output.textContent = display;
});
button9.addEventListener("click",function () {
  OFFBorderOutline();
  secondStage ? secondNum += "9": firstNum += "9";
  makeNegative();
  display = secondStage ? secondNum : firstNum;
  output.textContent = display;
});
button0.addEventListener("click",function () {
  OFFBorderOutline();
  secondStage ? secondNum += "0": firstNum += "0";
  makeNegative();
  display = secondStage ? secondNum : firstNum;
  output.textContent = display;
});

buttonDecimal.addEventListener("click",function () {
  OFFBorderOutline();
  if (secondStage) {
    searchResult = 0;
    for (let i = 0; i < secondNum.length; i++) {
      if (secondNum[i] == ".") {
        searchResult = 1;
      }
    }
  }
  else {
    searchResult = 0;
    for (let i = 0; i < firstNum.length; i++) {
      if (firstNum[i] == ".") {
        searchResult = 1;
      }
    }
  }
  if (searchResult == "0") {
    secondStage ? secondNum += ".": firstNum += ".";
    display = secondStage ? secondNum : firstNum;
    output.textContent = display;
  }
});

buttonBackspace.addEventListener("click",function () {
  if (secondStage) {
    secondNum = secondNum.slice(0,secondNum.length-1);
  }
  else {
    firstNum = firstNum.slice(0,firstNum.length-1);
  }
  display = secondStage ? secondNum : firstNum;
  output.textContent = display;
});

buttonClear.addEventListener("click",function () {
  OFFBorderOutline();
  secondStage = false;
  longEvaluation = false;
  display = "";
  output.textContent = display;
  firstNum = "";
  secondNum = "";
  result = 0;
});
buttonEnter.addEventListener("click",function () {
  OFFBorderOutline();
  if (secondNum === "") {
    return
  }
  else if (secondNum == "0" && operation == "divide") {
    output.textContent = "Bzzzz... Self Destruct Mode Activated! 10... 9... 8..."
  }
  else {
    secondStage = false;
    longEvaluation = false;
    result = evaluate(firstNum,secondNum);
    display = result;
    if (result == 0) {
      output.textContent = "";
      firstNum = "";
    }
    else {
      output.textContent = display;
      firstNum = result;
    }
    secondNum = "";
    result = 0;
  }
});
buttonAdd.addEventListener("click",function () {
  ONBorderOutline(buttonAdd)
  longCalculation();
  display = secondStage ? secondNum: firstNum;
  secondStage = true;
  longEvaluation = true;
  output.textContent = display;
  operation = "add";
});
buttonSubtract.addEventListener("click",function () {
  ONBorderOutline(buttonSubtract);
  longCalculation();
  if (secondStage == false && firstNum == "") {
    operation = "negative1";
  }
  else if (secondStage == true && firstNum == "") {
    operation = "negative2"; 
  }
  else {
  display = secondStage ? secondNum: firstNum;
  secondStage = true;
  longEvaluation = true;
  output.textContent = display;
  operation = "subtract";
  }
});
buttonMultiply.addEventListener("click",function () {
  ONBorderOutline(buttonMultiply);
  longCalculation();
  display = secondStage ? secondNum: firstNum;
  secondStage = true;
  longEvaluation = true;
  output.textContent = display;
  operation = "multiply";
});
buttonDivide.addEventListener("click",function () {
  ONBorderOutline(buttonDivide);
  longCalculation();
  display = secondStage ? secondNum: firstNum;
  secondStage = true;
  longEvaluation = true;
  output.textContent = display;
  operation = "divide";
});


function evaluate(firstNum,secondNum) {
  firstNum = Number(firstNum);
  secondNum = Number(secondNum);
  switch(operation) {
    case "add":
      result = firstNum + secondNum;
      round();
    break;
    case "subtract":
      result = firstNum - secondNum;
      round();
    break;
    case "multiply":
      result = firstNum * secondNum;
      round();
    break;
    case "divide":
      result = firstNum / secondNum;
      round();
    break;
    defualt:
      result = firstNum;
  }
  firstNum = firstNum.toString();
  secondNum = secondNum.toString();
  return result;
}

function longCalculation() {
  if (longEvaluation == true) {
    result = evaluate(firstNum,secondNum);
    secondStage = false;
    firstNum = result;
    secondNum = "";
  }
}

function round() {
  result *= 100000;
  result = Math.round(result);
  result /= 100000;
}

function makeNegative() {
  if (operation == "negative1"){
    firstNum = Number(firstNum);
    firstNum *= -1;
    firstNum = firstNum.toString();
  }
  else if (operation == "negative2") {
    secondNum = Number(secondNum);
    secondNum = -1;
    secondNum = secondNum.toString();
  }
}

function ONBorderOutline(element) {
  element.classList.add("clickBorder");
}

function OFFBorderOutline() {
  buttonMultiply.classList.remove("clickBorder");
  buttonDivide.classList.remove("clickBorder");
  buttonSubtract.classList.remove("clickBorder");
  buttonAdd.classList.remove("clickBorder");
}