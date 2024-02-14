// //1.生成器
// // function* gen() {
// //   yield Promise.resolve('小李') //同步 异步
// //   yield '小王'
// //   yield '小张'
// // }
// // const man = gen()
// // //done 是否迭代完成
// // console.log(man.next()) //{ value: Promise { '小李' }, done: false }
// // console.log(man.next()) //{ value: '小王', done: false }
// // console.log(man.next())

// //2.迭代器
// //3.set map
// let set: Set<number> = new Set([1, 1, 1, 2, 2, 2, 3, 3, 3, 4]) //set天然去重复
// // console.log(set) //Set { 1, 2, 3, 4 }
// let map: Map<any, any> = new Map()

// let Arr = [1, 2, 3]
// map.set(Arr, '我是数组')

// function args() {
//   console.log(arguments) //伪数组
// }
// // let list = document.querySelectorAll('div') //伪数组

// // const each = (value: any) => {
// //   let it: any = value[Symbol.iterator]() //迭代器
// //   let next: any = { done: false } //默认值
// //   while (!next.done) {
// //     next = it.next()
// //     if (!next.done) {
// //       console.log(next.value)
// //     }
// //   }
// // }
// // each(Arr)
// //5.迭代器的语法糖 for of
// // for (let value of set) {
// //   console.log(value)
// // }
// //6.for of 不能遍历对象
// //7.解构 底层是迭代器
// let [a, b, c] = [1, 2, 3]
// let copy = [...Arr]
// // console.log(copy) //[ 1, 2, 3 ]
// // console.log(a, b, c) //1 2 3

// //8.对象支持 for of
// let obj = {
//   max: 5,
//   current: 0,
//   [Symbol.iterator]() {
//     return {
//       max: this.max,
//       current: this.current,
//       next() {
//         if (this.current === this.max) {
//           return {
//             value: undefined,
//             done: true,
//           }
//         } else {
//           return {
//             value: this.current++,
//             done: false,
//           }
//         }
//       },
//     }
//   },
// }

// for (let value of obj) {
//   console.log(value)
// }

// let x = [...obj] //数组底层调用迭代器遍历对象
// console.log(x) //[ 0, 1, 2, 3, 4 ]
// let y = { ...obj } //对象底层调用结果
// console.log(y)
// // {
// //   max: 5,
// //   current: 0,
// //   [Symbol(Symbol.iterator)]: [Function: [Symbol.iterator]]
// // }
