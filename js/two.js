// === COMPARISON OPERATORS

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
    (value1 > value2 || value1 !== value2) && value2 > value1);

// === CONTROL STRUCTURE

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

// === LOOPS

// count loop

for (let i = 0; i < 10; i++) {
    console.log('counter: ', i);
}

// infinite loop that breaks the system

// for (let i = 20; i > 0; i--) {
//     console.log('downard counter: ', i);
// }

// create a for loop that starts at index 0 and counts by 10 up to 100

for (let i = 0; i <= 100; i += 10) {
    console.log('counter:', i);
}

// while loop

let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

// do while

let j = 0;

do {
    console.log(j);
    j++;
} while (j < 10);

// === Ternary

let age = 20;

age >= 21 ? alert("Have fun, be safe!") :
    alert("Sorry come back when you're older!");

// syntax --> condition ? expression_1 : expression_2;

// var age = 19;
// var canDrive;
// if (age > 16) {
//     canDrive = 'yes';
// } else {
//     canDrive = 'no';
// }

// var age = 19;
// var canDrive = age > 16 ? 'yes' : 'no';

// === SWITCH STATEMENTS

let animal = 'cow';

switch (animal) {
    case 'dog':
        alert("It's a dog!");
        break;
    case 'cat':
        alert("It's a cat!");
        break;
    case 'monkey':
        alert("It's a monkey");
        break;
    case 'cow':
        alert("It's a cow!");
        break;
    default:
        alert("There is no match!");
}

// === FUNCTIONS

function foo() {
    console.log('first function');
}

foo();

function countDown() {
    for (let i = 10; i >= 0; i--) {
        console.log('counting from function', i);
    }
}

countDown();

// Arrow Function Expressions

const doMath = () => {
    let num1 = 10;
    let num2 = 24;

    console.log('sum: ', num1 + num2)
}

doMath();

const startMath = () => {
    let firstNum = 20;
    let secondNum = 30;
    debugger;
    sumNum(firstNum, secondNum);
}

const sumNum = (arg1, arg2) => {
    console.log('sum of numbers: ', val1 + val2);
}

startMath();