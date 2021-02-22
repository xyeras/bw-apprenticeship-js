/*
This is a long comment.
*/

// This is a single line comment.

// var myName = 'Alex';
let hisName = 'Alejandro';
const newName = 'Al';

// another example of variable initialization with
// with commas and semicolons
let nameOne = 'alex',
    nameTwo= 'Anna',
    nameThree = 'Liz';

// console example
console.log('This is my console string. It will show up in the browser.');
console.log(hisName, newName, 'My name is Merhawit.');

// alert example
alert('Hey, you are awesome!');

// confirm example
confirm('Are you 18 or older?');

// prompt example
prompt("Enter your age!");

console.log(alert('Testing out alert function'));
console.log(confirm('Are you 18 or older?'));
console.log(prompt('Are you 18 or older?'));
console.log(prompt('are you 18 or older?'), alert('two nested functions'));

// arithmetic operators
let total = 1 + 5 + 100;
console.log('my value before increment is: ', total);
++total;
console.log('my new total is: ', total);

// assignment operators
let x = 'y';
let one = 1;
// += example
one += 6;
// one = one + 6;
console.log('what is one?', one);

// string operators
// aka concatenation
let firstString = 'first string';
let secondString = 'second string';

// three strings
let smushed = firstString + " " + secondString;
console.log("what is smushed?", smushed);

// concat string with number?
let myString = 'this is a string';
let myNumber = 100;

let concatStringNumber = myString + myNumber;
console.log(concatStringNumber);

// concat number string with regular number
let numberString = '10';
let realNumber = 10;
console.log(numberString + realNumber);

// comparison operators
let value1 = 100;
let value2 = 100;

// best practice to use ===
console.log("Are they equal?", value1 == value2); // true
console.log("Are they equal?", value1 === value2); // false

let value3 = 20;
let value4 = 30;
console.log('is value3 greater than value 4?', value3 > value4); // false
console.log('is value3 less than than value 4?', value3 < value4); // true
