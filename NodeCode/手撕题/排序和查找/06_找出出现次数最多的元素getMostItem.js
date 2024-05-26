function getMost(arr) {
  // 计数 -- 初始化 map  使用哈希表存储每个元素的出现次数
  let map = new Map();
  arr.forEach((item) => {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  });

  // 使用解构赋值  初始化 max相关数据
  let [max_vals, max_num] = [[arr[0]], map.get(arr[0])];
  map.forEach((count, item) => {
    if (count > max_num) {
      max_vals = [item];
      max_num = count;
    } else {
      max_vals.push(item);
    }
  });
  return max_vals;
}
console.log(getMost(['1', '2', '3', '3', '55', '3', '55', '55']));

function getMost2(arr) {
  let map = new Map();
  arr.forEach((item) => {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1);
    } else {
      map.set(item, 1);
    }
  });

  //   初始化 解构赋值 !!!
  /*
  这种初始化方法将 max_vals 初始化为一个包含数组第一个元素的数组，
  将 max_num 初始化为第一个元素的出现次数。*/
  let [max_val, max_num] = [[arr[0]], map.get(arr[0])];
  map.forEach((count, item) => {
    if (count > max_num) {
      max_val = [item];
      max_num = count;
    } else {
      max_val.push(item);
    }
  });
  return max_val;
}
console.log(getMost2(['1', '2', '3', '3', '55', '3', '55', '55']));
