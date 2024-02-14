// //定义一个类型 如果是数组类型 就返回 数组元素的类型 否则就传入什么类型返回什么类型
// type TYPE<T> = T extends Array<any> ? T[number] : T

// // type a = TYPE<number | string[]>
// // type b = TYPE<boolean>

// //infer 推断
// // type TYPE2<T> = T extends Array<infer U> ? U : T
// //只能传元组
// type TYPE2<T extends any[]> = T extends Array<infer U> ? U : never
// type T = [string, number]

// type uni = TYPE<T>
// // type uni2=TYPE2<boolean>// never
