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

countToTen();

// ===================================================

const countToTenFromNewStartingPoint = (startingNumber) => {
    
    // debugger;
    
    if (startingNumber <= 10) {
        
        for(startingNumber; startingNumber <= 10; startingNumber++) {
            
            console.log(startingNumber);

        }

    } else {

        alert('Number is larger than 10');

    }
}

countToTenFromNewStartingPoint(5);

// ====================================================

const welcomeNewUser = () => {
    
    // debugger;

    let firstName = 'Aiden';
    let lastName = 'Pierce';

    let welcomeMessage = 'Hey there, ';
    let fullMessage = welcomeMessage + firstName + ' ' + lastName;

    alert(fullMessage);

}

const tellFavoriteAnimal = () => {
    const favoriteAnimal = "stoat";

    alert("Liz's favorite animal is a " + favoriteAnimal + ".");
}