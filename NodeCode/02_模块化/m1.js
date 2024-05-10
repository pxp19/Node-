exports.a = "春春";
exports.b = { name: 123 };
exports.fn = function () {
  console.log("这是一个函数");
};

// 使用 module.exports  整体导出

module.exports = {
  me: "hello,我是 module",
};
