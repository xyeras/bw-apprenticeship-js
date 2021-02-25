const guessNumber = () => {

    const correctNumber = Math.floor(Math.random() * 10 + 1);

    // debugger;

    for (let i = 0; i <= 2; i ++) {
        let userInput = prompt('Guess a number from 1 to 10. You have 3 guesses.');

        const verified = verifyNumber(userInput);
        
        if (verified) {
            alert('That is not a number!');
        } else if (userInput == correctNumber) {
            alert('Correct! You win!');
            break;
        } else {
            alert('Wrong, try again!');
        }

        if (i === 2) alert('You are out of guesses!');

    }

}

const verifyNumber = (userInput) => {

    return isNaN(userInput);

}