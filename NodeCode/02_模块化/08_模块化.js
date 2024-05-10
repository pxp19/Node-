/*
在 node 中  默认支持的 模块化规范 叫做 CommonJS

    在 CommonJS中 一个 js 文件就是一个模块

    CommonJS规范
        - 引入规范
            - 使用require
            - 引入自定义模块时
                - 模块名 要以 ./ 或 ../ 开头
                - 扩展名可以省略
                    - 在CommonJS中， 如果省略的js文件的扩展名
                        node 会自动为文件补全扩展名
                            js -->json --> node(特殊)


        - 引入核心模块
            - 直接写核心模块的名字即可



*/

/*
在定义模块时 模板中的内容默认是不会被外部看到的
    可以通过 exports 暴露给外部

    访问 exports 的方式有两种：
    exports
    module.exports
    - 当我们在其他模块中引入当前模块时，require函数返回到就是exports
    - 可以将希望暴露给外部模块的内容设置为exports 的属性
*/
const m1 = require("./m1.js");
console.log(m1);
console.log(m1.me);
console.log(arguments);
console.log(__dirname); // 模块所在 目录 的绝对路径
console.log(__filename); // filename表示当前模块的绝对路径
