// 重点在于 自动模块化

// 创建一个空对象用于存储模块
const modules = {};

// 定义一个 require 函数，用于获取已注册的模块
function require(moduleName) {
  return modules[moduleName];
}

// 定义并立即执行 stats.js 模块
modules["stats.js"] = (function () {
  // 创建一个空对象用于存储要导出的函数
  const exports = {};

  // stats.js 文件中的内容
  const sum = (x, y) => x + y;
  const square = (x) => x * x;

  // 将要导出的公有函数作为一个对象的属性导出

  exports.mean = function (data) {
    return data.reduce(sum) / data.length;
  };
  // 另一个要导出的公有函数
  exports.stddev = function (data) {
    let m = mean(data);
    return Math.sqrt(
      data
        .map((x) => x - m)
        .map(square)
        .reduce(sum) /
        (data.length - 1)
    );
  };
  // 返回包含导出函数的对象
  return exports;
})();

// 使用 require 来获取 stats 模块
const stats = require("stats.js");

let average = stats.mean([1, 2, 3]);
console.log("average:" + average);
