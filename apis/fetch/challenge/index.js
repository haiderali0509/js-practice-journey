fetch("https://bored-api.appbrewery.com/random")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

let res = fetch("https://bored-api.appbrewery.com/random");
let data = await res.json();
console.log(data);
