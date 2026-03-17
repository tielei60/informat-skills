# Informat Skills

面向织信 / Informat 低代码平台的技能仓库，当前提供两个可安装 skill：

- `informat-script`
  用于根据业务需求生成 Informat 平台脚本代码，并支持按统一规则保存到本地文件
- `informat-expression`
  用于生成合法的 Informat UEL 表达式、审批条件、流转条件和公式

## 适用范围

这个仓库适合以下场景：

- 生成织信 / Informat 平台脚本
- 生成 UEL 表达式
- 在已知 SDK 约束下输出更保守、更不容易误导的代码
- 在生成脚本后按统一规范保存到本地目录

不适合：

- 杜撰未出现在资料中的平台 API
- 把 JavaScript 语法误写到表达式里
- 在来源冲突未澄清时强行给出看似确定的结论

## 当前提供的 Skill

### `informat-script`

用途：

- 生成平台脚本
- 优先输出可运行或可直接改造的 JavaScript 代码
- 遇到 SDK 冲突时采用保守写法
- 默认处理“是否保存到本地文件”的交互

特点：

- 不杜撰 API
- 遇到来源冲突会提示
- 相似 API 会按语义选择命名空间
- 保存到本地时使用统一目录与命名规范

### `informat-expression`

用途：

- 生成合法的 Informat 表达式
- 适配审批条件、流转条件、实例名称、字段公式等场景

特点：

- 强制使用 `String.concat(...)`
- 强制使用 `Array.of(...)`
- 拒绝把 `map/filter/reduce`、箭头函数等 JS 写法塞进表达式
- 对日期函数的 0 基月份和星期取值做出约束

## 仓库结构

```text
skills/
  informat-script/
    SKILL.md
    references/
      script-sdk.md
      script-safety.md
      script-output-management.md
      script-file-header.md
      script-types.md
      script-examples.md
  informat-expression/
    SKILL.md
    references/
      expression-rules.md
      expression-boundaries.md
      expression-sdk.md
      expression-examples.md
sources/
  informat.script.md
  informat.expression.md
  informat.d.ts
  informat.client.d.ts
evals/
  evals.json
examples/
  generated_scripts/
    user/2026-03/update_user_role.js
    company/2026-03/add_company_member.js
    transaction/2026-03/update_user_role_with_transaction.js
    other/2026-03/generate_runtime_helper.js
```

## 安装

远程安装：

```bash
npx skills add tielei60/informat-skills
```

查看远程仓库中的可用 skill：

```bash
npx --yes skills add tielei60/informat-skills --list
```

本地验证：

```bash
npx --yes skills add ./informat-skills --list
```

## 设计原则

- 脚本与表达式分开建模，避免语法和规则互相污染
- 优先直接产出结果，而不是冗长讲解
- 限制模型只能使用文档中明确存在的 Informat SDK
- 正确性优先于“看起来完整”，来源冲突时采取保守写法
- 不能实现时必须明确说明原因，禁止杜撰 API
- 脚本输出默认带本地保存询问，并按统一目录规范管理文件
- 保存到本地时优先生成可维护的文件头注释

## 本地保存规则

`informat-script` 在生成脚本后，默认会处理“是否保存到本地文件”的交互。

规则如下：

- 如果用户已经表达了保存意图，就直接保存
- 如果用户没有明确表达保存意图，则先询问：
  - `是否需要我按本地目录规范保存到本地文件？`
- 用户不一定必须说“保存”，只要表达出确认落盘的意思即可视为同意

### 目录规范

默认根目录：

```text
generated_scripts/
```

一级目录按业务域归类：

- `account`
- `app`
- `company`
- `dept`
- `user`
- `storage`
- `survey`
- `transaction`
- `other`

二级目录按月份归类：

```text
YYYY-MM
```

示例：

```text
generated_scripts/user/2026-03/update_user_role.js
generated_scripts/company/2026-03/add_company_member.js
generated_scripts/transaction/2026-03/update_user_role_with_transaction.js
generated_scripts/other/2026-03/generate_runtime_helper.js
```

### 文件命名规范

- 使用小写字母、数字、下划线
- 使用 `snake_case`
- 推荐格式：
  - `动作_对象.js`
  - `动作_对象_限定词.js`

示例：

