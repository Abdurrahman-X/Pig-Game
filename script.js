'use strict';

// SELECTORS
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
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


// Rolling dice functionality
rollBtn.addEventListener('click', function () {
    // 1. Generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');

    // 3. Check for rolled 1. If true, switch to the next player
})
