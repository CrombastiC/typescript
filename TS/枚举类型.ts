// //枚举类型
// //数字枚举
// enum Color {
//   Red = 1,
//   Green = 5,
//   Blue = 9,
// }

// console.log(Color.Red) // 0
// console.log(Color[0]) // Red
// // 当给red赋值为1时，后面的值会依次递增，如果不赋值，则默认为0
// //也可以单独设置某个值
// console.log(Color.Green) // 2

// //字符串枚举
// enum Color1 {
//   Red = 'red',
//   Green = 'green',
//   Blue = 'blue',
// }

// //异构枚举
// enum Color2 {
//   Red = 1,
//   Green = 'green',
//   Blue = 2,
// }
// //接口枚举
// interface Color3 {
//   Red: Color.Red
// }
// let obj: Color3 = {
//   Red: 1,
// }

//const 枚举
//使用const定义枚举，枚举成员的值会被当作常量，不会新建对象
// const enum Types {
//   success,
//   fail,
// }
// let code: number = 0
// if (code === Types.success) {
// }

//反向映射
//枚举成员会生成正向映射（名字到值）和反向映射（值到名字）
//无法为字符串枚举成员生成反向映射
// enum Types {
//   success,
// }
// let success: number = Types.success
// let key = Types[success]
// console.log(success) // 0
// console.log(`value: ${success}, key: ${key}`) // value: 0, key: success
