// 模拟异步操作
/*
  promise 对象表示一个模拟的异步操作。
  如果随机生成的数字大于 0.5，Promise 将被解析，
  并且 then 方法的成功处理函数将被调用；
  否则，
  Promise 将被拒绝，并且 catch 方法的错误处理函数将被调用。
  
  */
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve(randomNumber); // 异步操作成功，将结果传递给 resolve 函数
    } else {
      reject(new Error('异步操作失败')); // 异步操作失败，将错误信息传递给 reject 函数
    }
  }, 1000);
});

promise
  .then((result) => {
    console.log('Promise 成功解决', result);
  })
  .catch((error) => {
    console.error('Promise 失败处理', error);
  });
