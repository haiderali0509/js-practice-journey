// Render out a card for each of the properties in the propertyForSaleArr array (found in the properties folder).
// Each card should include:

// An image
// A property location
// A price
// A comment
// The total property size in square metres

// Each property object has an array called roomSizes that contains the size (in m²) of individual rooms — use this array to calculate the total size using .reduce().

// If no array of properties is passed to getPropertyHtml, the placeholder property stored in placeholder-propertyobj (in the properties folder) should be rendered instead.

// ⚙️ Requirements
// You must use the following JavaScript features:
// import and export
// .map()
// .join()
// Object destructuring
// .reduce()
// Function parameters
import { propertyForSaleArr } from "./propertyForSaleArr.js";

let container = document.querySelector(".container");

// console.log((properties = propertyForSaleArr));
export function getPropertyHtml(properties = propertyForSaleArr) {
  return properties
    .map(
      ({ img, price, location, comment, roomSizes }) => `
      <div class="property-card">
        <div class="imgDiv">
          <img src="./img/${img}" alt="Property image" class="property-img" />
        </div>
        <div class="property-info">
          <h2 class="property-location">${location}</h2>
          <p class="property-price">Price: ${price}</p>
          <p class="property-comment">${comment}</p>
          <p class="property-size">Total Size: ${roomSizes.reduce(
            (sum, size) => sum + size,
            0
          )} m²</p>
        </div>
      </div>
      `
    )
    .join("");
}
container.innerHTML = getPropertyHtml();
