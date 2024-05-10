function flatten(arr) {
  let result = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(flatten([1, 2, [3, 3, 4], 5]));

function flatten1(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten1(arr[i]));
      // result = Array.from(arr[i]);
      // result.push(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(flatten1([1, 2, [3, 3, 4], 5]));

console.log(flatten1([1, 2, [3, [3], 4], 5]));
