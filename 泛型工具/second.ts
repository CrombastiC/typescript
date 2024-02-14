//1.Record
//2.ReturnType

//1.Record
//约束对象的key和value
//所以接收两个泛型

//原理
//对象的key只能是string number symbol
// type objKey=keyof any//keyof any就是string number symbol
// type CustomRecord<K extends objKey, T> = {
//   [P in K]: T
// }
// type Key = 'c' | 'x' | 'k'//key不能少
// type Value = '唱歌' | '跳舞' | 'rap'//value随便
// //支持对象嵌套约束
// let obj: Record<Key,Record<Key,Value>> = {
//   c: {
//     c: '唱歌',
//     x: '跳舞',
//     k: 'rap'
//   },
//   x: {
//     c: '唱歌',
//     x: '跳舞',
//     k: 'rap'
//   },
//   k: {
//     c: '唱歌',
//     x: '跳舞',
//     k: 'rap'
//   }
  
// }

//2.returnType
//获取函数类型的返回值
const fn = () => [1, 2, 3]
type arrNum = ReturnType<typeof fn>//number[]

//原理
type CustomReturnType<F extends Function> =F extends (...args: any[]) => infer R ? R : never