# Informat 脚本本地输出管理规范

本文件定义生成脚本时的本地保存规则。

## 一、什么时候要询问保存

默认行为：

- 每次生成脚本后，都要询问用户是否需要按规范保存到本地文件

固定询问语句：

```text
是否需要我按本地目录规范保存到本地文件？
```

## 二、什么时候不用再问

如果用户在原始请求中已经明确表达了保存意图，则直接保存，不再追问。

不要求用户必须说“保存”两个字，只要表达的意思明确即可。

例如这些都视为已确认保存：

- “帮我写出来并存到本地”
- “生成脚本文件”
- “写完后落盘”
- “确认后就写到文件里”
- “这个脚本帮我放到本地目录”

## 三、目录规范

默认根目录：

```text
generated_scripts/
```

放置位置：

- 默认位于当前工作目录下

一级目录按业务域：

- `account`
- `app`
- `company`
- `dept`
- `user`
- `storage`
- `survey`
- `transaction`
- `misc`

二级目录按月份：

```text
YYYY-MM
```

例如：

```text
generated_scripts/user/2026-03/
generated_scripts/company/2026-03/
```

## 四、文件命名规范

脚本文件规则：

- 扩展名固定为 `.js`
- 文件名只能使用小写字母、数字、下划线
- 多个单词使用下划线连接

推荐命名模式：

- `动作_对象.js`
- `动作_对象_限定词.js`

示例：

- `update_user_role.js`
- `add_company_member.js`
- `query_users_by_dept.js`
- `update_user_role_with_transaction.js`

## 五、自动归类规则

如果用户没有指定目录类别，按主要语义归类：

- 账号相关：`account`
- 应用上下文、应用事件、环境变量：`app`
- 团队成员、团队角色：`company`
- 部门、组织架构：`dept`
- 应用成员、角色更新、权限：`user`
- 文件、下载、转换：`storage`
- 问卷：`survey`
- 事务、提交、回滚：`transaction`
- 难以明确归类：`misc`

## 六、保存后的回显要求

保存完成后，必须明确告诉用户：

1. 保存路径
2. 文件名
3. 自动归类结果

建议格式：

```text
已保存到：
generated_scripts/user/2026-03/update_user_role.js

归类目录：user
文件名：update_user_role.js
```

## 七、防错原则

- 不要在未确认用户意图的情况下默认写文件，除非用户已明确表达保存意图
- 不要使用随意文件名，例如 `script1.js`、`test.js`
- 不要把不同业务域的脚本都堆在同一个目录
- 如果语义存在歧义，先选最接近的业务域，并在回显中说明归类依据
