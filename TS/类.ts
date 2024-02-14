// //1.class的基本用法 继承和类型约束 implements
// //2.类的修饰符 public private protected readonly
// //3.super 原理
// //4.静态方法
// //5.get set
// //private只能在内部使用
// //protected只能在内部和子类中使用
// //public任何地方都能使用
// //static 只能调同为静态的方法
// interface Options {
//   el: string | HTMLElement
// }

// interface VueCls {
//   options: Options
//   init(): void
// }
// interface Vnode {
//   tag: string
//   text?: string
//   children?: Vnode[]
// }
// //虚拟dom 简单版
// class Dom {
//   //创建节点的方法
//   createElement(el: string) {
//     return document.createElement(el)
//   }
//   //填充文本的方法
//   setText(el: HTMLElement, text: string | null) {
//     el.textContent = text
//   }
//   //渲染函数
// 渲染函数，根据虚拟DOM数据生成真实DOM树
// render(data: Vnode) {
//   let root = this.createElement(data.tag) // 创建根节点

//   if (data.children && Array.isArray(data.children)) {
//     // 如果存在子节点且子节点是数组
//     data.children.forEach((item) => {
//       let child = this.render(item) // 递归渲染子节点
//       root.appendChild(child) // 将子节点添加到根节点
//     })
//   } else {
//     this.setText(root, data.text) // 填充文本内容到根节点
//   }

//   return root // 返回生成的真实DOM树
// }
// //implements 约束类的结构
// class Vue extends Dom implements VueCls {
//   options: Options

//   constructor(options: Options) {
//     super() //父类的prototype.constructor.call
//     this.options = options
//     this.init()
//   }
//   static version() {
//     return '1.0.0'
//   }
//   init(): void {
//     //虚拟dom就是通js去渲染真实dom
//     let data: Vnode = {
//       tag: 'div',
//       children: [
//         {
//           tag: 'section',
//           text: '我是子节点1',
//         },
//         {
//           tag: 'section',
//           text: '我是子节点2',
//         },
//         {
//           tag: 'section',
//           text: '我是子节点3',
//         },
//       ],
//     }
//     let app =
//       typeof this.options.el == 'string'
//         ? document.querySelector(this.options.el)
//         : this.options.el
//     app.appendChild(this.render(data))
//   }
// }

// new Vue({
//   el: '#app',
// })

// Vue.version()

// //ref例子
// // class Ref {
// //   _value: any
// //   constructor(value: any) {
// //     this._value = value
// //   }
// //   get value() {
// //     return this._value + 'haha'
// //   }
// //   set value(val) {
// //     this._value = val + 'hehe'
// //   }
// // }

// // const ref = new Ref('哈哈哈')
// // ref.value = '呵呵呵'
// // console.log(ref.value)
