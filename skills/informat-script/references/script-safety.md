# Informat 脚本防错规则

本文件用于减少“看起来合理、实际容易写错”的代码。

## 一、先确认命名空间，再写代码

不要只因为方法名相似就直接调用。

高风险例子：

- `informat.system.addCompanyMember(companyId, accountId, departmentList, roleList)`
- `informat.company.addCompanyMember(accountId, departmentList, roleList)`

防错规则：

- 涉及明确 `companyId`、跨团队、系统级操作时，优先考虑 `informat.system.*`
- 涉及当前团队上下文时，优先考虑 `informat.company.*`
- 如果用户没有说清“当前团队”还是“指定团队”，要在输出说明里标出假设

## 二、来源冲突时，不要依赖冲突部分

已知冲突例子：

- `updateUserRole(userId, roleList)` 在一份来源中表现为 `void`，另一份为 `number`

防错规则：

- 不要写成依赖返回值的逻辑，例如：

```js
var updated = informat.user.updateUserRole(userId, roleList);
if (updated > 0) {
  // ...
}
```

- 更安全的写法是：

```js
informat.user.updateUserRole(userId, roleList);
var user = informat.user.getUser(userId);
```

如果确实需要确认变更结果，优先追加查询，而不是假设返回值类型。

## 三、写操作默认要做前置校验

在以下情况下，先校验再写：

- 用户 ID、账号 ID、部门 ID 为空
- 查询目标不存在
- 角色列表为空
- 部门列表为空但该 API 并未明确允许为空

优先用 `informat.app.abort(...)` 提前终止，而不是让脚本带着坏参数继续执行。

## 四、字段名和业务标识符默认不确定

默认不确定的内容：

- 模块标识符
- 字段 API 名
- 角色 key / roleId
- 部门 OID / 部门 ID
- 自动化 ID

正确做法：

- 使用占位名
- 在代码后加“请替换为实际字段/模块/角色标识符”

错误做法：

- 直接编造一个看起来像真的字段名

## 五、边缘能力要回查原始签名

以下能力不能只凭记忆生成：

- `storage.*`
- `survey.*`
- `FtpClient`
- 事务相关接口

特别注意事务接口可能存在多种调用形态：

- 简化形态：`commit()`、`rollback()`
- 带状态形态：`commit(status)`、`rollback(status)`

如果需求明确涉及事务开启、提交、回滚流程，必须回查原始签名后再生成，不要把两种写法混在一起。

当需求涉及这些能力时，应回查：

- `../../sources/informat.d.ts`
- `../../sources/informat.script.md`

## 六、推荐输出模式

当需求存在不确定性时，优先输出：

1. 保守可运行的主体代码
2. 明确的替换项
3. 明确的冲突/限制说明

目标不是“看起来最全”，而是“最不容易误导用户”。

## 七、查询与写入的安全偏好

生成脚本时，优先遵守：

- 查询类方法用于“确认前置条件”
- 写入类方法用于“执行变更”
- 如果需要判断写入是否成功，优先追加一次查询，而不是猜测返回值

典型流程：

1. 校验输入
2. 查询目标是否存在
3. 执行写操作
4. 需要时再查询确认
