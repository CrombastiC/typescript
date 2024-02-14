//主类型
interface A {
  name: string
  age: number
}
//子类型
interface B {
  name: string
  age: number
  sex: string
}
let a: A = {
  name: '刘康',
  age: 999,
}
let b: B = {
  name: '雷电',
  age: 19,
  sex: '男',
}

//协变
//若子类型可以完全覆盖主类型，则子类型可以赋值给主类型
a = b

//逆变
//常见于函数
let fna = (params: A) => {}
let fnb = (params: B) => {}
//一定是安全的
fnb = fna //调用的还是a

//双向协变
fna = fnb //调用的是b
fnb = fna //调用的还是a
//可以同时使用，需要配置文件设置strictFunctionTypes为false
