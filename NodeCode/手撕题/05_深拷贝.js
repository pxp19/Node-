function copy(obj, appeared = new Map()) {
  if (!(obj instanceof Object)) return obj; //如果是原始数据类型
  if (appeared.has(obj)) return appeared.get(obj); //如果已经出现过
  /*函数检查传入的对象是否已经在 appeared Map 中出现过。
  appeared Map 用于存储已经复制过的对象，避免出现循环引用导致的无限递归。
  如果对象已经出现过，直接从 appeared Map 中获取复制后的对象，并返回。*/
  let result = Array.isArray(obj) ? [] : {};
  appeared.set(obj, result); //将新对象放入map

  //遍历所有属性进行递归拷贝
  [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)].forEach(
    (key) => (result[key] = copy(obj[key], appeared))
  );

  return result;
}

// 检查示例
const obj = {
  name: "Chen",
  detail: {
    age: "18",
    height: "180",
    bodyWeight: "68",
  },
  hobby: ["see a film", "write the code", "play basketball", "tourism"],
};
obj.tempObj = obj;

const obj1 = copy(obj);
console.log(obj1);

function deepCopy(obj, appeared = new Map()) {
  if (!(obj instanceof Object)) return obj;
  if (appeared.has(obj)) return appeared.get(obj);

  let result = Array.isArray(obj) ? [] : {};
  appeared.set(obj, result); //将新对象放入map中

  // 遍历所有属性进行递归遍历
  [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)].forEach(
    (key) => (result[key] = deepCopy(obj[key], appeared))
  );

  return result;
}

arr1 = [1, 2, 3];
arr2 = [4, 4, 5];
arr = [...arr1, ...arr2];
console.log(arr);
