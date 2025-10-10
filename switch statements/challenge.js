/* Price List
 * Coffee $2
 * Sandwiches $5
 * Salad $4
 * Lemon Cake $3
 */
// For example: "You selected Salad. That will be $4"
// ChaIlenge: 1
// .Add the remaining price list items as cases.

function selectltem(item) {
  let price;
  switch (item) {
    case "coffee":
      price = 2;
      break;
    case "Sandwiches":
      price = 5;
      break;
    case "Salad":
      price = 4;
      break;
    case "Lemon Cake":
      price = 3;
      break;
    default:
      return `Sorry, we don't sell ${item}`;
  }
  return `You selected ${item}. That wilt be $${price}`;
}
console.log(selectltem("Salad"));
