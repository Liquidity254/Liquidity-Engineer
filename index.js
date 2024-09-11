const display = document.getElementById("display");

// Appends input to the display
function appendToDisplay(input){
    display.value += input;
}

// Clears the display
function clearDisplay(){
    display.value = '';
}

// Calculates the expression in the display
function calculate(){
    try {
        // Evaluate the expression in the display
        display.value = eval(display.value);
    } catch (error) {
        // Display an error message if the input is invalid
        display.value = 'Error';
    }
}
