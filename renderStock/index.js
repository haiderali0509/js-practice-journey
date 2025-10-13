// Display name,sym,price,time
// Dynamic triangle svg show
// price update 1.5s

import { getStockData } from "./fakeStockApi.js";
function renderStockTicker() {
  const stockDisplayName = document.getElementById("name");
  const stockDisplaySym = document.getElementById("sym");
  const stockDisplayPrice = document.getElementById("price");
  const stockDisplayIcon = document.querySelector("polygon");
  const stockDisplaySvg = document.querySelector("svg");
  const stockDisplayTime = document.getElementById("time");
  let prePri = 0;
  let svgColor = "";
  setInterval(() => {
    const { name, sym, price, time } = getStockData();
    let currentPri = price;
    if (currentPri > prePri) {
      svgColor = "green";
      prePri = currentPri;
      stockDisplaySvg.style.transform = "rotate(0deg)";
    } else if (currentPri < prePri) {
      svgColor = "red";
      prePri = currentPri;
      stockDisplaySvg.style.transform = "rotate(180deg)";
    } else {
      svgColor = "grey";
      prePri = currentPri;
      stockDisplaySvg.style.transform = "rotate(90deg)";
    }
    let Hours = time.getHours();
    let Minutes = time.getMinutes();
    let Seconds = time.getSeconds();
    stockDisplayName.innerText = `Name : ${name}`;
    stockDisplaySym.innerText = `Symbol : ${sym}`;
    stockDisplayPrice.innerText = `Price : ${price}`;
    stockDisplayIcon.style.fill = svgColor;
    stockDisplayIcon.style.stroke = svgColor;
    stockDisplayTime.innerText = `Time : ${Hours} : ${Minutes} : ${Seconds}`;
  }, 1000);
}

renderStockTicker();
