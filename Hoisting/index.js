// Normal function
function getWeather() {
  return "Today's weather is warm and sunny";
}
console.log(getWeather());

// Function hoisted
console.log(getNews());

function getNews() {
  return " A new swimming pool has open is town center";
}
// Variables hoisting
console.log(trafficInfo);
const trafficInfo = "All roads are busy right now";

// Variable and function declarations are moved to the top of their containing scope during the compilation phase, before code execution.