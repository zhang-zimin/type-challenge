 // 高级类型练习

// 1. 交叉类型（Intersection Types）
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type AdminEmployee = Admin & Employee;

const employee: AdminEmployee = {
    name: "张三",
    privileges: ["create-server"],
    startDate: new Date()
};

// 2. 联合类型（Union Types）
type StringOrNumber = string | number;
function printId(id: StringOrNumber) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

// 3. 类型守卫（Type Guards）
interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

// 4. 可为空类型（Nullable Types）
type Optional<T> = T | null | undefined;
let nullableStr: Optional<string> = "Hello";
nullableStr = null;
nullableStr = undefined;

// 5. 字面量类型（Literal Types）
type Direction = "North" | "South" | "East" | "West";
let direction: Direction = "North";

console.log("高级类型练习：");
console.log("交叉类型:", employee);
printId("A123");
printId(123);
console.log("字面量类型:", direction);