// Node.js中没有 DOM 这个API  无法使用 document 对象

// 监听指定元素的点击事件，并检查点击的目标元素是否是特定类型。
document.getElementById("father-id").onclick = function (event) {
  event = event || window.event;
  let target = event.target || event.srcElement;
  //可以自己打印一下event.target.nodeName,看看是什么
  if (target.nodeName.toLowerCase() === "xxx") {
    //事件内容
  }
};
