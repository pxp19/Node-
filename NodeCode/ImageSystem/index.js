const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send(`<h1>成功发送</h1>`);
  console.log('服务器启动');
});
app.listen(3000, (req, res) => {
  console.log('我来了 我是服务器');
});
