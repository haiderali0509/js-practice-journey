/* Challenge
 * 1. Complete the object dreamHoliday with whatever
 * information is true for you. Feel free to add
 * extra properties or change the existing ones.
 * 2. Destructure the object and use the individual
 * variables to log out one or more sentences about
 * your dream holiday.
 * E.g. "I would love to go to Austin, Texas to visit the Tesla HQ.
 * I'd sleep in a luxury ranch and hang out with Elon Musk all day."
 */

// Case 1: Basic Destructuring

const dreamHoliday = {
  destination: "Karachi",
  activity: "explore big city",
  place: "Mazar-e-Qaid, Abdullah Shah Ghazi Mazar, National Zoo",
};
const { destination, activity, place } = dreamHoliday;
console.log(`
    I would love to go to ${destination} to ${activity}. And also want to visit ${place}
`);

// Case 2: Renaming Variables
const dreamDestination = {
  city: "Karachi",
  country: "Pakistan",
};
const { city: myCity, country: myCountry } = dreamDestination;

console.log(`I have dream of visiting ${myCity} in ${myCountry}`);

// Case 3: Default Values
const studentData = {
  name: "Ali",
  rollNo: 42,
};
const { name: studentName, rollNo, course = "BS IT" } = studentData;
console.log(`${studentName} (Roll No: ${rollNo}) is enrolled in ${course}.`);

// Case 4: Nested Object Destructuring
const myFavorites = {
  sports: {
    indoor: "ludo",
    outdoor: "football",
  },
  bike: {
    sportsBike: "H2R",
    simple: "Honda 125",
  },
};
const {
  sports: { indoor, outdoor },
  bike: { simple, sportsBike },
} = myFavorites;
console.log(
  `My favorite outdoor sport is ${outdoor} and sportsBike is ${sportsBike}`
);

// Case 5: Using Default Values in Nested Destructuring
const movieInfo = {
  title: "Na Maloon Afraad",
  director: {
    name: "Fahad Mustafa",
  },
};

const {
  title: movieTitle,
  director: { name: directorName, age: directorAge = "Unknown" },
} = movieInfo;

console.log(
  `${movieTitle} was directed by ${directorName}, age: ${directorAge}.`
);

// Case 6: Skip Some Properties
const laptopSpecs = {
  brand: "Apple",
  model: "MacBook Air",
  price: 250000,
  year: 2023,
};
const { brand, model } = laptopSpecs;
console.log(`I’m using a ${brand} ${model}.`);

// Case 7: Rest Operator
const phoneInfo = {
  brand: "Samsung",
  model: "S24 Ultra",
  price: 1500,
  color: "Titanium Grey",
};
const { brand: phoneBrand, model: phoneModel, ...otherDetails } = phoneInfo;

console.log(phoneBrand, phoneModel);
console.log(otherDetails);

// Case 8: Destructuring in Function Parameters
function printBookDetails({ title, author, pages }) {
  console.log(`"${title}" by ${author}, ${pages} pages.`);
}

const bookData = {
  title: "Atomic Habits",
  author: "James Clear",
  pages: 320,
};

printBookDetails(bookData);

// Case 9: Object + Array Destructuring
const travelPlan = {
  country: "China",
  cities: ["", "", ""],
};
const { country: travelCountry, cities } = travelPlan;
const [firstCity, lastCity] = cities;
console.log(`In ${travelCountry}, I’ll visit ${firstCity} and ${lastCity}.`);

// Case 10: Combo (Rename + Default + Nested)
const gameStats = {
  player: {
    name: "Haider",
    level: 12,
  },
  score: 3400,
};
const {
  player: { name: playerName, level: playerLevel = 1 },
  score: playerScore,
  rank = "Rookie",
} = gameStats;

console.log(
  `${playerName} (Level ${playerLevel}) scored ${playerScore} points and is ranked ${rank}.`
);