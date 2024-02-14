// let a1: symbol = Symbol(1) //唯一的
// let a2: symbol = Symbol(1) //唯一的
// // console.log(a1, a2) //Symbol(1) Symbol(1)
// // console.log(a1 === a2) //false
// //for Symbol
// //for：全局找Symbol有没有注册过这个key，有就直接拿来用，没有就创建一个
// // console.log(Symbol.for('xz') === Symbol.for('xz')) //true
// //Symbol可以解决属性的key重复的问题
// // let obj = {
// //   name: 1,
// //   [a1]: 111,
// //   [a2]: 222,
// // }
// console.log(obj) //{ name: 1, [Symbol(1)]: 111, [Symbol(1)]: 222 }

// //for in 不能读到Symbol属性
// // for (let key in obj) {
// //   console.log(key) //name
// // }

// //Object.keys() 也不能读到Symbol属性
// // console.log(Object.keys(obj)) //[ 'name' ]

// // Object.getOwnPropertyNames() 也不能读到Symbol属性
// // console.log(Object.getOwnPropertyNames(obj)) //[ 'name' ]
// //Object.getOwnPropertySymbols能取到Symbol却丢失了普通属性
// // console.log(Object.getOwnPropertySymbols(obj)) //[Symbol(1)][Symbol(1)]
// //可以取到所有
// console.log(Reflect.ownKeys(obj))
