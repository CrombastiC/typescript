//模块
//暴露一个类
export class add {
  title: string
  content: string

  constructor(title: string, content: string) {
    this.title = title
    this.content = content
  }
}

//迭代器
let Array = [1, 2, 3, 4, 5]
// for of是遍历元素
// for (let key in Array) {
//   console.log(key)
// }
//for in 遍历下标
for (const key in Array) {
  console.log(key)
}
