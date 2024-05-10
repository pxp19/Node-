function shallowCopy(obj) {
  // 创建一个空对象或空数组，取决于传入的对象是对象还是数组
  let result = Array.isArray(obj) ? [] : {};
  // 遍历传入对象的所有属性，将其复制到新创建的对象中
  Objects.keys(obj).forEach((key) => (result[key] = obj[key]));

  // 返回浅拷贝后的对象
  return result;
}

// 示例对象
const star = { name: "Sun", age: 4.6, planets: ["Mercury", "Venus", "Earth"] };
const otherStar = { ...star };
console.log(otherStar);

//Object.assign() 方法接受一个或多个源对象，并将它们的属性复制到目标对象中。
const otherStar1 = Object.assign({}, star);
console.log(otherStar1);

let target = { x: 1 },
  source = { y: 2, z: 3 };
for (let key of Object.keys(source)) {
  target[key] = source[key];
}
console.log(target);

/*

实现和Object.assign（）方法类似的功能 实现 只复制不存在的属性

思路：遍历要被复制的对象 中的 属性名  再嵌套要被复制对象中的属性值
判断是否在 新对象中存在  满足条件不存在则 添加 赋值 被复制对象的属性给新对象中
最后返回result

*/

function merge(target, ...sources) {
  for (let source of sources) {
    for (let key of Object.keys(source)) {
      // 注意这个判断条件
      if (!(key in target)) {
        target[key] = source[key];
      }
    }
  }
  return target;
}
console.log(merge({ z: 1 }, { x: 2, y: 3 }));
// console.log(merge);
