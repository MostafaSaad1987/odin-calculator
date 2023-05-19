let currentNum = 0;
let operatorSign;
let oldNum = 0;

let isDecimal = false;

let screen = document.querySelector("#screen");

function add(x) {
    oldNum += parseFloat(x);
    screen.textContent = oldNum;
}

function subtract(x) {
    oldNum -= parseFloat(x);
    screen.textContent = oldNum;
}

function multiply(x) {
    oldNum *= parseFloat(x);
    screen.textContent = oldNum;
}

function divide(x) {
    if (x == 0) {
        alert("Can't divide by 0!");
    } else {
        oldNum /= parseFloat(x);
        screen.textContent = oldNum;
    }
}

function addNumFromPad(e) {
    if (isDecimal) {
        currentNum += e.textContent;
        screen.textContent = currentNum;
    } else if (screen.textContent == 0 || currentNum == 0) {
        currentNum = e.textContent;
        screen.textContent = currentNum;
    } else {
        currentNum += e.textContent;
        screen.textContent = currentNum;
    }
}

function getOperator(e) {
    if (e.id == "clear" || e.id == "remove") {
        return;
    }

    if (currentNum != 0) {

        if (oldNum == 0) {
            oldNum += parseFloat(currentNum);
        } else {
            makeCalculation();
        }

        operatorSign = e.id;

        currentNum = 0;
        isDecimal = false;
    }
}

function makeCalculation() {
    if (operatorSign == "plus") {
        add(currentNum);
    } else if (operatorSign == "subtract") {
        subtract(currentNum);
    } else if (operatorSign == "divide") {
        divide(currentNum);
    } else if (operatorSign == "multipy") {
        multiply(currentNum);
    } else {
        alert("Select an operator.");
    }

    currentNum = 0;
    isDecimal = false;
}

let numbers = document.querySelectorAll(".num");
numbers.forEach(element => {
    element.addEventListener("click", function () {
        addNumFromPad(element);
    });
});

let operators = document.querySelectorAll(".operators button");
operators.forEach(element => {
    element.addEventListener("click", function () {
        getOperator(element);
    });
});

let equalSign = document.querySelector("#equals");
equalSign.addEventListener("click", function () {
    makeCalculation();
});

let clearSign = document.querySelector("#clear");
clearSign.addEventListener("click", function () {
    currentNum = 0;
    oldNum = 0;
    screen.textContent = 0;
});

let dotSign = document.querySelector("#dot");
dotSign.addEventListener("click", function () {
    if (!isDecimal) {
        currentNum += '.';
        screen.textContent = currentNum;
        isDecimal = true;
    }
});

let removeSign = document.querySelector("#remove");
removeSign.addEventListener("click", function () {
    currentNum = currentNum.slice(0, -1);
    if (currentNum == "") {
        currentNum = 0;
    }
    screen.textContent = currentNum;
});