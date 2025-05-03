// 泛型练习
// 1. 泛型函数
function identity<T>(arg: T): T {
    return arg;
}

// 2. 泛型接口
interface GenericIdentityFn<T> {
    (arg: T): T;
}

// 3. 泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;

    constructor(zeroValue: T, add: (x: T, y: T) => T) {
        this.zeroValue = zeroValue;
        this.add = add;
    }
}

// 使用示例
const myIdentity: GenericIdentityFn<number> = identity;
const numberIdentity = new GenericNumber<number>(0, (x, y) => x + y);

console.log("泛型练习：");
console.log("泛型函数:", identity("Hello"));
console.log("泛型接口:", myIdentity(42));
console.log("泛型类:", numberIdentity.add(5, 10)); 