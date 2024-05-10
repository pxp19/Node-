const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');

const studentInfo = require('./data/students.json');
// 将ejs设置为默认的模板引擎
app.set('view engine', 'ejs');
// 配置模板的路径
app.set('views', path.resolve(__dirname, 'views'));

// 配置静态资源路径
app.use(express.static(path.resolve(__dirname, 'public')));
// 配置请求体解析
app.use(express.urlencoded({ extended: true }));

app.get('/set_name', (req, res) => {
  // res.send(``)
  const username = req.query.name;
  console.log('first');
  console.log(req.body);
  //   res.send(`111`);
});
app.get('/students', (req, res) => {
  // 希望用户在 访问students路由时，可以给用户返回一个显示有学生信息都页面
  /*
        html 页面属于静态页面
            不会随着 服务器页面的数据而变化


        nodejs中存在多个模板引擎，使用步骤
            1.安装ejs  npm i ejs
            2.配置express的模板引擎为ejs

            注意 ：模板引擎需要别express渲染之后才能使用


        
    
    */
  // 去views 中找寻 模板引擎
  //   res.render('students');

  // 可以将一个对象作为render 的第二个参数传递 这样在模板中可以访问到
  // <%= %>在 ejs 中输出内容时，它会自动会字符串中的特殊符号进行转义 &lt  即只是会把特殊符号直接输出 这是为了避免 xss攻击
  // <%- %> 可以直接把内容输出
  // <% %>  可以在其中直接写js 代码

  res.render('students', {
    name: '春春',
    age: 12,
  });

  console.log(req.body);
});

app.get('/studentsList', (req, res) => {
  res.render('studentsList', {
    students: studentInfo,
  });
});

//创建一个添加学生信息都路由
app.post('/add-student', (req, res) => {
  /*
    路由里面要做什么
    生成一个id  at是根据索引去取元素

    
    1.获取用户填写的信息
    */
  // 读取最后一个元素的id 再进行加一
  const id = studentInfo.at(-1).id + 1;
  //   const newUser = req.body;
  const newUser = {
    id,
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
  };

  //   2.验证用户信息

  // 3.将用户信息添加到数组中
  studentInfo.push(newUser);

  // 4.返回响应成功
  //   res.send('添加成功');

  // 注意这个会出现表单重复提交问题  直接在添加路由中 渲染ejs 引起的问题
  // res.render("studentsList")

  //   把新数据写入到 json 文件中
  //   TODO
  fs.writeFile(
    path.resolve(__dirname, './data/students.json'),
    JSON.stringify(studentInfo),
    (err) => {
      if (err) {
        console.error('写入文件时出错了', err);
        // 在出错时可以做一些错误处理，比如返回一个错误页面
        res.send('写入文件时出错了，请稍后重试');
        return;
      }
      console.log('文件写入成功');
      // 如果写入成功，重定向到学生列表页面
      res.redirect('/studentsList');
    }
  );

  //   fs.writeFile(
  //     path.resolve(__dirname, './data/students.json'),
  //     JSON.stringify(studentInfo)
  //   )
  //     .then(() => {
  //       // 重定向 告诉浏览器是向另一个地址 发起一个请求
  //       res.redirect('/studentsList');
  //       console.log(newUser);
  //     })
  //     .catch(() => {
  //       //
  //       console.log('出错了');
  //     });
});

// 可以在所有路由的后边配置错误路由
app.use((req, res) => {
  // 只要这个中间件一执行，就意味这访问超出 设置的页面
  res.send('你访问的不在这里');
});

app.listen(3000, () => {
  console.log('我服务器来了，启动');
});
