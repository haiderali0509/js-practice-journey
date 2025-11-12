function getImagePromise(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let img = new Image();
      img.src = url;
      img.alt = "a beautiful scene";
      img.addEventListener("load", () => {
        resolve(img);
      });
      img.addEventListener("error", () => {
        reject("image has NOT loaded");
      });
    }, 500);
  });
}
const images = [
  "https://picsum.photos/400/300",
  "https://picsum.photos/400/300",
  "https://picsum.photos/400/300",
];
async function preloadImages(imageUrlsArr) {
  const imgContainer = document.getElementById("img-container");
  const uploadContainer = document.getElementById("upload-container");

  let promises = imageUrlsArr.map((url) => getImagePromise(url));
  try {
    let result = await Promise.all(promises);
    console.log("all images uploaded successfully");
    uploadContainer.style.display = "none";
    result.forEach((img) => imgContainer.appendChild(img));
  } catch (error) {
    console.log(error);
  }
}
document.getElementById("submit-imgs").addEventListener("click", () => {
  preloadImages(images);
});
