# Informat 表达式对象速查

根据来源文档，表达式环境提供多组对象，例如：

- `Math`
- `Array`
- `Date`
- `Misc`
- `String`
- `User`
- `Encode`
- `Record`
- `Context`

如果具体方法名未在精简资料中列出，继续查 `../../sources/informat.expression.md`。

## `Array`

高频规则与方法：

- 以下方法是表达式 DSL 函数，不是 JavaScript 数组实例方法

- `Array.of(...item)`
- `Array.join(array, separator)`
- `Array.length(list)`
- `Array.get(list, key)`
- `Array.set(list, key, value)`
- `Array.add(list, item)`
- `Array.remove(list, item)`
- `Array.removeAll(list, item)`
- `Array.isEmpty(list)`
- `Array.isNotEmpty(list)`
- `Array.contains(list, item)`
- `Array.containsAny(list1, list2)`
- `Array.containsAll(list1, list2)`
- `Array.map(list, key)`
- `Array.props(list, props)`
- `Array.transform(list, mapping)`
- `Array.concat(list1, list2)`
- `Array.sort(list, key)`
- `Array.distinct(list)`
- `Array.reverse(list)`
- `Array.repeat(...)`
- `Array.sublist(...)`
- `Array.filter(list, key, value)`
- `Array.shift(list)`
- `Array.pop(list)`
- `Array.sum(list)`
- `Array.avg(list)`
- `Array.max(list)`
- `Array.min(list)`
- `Array.first(list)`
- `Array.last(list)`

## `Context`

高频上下文函数：

- `Context.userId()`
- `Context.appId()`
- `Context.appEnvProp(propKey)`
- `Context.httpHeaders()`
- `Context.clipboardData()`
- `Context.requestIp()`
- `Context.hasAppPerm(permKey)`
- `Context.hasModulePerm(moduleKey, permKey)`
- `Context.weworkAccessToken()`
- `Context.dingtalkAccessToken()`
- `Context.feishuAccessToken()`
- `Context.feishuTenantAccessToken()`

## `Date`

文档明确指出存在日期相关函数，例如：

- `Date.sysdate`
- `Date.now`
- `Date.dateSet`

同时要注意：

- `month` 从 `0` 到 `11`
- `day_of_week` 从 `0` 到 `6`

如果用户要求复杂日期处理，先回查原始文档再输出。
