'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When player wins
  if (!guess) {
    displayMessage(`No Number!!!`);
    // When guess is too high
  } else if (guess === secretNumber) {
    displayMessage(`Correct Number!!`);

    document.querySelector('body').style.backgroundColor = '#32CD32';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? 'Number is too high!!' : 'Number is too low!!'
      );
      score--;

      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Number is too high!!';

//       score--;

//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game!!';

//       document.querySelector('.score').textContent = 0;
//     }

//     // When guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Number is too low!!';

//       score--;

//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game!!';

//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });
/*
Implement a game reset functionality, so that the player can make a new guess!
Your tasks:

1. Select the element with the 'again' class and attach a click event handler

2. In the handler function, restore initial values of the 'score' and 
'secretNumber' variables

3. Restore the initial conditions of the message, number, score and guess input 
fields

4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 
*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;

  displayMessage('Start guessing...');

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').textContent = '?';
});
