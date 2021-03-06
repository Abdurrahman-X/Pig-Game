'use strict';

// SELECTORS
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector('.dice');
console.log(diceEl);
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');


// Starting Conditions


score0El.textContent = 0;
score1El.textContent = 0;
//diceEl.style.display = "none";
diceEl.classList.add('hidden');

let scoresArray = [0,0]
let currentScore = 0;
let currentPlayer = 0;
let inPlay = true;

// Switch Player Function
const switchPlayer = function () {
    currentScore = 0;
    document.getElementById(`current--${currentPlayer}`).textContent = 0;
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}


// Rolling dice functionality

rollBtn.addEventListener('click', function () {
    if (inPlay) {
        // 1. Generate random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
        //console.log(dice);

        // 2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        

        // 3. Check for rolled 1.

        if (dice !== 1) {
            // Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
            //current0El.textContent = currentScore;  // CHANGE LATER
        } else {
            // Switch to the next player
            switchPlayer();
            
        }
    }
})

// Holding dice functionality
holdBtn.addEventListener('click', function() {
    if (inPlay) {
       // 1. Add current score to current player's score
        scoresArray[currentPlayer] += currentScore;
        //console.log(currentScore);
        document.getElementById(`score--${currentPlayer}`).textContent = scoresArray[currentPlayer]; 

        // 2. Check if score is >= 100
        if (scoresArray[currentPlayer] >= 100) {
            // Finish the game
            document.querySelector(`.player--${currentPlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${currentPlayer}`).classList.remove('player--active');
            document.getElementById(`current--${currentPlayer}`).textContent = 0;
            inPlay = false;
            diceEl.classList.add('hidden');
        } else{
            // switch to the next player
            switchPlayer();
        } 
    }  
})

// // Reset game
newBtn.addEventListener('click', function () {
    // 1. Hide the dice
    diceEl.classList.add('hidden');
    // 2. reset current score and total score
    currentScore = 0;
    document.querySelector(`.player--${currentPlayer}`).classList.remove('player--winner');
    current0El.textContent = currentScore;
    current1El.textContent = currentScore;
    currentPlayer = 0;
    scoresArray = [0,0];
    score0El.textContent = 0;
    score1El.textContent = 0;
    player0El.classList.add('player--active');
    inPlay = true;
})
