let o = { s: "", n: 0, a: [true, false, null] };
console.log(o); // 输出： [1, 2, Array(3), 5]

let s = JSON.stringify(o); //序列化
console.log(s); //输出：  {"s":"","n":0,"a":[true,false,null]}

let copy = JSON.parse(s); //反序列化
console.log(copy); // 输出： [1, 2, Array(3), 5]
console.log(copy.a); // 输出: [true, false, null]

console.log(o == copy);

let obj = { s: "test", n: 0 };
res = JSON.stringify(o, null, 2);
console.log(res);
