/*
    Map
        
        - Map 用来存储键值对结构的数据 key-value
        - Object中存储的数据可以认为是一种键值对结构
        - 两者的主要区别：
            - Object 中的属性名只能是字符串或符号，
            如果传递来一个其他类型的属性名
            JS解释器会自动将其转换为字符串
            - Map 中 任何类型 的值都可以称为数据的key


*/

/*
    创建：
        new Map()
    
    属性和方法：
        map.size()  获取map中键值对的数量
        map.set(key,value) 向map 添加键值对
        map.get(key)  根据key获取值
        map.delete(key) 删除指定数据
        map.has(key) 检查map中是否包含指定值
        map.clear() 删除全部的键值对

        遍历：
            map.keys()  获取map的所有的key
            map.values() 获取map的所有的value

*/
const map = new Map();
map.set('name', '春春');
map.set('age', 10);
console.log(map.get('name'));
console.log(map);
// 将map转换为数组--两种方式
// 1.  Array.from()
const arr = Array.from(map);
console.log(arr);
[
  ['name', '春春'],
  ['age', '10'],
];
// 2. arr2 = [...map];

const arr2 = [...map];
console.log(arr2);
const map2 = new Map([
  ['name', '春春1'],
  ['age', '101'],
  [{}, () => {}],
]);
console.log('map2为------', map2);
