//1.函数定义类型和返回值| 箭头函数定义类型和返回值
//2.函数默认的参数| 函数可选参数
//3.参数是一个对象如何定义使用(接口)
//4.函数this类型
//5.函数重载
//可选参数和默认值不能同时使用
// interface Obj {
//   user: number[]
//   add: (this: Obj, num: number) => void
// }
//ts里可以定义this的类型，必须是第一个参数定义this的类型
// let obj: Obj = {
//   user: [1, 2, 3],
//   add(this: Obj, num: number) {
//     this.user.push(num)
//   },
// }
// obj.add(4)
// console.log(obj);
//函数重载
let user = [1, 2, 3];
function findNum(ids) {
    if (typeof ids === 'number') {
        return user.filter((v) => v === ids);
    }
    else if (Array.isArray(ids)) {
        user.push(...ids);
        return user;
    }
    else {
        return user;
    }
}
console.log(findNum([4, 5, 6]));
