// 实用工具类型练习

// 1. Partial<T>
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
}

const todo1: Todo = {
    title: "学习 TypeScript",
    description: "学习 TypeScript 的高级类型",
    completed: false
};

// 2. Readonly<T>
const readonlyTodo: Readonly<Todo> = {
    title: "Hello",
    description: "World",
    completed: false
};

// 3. Record<K,T>
type PageInfo = {
    title: string;
    url: string;
};

const pages: Record<string, PageInfo> = {
    home: { title: "首页", url: "/" },
    about: { title: "关于", url: "/about" }
};

// 4. Pick<T,K>
type TodoPreview = Pick<Todo, "title" | "completed">;
const todoPreview: TodoPreview = {
    title: "买咖啡",
    completed: false
};

// 5. Omit<T,K>
type TodoWithoutDescription = Omit<Todo, "description">;
const todoWithoutDesc: TodoWithoutDescription = {
    title: "买咖啡",
    completed: false
};

// 6. ReturnType<T>
function createDate() {
    return new Date();
}
type CreateDateReturn = ReturnType<typeof createDate>;

console.log("实用工具类型练习：");
console.log("Partial:", updateTodo(todo1, { completed: true }));
console.log("Record:", pages);
console.log("Pick:", todoPreview);
console.log("Omit:", todoWithoutDesc); 