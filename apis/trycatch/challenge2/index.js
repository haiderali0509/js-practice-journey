try {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "Holiday Nightmare",
      body: "When I was kidnapped in Scotland",
      userId: 1,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("There is problem with API");
  }
  let data = await res.json();
  console.log(data);
} catch (err) {
  console.log(err);
}
