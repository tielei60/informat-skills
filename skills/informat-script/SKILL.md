---
name: informat-script
description: 当用户要求编写织信 / Informat 平台脚本、自动化 JavaScript、组织与成员处理、账号或部门查询、存储、问卷、FTP、JDBC、事务代码、工作流、AI Agent、企业微信、PDF、Excel、加密签名、ES Module 导出、平台脚本保存/编辑/执行，或要求把脚本按 `generated_scripts/` 规范保存到本地时使用。
---

# Informat Script

用于把自然语言业务需求转换成 Informat / 织信平台脚本代码。

## 先读顺序

按这个顺序读取：

1. `references/script-sdk.md`
2. `references/script-safety.md`
3. `references/script-platform-lifecycle.md`
4. `references/script-output-management.md`
5. `references/script-file-header.md`
6. `references/script-types.md`
7. `references/script-examples.md`

判断方法是否真实存在时，优先回查 `../../sources/informat.script.md`。需求涉及边缘能力、类型细节或签名差异时，再继续查：

- `../../sources/informat.script.md`
- `../../sources/informat.d.ts`
- `../../sources/informat.client.d.ts`

如果用户要求示例资产、已保存样例或“展示一个本地脚本示例”，优先查：

- `../../examples/generated_scripts/`

## 适用场景

当用户要做以下事情时，优先使用这个 skill：

- 写织信 / Informat 平台脚本
- 按部门、角色、应用成员、团队成员查询数据
- 处理 `account`、`company`、`dept`、`user`、`app` 相关逻辑
- 编写平台自动化中的 JavaScript 逻辑
- 使用存储、问卷、事务、文件传输等平台能力
- 使用工作流、AI Agent、企业微信、PDF、Excel、加密签名、JDBC 存储过程等类型定义补充能力
- 编写会被自动化、API、控件、AI Agent 或定时任务调用的导出函数
- 保存、编辑、执行或绑定织信平台脚本文件

如果用户要写的是表达式、审批条件、流转条件、公式，改用 `informat-expression`。

## 工作方式

1. 先判断用户要的是完整脚本、函数片段，还是单个核心逻辑。
2. 确认所需能力是否存在于已知 Informat SDK 中。
3. 先检查是否存在来源冲突，例如命名空间、参数名、返回值类型不一致。
4. 如果函数会被自动化、API、控件、AI Agent 或定时任务调用，使用 `export function` 显式导出。
5. 输出前对代码做一次语法自检，至少检查括号与大括号是否配对、字符串与模板是否闭合、逗号与分号是否遗漏、`if/for/function/try-catch` 结构是否完整。
6. 不能完全实现时，明确指出缺失的 SDK 能力、来源冲突或未知字段，并说明哪个部分需要用户补齐。
7. 除非用户明确要求，不要先写长篇解释。

## 强约束

- 只允许使用两类能力：
  - JavaScript 原生能力
  - 来源资料中明确存在的 Informat SDK
- 不要杜撰对象、命名空间、方法、字段结构。
- 平台内置 API 统一通过全局 `informat` 调用，禁止写 `$informat`。
- 会被自动化、API、控件、AI Agent 或定时任务调用的函数必须使用 ES Module 导出，例如 `export function run() {}`。
- 禁止使用 CommonJS 的 `module.exports` 或 `exports` 导出平台可调用函数。
- 未导出的函数只能作为脚本内部私有方法，不允许作为平台绑定或执行入口。
- `informat.system.*` 与 `informat.company.*` 的相似方法必须按语义区分，不要混用。
- 当字段名、模块标识符、角色标识符来自业务现场而资料未给出时，用占位名，并明确提示用户替换。
- 如果一个需求依赖未文档化 API，直接说明“根据现有资料不能确认/不能实现”，不要臆测。
- 如果不同来源对同一 API 的返回值或签名描述不一致，不要依赖冲突部分的行为。
- 对写操作，若返回值存在来源冲突，优先写成“不依赖返回值”的安全版本，必要时通过后续查询确认结果。
- 当 `informat.system.*` 与 `informat.company.*` 或其他近似 API 都可能命中时，必须先按语义选择正确命名空间，再生成代码。
- `storage`、`survey`、`FtpClient`、`jdbc`、事务、工作流、AI Agent、企业微信、PDF、Excel、加密签名相关能力在生成前要回查原始签名。
- 输出代码时优先保证“合法、受约束、可改造”，不要为了看起来完整而添加虚构逻辑。

