try {
  let res = await fetch("https://bored-api.appbrewery.com/random");
  if (!res.ok) {
    throw new Error("There was a problem with API");
  }
  let data = await res.json();
  console.log(data);
} catch (err) {
  console.log(err);
} finally { 
  console.log("the operation completed");
}
