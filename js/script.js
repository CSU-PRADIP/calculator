let displayValue = '';

function appendToDisplay(value) {
    // Update display value with input value
    displayValue += value;
    // Set display element value to updated display value
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    // Reset displayValue to empty string
    displayValue = '';
    // Reset display element value to empty string
    document.getElementById('display').value = '';
}

function backspace() {
    // Remove last character from displayValue
    displayValue = displayValue.slice(0, -1);
    // Update display with new value
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        // Evaluate the expression and assign it to displayValue
        displayValue = eval(displayValue);
        // Update the display with the evaluated value
        document.getElementById('display').value = displayValue;
    } catch (error) {
        // If there's an error, set displayValue to 'Error'
        displayValue = 'Error';
        // Update the display with the error message
        document.getElementById('display').value = displayValue;
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/[\d+\-*/().]/.test(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});