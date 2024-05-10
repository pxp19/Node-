const express = require('express');
const path = require('path');
const app = express();
// 引入 解析请求体的中间件
app.use(express.urlencoded());
// 配置静态资源路径
app.use(express.static(path.resolve(__dirname, 'public')));
const USERS = [
  {
    username: 'admin',
    password: '123',
    nickname: 'admin123超级管理员',
  },
  {
    username: 'a',
    password: 'a',
    nickname: 'aaa',
  },
  {
    username: '1',
    password: '1',
    nickname: '111',
  },
];

// app.get('/', (req, res) => {
//   console.log('服务器启动');
//   res.send('yes');
// });

app.get('/', (req, res) => {
  res.send('get到达');
});

//  TODO 注册部分
app.post('/register', (req, res) => {
  // TODO 获取用户输入的数据
  console.log(req.body);

  const { username, password, repwd, nickname } = req.body;
  console.log(username, password, repwd, nickname);

  const registUser = USERS.find((item) => {
    return item.username === username || item.nickname === nickname;
  });

  if (!registUser) {
    USERS.push({
      username,
      password,
      nickname,
    });
    res.send(`<h1>注册成功</h1>`);
  } else {
    res.send(`<h1>用户名已经存在</h1>`);
  }

  res.send('拿到了');
});
// TODO 登录部分
// 添加请求 可以读取 post请求 的参数
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // for (const user of USERS) {
  //   console.log(user);
  //   if (user.username === username) {
  //     // 用户存在则接着检查用户的密码
  //     if (user.password === password) {
  //       res.send(`<h1>登录成功  ${user.nickname}</h1>`);

  //       // 注意这个 return
  //       return;
  //     }
  //   }
  // }

  // res.send(`<h1>!!! 登录失败</h1>`);

  const loginUser = USERS.find((item) => {
    return item.username === username && item.password === password;
  });

  if (loginUser) {
    console.log(loginUser);
    res.send(`<h1>登录成功  ${loginUser.nickname}</h1>`);
  } else {
    console.log(loginUser);

    res.send(`<h1>!!! 登录失败</h1>`);
  }
});

app.listen(3000, () => {
  console.log('启动了服务器123');
});
