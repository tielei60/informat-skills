# Informat 常用类型摘要

本文件只总结高频实体。精确字段请回查 `../../sources/informat.client.d.ts` 与 `../../sources/informat.d.ts`。

## Company

常见字段：

- `id`
- `name`
- `dbIndex`
- `avatar`
- `favicon`
- `version`
- `createAccountId`
- `createTime`
- `updateTime`

## Account

常见字段：

- `id`
- `name`
- `avatar`
- `userName`
- `mobileNo`
- `email`
- `isValid`
- `oid`
- `companyId`
- `createTime`
- `updateTime`

## User

应用成员高频字段：

- `id`
- `name`
- `avatar`
- `roleList`
- `leaderList`

如果用户要求更多扩展信息，优先使用 `getUserInfo()`，并提醒字段需以现场定义为准。

## AutomaticParams

适合在客户端或自动化上下文中引用的字段：

- `appId`
- `automaticId`
- `args`
- `withoutTimeoutLoading`
- `sourceId`

## 处理类型不确定性

当需求里出现以下情况时，不要臆测：

- 模块字段名
- 自定义角色 key
- 自定义部门结构字段
- 自定义返回对象结构

正确做法：

- 用占位字段名
- 在代码后补一句“请替换为实际字段/角色/模块标识符”
