// 基础类型练习
// 1. 基本类型声明
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];

// 2. 枚举类型
enum Color {
    Red,
    Green,
    Blue
}
let myColor: Color = Color.Green;

// 3. 类型断言
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;

console.log("基础类型练习：");
console.log("布尔值:", isDone);
console.log("数字:", decimal);
console.log("字符串:", color);
console.log("数组:", list);
console.log("元组:", tuple);
console.log("枚举:", myColor);
console.log("类型断言:", strLength); 