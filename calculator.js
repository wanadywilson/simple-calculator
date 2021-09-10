let total = 0;
let current = "0";
let operand = null;
const screen = document.querySelector(".screen");
document.querySelector(".calculator-buttons").addEventListener("click", function (event) {
  buttonClicked(event.target.innerText);
});

function buttonClicked(value) {
  if (isNaN(parseInt(value))) {
    processSymbol(value);
  } else {
    processNumber(value);
  }
  screenUpdate();
}

function processNumber(value) {
  if (current === "0") {
    current = value;
  } else {
    current += value;
  }
}
function processSymbol(symbol) {
  switch (symbol) {
    case "C":
      current = "0";
      total = 0;
      operand = null;
      break;
    case "=":
      if (operand === null) {
        return;
      }
      doMath(parseInt(current));
      operand = null;
      current = "" + total;
      total = 0;
      break;
    case "Del":
      if (current.length === 1) {
        current = "0";
      } else {
        current = current.substring(0, current.length - 1);
      }
      break;
    default:
      conditionMath(symbol);

      break;
  }
}

function screenUpdate() {
  screen.innerText = current;
}

function conditionMath(symbol) {
  const intCurrent = parseInt(current);
  if (total === 0) {
    total = intCurrent;
  } else {
    doMath(intCurrent);
  }
  operand = symbol;
  current = "0";
}

function doMath(value) {
  if (operand === "+") {
    total += value;
  } else if (operand === "+") {
    total += value;
  } else if (operand === "X") {
    total *= value;
  } else if (operand === "-") {
    total -= value;
  } else if (operand === "/") {
    total /= value;
  }
}
