# TypeScript 练习项目

这是一个用于学习和练习 TypeScript 的项目，包含了多个示例和练习。

## 项目结构

```
src/
  ├── exercises/
  │   ├── basic-types/     # 基础类型练习
  │   ├── interfaces/      # 接口练习
  │   └── generics/        # 泛型练习
  └── index.ts             # 主入口文件
```

## 练习内容

### 1. 基础类型 (Basic Types)
- 基本类型声明
- 数组和元组
- 枚举类型
- 类型断言

### 2. 接口 (Interfaces)
- 基本接口定义
- 可选属性
- 只读属性
- 函数类型接口

### 3. 泛型 (Generics)
- 泛型函数
- 泛型接口
- 泛型类

## 如何使用

1. 克隆项目
```bash
git clone https://github.com/zhang-zimin/type-challenge.git
cd type-challenge
```

2. 安装依赖
```bash
npm install
```

3. 运行练习
```bash
# 运行基础类型练习
npm run exercise:basic

# 运行接口练习
npm run exercise:interface

# 运行泛型练习
npm run exercise:generic
```

## 开发模式

项目支持以下开发命令：
- `npm run dev` - 启动 TypeScript 编译器的监视模式
- `npm run build` - 编译 TypeScript 代码
- `npm start` - 运行编译后的代码
- `npm run dev:ts` - 使用 ts-node 直接运行 TypeScript 代码

## 技术栈

- TypeScript 5.3.3
- ts-node 10.9.2
- Node.js

## 许可证

ISC