/*
自执行函数 (IIFE):

这个函数在定义后立即执行。
它创建了一个闭包环境，
其中定义的 sum, square, mean, 和 stddev 函数都封装在这个闭包中，
不会暴露到全局作用域。
这种结构形成了一个私有作用域，
只有闭包内部的函数可以访问这个作用域中的变量和函数。
*/

const stats = (function () {
  const sum = (x, y) => x + y;
  const square = (x) => x * x;

  // 要导出的公有函数
  function mean(data) {
    return data.reduce(sum) / data.length;
  }
  // 另一个要导出的公有函数
  function stddev(data) {
    let m = mean(data);
    return Math.sqrt(
      data
        .map((x) => x - m)
        .map(square)
        .reduce(sum) /
        (data.length - 1)
    );
  }
  // 将公有函数作为一个对象的属性导出出来
  return { mean, stddev };
})();

// 模块使用示例

console.log(stats.mean([1, 3, 5, 7, 9]));
console.log(stats.stddev([1, 3, 5, 7, 9]));
