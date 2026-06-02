# Informat 常用类型摘要

本文件只总结高频实体。精确字段请回查 `../../sources/informat.client.d.ts` 与 `../../sources/informat.d.ts`。

## Company

常见字段：

- `id`
- `name`
- `isValid`
- `memberNum`
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
- `lastLoginTime`

## User

应用成员高频字段：

- `id`
- `name`
- `avatar`
- `roleList`
- `leaderList`

如果用户要求更多扩展信息，优先使用 `getUserInfo()`，并提醒字段需以现场定义为准。

## UserSimple

用户简要信息，高频字段：

- `id`
- `name`
- `avatar`
- `hint`

可由 `getUserSimpleList(idList)` 返回，适合只需要展示简要用户信息的场景。

## UserRole

新增/高频字段：

- `id`
- `name`
- `isAdmin`
- `permissionList`
- `remark`

## AutomaticParams

适合在客户端或自动化上下文中引用的字段：

- `appId`
- `automaticId`
- `args`
- `withoutTimeoutLoading`
- `sourceId`

## AiAgentContent

AI Agent 内容项：

- `type`
- `text`
- `imageUrl`

当前 `aiagent.completions(moduleKey, content)` 使用 `Array<AiAgentContent>`。

## ValidateFormSetting

表单校验配置：

- `nullable`
- `optionValue`
- `range`
- `validateRule`

用于 `validateFormBySetting(tableKey, rowData, setting)`。

## TableField 与 TableInfo

新增/高频字段：

- `TableField.group`
- `TableInfo.tableFieldGroupList`

涉及字段分组、分步骤表单或标签页展示时，回查 `TableFieldGroup`。

## TableRecordQuery

新增/高频字段：

- `excludeFields`

需要排除字段返回时可用，但具体查询结构仍以原始类型定义为准。

## Bpmn 查询与定义对象

新增/高频字段：

- `BpmnInstanceQuery.businessKey`
- `BpmnInstanceQuery.businessKeyList`
- `BpmnInstanceQuery.idList`
- `BpmnInstanceQuery.startUserIdInList`
- `BpmnTaskQuery.businessKey`
- `BpmnTaskQuery.businessKeyList`
- `BpmnTaskQuery.dueDateStart`
- `BpmnTaskQuery.dueDateEnd`
- `BpmnTaskQuery.taskDefKey`
- `BpmnProcess.defineId`
- `BpmnProcessXml.flowList`
- `BpmnProcessXml.nodeList`
- `BpmnProcessXml.startSetting`

涉及流程定义结构、节点、流转线或版本时，回查 `BpmnProcessXml`、`BpmnNode`、`BpmnFlow`、`BpmnProcessVersion`。

## CompanySecurityApply

严格授权申请记录摘要：

- `id`
- `companyId`
- `title`
- `status`
- `applyAccountId`
- `approveAccountId`
- `applyTime`
- `approveTime`

查询严格授权记录时使用，字段细节以原始类型定义为准。

## RefEntity

引用关系摘要：

- `id`
- `key`
- `name`
- `type`
- `scope`
- `relations`
- `children`

用于设计器引用关系查询；不要臆测 `relations` 的含义，复杂依赖分析要回查原始类型定义。

## 处理类型不确定性

当需求里出现以下情况时，不要臆测：

- 模块字段名
- 自定义角色 key
- 自定义部门结构字段
- 自定义返回对象结构

正确做法：

- 用占位字段名
- 在代码后补一句“请替换为实际字段/角色/模块标识符”
