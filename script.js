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
        screen.textContent = ("Can't divide by 0!");
    } else {
        oldNum /= parseFloat(x);
        screen.textContent = oldNum;
    }
}

function addNumFromPad(e) {
    if (currentNum.length > 28) {
        return;
    }
    if (isDecimal) {
        currentNum += e.textContent;
    } else if (screen.textContent == 0 || currentNum == 0) {
        currentNum = e.textContent;
    } else {
        currentNum += e.textContent;
    }
    screen.textContent = currentNum;
}

function getOperator(e) {
    if (e.id == "clear" || e.id == "remove") {
        return;
    }

    if (oldNum == 0) {
        oldNum += parseFloat(currentNum);
        operatorSign = e.id;
    } else {
        makeCalculation();
    }

    operatorSign = e.id;

    screen.textContent = oldNum;
    currentNum = 0;
    isDecimal = false;
}

function makeCalculation() {
    if (operatorSign == "plus") {
        add(currentNum);
    } else if (operatorSign == "subtract") {
        subtract(currentNum);
    } else if (operatorSign == "divide") {
        divide(currentNum);
    } else if (operatorSign == "multiply") {
        multiply(currentNum);
    } else {
        alert("Select an operator.");
    }

    currentNum = 0;
    isDecimal = false;
}

function removeDigit() {
    currentNum = currentNum.slice(0, -1);
    if (currentNum == "") {
        currentNum = 0;
    }
    screen.textContent = currentNum;
}

function addDecimal() {
    if (!isDecimal) {
        currentNum += '.';
        screen.textContent = currentNum;
        isDecimal = true;
    }
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
    window.location.reload();
});

let dotSign = document.querySelector("#dot");
dotSign.addEventListener("click", function () {
    addDecimal();
});

let removeSign = document.querySelector("#remove");
removeSign.addEventListener("click", function () {
    removeDigit();
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Digit1" || e.code === "Numpad1") {
        document.getElementById('1').click();
    } else if (e.code === "Digit2" || e.code === "Numpad2") {
        document.getElementById('2').click();
    } else if (e.code === "Digit3" || e.code === "Numpad3") {
        document.getElementById('3').click();
    } else if (e.code === "Digit4" || e.code === "Numpad4") {
        document.getElementById('4').click();
    } else if (e.code === "Digit5" || e.code === "Numpad5") {
        document.getElementById('5').click();
    } else if (e.code === "Digit6" || e.code === "Numpad6") {
        document.getElementById('6').click();
    } else if (e.code === "Digit7" || e.code === "Numpad7") {
        document.getElementById('7').click();
    } else if (e.code === "Digit8" || e.code === "Numpad8") {
        document.getElementById('8').click();
    } else if (e.code === "Digit9" || e.code === "Numpad9") {
        document.getElementById('9').click();
    } else if (e.code === "Digit0" || e.code === "Numpad0") {
        document.getElementById('0').click();
    } else if (e.code === "NumpadEnter" || e.code === "Equal" || e.code === "Enter") {
        document.getElementById('equals').click();
    } else if (e.code === "NumpadDivide") {
        document.getElementById('divide').click();
    } else if (e.code === "NumpadMultiply") {
        document.getElementById('multiply').click();
    } else if (e.code === "NumpadSubtract" || e.code === "Minus") {
        document.getElementById('subtract').click();
    } else if (e.code === "NumpadAdd") {
        document.getElementById('plus').click();
    } else if (e.code === "Backspace") {
        document.getElementById('remove').click();
    } else if (e.code === "NumpadDecimal" || e.code === "Period") {
        document.getElementById('dot').click();
    }
});
