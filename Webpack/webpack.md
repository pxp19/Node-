# Webpack

## 定义

 - Webpack模块打包工具    module bundle
 - ES Module 模块引入方式  import  export
 - CommonJS  module.exports  require('')
 - TODO 官网 Module
 -  API 部分
 - [Modules | webpack](https://webpack.js.org/concepts/modules/#what-is-a-webpack-module)
 - [Introduction | webpack](https://webpack.js.org/api/)



### Webkpack安装

局部安装Webpack ---便于不同版本打包后的模块的兼容，如果是一个webpack3打包的模块是无法在全局为Webpack4版本的情况下顺利运行的 

考虑到这点，所以需要进行局部安装



```
npm init -y  #这样在新文件夹中初始化可以省略命令行中出现询问配置相关的内容，直接默认的内容配置
npm install webpack webpack-cli -D
或者是
npm install webpack webpack-cli --save-dev
#webpack-cli的作用是能够让webpack命令在命令行界面执行
# 错误npm webpack-v 
npx webpack-v  #会在nodemodules中寻找webpack
#可以在这里面找到历史版本的webpack版本
npm info webpack

```

![image-20240512154859605](C:\Users\chunchun\AppData\Roaming\Typora\typora-user-images\image-20240512154859605.png)

```
{
  "name": "webpack",
  "version": "1.0.0",
  "private": true, //意思是私有仓库，不会被发布到npm的线上商店中
  "description": "", 
  //"main": "index.js", //目前不是web应用，所以没必要向外暴露这样一个index.js文件
  "scripts": {
 //   "test": "echo \"Error: no test specified\" && exit 1"//可以先删除
  },
  "author": "春春",
  "license": "ISC",//如果开源可以使用MIT
  "devDependencies": {
    "webpack": "^5.91.0",
    "webpack-cli": "^5.1.4"
  }
}

```

### 配置webpack文件

```
#webpack.config.js
const path = require('path')
module.exports = {
entry:'./src/index.js',//配置入口文件
//配置输出的文件名以及文件存储的文件夹路径
output:{
	filename:'main.js',
	path:path.resolve(__dirname,'dist')
	}
}

```

我的理解会是这个入口文件就像是nodejs模块化中的部分，这个作为 把这个index.js引入某个文件中然后可以把这个module文件引入到所需要的部分之后就可以避免一个一个引入的麻烦(index.js部分会被默认找到)

```
-module
	-index.js
	-module01.js
	-module02.js
```



## 核心概念

WebPack可以让ESModule引入的模块能够被浏览器识别，需要注意 这个被导入的部分需要被要求通过export的方式导出

## 进阶  

## 实战配置案例  

## 底层原理以及脚手架工具分析