- `update_user_role.js`
- `add_company_member.js`
- `query_users_by_dept.js`

### 兜底目录

如果脚本无法稳定归类到已有业务域，统一放到：

```text
generated_scripts/other/YYYY-MM/
```

适用情况：

- 横跨多个业务域
- 只有抽象工具语义，没有单一主领域
- 需求信息不足，无法稳定判断主归类

使用 `other` 时，保存完成后应明确说明归类原因。

### 文件头模板

保存为本地文件时，默认推荐在文件顶部增加简短注释：

```js
/**
 * 脚本名称：update_user_role
 * 归类目录：user
 * 生成时间：2026-03-17
 * 用途：更新应用成员角色
 * 需替换项：user_id, role_key_list
 */
```

如果用户明确要求“纯代码无注释”，则不添加文件头。

## 安全与防错约束

仓库当前重点防的是这几类错误：

- 相似 API 混用，例如 `informat.system.addCompanyMember(...)` 与 `informat.company.addCompanyMember(...)`
- 来源对同一 API 返回值或签名描述不一致，例如 `updateUserRole(...)`
- 把 JS 写法误用到表达式里
- 忽略表达式日期函数的特殊取值
- 用户未指定字段、模块、角色时直接编造标识符

处理原则：

- 先确认 API 是否存在
- 来源冲突时不依赖冲突部分
- 写操作优先用“执行后再查询”验证，不猜返回值
- 不能确认时明确说不能确认

## 来源资料

仓库根目录下的 `sources/` 保留原始资料，用作事实来源：

- 脚本 SDK 文档
- 表达式 SDK 文档
- 服务端类型定义
- 客户端类型定义

各 skill 的 `references/` 是对高频规则和高风险场景的提炼；遇到边缘能力时，应回到 `sources/` 查证。

## 示例资产

仓库额外提供了按本地保存规范组织的示例文件，位于：

```text
examples/generated_scripts/
```

当前包含：

- `examples/generated_scripts/user/2026-03/update_user_role.js`
- `examples/generated_scripts/company/2026-03/add_company_member.js`
- `examples/generated_scripts/transaction/2026-03/update_user_role_with_transaction.js`
- `examples/generated_scripts/other/2026-03/generate_runtime_helper.js`

这些示例的作用是：

- 展示标准目录结构
- 展示 `snake_case` 文件命名
- 展示文件头模板的实际样式
- 展示 `other` 兜底目录的真实落法

为了对应表达式这类输出，仓库也提供了实验性的表达式样例资产：

```text
examples/generated_expressions/
```

当前包含：

- `examples/generated_expressions/2026-03/string_concat_example.txt`
- `examples/generated_expressions/2026-03/date_month_zero_base.txt`
- `examples/generated_expressions/2026-03/array_of_user_role.txt`
- `examples/generated_expressions/2026-03/js_style_error.txt`

这些表达式样本演示：

- 合法字符串拼接：`String.concat(...)`
- 0 基月份判断：`Date.datePart(..., 'month') == 0`
- 数组包装场景：`Array.of(...)` 搭配 `User.usersWithRole(...)`
- 拒绝 JS 风格 map/filter 或数组字面量的处理
- 如何把“正确写法”和“错误写法”都沉淀成可复用教学资产

## 评估覆盖

当前 `evals/evals.json` 已覆盖以下风险场景：

- 基础脚本生成
- 基础表达式生成
- 字符串拼接规则
- 相似 API 选型
- 返回值冲突
- 未知 API 拒绝编造
- 表达式 JS 越界
- 日期月份 0 基规则
- 事务签名歧义
- 默认保存询问
- 已表达保存意图时直接落盘
- “确认后放到本地”这类隐含保存意图识别
- 无法稳定归类时放入 `other` 兜底目录
- 本地保存规范对应的真实样例文件
- 表达式示例资产对 String.concat、0 基月份、数组包装和 JS 越界的覆盖

## 验证方式

本仓库发布前后采用以下方式验证：

- `npx --yes skills add ./informat-skills --list`
- `npx --yes skills add tielei60/informat-skills --list`
- `jq . evals/evals.json`

如果这些命令通过，说明：

- skill 仓库结构有效
- 远程仓库可被 `skills` CLI 识别
- 评估用例 JSON 合法
