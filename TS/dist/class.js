"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("./module");
class people {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        return `hello, ${this.name}`;
    }
}
let p = new people('zhangsan');
console.log(p.sayHello());
// 类继承
class people2 extends people {
    constructor(name) {
        super(name);
    }
    sayHello() {
        return `hello, ${this.name} !`;
    }
}
let p2 = new people2('lisi');
console.log(p2.sayHello());
new module_1.add('a', 's');
