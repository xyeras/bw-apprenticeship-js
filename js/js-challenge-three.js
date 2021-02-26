// === Create a simple calculator app ===

// 1. On your web page, add a button that triggers a confirm
// asking the user if they would like to calculate two numbers

// 2. if they confirm it should then trigger a prompt
// that asks if they would like to 'add', 'subtract', 'multiply' or 'divide' the two values
// then trigger prompts that asks for the number values
// And finally an alert that lets the user know the result of their values

// Create a js-challenge-three.html and js-challenge-three.js file and submit to github when you are done

// Aside: Create separate functions to run different tasks. And feel free to make your code as dynamic and efficient as you see fit

const simpleCalculatorStart = () => {
    
    // debugger;

    const proceed = confirm ('Would you like to calculate two numbers together?');

    if (proceed) {

        const firstValue = parseInt(
            prompt('Please enter the first number.'));

        const secondValue = parseInt(
            prompt('Please enter the second number.'));

        const result = performMathOperation(firstValue, secondValue);

        alert('The result is ' + result + '.');

    }

}

const performMathOperation = (firstValue, secondValue) => {
    
    // debugger;

    const operation = prompt('Which math operation do you want to perform (e.g. add, subtract, multiply, or divide) the two numbers?');

    let result = 0;

    switch(operation) {

        case 'add':
            
            result = firstValue + secondValue;

            break;

        case 'subtract':
        
            result = firstValue - secondValue;

            break;

        case 'multiply':
    
            result = firstValue * secondValue;

            break;

        case 'divide':

            result = firstValue / secondValue;

    }

    return result;

}