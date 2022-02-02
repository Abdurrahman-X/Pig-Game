'use strict';

// SELECTORS
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
//diceEl.style.display = "none";
diceEl.classList.add('hidden')
