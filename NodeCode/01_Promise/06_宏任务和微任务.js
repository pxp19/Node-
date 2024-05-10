// 比较同步和异步

//  开启一个定时器
//  定时器的作用是间隔一段时间后，将函数放入到 任务队列
setTimeout(() => {
  console.log("定时器");
});

// 比较异步和异步  setTimeout() 和 promise

/*
    Promise 的执行原理
        - Promise 在执行，then 就相当于给了 Promise 回调函数
            当Promise 的状态从 pending 变为 fulfilled 时
                then 的回调函数会被放入到 任务队列 中

*/

Promise.resolve(1).then(() => {
  console.log("Promise ?Second");
  console.log(2);
  setTimeout(() => {
    console.log("setTimeout Third");
  }); // 虽然在这样微任务中 定义  是微任务中的宏任务  但是执行顺序还是不会改变的
  //   因为是在微任务队列中 向宏任务队列里 挂任务
});
setTimeout(() => {
  console.log("setTimeout Third");
});
//

console.log("console  first");

/*
JS 是单线程的 ，它运行时基于事件循环机制（event loop)
    - 调用栈
        - 栈
            栈是一种数据结构，先进先出
        - 调用栈中，放的是要执行的代码
    - 任务队列/消息队列  
        - 队列
            - 队列是一种数据结构，先进先出
        -任务队列中放的是将要执行的代码
        -当调用栈中的代码执行完毕后，队列中的代码才会按照顺序进入 栈 中 执行 
        - 在JS中任务队列有两种
            - 宏任务队列： （大部分代码都去宏任务队列排队 )
            - 微任务队列： （Promise的回调函数，then,catch,finally )
        - 整个流程
            - 1. 执行调用栈中的代码
            - 2. 执行 微任务队列中的所有任务
            - 3. 执行 宏任务队列中的所有任务

queueMicrotask() 用来向微任务队列中添加一个任务





*/

// queueMicrotask(() => {
//   console.log(2);
//   setTimeout(() => {
//     console.log("setTimeout Third");
//   });// 虽然在这样微任务中 定义  但是执行顺序还是不会改变的
// }); //用来向微任务队列中添加一个任务
