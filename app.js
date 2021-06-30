// import functions and grab DOM elements
import { genRandNum, message, toggle } from './utils.js';
// initialize state


const submit_guess_btn = document.getElementById('submit-guess');
const user_input = document.getElementById('user-input');
const guesss_remaining_section = document.getElementById('guesses-left');
const message_section = document.getElementById('message-section');


let counter = 0; 
let random_number = genRandNum(10);


submit_guess_btn.addEventListener('click', ()=> {
 
    let input = parseInt(user_input.value); 
    
    if (isNaN(input) || input > 10){
        alert('error');
    }
    
    else {
        counter++;
   
        let guesses_left = 3 - counter;
   
        if (counter === 3 && input !== random_number){
            message(message_section, `GAME OVER... Answer was ${random_number}`);
            message(guesss_remaining_section, '');
            toggle(submit_guess_btn);
            return 0;
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
            return 0;
        }
    
        message(guesss_remaining_section,`You have ${guesses_left} attempt(s) to guess correctly`);
    }

});



