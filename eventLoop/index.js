const start = performance.now();
setTimeout(() => {
  const end = performance.now();
  console.log(`Execution time : ${end - start} milliseconds`);
}, 1000);

for (let i = 0; i < 1000000; i++) {
  let answer = ((i * 2000000) / 67.8) * (45.7 / 3.2);
}
