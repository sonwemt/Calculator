
function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1 / n2;
}

function operate(n1, n2, operator) {
    switch(operator) {
        case '+': return add(n1, n2);
        case '-': return subtract(n1, n2);
        case '*': return multiply(n1, n2);
        case '/': return divide(n1, n2);
        default: 
            return 'not a valid operator';
    }
}

function clearDisplay(){
    currentDisplay.textContent = '0';
    savedDisplay.textContent = '';
    operatorDisplay.textContent = '';
}

function clearInput() {
    clearDisplay();
    currentInput.length = 0;
    savedInput.length = 0;
    savedOperator = 0;
}

function populateDisplay() {
    currentDisplay.textContent = currentInput.join('');
    savedDisplay.textContent = savedInput.join('');
    if(operatorClicked === true){
        operatorDisplay.textContent = savedOperator;
    }
    else{
        operatorDisplay.textContent = '';
    }
}

function saveInput(e) {
    const input = currentInput.push(e.target.id);
    populateDisplay(currentInput);
}

function operatorClick(e) {
    if (operatorClicked === false){
        savedInput = currentInput.slice();
        currentInput.length = 0;
        operatorClicked = true;
    }
    savedOperator = e.target.id;
    populateDisplay()
}



let currentInput = [];
let savedInput = [];
let savedOperator = 0;
let operatorClicked = false;
const savedDisplay = document.querySelector('.saved');
const currentDisplay = document.querySelector('.current');
const operatorDisplay = document.querySelector('.showoperator');
const numberButtons = document.querySelectorAll('button.number');
const operatorButtons = document.querySelectorAll('button.operator');
const clearButton = document.querySelector('button.action.clear');
const equalButton = document.querySelector('button.action.equals');


numberButtons.forEach((button) => {
    button.addEventListener('click', saveInput);
});


operatorButtons.forEach((button) => {
    button.addEventListener('click', operatorClick);
});

clearButton.addEventListener('click', clearInput);
equalButton.addEventListener('click', () =>{
    if(savedOperator !== 0){
        const n1 = parseInt(savedInput.join(''));
        console.log(n1);
        const n2 = parseInt(currentInput.join(''));
        console.log(n2);
        const result = operate(n1, n2, savedOperator);
        currentInput.length = 0;
        currentInput.push(result);
        savedInput.length = 0;
        operatorClicked = false;
        clearDisplay();
        populateDisplay(currentInput);
        
        console.log(result);
    }
});



