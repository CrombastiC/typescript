// 联合类型
// let phone: number | string = 12345 - 678901

// let fn = function (type: number | boolean): boolean {
//   return !!type //!!转换为布尔值
// }
// let result = fn(false)
// console.log(result)
//交叉类型
// interface People {
//   name: string
//   age: number
// }
// interface Man {
//   sex: number
// }
// const xiaoli = (man: People & Man): void => {
//   console.log(man)
// }
// xiaoli({
//   name: '小李',
//   age: 18,
//   sex: 1,
// })
// 类型断言
// 变量 as 类型
// <类型>变量
//类型断言只能欺骗编译器，无法处理运行时错误
// let fn = function (num: number | string): void {
//   console.log((num as string).length)
// }
// fn(123)

// interface A {
//   run: String
// }
// interface B {
//   build: String
// }

// let fn2 = (type: A | B): void => {
//   console.log((<A>type).run)
// }

// fn2({
//   build: '123', //无法打印run，传入为build
// })
// ;(window as any).abc = 123 //any 可以作为临时断言

const fn3 = (type: any): boolean => {
  return type as boolean //可以欺骗编译器，但是并没有转换类型
}

let bb = fn3(1)
console.log(bb)
