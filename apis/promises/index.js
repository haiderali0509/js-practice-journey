try {
  let res = await fetch("https://bored-api.appbrewery.com/random");
  let data = await res.json();
  console.log(data);
} catch (err) {
  console.log(err);
} finally {
  console.log("the operation completed");
}
