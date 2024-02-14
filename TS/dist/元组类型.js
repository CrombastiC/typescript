// // 元组类型
// // 元组类型是一种特殊的数组，它限定了数组元素的类型和个数
// let arr: readonly [x: number, y: boolean] = [1, false]
// //可以使用typeof获取元组中的第一个元素的类型
// type first = (typeof arr)['length']
