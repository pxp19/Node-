/*
        静态方法
            Promise.resolve() 创建一个立即我完成的Promise
            Promise.reject()  创建一个立即拒绝的Promise  需要使用 catch 来读取 
            - 都是用来处理 多个 Promise 一起执行的情况
            Promise.all()   同时返回多个Promise 执行的结果  一个报错就返回错误
            Promise.allSettled()  同时返回多个Promise 执行的结果  无论promise是否完成都会返回 执行结果
              1:{status: 'fulfilled', value: 4}
              2:{status: 'rejected', reason: '这个地方会出错'}
              3:{status: 'fulfilled', value: 4}
                  断点输出结果 否则只是省略 

            Promise.race([...]) 返回执行最快的 (无论对错)
            Promise.any([...]) 返回执行最快的 完成的 (fulfilled)


*/
function sum(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

// sum(1, 2).then((result) => {
//   console.log(result);
// });

// Promise.resolve(10).then((r) => {
//   console.log(r);
// });

// 注意这个  需要使用 catch 来读取 then没法读取
// Promise.reject("错误").catch((e) => {
//   console.log(e);
// });

/*
 错误的 resolve方法只能接受一个 参数 而 then方法也只能接受两个
// Promise.resolve(11, 11)
//   .then((a, b) => {
//     return a + b;
//   })
//   .then((res) => {
//     console.log(res);
//   });


numbers 是一个数组，包含两个元素 11 和 11
Promise.resolve([11, 11])
  .then((numbers) => {
    
    sum = numbers[0] + numbers[1];
    console.log("这是第一个sum", sum);
  })
  .then((res) => {
    console.log("这是第二个thens", sum); // 这将输出 22
  });
console.log("这是全局变量的sum", sum);
*/

// Promise.all([
//   sum(1, 2),
//   sum(2, 2),
//   //  reject("这个地方会出错"),
//   sum(2, 2),
// ]).then((r) => {
//   console.log(r);
// });

// Promise.allSettled([
//   sum(1, 2),
//   sum(2, 2),
//   Promise.reject("这个地方会出错"),
//   sum(2, 2),
// ]).then((r) => {
//   console.log(r);
// });

// Promise.race([
//   sum(1, 2),
//   sum(2, 2),
//   Promise.reject("这个地方会出错"), //因为这个是立即执行 所以这个生效的时候最快执行 然后会马上返回catch中的内容
//   sum(2, 2),
// ])
//   .then((r) => {
//     console.log(r);
//   })
//   .catch((e) => {
//     console.log("错误");
//   });

Promise.any([
  // sum(1, 2),
  // sum(2, 2),
  Promise.reject("这个地方会出错"), //因为这个是立即执行 所以这个生效的时候最快执行 然后会马上返回catch中的内容

  Promise.reject("这个地方会出错"), //因为这个是立即执行 所以这个生效的时候最快执行 然后会马上返回catch中的内容
  // sum(2, 2),
])
  .then((r) => {
    console.log(r);
  })
  .catch((e) => {
    console.log("错误", e); //只有都是为reject 才会返回这个 catch中的部分
  });
