// type Arr = ['a', 'b', 'c']
// //一个infer表示取一个 两个infer表示取两个 以此类推
// type First<T extends any[]> = T extends [infer U, ...any[]] ? U : [] //取第一个
// type Middle<T extends any[]> = T extends [any, ...infer U, any] ? U : [] //取中间，也可以获取多个返回定义中间变量
// type Last<T extends any[]> = T extends [...any[], infer U] ? U : [] //取最后一个
// type Pop<T extends any[]> = T extends [...infer U, any] ? U : [] //去掉最后一个 等同于取前两个
// type Shift<T extends any[]> = T extends [any, ...infer U] ? U : [] //去掉第一个 等同于取后两个
// type get = Middle<Arr>
