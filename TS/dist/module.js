"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
//模块
//暴露一个类
class add {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
}
exports.add = add;
//迭代器
let Array = [1, 2, 3, 4, 5];
// for of是遍历元素
// for (let key in Array) {
//   console.log(key)
// }
//for in 遍历下标
for (const key in Array) {
    console.log(key);
}
