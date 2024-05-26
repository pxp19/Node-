// 对数组进行浅复制 的两种方式
// const arr = slice();
// const arr = [...array];

/*归并排序


*/
function sort(arr) {
  if (arr.length === 1) return arr;

  // 分成两部分
  len = arr.length;
  let mid = Math.floor(len / 2);
  // 两部分分别递归调用进行排序
  let [part1, part2] = [sort(arr.slice(0, mid)), sort(arr.slice(mid))];

  // 对比 合并
  let result = [];
  while (part1.length > 0 && part2.length > 0) {
    // 每次都是取出part1和2 中的第一个数进行比较，
    // 如果小则通过shift方法 把更小的一方 取出 添加到result 数组中
    // 因为是从头部取出 取出之后数组长度会变化，并且首部数字也会变化，所以会不断更新
    // 所以可以是只对 两个part 的第一个数进行比较
    result.push((part1[0] < part2[0] ? part1 : part2).shift());
  }
  return [...result, ...part1, ...part2];
}
arr = [2, 4, 6, 5, 3, 1];
// console.log(sort);
console.log(arr);
res = sort(arr);
console.log(res);

function sort2(arr) {
  let len = arr.length;
  if (len == 1) {
    return arr;
  }
  let mid = Math.floor(len / 2);
  let [p1, p2] = [sort(arr.slice(0, mid)), sort(arr.slice(mid))];

  let result = [];
  // 合并
  while (p1.length > 0 && p2.length > 0) {
    result.push((p1[0] < p2[0] ? p1 : p2).shift());
  }
  //   console.log(p1); //----[6]
  //   console.log(p2); // ---- []
  return [...result, ...p1, ...p2];
  return result; // 但p1 p2 中的 长度不一样时  会出现比较不完全的情况 没有全部给result数组 会出现结果缺失的情况
}

res2 = sort2(arr);
console.log(res2);
