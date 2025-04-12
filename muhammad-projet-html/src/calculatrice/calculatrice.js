const resultat = document.querySelector('.afficheur');
const operateur = document.querySelectorAll('.operateur');
const equal = document.querySelector('.equal');
const deleteBtn = document.querySelector('.delete');

let currentInput = '';
let previousInput = '';
let operator = '';


function appendNumber(number) {
    currentInput += number;
    resultat.value = currentInput;
}

function chooseOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}


function calculate() {
    let computation;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        default:
            return;
    }
    currentInput = computation;
    operator = '';
    previousInput = '';
    resultat.value = currentInput;
}


function clear() {
    currentInput = '';
    previousInput = '';
    operator = '';
    resultat.value = '';
}

document.querySelectorAll('input[type="text"][readonly]').forEach(button => {
    button.addEventListener('click', () => {
        if (button.value >= '0' && button.value <= '9') {
            appendNumber(button.value);
        } else if (button.value === 'DE') {
            clear();
        } else if (button.value === '=') {
            calculate();
        } else {
            chooseOperator(button.value);
        }
    });
});