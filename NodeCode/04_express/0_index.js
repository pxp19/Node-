/*
    express 是node 中的服务器软件
        是一个web容器 可以解析web请求
    - 使用步骤：
    1.创建并初始化项目
        yarn init -y
    2. 安装 express
        yarn add express
    3.创建 index.js 编写代码
*/

// 引入express
const express = require('express');

// 一切皆对象  获取服务器的实例（对象
const app = express();
// 启动服务器
// app.listen(端口号)  用来启动服务器
app.listen(3000, () => {
  console.log('服务器启动');
});

/*
        如果希望服务器可以正常访问，则需要为服务器设置路由
            路由可以根据不同的请求方式和请求地址来处理用户的请求

            app.METHOD(...)
                METHOD 可以是 post 或 get ....

        中间件
            - 在 express 我们是哟app.use 来定义一个中间件
                    中间件 作用和路由很像，用法很像

            - 和路由的区别
                1，会匹配所有请求
                2. 路径设置 父目录


*/

// 路由的回调函数执行时， 会接收到三个参数
// 第一个request 第二个 response   第三个是 next  它是一个函数，调用函数之后，可以触发后续的中间件
app.get('/', (req, res) => {
  console.log('收到请求', Date.now());
  //   在路由中，应该做两件事
  // 读取用户的请求（request
  //  根据用户的请求返回响应（response

  // req 表示对是 用户的请求信息，  通过 req 可以获取用户 传递数据
  //   console.log(req.url);
  //   console.log(request.url);

  // res 表示是的服务器发送客户端的响应信息

  // sendStatus()向客户端发送客户端状态码
  // status()  用来设置 响应状态码 但是并不发送
  // send() 设置并发送 响应体
  res.send('这是我的 第一个服务器');
});

app.use('/hello', (req, res) => {
//   res.send('这是通过中间件返回的响应');
  next()
});

app.use('/hello', (req, res) => {
  res.send('111');  // 当 调用 send 之后 相当于 请求 已经结束了 此时 next（） 在调用 就已经没有用了 
  next();
});

app.use('/hello', (req, res) => {
  res.send('222');
  next();
});

