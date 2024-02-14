// //基类 抽象类
// //abstract所定义的为抽象类
// //abstract所定义的方法 都只能描述不能进行一个实现
// //抽象类不能被实例化
// abstract class Vue {
//   name: string
//   constructor(name?: string) {
//     this.init(name)
//   }
//   getName(): string {
//     return this.name
//   }
//   abstract init(name: string): void
// }
// //派生类继承抽象类需要实现抽象类中的抽象方法
// class React extends Vue {
//   constructor() {
//     super()
//   }
//   init(name: string) {}
//   setname(name: string): void {
//     this.name = name
//   }
// }
// const react = new React()
// react.setname('react')
// console.log(react.getName())
