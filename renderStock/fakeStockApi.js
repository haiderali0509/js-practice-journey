function getStockData() {
  let randomNum = (Math.random() * 3).toFixed(2);
  let stockDate = new Date();
  // let Hours = stockDate.getHours();
  // let Minutes = stockDate.getMinutes();
  // let Seconds = stockDate.getSeconds();
  return {
    name: "QtechAI",
    sym: "QTA",
    price: randomNum,
    time: stockDate,
  };
}
export { getStockData };
