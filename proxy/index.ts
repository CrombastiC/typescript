//proxy 代理 13个方法 参数一模一样
//Reflect 反射 13个方法 参数一模一样
//mobx observable

// let person = { name: 'zf', age: 10 }
//proxy 支持对象 数字 函数 set map
//person.name //取值
//person.name = 100 //赋值
// let personProxy = new Proxy(person, {
//   //取值
//   //person name
//   get(target, key) {
//     return Reflect.get(target, key)
//   },
//   //赋值
//   //person name  100 receiver 保证上下文
//   set(target, key, value, receiver) {
//     return true
//   },
//   // 拦截函数调用
//   apply() {},
//   //拦截in操作符
//   has() {},
//   //拦截forin
//   ownKeys() {},
//   //拦截new操作符
//   construct() {},
//   //拦截删除操作
//   deleteProperty() {},
// })

// let person = { name: 'zf', age: 19 }
// console.log(person.name) //zf
// //Reflect.get(对象，属性，上下文)
// //receiver 保证上下文,一般为当前对象
// console.log(Reflect.get(person, 'name', person)) //zf
// console.log(Reflect.set(person, 'name', 'jw', person)) //true);

// let personProxy = new Proxy(person, {
//   get(target, key, receiver) {
//     if (target.age <= 18) {
//       return Reflect.get(target, key, receiver)
//     } else {
//       return '我已长大'
//     }
//   },
// })

// console.log(personProxy.age)

const list: Set<Function> = new Set()
const autorun = (cb: Function) => {
  if (!list.has(cb)) {
    list.add(cb)
  }
}
const observable = <T extends object>(params: T) => {
  return new Proxy(params, {
    set(target, key, value, receiver) {
      const result = Reflect.set(target, key, value, receiver)
      list.forEach((cb) => cb())
      return result
    },
  })
}

const personProxy = observable({ name: 'zf', Attr: '无敌' })
autorun(() => {
  console.log('任务有变')
})
personProxy.name = '雷电'
