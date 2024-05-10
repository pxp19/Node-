const express = require('express');

const app = express();
const path = require('path');

// 使用中间件  app.use
// 配置静态资源的路径
app.use(express.static(path.resolve(__dirname, 'public')));
// 引入解析请求体的中间件
app.use(express.urlencoded());

// 添加一个路由，可以读取get 请求的参数
app.get('/login', (req, res) => {
  console.log('接受到表单提交');
  //   获取用户发送的数据
  //   通过 req.query 来获取查询字符串中的数据  req.query
  if (req.query.username === 'admin' && req.query.password == '123') {
    res.send('<h1>恭喜登录成功</h1>');
  } else {
    console.log(req.query);

    res.send('<h1>登录失败，再来一次</h1>');
  }
  res.send('yes');

  // 通过 req.query
});
app.listen(3000, () => {
  console.log('启动了 服务器');
});

app.get('/', (req, res) => {
  res.send('我收到了');
});

// get 请求发送参数的 的第二种方式

// 在路径中以 冒号命名的部分称之为 param, get请求可以被解析为请求参数  req.params

app.get('/hello/:id', (req, res) => {
  console.log(req.params);
  res.send('这是hello路由');
});

app.post('/login', (req, res) => {
  /*
    通过req.body来获取post请求的参数（请求体中的参数
    默认情况下 express 不会自动解析请求体  =》 express 特性为 极简 需要引入 请求体的中间件
    
    */
  console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;
  console.log(username, password);

  res.send('<h1>post请求已经收到</h1>');
});
