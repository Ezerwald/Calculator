const display = document.getElementById('display');
const history = document.getElementById('history');

function clearDisplay() {
    history.value = ' '
    display.value = '0';
}

function appendToDisplay(value) {
    if (["0", "Error", "Infinity"].includes(display.value)) {
        display.value = value; // Replace the display value
    } else {
        display.value += value; // Append to the existing value
    }
}


function toggleSign() {
    if (display.value) {
        display.value = parseFloat(display.value) * -1;
    }
}

function calculateResult() {
    let expression = display.value;
    let processed_expression = 0;
    // Replace symbols with corresponding mathematical operators
    processed_expression = expression.replace(/÷/g, '/').replace(/×/g, '*');
    try {
        // Evaluate the sanitized expression
        display.value = eval(processed_expression);
        history.value = expression + " =";
    } catch (e) {
        // Handle invalid expressions gracefully
        display.value = 'Error';
    }
}