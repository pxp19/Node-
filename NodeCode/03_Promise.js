// 1.创建Promise
// 创建Promise时，构造函数中需要一个函数作为参数

// Promise构造函数的回调函数，它会在创建Promise时调用，调用时会有两个参数传递过去
const promise = new Promise((resolve, reject) => {
  // Promise 中存储数据
  // resolve 和 reject 两个函数，通过这两个函数可以向Promise中存储数据
  // resolve在执行正常时存储数据
  // reject在执行错误时存储数据
  // 通过  函数  来向 Promise 中添加数据， 好处就是可以用来添加异步调用的数据
  setTimeout(() => {
    resolve("这是resolve对应的内容");
  }, 1000);
  //   reject("reject");
});

// console.log(promise);
// 因为这个是同步执行的   而resolve中是异步代码所以没能及时打印 resolve函数中传递过去的值

// 设置为 setTimeout在  设置的时间长于 前面设置时间 后打印输出 就可以输出resolve返回之后的 值

setTimeout(() => {
  console.log(promise);
}, 4000);

/*

从 Promise 中读取数据

    - 可以通过Promise的实例方法then来读取Promise中存储的数据
    - then 需要两个回调函数作为参数， 回调函数用来获取Promise中的数据
        通过 resolve 存储的数据，会调用第一个函数返回，
            可以在第一个函数中编写处理 数据 的代码
        通过 reject 存储的数据或者出现异常时， 会调用第二个函数返回
            可以在第二个函数中编写处理 异常 的代码

*/

promise.then(
  (result) => {
    console.log("这是resolve中顺利执行的", result);
  },
  (reason) => {
    console.log("这是reject中 遇到异常处理异常执行的", reason);
  }
);

/**
    Promise 中维护了两个隐藏的属性
        PromiseResult
            - 用来存储数据
            //  Promise 中存储数据并不是难题 困难的是如何 知道 获取数据的时机  就比如前面的过早会无法获取到正确数据
        PromiseState
            - 记录Promise的状态（三种状态
                pending      (进行中)
                fulfilled    (完成)  通过resolve 存储数据时
                rejected    （拒绝，出错了） 出错了或者通过reject存储数据时
            - state只能修改一次，修改之后永远不会再变

        流程：
            当Promise创建时，PromiseState初值为pending
                当通过resolve存储数据时 PromiseState 变为 fulfilled(完成)
                    PromiseResult 变为存储的对象
                当通过 reject 存储数据时 PromiseState 变为 rejected    （拒绝，出错了)
                    PromiseResult 变为存储的对象 或异常对象

            当我们通过 then 读取数据时， 相当于 为Promise 设置了回调函数
                如果PromiseState 变为fulfilled，则调用then 的第一个回调函数来返回数据
                如果PromiseState 变为rejected , 则调用 then 的 第二个回调函数来返回数据

 */

const promise2 = new Promise((resolve, reject) => {
  resolve("我是resolve");
  reject("我是reject");
  //   state只能修改一次，修改之后永远不会再变
  //   这个地方 先已经 是执行 resolve  的话 那状态已经转换为 fulfilled 无法再进行改变了
});

promise2.then(
  (result) => {
    console.log("result");
  },
  (reason) => {
    console.log("出错了");
  }
);
console.log("我是第一吗？");
//  注意 这个 和then 中内容的 执行顺序 谁会先打印

/*  catch() 用法和then 类似， 但是只需要一个回调函数作为参考
        catch() 中的回调函数 只会在Promise 被拒绝时才调用
        catch() 相当于 then(null,reason =>{})
        catch() 就是一个专门处理Promise 异常的方法

    finally()
        - 无论正常存储数据还是出现异常了，finally总会执行
        - 但是finally 的回调函数中不会接收到数据
        - finally() 通常用来编写一些无论成功与否都要执行代码

*/
promise2.catch((reason) => {
  console.log("看到这个是在处理异常");
});

promise2.finally(() => {
  console.log("无论成功失败，我都还是会在");
});
