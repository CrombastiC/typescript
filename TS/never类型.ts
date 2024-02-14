// import { error } from 'console'

// type S = string & number //never
// //由于执行不到，所以是never
// function zs(): never {
//   // throw new error('error')
//   while (true) {}
// }

// type x = number | string | never //number|string

// type A = '唱' | '跳' | 'rap'
// // '篮球'

// function kun(value: A) {
//   switch (value) {
//     case '唱':
//       break
//     case '跳':
//       break
//     case 'rap':
//       break
//     default:
//       // 兜底逻辑
//       //当需要加入新的值时，会报错
//       const check: never = value
//       break
//   }
// }
