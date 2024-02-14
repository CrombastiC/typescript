// //Object 任意类型
// let a: Object = 123
// let ba: Object = 'saa'
// //object 除了基本类型之外的类型 例如：数组 对象 函数
// let c: object = {}
// let d: object = []
// let e: object = function () {}
// let x: {} //new Object() 但是不能赋值
// //interface 接口
// //重名会重和
// interface Person extends People {
//   readonly id: number //只读属性
//   name: string
//   age: number
//   gender?: string //遇到可选值加一个？
//   //索引签名
//   // [propName: string]: any //任意属性
//   readonly cb: () => boolean //只读属性
// }
// interface People {
//   xxx: string
// }
// //通过接口定义对象类型 不能多属性 也不能少属性
// let w: Person = {
//   xxx: 'xxx',
//   id: 123,
//   name: '张三',
//   age: 18,
//   cb: () => {
//     return false
//   },
// }
// w.cb()
// // w.name = '李四' //只读属性不能修改
// interface Fn {
//   (name: string): number[]
// }
// const fn: Fn = function (name: string) {
//   return [1]
// }
