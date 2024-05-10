const fs = require('fs');
const path = require('path');
const sharp = require('sharp'); // 处理图片
const multer = require('multer'); //处理文件上传
const express = require('express');
const images = require('images');
const app = express();
// 将ejs设置为默认的模板引擎

app.set('view engine', 'ejs');
// 配置模板的路径  告诉express 要在views文件夹下面寻找文件进行渲染
app.set('views', path.resolve(__dirname, 'views'));
// 引入解析请求体的中间件
app.use(express.urlencoded());

// 配置静态资源路径
app.use(express.static(path.resolve(__dirname, 'public')));
//使用multer 中间件处理文件上传
const upload = multer({ der: 'uploads/' });

app.use('/home', (req, res) => {
  res.render('home');
  // 渲染主页
});
// 处理图片上传
app.post('/upload', upload.single('image'), (req, res) => {
  // 从请求中获取上传的文件信息
  const imageFile = req.file;

  // 检查是否上传了文件
  if (!imageFile) {
    return res.status(400).send('No file uploaded.');
  }

  // 读取上传的图片文件
  const imagePath = imageFile.path;

  // 处理图片：比如添加水印、调整大小等
  const processedImage = sharp(imagePath)
    .resize(300) // 调整图片大小
    .toBuffer(); // 将处理后的图片转换为Buffer

  // 将处理后的图片返回给客户端
  processedImage.then((buffer) => {
    res.set('Content-Type', 'image/jpeg');
    res.send(buffer);
  });
});

// TODO批量添加水印部分
app.use('/add_watermark', (req, res) => {
  console.log('批量添加水印');
  /**
   * 添加水印
   * @param srcImg    源图
   * @param watermarkImg  水印图
   * @param x     添加水印水平位置x
   * @param y     添加水印垂直位置y
   */
  // 水印图片
  // const watermarkImgPath = path.resolve(__dirname, 'user');
  // const watermarkImg = images('water.png');
  // 等待加水印的图片
  // const sourceImg = images('source.png');
  // })
});

// TODO批量重命名部分  按照指定模板对文件重命名
app.use('/rename_images', (req, res) => {
  console.log('批量重命名');
});

// TODO预览文件部分
app.use('/preview_image', (req, res) => {
  preview_image;
  console.log('图片预览');
});

app.use('/middle', (req, res) => {
  res.send(`<h1>中间件启动</h1>`);
  console.log('中间件启动11');
});

app.get('/', (req, res) => {
  res.send(`<h1>成功发送</h1>`);
  console.log('服务器启动');
});

app.use((req, res) => {
  // 只要这个中间件一执行，就意味这访问超出 设置的页面
  res.send('你访问的不在这里');
});
//
app.listen(3000, (req, res) => {
  console.log('我来了 我是服务器');
});
