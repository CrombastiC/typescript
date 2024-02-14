// //在类型后面跟一个extends关键字，然后跟着另一个类型，表示泛型的约束
// // function add<T extends number>(a: T, b: T) {
// //   return a + b
// // }
// // add(1, 2)
// // interface Len {
// //   length: number
// // }
// // function fn<T extends Len>(a: T) {
// //   a.length
// // }
// // fn('aaa')
// // fn([1, 2, 3])
// let obj = {
//   name: 'zs',
//   age: 18,
// }
// //使用keyof获取对象的所有key
// // type key = keyof typeof obj
// // function ob<T extends object, K extends keyof T>(obj: T, key: K) {
// //   return obj[key]
// // }
// // ob(obj, 'name')
// interface Data {
//   name: string
//   age: number
//   sex: string
// }
// //for in for(let key in obj)
// type Options<T extends object> = {
//   readonly [key in keyof T]?: T[key]
// }
// type B = Options<Data>
