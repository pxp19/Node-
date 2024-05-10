/*
    #  注意异常穿透
    Promise中的
        then (return new Promise())
        catch
        - 这三个方法都会返回一个新的Promise,
            Promise中会存储回调函数的返回值
        finally
        - finally 的返回值，不会存储到新的Promise 中


        后边的方法（then和catch) 读取
          如果上一步的执行结果不是当前想要的结果，则跳过当前的方法

    当Promise 出现异常时 而整个调用链没有出现catch ,则异常会向外抛出 
    当是 catch 出错的话 如果后面没有catch接受 那么异常会向外抛出
*/

const promise = new Promise((resolve, reject) => {
  // resolve("hello");
  reject("no");
});
// promise.then((result) => {
//   console.log(result);
// });

promise
  .then((r) => "这是第一个 then哈哈哈")
  .catch((r) => {
    console.log("异常处理", r);
    return "嘻嘻,我把这句话  作为 r 返回给下面这个 then ";
  }) //异常穿透，就是 当出现异常时，会直接 去执行catch方法中的语句 穿透前面的语句 不执行
  .then((r) => console.log("omg这是第二个then", r));
