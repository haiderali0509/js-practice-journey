function getLabelsHtml(text, sender, ...workers) {
  /*
    Challenge:
    1. Add parameters (text, sender, ...recipients)
    2. Update the HTML template where you see **NAME**
    3. Return HTML for each label
  */

  // Example HTML you’ll generate:
  // <div class="label-card">
  //   <p>Dear **NAME**</p>
  //   <p>0${text}</p>
  //   <p>Best wishes,</p>
  //   <p>${sender}</p>
  // </div>

  // const htmlArr = workers.map(
  return workers
    .map(
      // ------ can return directly
      (worker) =>
        `<div class="label-card">
      <p>Dear ${worker.name}</p>
      <p>${text}</p>
      <p>Best wishes,</p>
      <p>${sender}</p>
    </div>`
    )
    .join("");
  // return htmlArr.join("");
}

const text = "Thank you for all your hard work throughout the year! 🎉";
const sender = "Tom";

document.getElementById("labels-container").innerHTML = getLabelsHtml(
  text,
  sender,
  { name: "Sally" },
  { name: "Mike" },
  { name: "Rob" },
  { name: "Harriet" }
);
