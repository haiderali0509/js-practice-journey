const dateSnapShot = new Date();
console.log(dateSnapShot);
console.log(dateSnapShot.toString());
console.log(dateSnapShot.getFullYear().toString());
console.log(
  `Copyright ${dateSnapShot.getFullYear().toString()} all rights reserved.`
);

function checkUsername(username) {
  if (username) {
    console.log(username);
  } else {
    // console.log(new Error("No username provided"));
    console.log("i executed");
    throw new Error("No username provided");
    console.log("i don't executed");
  }
}
checkUsername();
