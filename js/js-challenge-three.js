// Exercise 3

const verifyAge = () => {
    // debugger;
    
    const age = prompt('What is your age?');

    age > 13 ? alert('You are good to enter!') :
        alert ('Comeback when you are older!');

}

verifyAge();

// Exercise 4 Part 1

// const convertCelsiusToFahrenheit = (num) => {
//     // debugger;

//     const fahrenheit = num * 1.8 + 32;

//     console.log(fahrenheit);

// }

// convertCelsiusToFahrenheit(100);
// convertCelsiusToFahrenheit(3);
// convertCelsiusToFahrenheit(300);

// Exercise 4 Part 2

const convertCelsiusToFahrenheit = () => {
    // debugger;

    const userInput = prompt('Enter your number');
    const fahrenheit = userInput * 1.8 + 32;

    alert(userInput + ' *C = ' + fahrenheit + ' *F');

}

// Exercise 4 Part 3

const convertFahrenheitToCelsius = () => {
    // debugger;

    const userInput = prompt('Enter your number');
    const celsius = (userInput - 32) / 1.8;

    alert(userInput + ' *F = ' + celsius + ' *C');

}

// Exercise 5 Part 1

const guessCorrectNumber = () => {
    // debugger;
    
    const guess = prompt('Guess a number from 1 to 10');
    const correctNumber = Math.floor(Math.random() * 10 + 1);

    if (guess == correctNumber) {
        alert('Wooo, you got it right!');
    } else {
        alert('Awww, you did not get it correct. Try again!');
    }

    // guess == correctNumber ? alert('Wooo, you got it right!') : alert('Awww, you did not get it correct. Try again!');

}

// Exercise 5 Part 2

const guessNumber = () => {

    const correctNumber = Math.floor(Math.random() * 10 + 1);

    for (let i = 0; i <= 2; i ++) {
        let userInput = prompt('Guess a number from 1 to 10');

        if (userInput == correctNumber) {
            alert('Correct! You win!');
            break;
        } else {
            alert('Wrong, try again!');
        }

        if (i === 2) alert('You are out of guesses!');

    }

}