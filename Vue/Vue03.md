## Finalization Registry

`FinalizationRegistry`对象可以让你在对象被垃圾回收时请求一个回调

​	这个对象具有一种方法：当一个在注册表中注册的对象被回收时，请求在某个时间点上调用一个清理回调。（清理回调有时被称为`finalizer`



```
let obj = {name:'cc'}
const registry = new FinalizationRegistry(value =>{
	console.log('清理回调')
})
registry.register(obj,'obj')
obj = null
```





