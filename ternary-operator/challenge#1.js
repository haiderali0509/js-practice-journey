// Challenge #1
// Refactor if else statement to use Ternary operator

// Challenge #2
// Now improve the functionality of this code by
// letting the player know if their guess was too high,
// too low, or exactly right.
const playerGuess = 15;
const correctAnswer = 6;

let message =
  playerGuess === correctAnswer
    ? "Exactly Right"
    : playerGuess < correctAnswer
    ? "Too Low"
    : "To High";
// let message =
//   playerGuess > correctAnswer
//     ? "Too High"
//     : playerGuess < correctAnswer
//     ? "Too Low"
//     : "Exactly Right";

// if (playerGuess == correctAnswer) {
//   message = "Correct";
// } else {
//   message = "Wrong";
// }
console.log(message);
