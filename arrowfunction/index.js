// Arrow Function
// for 1 line use no return and {}
// for 1 line use no ()
// for more than 1 and 0 use return and {}
// for more than 1 and 0 use ()

// Challenge #1
// function speedWarning(speed) {
//   return `You are going at ${speed} mph`;
// }
// console.log(speedWarning(90));

// Refactor to arrow function

// const speedWarning = (speed) => `You are going at ${speed} mph`;
// console.log(speedWarning(90));

// const speedWarning = (limit, speed) => {
//   if (speed > limit) {
//     return `You are at ${speed} & breaking speed limit : ${limit}`;
//   }
// };
// console.log(speedWarning(40, 70));

// Challenge #2
// const distanceTraveledMiles = [267, 345, 234, 190, 299];
// const distanceTraveledKm = distanceTraveledMiles.map(function (distance) {
//   return Math.round(distance * 1.6);
// });
// console.log(distanceTraveledKm);

// 1. Refactor this . map method so the inline function is an arrow function.
// 2. Write the least amount of code possible.

// const distanceTraveledMiles = [267, 345, 234, 190, 299];
// const distanceTraveledKM = distanceTraveledMiles.map((distance) =>
//   Math.round(distance * 1.6)
// );
// console.log(distanceTraveledKM);

// import { itemsBoughtArr } from "./itemsArray.js";
// function calculateTotalCost(itemsArr) {
//   const totalCost = itemsArr.reduce((total, item) => total + item.priceUSD, 0);
//   return totalCost;
// }
// Challenge #3
// 1. use the reduce method to calculate the total cost of items which have been bought.

// console.log(calculateTotalCost(itemsBoughtArr));

// Default Params
// if not present then default will use
// import { itemsBoughtArr } from "./itemsArray.js";
// function calculateTotalCost(itemsArr, discount = 0) {
//   const totalCost = itemsArr.reduce((total, item) => total + item.priceUSD, 0);
//   return totalCost - discount;
// }
// console.log(calculateTotalCost(itemsBoughtArr));
