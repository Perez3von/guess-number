// import functions and grab DOM elements
import { genRandNum, message, toggle } from './utils.js';
// initialize state


const submit_guess_btn = document.getElementById('submit-guess');
const user_input = document.getElementById('user-input');
const guesss_remaining_section = document.getElementById('guesses-left');
const message_section = document.getElementById('message-section');


const random_number = genRandNum(10);
let counter = 0; 

message(guesss_remaining_section, `You have 3 attempt(s) to guess correctly`);


submit_guess_btn.addEventListener('click', ()=> {
 
    let input = parseInt(user_input.value); 
    
    if (isNaN(input) || input > 10){
        alert('error');
    }
    
    else {
        counter++;
   
        if (counter === 3 && input !== random_number){
            message(message_section, `GAME OVER... Answer was ${random_number}`);
            message(guesss_remaining_section, '');
            toggle(submit_guess_btn);
        }
        else if (input > random_number){
            message(message_section, 'You guessed too high');
        }
        else if (input < random_number){
            message(message_section, 'You guessed too low');
        }
        else {
            message(message_section, 'YOU GOT IT CORRECT');
            message(guesss_remaining_section, '');
            toggle(submit_guess_btn);
            
        }
    
        message(guesss_remaining_section, `You have ${ 3 - counter } attempt(s) to guess correctly`);
    }

});



