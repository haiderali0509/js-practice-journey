// Settimeout with params

function displayTrafficLight(light) {
  console.log(light);
}
setTimeout(displayTrafficLight, 3000, "🟢");
displayTrafficLight("🔴");

// Challenge #1
function logAnswer(capital, points) {
  console.log(
    `The answer is ${capital}. Of Course! if you got that right, give yourself ${points} points.`
  );
}
setTimeout(logAnswer, 3000, "Islamabad", 15);
console.log("What is capital of Pakistan");
