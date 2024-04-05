// 利用回调返回对应的结果
function sum(a, b, callback) {
  setTimeout(() => {
    callback(a + b);
    // 把a + b 的结果作为一个参数传给 callback 进行传递
    // 异步代码无法返回结果 异步必须通过回调函数来返回结果
  }, 1000);
}

console.log("cc");
//  回调地狱 层层嵌套
sum(111, 111, (result) => {
  console.log(`第一层${result}`);
  sum(result, 1000, (result) => {
    console.log(`第二层${result}`);

    sum(result, 10000, (result) => {
      console.log(`第三层${result}`);
      sum(result, 10000, (result) => {
        console.log(`最后一层${result}`);
      });
    });
  });
});
