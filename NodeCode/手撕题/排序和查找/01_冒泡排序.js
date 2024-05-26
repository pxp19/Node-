/*
插入排序：
    将无序的元素插入到有序的元素序列中，插入后仍然有序

冒泡排序：  
    比较相邻元素，直到序列变为有序为止
*/

arr = [2, 4, 6, 5, 3, 1];

function sort(arr) {
  // 两两相比较
  //   第一层循环是  比较次数
  //  第二层循环是 在一次比较中 这个数组中各个数的移动
  for (let j = 0; j < arr.length - 1; j++) {
    // for (let i = 0; i < arr.length - 1; i++) {
    // 这样 减少了 已经排序好的位置的比较次数，节省资源
    for (let i = 0; i < arr.length - 1 - j; i++) {
      if (arr[i] < arr[i + 1]) {
        let temp;
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(sort(arr));
