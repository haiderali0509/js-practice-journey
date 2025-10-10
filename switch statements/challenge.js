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
  }
  return `You selected ${item}. That wilt be $${price}`;
}
console.log(selectltem(biscuits));
