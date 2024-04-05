/*
    Promise中的
        then (return new Promise())
        catch
        - 这三个方法都会返回一个新的Promise,
            Promise中会存储回调函数的返回值
        finally
        - finally 的返回值，不会存储到新的Promise 中


*/

const promise = new Promise((resolve, reject) => {
  resolve("hello");
  reject("no");
});
promise.then((result) => {
  console.log(result);
});

promise
  .then((r) => "哈哈哈")
  .catch((r) => console.log(r))
  .then((r) => console.log("omg"), r);
