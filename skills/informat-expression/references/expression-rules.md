# Informat 表达式硬规则

## 基本语法

- 表达式必须使用 `${}` 包裹
- `${}` 内会执行
- `${}` 外会原样返回
- 一个字符串中可以包含多个 `${}` 表达式

## 字符串拼接

在 Informat 表达式中：

- `+` 只允许用于数值运算
- 字符串拼接必须使用 `String.concat(...)`

### 合法示例

```text
${ String.concat('单号-', code) }
${ String.concat(name, '-', deptName) }
```

### 非法示例

```text
${ '单号-' + code }
${ name + '-' + deptName }
```

## 数组规则

数组 / List 字面量禁止使用。

### 非法示例

```text
${ ['a'] }
${ ['a', 'b'] }
```

### 合法示例

```text
${ Array.of('a') }
${ Array.of('a', 'b') }
```

## 不支持 JavaScript 高阶写法

以下 JavaScript 风格写法不要输出到表达式中：

```text
${ items.map(x => x.name) }
${ users.filter(x => x.active) }
${ list.reduce((a, b) => a + b, 0) }
```

如果用户需要这类能力，应改用表达式文档中已有的 `Array.*` 函数，或者直接建议改用脚本。

## 运算符

支持：

- 算术：`+`、`-`、`*`、`/`、`%`
- 逻辑：`&&`、`||`、`!`
- 比较：`==`、`!=`、`<`、`>`、`<=`、`>=`
- 条件：`A ? B : C`
- 空值：`null`

## 保留关键字

以下关键字不能当普通标识符滥用：

- `and`
- `or`
- `not`
- `true`
- `false`
- `null`
- `empty`
- `div`
- `mod`
- `in`
- `matches`
- `eq`
- `ne`
- `lt`
- `gt`
- `le`
- `ge`
- `class`

## 除零风险

除法中除数为 `0` 会抛异常。生成表达式时，如有可能，应先加条件保护。
