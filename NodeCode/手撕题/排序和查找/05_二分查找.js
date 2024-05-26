/*
二分查找：
    有序数组
    左右指针移动 缩小范围 动态变化中间的 指针mid 
*/

function search(arr, target) {
  //循环写法,不断移动左右指针,缩小范围 直到找到target所在位置
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    /*
    应该使用 (left + right) >> 1 而不是 (left + right) / 2，
    因为 (left + right) / 2 可能会导致浮点数精度问题，
    而 (left + right) >> 1 是二进制右移一位，效果等同于除以 2，
    但更高效。*/
    let mid = (left + right) >> 1;
    const mid_pos = Math.floor(mid);
    const mid_val = arr[mid_pos];

    if (target === mid_val) {
      return mid_pos;
    } else if (target > mid_val) {
      left = mid_pos + 1; //目标在右部分 左指针 右移
    } else {
      right = mid_pos - 1;
    }
  }
  // 如果循环结束仍未找到目标值，则返回 left，即插入位置
  return left;
}

arr = [1, 2, 3, 4, 5];
console.log(search(arr, 0));
