try {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("There is problem with API");
  }
  let data = await res.json();
  console.log(data);
} catch (err) {
  console.log(err);
}
