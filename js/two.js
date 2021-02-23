// COMPARISON OPERATORS

let value1 = 35;
let value2 = 100;
let value3 = 500;

console.log('Does Value 1 equal 2?', value1 === value2);

console.log('Is value 1 is greater than value 2?', value1 >= value2);

// logical &&
// all conditions must return true to be true

console.log('Do my two conditions hold?',
    value1 > value2 && value1 !== value2);

// logical ||
// at least one condition must return true to be true

console.log('Are my two conditons true or false?',
    value1 > value2 || value1 !== value2);

// combining logical \\ and logical &&

console.log('Combining || &&: what is the result?',
    (value1 > value2 || value !== value2) && value2 > value1);

// CONTROL STRUCTURE

// if,else

let num1 = 100;
let num2 = 445;

if (num1 > num2) {
    alert('You are correct!');
} else {
    alert("Sorry, it is not true.");
}

// if, else if, else

if (num1 > num2) {
    alert('You are meh!');
} else if (num1 === num2) {
    alert('These match!');
} else {
    alert('You lost!');
}

// LOOPS

for (let i = 0; i < 10; i++) {
    console.log('counter: ', i);
}