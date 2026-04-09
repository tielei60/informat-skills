# Informat 表达式示例

## 示例 1：条件分支

```text
${ amount > 10000 ? '高级审批' : '普通审批' }
```

## 示例 2：字符串拼接

```text
${ String.concat('采购单-', code) }
```

## 示例 3：空数组判断

```text
${ Array.isEmpty(approverList) ? '无人审批' : '已有审批人' }
```

## 示例 4：安全除法

```text
${ totalCount == 0 ? 0 : successCount / totalCount }
```

## 示例 5：角色数组必须用 `Array.of`

```text
${ Array.first(User.usersWithRole(Array.of('researcher'))) }
```

## 示例 6：提取姓名后按逗号拼接

```text
${ Array.join(Array.map(approverList, 'name'), ',') }
```

这里使用的是表达式 DSL 的 `Array.map(list, key)`，不是 JavaScript 的 `items.map(...)`。

## 示例 7：日期月份判断要注意 0 基

```text
${ Date.datePart(applyDate, 'month') == 0 ? '一月' : '非一月' }
```

这里的 `0` 表示 1 月。

## 非法示例提醒

下面这些不要输出：

```text
${ prefix + code }
${ ['a', 'b'] }
${ items.map(x => x.name) }
```

原因：

- 第一条错误使用 `+` 做字符串拼接
- 第二条错误使用数组字面量
- 第三条把 JavaScript 方法调用和箭头函数写进了表达式
