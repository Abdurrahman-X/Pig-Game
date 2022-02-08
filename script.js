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


// Rolling dice functionality

rollBtn.addEventListener('click', function () {
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
        currentScore = 0;
        document.getElementById(`current--${currentPlayer}`).textContent = 0;
        currentPlayer = currentPlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
        //current0El.textContent = 0;
    }
})


holdBtn.addEventListener('click', function() {
    // 1. Add current score to current player's score
    scoresArray[currentPlayer] += currentScore;
    //console.log(currentScore);
    document.getElementById(`score--${currentPlayer}`).textContent = scoresArray[currentPlayer]; 
    console.log(currentScore);

    // 2. Check if score is >= 30
    if (scoresArray[currentPlayer] >= 100) {
        document.querySelector(`.player--${currentPlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${currentPlayer}`).classList.remove('player--active');

    } else{
        currentScore = 0;
        document.getElementById(`current--${currentPlayer}`).textContent = 0;
        currentPlayer = currentPlayer === 0 ? 1 : 0
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
    
})