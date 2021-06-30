// import functions and grab DOM elements
import { genRandNum } from './utils.js';
// initialize state



const submit_guess_btn = document.getElementById('submit-guess');
const user_input = document.getElementById('user-input');
const guesss_remaining_section = document.getElementById('guesses-left');
const message_section = document.getElementById('message-section');

// var to track number of button clicks
let counter = 0; 

//var to store random number
let random_number = genRandNum(10);

submit_guess_btn.addEventListener('click', ()=> {
 //grab user input value and convert to integer for int compare
    let input = parseInt(user_input.value); 
    //check if user forgot to enter a number
    if (isNaN(input) || input > 10){
        alert('error');
    }
    //if user eneter a valid number continue..
    else {
    //increment counter now, bc the button has been pushed
        counter++;
    //guesses left will need to be given a value after counter is updated
        let guesses_left = 3 - counter;
    //condition to stop this buttons function if user had 3 tries and final try wasnt correct answer
        if (counter === 3 && input !== random_number){
            message_section.innerText = `GAME OVER... Answer was ${random_number}`;
            guesss_remaining_section.innerText = '';
            submit_guess_btn.disabled = true;
            return 0;
        }
        else if (input > random_number){
            message_section.innerText = ' You guessed too high ';
        }
        else if (input < random_number){
            message_section.innerText = ' You guessed too low ';
        }
        else {
            message_section.innerText = 'YOU GOT IT CORRECT';
            guesss_remaining_section.innerText = '';
            submit_guess_btn.disabled = true;
            return 0;
        }
    //update html with number of guesses left
        guesss_remaining_section.innerText = `You have ${guesses_left} attempt(s) to guess correctly`;
       //console.log(counter);
    }

});



