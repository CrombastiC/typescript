"use strict";
//若在package.json中配置了type=module,则需要使用ts-node-esm来运行ts文件
//set 天然去重 引用类型除外 支持多种遍历方式
// let set: Set<number> = new Set([1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6])
// set.add(7) //添加元素
// console.log(set)
// console.log(set.has(7)) //判断是否存在
// set.delete(5) //删除元素
// console.log(set)
// // set.clear() //清空
// console.log(set)
// //遍历set
// for (let item of set) {
//   console.log(item)
// }
//map 方法和set通用
//map的key可以是引用类型
// let obj = { name: 'zhangsan' }
// let map: Map<object, any> = new Map()
// map.set(obj, '张三')
// map.get(obj)
// console.log(map)
// weakmap WeakSet 弱引用类型 不会进入垃圾回收策略
//weakmap和map的区别
//weakmap的key必须是引用类型
//当weakmap引用的key被销毁时，weakmap也会被释放
//数字为引用次数
let obj = { name: '刘康' }; //1
let co = obj; //2
let weakmap = new WeakMap();
weakmap.set(obj, '张三'); //2
obj = null; //-1
co = null; //-1
console.log(weakmap);
console.log(weakmap.get(obj));
//在置于浏览器环境时，有时能取到weakmap的值，有时取不到，因为浏览器的V8引擎(大约200ms)GC需要时间
//weakset泛型必须是引用类型 其他和weakmap一样
let weakset = new WeakSet([]);
