//接口内容默认是必选的
interface User {
  address?: string
  name?: string
  age?: number
}
//Partial 原理
type CustomPartial<T> = {
  [P in keyof T]?: T[P]
}
//Partial 所有属性 可选的意思 接收一个泛型
// type PartialUser = Partial<User>
//Required 属性 必选的意思 接收一个泛型
// type RequiredUser = Required<User>
//Required 原理
type CustomRequired<T> = {
  [P in keyof T]-?: T[P]
}
//Pick 提取部分属性 接收两个泛型 第一个是对象 第二个是对象的属性
type test = Pick<User, 'name' | 'age'>
//Pick 原理
type CustomPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
//Exclude 排除某些属性 一般用在联合类型中
// type ExcludeUser = Exclude<keyof User, 'name' | 'age'>
//Exclude 原理
//由于never在联合类型中会被排除掉 所以可以用never来实现
type CustomExclude<T, K> = T extends K ? never : T
//Omit 排除某些属性 并且返回新的类型 一般用在interface中或者对象类型
type OmitUser = Omit<User, 'name' | 'age'>
//Omit 原理 用到了Exclude和Pick 融合
type CustomOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
