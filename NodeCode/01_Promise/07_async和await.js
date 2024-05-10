/*
通过async 可以做什么
为什么会有async
它能解决什么
await 涉及到的执行 顺序 需要注意什么 
非模块部分 使用 await 使用立即执行函数  立即执行函数需要注意前面的函数的分号是否补全  否则会是被认为调用前面函数的返回值
*/
// function fn() {
//   return Promise.resolve(10);
// }
// 等价下面部分
// async function fn2() {
//   return 11;
// }

// fn().then((res) => {
//   console.log(res);
// });

// fn();
// console.log(fn());
// fn2();
// console.log(fn2());

//虽然 Promise 链式调用解决 异步调用中的回调函数问题

// 但是 代码可读性 还是不美观

//  使用同步的方式去调用异步的代码

//  await去调用 异步函数时，会暂停代码的运行
//  直到异步代码执行有结果时，才会将结果返回
// 只能用于async  声明的异步函数中，或者es模块的点击作用域中
//  await 阻塞的只是 异步函数  内部的代码 不会影响外部代码
//  不依赖于异步函数中返回结果的 代码运行不会受到影响
// 通过 await 调用异步代码 需要通过 try catch 来处理异常代码

//Promise中 then catch finally 才是进入微任务队列  new Promise 传入回调是立即执行
//  这里的 async 就类似于普通的 同步函数
// async function fn4() {
//   console.log(1);
//   console.log(1);
// }
// fn4();
// console.log(2); // 执行顺序 为  1 1 2

/*

当我们使用 await 调用函数后，当前函数后边的 所有代码
    会在当前函数执行完毕后  被放入到 微任务队列  中
*/
async function fn5() {
  console.log(1111);
  await console.log(2);

  //   await 后 所有代码 都会进入 为任务队列中执行
  console.log(3);
}
// 类似 fn5 和 fn55
function fn55() {
  //  返回到应该是一个 Promise 值 所以 return new Promise
  return new Promise((resolve) => {
    console.log("55" + 111);
    console.log("55:" + 2);
    resolve(); // 没有返回值 所以为空
  }).then((r) => {
    console.log("55" + 3);
  });
}

fn5();
fn55();
console.log(4);
