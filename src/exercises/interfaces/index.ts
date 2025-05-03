// 接口练习
interface User {
    name: string;
    age: number;
    email?: string;  // 可选属性
    readonly id: number;  // 只读属性
}

// 实现接口
const user: User = {
    name: "张三",
    age: 25,
    id: 1
};

// 函数类型接口
interface SearchFunc {
    (source: string, subString: string): boolean;
}

const mySearch: SearchFunc = function(source: string, subString: string) {
    return source.includes(subString);
};

console.log("接口练习：");
console.log("用户信息:", user);
console.log("搜索函数:", mySearch("Hello World", "World")); 