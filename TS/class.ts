import { add } from './module'

class people {
  public name: string
  constructor(name: string) {
    this.name = name
  }
  public sayHello(): string {
    return `hello, ${this.name}`
  }
}
let p = new people('zhangsan')
console.log(p.sayHello())

// 类继承
class people2 extends people {
  constructor(name: string) {
    super(name)
  }
  public sayHello(): string {
    return `hello, ${this.name} !`
  }
}
let p2 = new people2('lisi')
console.log(p2.sayHello())

new add('a', 's')
