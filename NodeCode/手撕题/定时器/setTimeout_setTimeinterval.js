let clock = setInterval(() => {
  console.clear();
  console.log(new Date().toLocaleDateString());
}, 1000);

setTimeout(() => {
  clearInterval(clock);
}, 1000);
