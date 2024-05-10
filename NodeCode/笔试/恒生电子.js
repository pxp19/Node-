let Promise1 = new Promise((resolve, reject) => {
  resolve("yes");
});

let Promise2 = new Promise((resolve, reject) => {
  resolve("yes");
});

let Promise3 = new Promise((resolve, reject) => {
  resolve("yes");
});

Promise.all([Promise1, Promise2, Promise3]).then((res) => {
  console.log(res);
});
