// Settimeout with params

function displayTrafficLight(light) {
  console.log(light);
}
let trafficlight =  setTimeout(displayTrafficLight, 3000, "🟢");
displayTrafficLight("🔴");

// Challenge:
// 1. After a 3 second delay, call the logAnswer' function.
// 2. Make sure 'logAnswer' has all the info it needs.
// The answer is Lima and it's 10 points for getting it right.

// Challenge #1
function logAnswer(capital, points) {
  console.log(
    `The answer is ${capital}. Of Course! if you got that right, give yourself ${points} points.`
  );
}
 setTimeout(logAnswer, 3000, "Islamabad", 15);
console.log("What is capital of Pakistan");

document.getElementById("stop").addEventListener("click", () => {
  clearTimeout(trafficlight);
  console.log("canceled")
});
