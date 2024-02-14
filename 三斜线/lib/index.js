"use strict";
var A;
(function (A) {
    A.a = 1;
})(A || (A = {}));
var A;
(function (A) {
    A.b = 2;
})(A || (A = {}));
var A;
(function (A) {
    A.c = 3;
})(A || (A = {}));
console.log(A.a);
console.log(A.b);
console.log(A.c);
