---
name: informat-expression
description: 当用户要求编写织信 / Informat UEL 表达式时使用，适用于审批条件、流转条件、实例名称、自动完成规则、表单公式、仪表盘公式、API 返回模板或 `${...}` 片段，尤其适用于提到 `String.concat`、`Array.of`、`Date.datePart`、`User.usersWithRole`，或无法判断该用表达式还是脚本的场景。
---

# Informat Expression

用于把自然语言规则转换成 Informat / 织信平台可执行的 UEL 表达式。

## 先读顺序

按这个顺序读取：

1. `references/expression-rules.md`
2. `references/expression-boundaries.md`
3. `references/expression-sdk.md`
4. `references/expression-examples.md`

如果需要完整函数定义、`User.*`/`Date.*` 边缘能力或 DSL 细节，再查：

- `../../sources/informat.expression.md`

## 适用场景

优先用于这些请求：

- 审批条件
- 流转条件
- 实例名称表达式
- 自动完成条件
- 字段公式
- 表单、仪表盘、API 返回值中的表达式
- 类似“请给我一个 `${...}` 规则”的请求
- 需要判断“这件事该用表达式还是脚本”

如果用户需要的是脚本代码、自动化 JavaScript、平台脚本逻辑，改用 `informat-script`。

## 强约束

- 表达式必须使用 `${}` 包裹。
- `${}` 外的内容是普通字符串，不会被执行。
- 字符串拼接不要使用 `+`，只能使用 `String.concat(...)`。
- 数组字面量禁止使用，改用 `Array.of(...)`。
- 禁止输出 JavaScript 风格的 `.map(...)`、`.filter(...)`、`.reduce(...)`、箭头函数和对象字面量推导。
- 可以使用来源文档明确存在的 DSL 函数，例如 `Array.map(list, key)`、`Array.filter(list, key, value)`、`Array.join(...)`。
- 只能使用来源资料里已知的表达式对象和函数。
- 除法要考虑除数为 `0` 会抛异常。
- 保留关键字不能误用为普通标识符。
- `Date.datePart(..., 'month')` 中 1 月对应 `0`，`day_of_week` 中星期日对应 `0`。

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

## 输出方式

默认按这个顺序输出：

1. 最终表达式
2. 必要时补一句适用说明或 DSL 替代写法
3. 若无法实现，单独列出原因，并建议改用脚本

如果用户要求多个候选表达式，就给多个合法版本，并说明差异。

## 什么时候不要继续硬写表达式

遇到下面这些情况，优先停止并说明边界，再建议改用脚本：

- 需要复杂流程控制、复杂副作用或多步编排
- 需要 JavaScript 风格的循环、箭头函数、`.map/.filter/.reduce`
- 需要调用来源资料中不存在的函数
- 需要数组字面量或对象字面量来完成核心逻辑
- 无法确认某个对象或函数是否真实存在

## 自检清单

输出前检查：

- 是否完整使用了 `${}`
- 是否误用了 JavaScript 语法
- 是否把字符串拼接写成了 `+`
- 是否把数组写成了字面量
- 是否把 JS `.map/.filter` 错当成了表达式 DSL
- 是否误用了 JS 高阶函数或箭头函数
- 是否存在除数为 0 的风险
- 是否正确处理了月份与星期的 0 基取值
- 是否在不能实现时明确说明了限制
