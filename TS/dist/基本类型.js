// // any 任意类型 unknown 不明类型
// // 每一层包含下面所有类型
// // 1.top type 顶级类型 any unknown
// // 2.Object
// // 3.Number String Boolean
// // 4.number string boolean
// // 5. 1 '张三' false
// // 6.never
// // unknown 只能赋值给自身 或者是any
// // unknown 没有办法读任何属性 方法也不可以调用
// // unknown 比any 更加安全
// let tes: any = {
//   好人: true,
//   open: () => {
//     console.log('111')
//   },
// }
// tes.open()
// let a: string = 'hello'
// console.log(a)
// let x: number | string = 123
// console.log(x)
// let y: undefined = undefined
// let z: null = null
// let b: boolean = true
// let s: Array<string> = ['a', 'b', 'c']
// let m: number[] = [1, 2, 3]
// let f: [string, number]
// f = ['hello', 1]
// // 枚举
// enum Color {
//   Red,
//   Green,
//   Blue,
// }
// // unknown 不清楚类型
// let g: unknown = Color.Green
// // 无返回值
// function test(): void {
//   console.log('test')
// }
// if (x != 2) {
//   console.log('x!= 2')
// }
// if (x != 2) {
//   console.log('x!= 2')
// } else {
//   console.log('x== 2')
// }
// var xr: number = 1
// switch (xr) {
//   case 1:
//     console.log('1')
//     break
//   case 2:
//     console.log('2')
//     break
//   default:
//     console.log('default')
// }
// //有名函数:给变量设置number类型
// function test1(a: number, b: number): number {
//   return a + b
// }
// // 匿名函数:给变量设置number类型
// let test2 = function (a: number, b: number): number {
//   return a + b
// }
// //函数的可选参数
// // 可选参数必须放在必选参数后面
// //在参数名后面加?表示可选参数
// function test3(a: number, b?: number): number {
//   if (b) {
//     return a + b
//   } else {
//     return a
//   }
// }
// let res = test3(3)
// let res1 = test3(3, 4)
// console.log(res)
// console.log(res1)
// //剩余参数
// function test4(a: string, ...rest: string[]) {
//   return a + '' + rest.join('')
// }
// let res3 = test4('as')
// let res4 = test4('as', 'aa', 'aaa')
// //箭头函数
// let test5 = (a: number, b: number): number => {
//   return a + b
// }
