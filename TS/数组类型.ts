// //数组类型
// // number[]
// // Array<number>
// //数组普通类型
// let arr: number[] = [1, 2, 3, 4, 5]
// let arr2: boolean[] = [true, false]
// let arr3: Array<boolean> = [true, false]

// // interface X {
// //   name: string
// //   age?: number
// // }
// //定义对象数组使用interface
// //number[][]
// // Array<Array<number>>
// //二维数组
// let arr4: Array<Array<number>> = [[], [], []]

// //大杂烩数组
// let arr5: any[] = [1, '2', true, {}, [], function () {}]

// function an(...args: number[]) {
//   let an: IArguments = arguments
// }
// an(1, 2, 3)
// //原理
// interface sa {
//   calllee: Function
//   length: number
//   [index: number]: any
// }