## 平台脚本保存、编辑与执行

当用户要求操作织信平台里的脚本文件，而不是只保存到本地 `generated_scripts/` 时，按下面规则处理：

1. 保存平台脚本前必须先确认脚本 SDK，并查询已有脚本列表。
2. 新增脚本时不传 `id`；编辑、修改、补充已有脚本时必须传真实 `id`。
3. 真实 `id` 只能来自平台脚本列表、脚本内容查询结果或本次对话中已获取的脚本 `id`，禁止自行捏造。
4. 编辑已有脚本时，`content` 必须传修改后的完整文件内容，不能只传 diff 或片段。
5. 若脚本放在目录下，`parentId` 必须来自脚本目录查询结果；新建目录后要重新查询脚本列表。
6. 单个平台脚本文件超过 300 行或 8000 字符时，必须主动拆分为多个脚本文件。
7. 设计器环境执行只用于调试未发布脚本；已发布运行环境只执行随应用发布的脚本版本。
8. 执行工具只能调用脚本中通过 `export` 导出的真实函数，不会创建临时脚本，也不会修改脚本内容。
9. API、定时任务、工具栏按钮等绑定脚本时，脚本 ID 必须是脚本文件 ID，不是目录 ID、文件名或函数名；函数名单独填写到平台对应的函数名字段。

## 来源冲突处理规则

当原始资料存在冲突时，按下面的保守规则处理：

1. 先确认 API 是否至少在一个权威来源中明确存在。
2. 如果多个来源都存在，但返回值不一致：
   - 不要依赖返回值
   - 以副作用调用 + 再查询验证作为优先写法
3. 如果多个来源都存在，但参数命名不一致：
   - 保留调用顺序
   - 在说明中指出“参数名以现场 SDK 为准”
4. 如果多个命名空间有相似方法：
   - `informat.system.*` 优先用于系统/跨团队语义
   - `informat.company.*` 优先用于当前团队上下文
   - 无法确定时，明确说明存在歧义，不要强行拍板

## 高风险场景

这些场景最容易写错，必须额外保守：

- `addCompanyMember`：至少存在两套命名空间和参数语义
- `updateUserRole`：来源中返回值有冲突，不能假设一定返回 `number` 或 `void`
- 任何写操作：不要假设“调用成功 = 数据一定已变更”，如需确认应补查询步骤
- 外部可调用脚本入口未 `export`：平台执行、API、自动化、控件、AI Agent 或定时任务将无法识别
- 使用 `$informat` 或 `module.exports`：与平台脚本运行和静态解析规则冲突
- 编辑已有平台脚本漏传真实 `id`：会重复创建同名或近似文件
- 把脚本文件名、目录 ID 当作脚本文件 ID：API、定时任务或按钮绑定会失败
- 存储、事务、FTP、问卷等边缘能力：如果只在类型定义里出现，要回查原始签名再写
- AI Agent、企业微信、PDF、Excel、加密签名、JDBC 存储过程、工作流版本切换：必须回查原始签名再写
- 自定义模块、字段、角色 key、部门 OID：资料未提供时一律用占位，并提示替换

## 输出格式

默认按这个顺序输出：

1. 最终代码
2. 语法自检结果
3. 必要的替换说明
4. 若存在来源冲突或不确定点，单独列出
5. 若有实现限制，单独列出限制点

如果用户明确要求“只给代码”，就只给代码，但仍然必须先完成语法自检再输出。

## 语法自检要求

最终输出前，至少完成以下检查：

- 括号 `() [] {}` 是否完整配对
- 字符串、模板字符串、注释是否正确闭合
- 逗号、分号、对象属性分隔是否明显缺失
- `if / else / for / while / function / try-catch` 结构是否完整
- 是否混入表达式 `${...}` DSL 或其他非 JavaScript 语法
- 占位符名称是否仍保持合法 JavaScript 标识形式
- 外部入口函数是否按平台要求使用 `export function`
- 是否误用了 `$informat`、`module.exports` 或 CommonJS `exports`

如果不是“只给代码”模式，建议显式补一句：

