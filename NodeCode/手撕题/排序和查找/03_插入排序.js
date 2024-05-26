// 对数组进行浅复制 的两种方式
// const arr = slice();
// const arr = [...array];
/*
插入排序：

将无序的元素插入到有序的元素序列中，插入后仍然有序

冒泡排序：

比较相邻元素，直到序列变为有序为止
*/
function sort(arr) {
  //  为什么是使用for in 而不是 for of  使用for of 也可以正常输出数组的排序后的答案  是否可以遍历对象吗
  //   for (let i in arr) {
  for (let i of arr) {
    while (i > 0 && arr[i] < arr[i - 1]) {
      [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      i--;
    }
  }
  return arr;
}

arr = [2, 4, 6, 5, 3, 1];
console.log(sort(arr));

// function sort2(arr) {}
