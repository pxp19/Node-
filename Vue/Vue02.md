![image-20240519212459542](C:\Users\chunchun\AppData\Roaming\Typora\typora-user-images\image-20240519212459542.png)

## v-for 中的 key 是什么作用

在使用v-for进行渲染时，通常会给元素或者组件一个key属性

作用：

- 主要使用在Vue的虚拟DOM算法，在新旧nodes（节点）对比时辨别VNodes
  - 如果不使用key,Vue会使用一种最大限度减少动态元素并且尽可能地尝试修改或者复用相同类型元素的算法（类似于React官网中对于虚拟DOM的介绍中，这种算法会过于复杂和低效，而diff算法这是对这个进行优化
  - 使用key，它会基于key的变化重新排列元素顺序，并且会移除或者销毁key不存在的元素
- 





`VNode`本质是一个JS对象

![image-20240519212844107](C:\Users\chunchun\AppData\Roaming\Typora\typora-user-images\image-20240519212844107.png)

`VNode`会组成一个`VNode Tree`

![image-20240519213007527](C:\Users\chunchun\AppData\Roaming\Typora\typora-user-images\image-20240519213007527.png)

有了虚拟DOM  可以方便跨平台开发

- 如果是真实DOM则是运行在浏览器上
- 如果是虚拟DOM则是可以渲染到 移动端 桌面端的一些空间以及一些VR设备 上面



### 有key的diff算法

1. 从头开始进行遍历，遇到相同的节点就继续，遇到不同的就跳出循环
2. 从尾部开始遍历，遇到相同的节点就继续，遇到不同的就退出循环
3. 如果最后新节点更多，那么就添加新节点
4. 如果旧节点更多，那么久移除旧节点
5. 如果中间存在不知道如何排列的位置序列，那么就使用key建立索引图最大限度地使用旧节点

![image-20240519215117757](C:\Users\chunchun\AppData\Roaming\Typora\typora-user-images\image-20240519215117757.png)

第二步

![image-20240519215135737](C:\Users\chunchun\AppData\Roaming\Typora\typora-user-images\image-20240519215135737.png)

![image-20240519215144634](C:\Users\chunchun\AppData\Roaming\Typora\typora-user-images\image-20240519215144634.png)![image-20240519215144795](C:\Users\chunchun\AppData\Roaming\Typora\typora-user-images\image-20240519215144795.png)

![image-20240519215152840](C:\Users\chunchun\AppData\Roaming\Typora\typora-user-images\image-20240519215152840.png)





![image-20240519222911498](C:\Users\chunchun\AppData\Roaming\Typora\typora-user-images\image-20240519222911498.png)

Vue中对于这个列表的更新  （可以从这例子衍生到整个模板中去理解

- Vue会对有key和没有key调用两个不同的方法
- 有key，那么就会使用 patchKeyedChildren方法
- 没有key,那么就会使用 pathUnkeyedChildren 方法







## 计算属性Computed

- 对于任何包含响应式数据的复杂逻辑，都应该使用计算属性
- 计算属性将被混入到组件实例中
  - 所有的 getter setter 的 this 上下文自动地绑定为组件实例
- 计算属性的用法:
  - ​	