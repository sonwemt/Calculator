
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
    display.textContent = '0';
}

function clearInput() {
    clearDisplay();
    currentInput.length = 0;
    savedInput.length = 0;
    savedOperator = 0;
}

function populateDisplay(input) {
    display.textContent = currentInput.join('');
}

function saveInput(e) {
    console.log('saveinputtriggered')
    const input = currentInput.push(e.target.id);
    populateDisplay(input);
}

function operatorClick(e) {
    if (operatorClicked === false){
        savedInput = currentInput.slice();
        currentInput.length = 0;
        operatorClicked = true;
    }
    savedOperator = e.target.id;
}



let currentInput = [];
let savedInput = [];
let savedOperator = 0;
let operatorClicked = false;
const display = document.querySelector('.display');
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
        operatorClicked = false;
        clearDisplay();
        populateDisplay();
        
        console.log(result);
    }
});



