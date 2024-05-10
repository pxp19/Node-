class SingleTon {
  private constructor() {}
  public static getInstance(): SingleTon {
    return new SingleTon();
  }
  fn1() {}
  fn2() {}
}
const s = SingleTon.getInstance();
s.fn1();
s.fn2();

const s1 = SingleTon.getInstance();

/*
观察者模式

一个主题，一个观察者，主题变化之后触发观察者执行

btn.addEventListener('click',()=>{...})

*/

/*


发布订阅模式 
    注意绑定的事件记得接触 防止内存泄露

绑定
event.on("event-key", () => {
  事件1
});
event.on("event-key", () => {
  事件2
});

触发执行
event.emit("event-key");
*/

/*
  代理模式

    使用者不能直接访问对象，而是访问一个代理层
    在代理层可以监听 get set 做很多事情
    如 ES6 Proxy 实现 Vue3 响应式
*/
