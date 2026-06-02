# Informat 平台脚本生命周期规则

本文件沉淀织信平台脚本的保存、编辑、执行与绑定规则。

## 一、写代码前先确认 SDK

涉及织信平台脚本时，先确认脚本 SDK 来源：

- 本仓库离线环境：先读 `../../sources/informat.script.md`
- 边缘能力和类型：再查 `../../sources/informat.d.ts` 与 `../../sources/informat.client.d.ts`

只能使用 JavaScript 原生能力和资料中明确存在的 `informat.*` SDK。

## 二、平台 API 命名空间

平台内置 API 统一通过全局命名空间 `informat` 调用。

合法：

```js
informat.table.query(query);
informat.user.updateUserRole(userId, roleList);
```

非法：

```js
$informat.table.query(query);
```

## 三、导出规范

如果函数会被自动化、API、控件、AI Agent、定时任务或执行工具调用，必须显式导出。

合法：

```js
export function getNewsList() {}
export function getNewsDetail(id) {}
```

非法：

```js
module.exports = {
  getNewsList,
  getNewsDetail
};
```

规则：

- 只允许 ES Module 导出平台可调用函数
- 禁止用 `module.exports` 或 CommonJS `exports`
- 未导出的函数只能作为脚本内部私有 helper
- 执行工具只能调用真实存在且已 `export` 的函数

## 四、保存与编辑平台脚本

保存平台脚本前：

1. 先确认脚本 SDK
2. 先查询已有脚本和目录
3. 如果要编辑已有脚本，先查询该脚本的完整内容

新增脚本：

- `id` 不传或为空
- `name` 必须以 `.js` 结尾，只使用英文，同目录不能重名

编辑脚本：

- `id` 必须传入
- `id` 只能来自脚本列表、脚本内容查询结果，或本次对话已获取的脚本 `id`
- 禁止自行捏造 `id`
- `content` 必须是修改后的完整文件内容，不是 diff 或片段
- 文件名应与原文件保持一致，除非用户明确要求改名

目录：

- 如果脚本放在目录下，必须传 `parentId`
- `parentId` 必须来自目录查询结果
- 创建目录后要再次查询脚本列表

拆分：

- 单个文件超过 300 行或 8000 字符时，必须拆成多个脚本文件
- 上下文过长报错时也应拆分为多个脚本文件

## 五、执行脚本

设计器调试：

- 目标脚本必须存在于设计器脚本列表
- 新建但未保存的脚本必须先保存再执行

已发布运行环境：

- 只能执行已随应用发布的脚本版本
- 不读取也不影响设计器中的未发布脚本

共同规则：

- 必须提供真实脚本文件 ID
- 必须提供真实且已 `export` 的函数名
- `functionParams` 按顺序传参，无参数用 `[]`
- 执行过程不会修改脚本内容，也不会创建临时脚本

## 六、绑定到 API、定时任务、按钮

当 API、定时任务、工具栏按钮等绑定脚本时：

- 脚本 ID 是脚本文件 ID，不是目录 ID、文件名或函数名
- 函数名使用平台对应的函数名字段
- 更新 API 定义时，脚本 ID 与函数名要成对更新，不能只改一个

如果无法确认真实脚本 ID 或导出函数名，先查询，不要猜。
