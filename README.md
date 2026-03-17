# Informat Skills

面向织信 / Informat 低代码平台的技能仓库，当前提供两个可安装 skill：

- `informat-script`
  用于根据业务需求直接生成 Informat 平台脚本代码
- `informat-expression`
  用于生成合法的 Informat UEL 表达式、审批条件、流转条件和公式

## 仓库结构

```text
skills/
  informat-script/
  informat-expression/
sources/
  informat.script.md
  informat.expression.md
  informat.d.ts
  informat.client.d.ts
evals/
  evals.json
```

## 安装

远程安装：

```bash
npx skills add tielei60/informat-skills
```

本地验证：

```bash
npx --yes skills add ./informat-skills --list
```

## 设计原则

- 脚本与表达式分开建模，避免语法和规则互相污染
- 优先直接产出可用结果，而不是冗长讲解
- 限制模型只能使用文档中明确存在的 Informat SDK
- 正确性优先于“看起来完整”，来源冲突时采取保守写法
- 不能实现时必须明确说明原因，禁止杜撰 API

## 来源资料

仓库根目录下的 `sources/` 保留原始资料，用作事实来源：

- 脚本 SDK 文档
- 表达式 SDK 文档
- 服务端类型定义
- 客户端类型定义

各 skill 的 `references/` 是针对生成任务提炼过的高频规则与示例；遇到边缘能力时，应继续回到 `sources/` 查证。
