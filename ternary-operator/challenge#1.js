// Challenge #1
// Refactor if else statement to use Ternary operator
const playerGuess = 3;
const correctAnswer = 6;

let message = "";
if (playerGuess == correctAnswer) {
  message = "Correct";
} else {
  message = "Wrong";
}
console.log(message);