/*

****** FUN WITH FUNCTIONS

*/

// BASIC FORM

// function showMyName() {
//     let firstName = 'Corvo';
//     let lastName = 'Attano';
//     let fullName = firstName + ' ' + lastName;

//     console.log('You are: ', fullName);
// }

// ==================================================

function showMyName(firstName, lastName) {
    // debugger;
    let fullName = firstName + ' ' + lastName;

    console.log('You are: ', fullName);
}

// debugger;

showMyName('Corvo', 'Attano');

// ===================================================

function multiplyTwoNumbers (firstNumber, secondNumber) {
    let multipliedNumbers = firstNumber * secondNumber;

    console.log(multipliedNumbers);
}

multiplyTwoNumbers(15, 13);

// ===================================================

// ARROW FUNCTIONS

const countToTen = () => {
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
}

// ===================================================