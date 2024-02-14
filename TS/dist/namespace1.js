// import { b } from './namespace2'
// //嵌套命名空间
// namespace A {
//   export namespace C {
//     export const D = 5
//   }
// }
// import xxx = A.C.D
// console.log(xxx, b)
var A;
(function (A) {
    A.b = 2;
})(A || (A = {}));
(function (A) {
    A.d = 3;
})(A || (A = {}));
// namespace A {
//   export const b = 2
//   export const d = 3
// }
A.b;
A.d;
