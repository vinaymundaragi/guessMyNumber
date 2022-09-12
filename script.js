'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.score').textContent = score;
// Event Handling, Introduction to event Listeners
// Addition of addEventListeners() method is the best way to listen to an event
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //When user enters no value
  if (!guess) {
    displayMessage('⛔ No Number, Please Enter a number!');

    //When user enters exact value
  } else if (guess === secretNumber) {
    displayMessage('🎉Congratulations Correct Guess!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    //High score updation
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;

    //When guess is high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      guess > secretNumber
        ? displayMessage('📈 Too High!!!')
        : displayMessage('📉Too Low!!!');
    } else {
      displayMessage('💥 You Lost the Game!!!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Implementation of functionality to the Again! button.
//1. Get the element
//2. addEventListener()---1arg-event and 2arg-eventHandler
//3. Within eventHandler function write down the actions to be performed once the click even is completed.
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //Set the score to Zero
  score = 20;
  document.querySelector('.score').textContent = score;
  //Set the message to Start guessing
  displayMessage('Start guessing...');
  //Set the input text field to blank
  document.querySelector('.guess').value = '';
  //Hide the secret number for the user to the next turn
  document.querySelector('.number').textContent = '?';
  //Set the body element background-color back to black
  document.querySelector('body').style.backgroundColor = '#222';
  //Set the secretnumber block back to 15rem width
  document.querySelector('.number').style.width = '15rem';
});
