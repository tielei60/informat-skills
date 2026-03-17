---
name: informat-expression
description: 用于在织信 / Informat 低代码平台中编写合法的 UEL 表达式。只要用户提到表达式、审批条件、流转条件、实例名称、自动完成条件、字段公式、表单计算、仪表盘公式或类似“请给我一个 ${...} 规则”，就应该使用这个 skill。目标是直接生成合法表达式，严格遵守 String.concat 与 Array.of 等 DSL 规则，禁止把 JavaScript 语法误写进表达式。
---

# Informat Expression

用于把自然语言规则转换成 Informat 平台可执行的 UEL 表达式。

## 先读什么

先读这些精简资料：

- `references/expression-rules.md`
- `references/expression-boundaries.md`
- `references/expression-sdk.md`
- `references/expression-examples.md`

如果需要查更完整的函数或边缘规则，再继续查：

- `../../sources/informat.expression.md`

## 适用场景

优先用于这些请求：

- 审批条件
- 流转条件
- 实例名称表达式
- 自动完成条件
- 字段公式
- 表单、仪表盘、API 返回值中的表达式

如果用户需要的是脚本代码、自动化 JavaScript、平台脚本逻辑，改用 `informat-script`。

## 工作方式

1. 先判断目标是否适合用表达式完成。
2. 适合时，直接输出合法表达式。
3. 不适合时，明确说明限制，并建议改用脚本实现。
4. 除非用户明确要求解释，否则不要先写教程。

## 强约束

- 表达式必须使用 `${}` 包裹。
- `${}` 外的内容是普通字符串，不会被执行。
- 不要把 JavaScript 数组字面量写进表达式。
- 不要使用 `+` 做字符串拼接。
- 只能使用来源资料里已知的表达式对象和函数。
- 除法要考虑除数为 0 会抛异常。
- 保留关键字不能误用为普通标识符。
- 不能把 JavaScript 的箭头函数、数组高阶方法、对象字面量推导等写法塞进表达式。

## 两条硬规则

### 1. 字符串拼接

错误：

```text
${ 'A' + 'B' }
${ name + '-' + code }
```

正确：

```text
${ String.concat('A', 'B') }
${ String.concat(name, '-', code) }
```

### 2. 数组构造

错误：

```text
${ ['a', 'b'] }
${ Array.first(User.usersWithRole(['researcher'])) }
```

正确：

```text
${ Array.of('a', 'b') }
${ Array.first(User.usersWithRole(Array.of('researcher'))) }
```

## 输出格式

默认按这个顺序输出：

1. 最终表达式
2. 若有必要，补一句适用说明
3. 若无法实现，单独列出原因

如果用户要求多个候选表达式，就给多个合法版本，并说明差异。

## 什么时候不要继续硬写表达式

遇到下面这些情况，优先停止并说明边界，再建议改用脚本：

- 需要循环、复杂迭代、箭头函数、`map/filter/reduce`
- 需要调用来源资料中不存在的函数
- 需要数组字面量或对象字面量来完成核心逻辑
- 需要复杂副作用，而不仅是求值
- 无法确认某个对象或函数是否真实存在

## 自检清单

输出前检查：

- 是否完整使用了 `${}`
- 是否误用了 JavaScript 语法
- 是否把字符串拼接写成了 `+`
- 是否把数组写成了字面量
- 是否误用了 JS 高阶函数或箭头函数
- 是否存在除数为 0 的风险
- 是否在不能实现时明确说明了限制
