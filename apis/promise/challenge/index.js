function preLoadImg(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.src = url;
    img.alt = "a beautiful scene";
    img.addEventListener("load", () => { 
      resolve(img);
    });
    img.addEventListener("error", () => {
      reject("image has NOT loaded");
    });
  });
}
try {
  const results = await preLoadImg("https://picsum.photos/1320/550");
  console.log(results);
  document.getElementById("imgContainer").appendChild(results);
} catch (error) {
  console.log(error);
}