- `语法自检：已检查括号闭合、字符串闭合与控制流结构。`

## 本地保存交互

生成脚本后，默认要处理“是否保存到本地”的交互。

规则如下：

1. 如果用户一开始就明确表达了保存意图，例如：
   - 保存到本地
   - 写入文件
   - 落盘
   - 生成脚本文件
   - 帮我存起来
   - 确认后保存
   则不要再次询问，直接进入保存流程。
2. 如果用户没有明确表达保存意图，则在给出脚本后追加一句固定询问：
   - `是否需要我按本地目录规范保存到本地文件？`
3. 用户即使没有明确说“保存”，只要表达了确认保存的意思，也视为同意保存。
4. 保存后必须回显：
   - 实际保存路径
   - 文件名
   - 所属目录类别
5. 如果保存为本地文件且用户未要求纯代码无注释，优先给文件添加简短文件头注释。

## 本地保存规则

当需要保存脚本到本地时：

1. 默认根目录为当前工作目录下的 `generated_scripts/`
2. 一级目录按业务域归类：
   - `account`
   - `app`
   - `company`
   - `dept`
   - `user`
   - `storage`
   - `survey`
   - `transaction`
   - `other`
3. 二级目录按月份归类，格式为 `YYYY-MM`
4. 文件扩展名固定为 `.js`
5. 文件名使用小写下划线格式 `snake_case`
6. 文件名推荐模式：
   - `动作_对象.js`
   - `动作_对象_限定词.js`
7. 如果用户未指定文件名，按脚本语义自动生成文件名
8. 如果用户未指定目录类别，按脚本语义自动归类
9. 如果脚本无法稳定归入已有业务域，统一归入兜底目录 `other`
10. 如果保存为文件，优先使用 `references/script-file-header.md` 中的头部模板

示例路径：

- `generated_scripts/user/2026-03/update_user_role.js`
- `generated_scripts/company/2026-03/add_company_member.js`
- `generated_scripts/transaction/2026-03/update_user_role_with_transaction.js`

## 示例资产

当用户要求查看、引用或说明仓库里的脚本样例时，使用 `examples/generated_scripts/YYYY-MM/` 下的文件：

- 更新用户角色：`examples/generated_scripts/user/2026-03/update_user_role.js`
- 添加团队成员：`examples/generated_scripts/company/2026-03/add_company_member.js`
- 事务更新用户角色：`examples/generated_scripts/transaction/2026-03/update_user_role_with_transaction.js`
- 通用运行时辅助脚本：`examples/generated_scripts/other/2026-03/generate_runtime_helper.js`

如果日期或月份目录变化，先用当前仓库里的 `examples/generated_scripts/` 实际文件为准。

## 代码风格

- 默认输出 JavaScript
- 尽量给完整函数或完整脚本片段
- 变量命名贴近业务含义
- 需要提前校验空值时，直接在代码里处理
- 避免与需求无关的封装

## 自检清单

输出前检查：

- 是否只用了来源资料里存在的 SDK
- 是否把脚本和表达式语法混淆了
- 是否用全局 `informat` 调用平台 API，而不是 `$informat`
- 外部可调用函数是否使用 ES Module `export`
- 是否避免了 `module.exports` / `exports`
- 是否给出了用户真正能复制改造的代码
- 是否在不确定字段上加了替换提示
- 是否错误依赖了来源有冲突的方法返回值
- 是否在相似 API 之间选错了命名空间
- 是否在事务、JDBC、存储、问卷、FTP 等边缘能力上回查了原始签名
- 是否在 AI Agent、企业微信、PDF、Excel、加密签名、工作流版本切换等新增类型能力上回查了原始签名
- 是否已经完成代码语法自检
- 若是平台保存/编辑脚本，是否先查询脚本列表/内容并使用真实 `id`、`parentId`
- 若是平台执行脚本，是否区分设计器环境与已发布环境，并只执行已导出的真实函数
- 若脚本过长，是否按 300 行或 8000 字符阈值拆分
- 是否正确处理了“是否保存到本地”的交互
- 若需要保存，是否使用了正确的目录和文件命名规范
- 若无法稳定归类，是否正确放入 `other` 兜底目录
- 若需要保存为文件，是否合理添加了文件头注释或说明为何不添加
- 是否在无法实现时明确说明了原因
