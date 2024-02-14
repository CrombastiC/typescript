// interface Name {
//   name: string
// }
// interface Age {
//   age: number
// }
// interface Sex {
//   sex: number
// }
// let a: Name = {
//   name: '小李',
// }
// let b: Age = {
//   age: 18,
// }
// let c: Sex = {
//   sex: 1,
// }
// let obj = Object.assign(a, b, c)
class A {
    changeType() {
        this.type = !this.type;
    }
}
class B {
    getName() {
        return this.name;
    }
}
class C {
    constructor() {
        this.type = false;
        this.name = '下拉';
    }
}
mixins(C, [A, B]);
function mixins(curClas, itemCls) {
    itemCls.forEach((item) => {
        Object.getOwnPropertyNames(item.prototype).forEach((name) => {
            console.log(name);
            curClas.prototype[name] = item.prototype[name];
        });
    });
}
let ccc = new C();
console.log(ccc.type);
ccc.changeType();
console.log(ccc.type);
