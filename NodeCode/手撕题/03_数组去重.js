function unique(arr) {
  let appeared = new Set();
  return arr.filter((item) => {
    let id = item + JSON.stringify(item);
    if (appeared.has(id)) {
      return false;
    } else {
      appeared.add(id);
      return true;
    }
  });
}
console.log(unique([1, 1, 1, 22, 22, 3]));
