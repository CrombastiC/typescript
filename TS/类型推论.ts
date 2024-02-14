//定义别名
// type s = string | number
//type与interface的区别
//type可以定义基本类型别名，联合类型，元组等类型
//type无法继承，只能使用交叉类型&
//interface可以定义对象类型
//interface遇到同名会合并
// let str: s = '123'
//extends 这里表示包含
//左边的值会作为右边类型的子类型
//1.any unknown 顶级类型
//2.Object
//3.Number
//4.number  string
//5.never

// type num = 0 extends number ? 1 : 0//1
