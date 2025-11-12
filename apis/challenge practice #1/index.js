async function createTodo() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        title: "new todo",
        userId: 1,
        completed: false,
        I: 1,
      }),
    });
    if (!res.ok) {
      throw new Error("There has error in API");
    }
    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
createTodo();