# Sharp

## 前言

首先我们知道sharp是一个流行的Node.js图像处理模块：

先进入一个场景，当对于图像处理进行操作时，比如调整大小，裁剪，旋转等，这些图像处理操作都是需要一定时间的，这个时候就需要用到异步来避免同步会造成的等待时间过长和影响其他进程的执行的问题。

这样便可理解 sharp是一个基于Promise的图像处理模块

当创建一个sharp的实例时，会返回一个Promise

### 如何理解Promise

Promise 是JS中用于处理异步操作的特殊对象，

可以代表为一个目前未完成（pending)但是预期在未来完成的操作，

并且会针对操作的结果（失败或者成功）之后指定对应的操作。

处理Promise对象操作的结果，就是在解析Promise。

1. Promise 对象的创建  -- new Promise()  构造函数

   执行器函数：这是一个带有两个参数的函数，这个函数会作为参数传递给构造函数，并且执行器函数会立即执行

   执行器函数中的两个参数：分别是（resolve和reject这两个函数）

2. Promise对象的处理 `-- then()`和`catch()` 方法

   Promise 对象提供了 `.then()` 和 `.catch()` 方法来处理操作成功和失败的情况。`.then()` 方法用于注册成功处理函数，`.catch()` 方法用于注册错误处理函数。

   ```js
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
   
   ```

   输出：

![image-20240510181542354](C:\Users\chunchun\AppData\Roaming\Typora\typora-user-images\image-20240510181542354.png)

## 关于sharp的使用

### 1. 首先新建一个文件夹 这个是我的目录：

![image-20240510181832314](C:\Users\chunchun\AppData\Roaming\Typora\typora-user-images\image-20240510181832314.png)

可以先忽略掉water-resized.png这个是已经处理过后的图片

在test目录中执行以下操作：

1. 初始化项目

```  
npm init -y
```

2. 安装sharp

```
npm install sharp  
```

3. 创建index.js文件并且引入sharp 和 path（这个是为了保证路径的准确性

   ```
   const sharp = require('sharp');
   const path = require('path');
   ```

   

### 2. 开始使用sharp 熟悉相关 api

- resize()
- toFormat()
- extend()  -- 裁剪
- grayscale()   -- 灰度处理
- rotateImage()  --旋转图像
- blur  --模糊处理
- composite()  --合成图像
- addTextOnImage()  --在图像上添加文本
- 
- 







