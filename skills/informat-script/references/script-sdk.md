# Informat 脚本 SDK 速查

本文件提炼脚本生成最常见的 API。若这里没有，再查 `../../sources/informat.script.md` 与类型定义。

注意：本文件是速查，不是冲突仲裁文档。遇到返回值、参数名或命名空间歧义时，同时查看 `script-safety.md` 与 `sources/` 原文。

## `informat.system`

账号与团队级操作：

- `getAccount(id)`
- `getAccountByUserName(userName)`
- `getAccountByMobileNo(mobileNo)`
- `getAccountByEmail(email)`
- `queryAccountList(query)`
- `queryAccountListCount(filter)`
- `addAccount(account)`
- `updateAccount(account)`
- `queryCompanyList(query)`
- `queryCompanyListCount(filter)`
- `addCompanyMember(companyId, accountId, departmentList, roleList)`
- `queryCompanyDeptList(companyId, query)`
- `getCompanyAllRoles(companyId)`
- `addOptLog(optLog)`

适合处理跨团队、账号级操作。

## `informat.app`

应用上下文与应用级能力：

- `abort(message, code?)`
- `appId()`
- `userId()`
- `weworkAccessToken()`
- `dingtalkAccessToken()`
- `feishuAccessToken()`
- `feishuTenantAccessToken()`
- `appEnvProp(id)`
- `pushEvent(event)`
- `addAppChangeLog(content)`

适合获取当前应用上下文、环境变量和终止脚本。

## `informat.company`

团队成员与角色：

- `queryRoleList()`
- `addCompanyMember(accountId, departmentList, roleList)`
- `deleteCompanyMember(accountId)`
- `updateCompanyMember(member)`
- `queryCompanyMemberList(query)`
- `queryCompanyMemberListCount(filter)`

注意：

- `informat.company.addCompanyMember(...)` 语义偏向当前团队上下文
- 与 `informat.system.addCompanyMember(...)` 不同，不要混用

## `informat.dept`

部门与组织架构：

- `queryDeptList(query)`
- `queryDeptListCount(filter)`
- `getDept(id)`
- `getParentOfDept(deptId)`
- `getChildrenOfDept(deptId)`
- `getDirectChildrenOfDept(deptId)`
- `addDept(dept)`
- `updateDept(dept)`
- `deleteDept(deptId)`

## `informat.user`

应用成员：

- `getUser(id)`
- `getUserInfo(id)`
- `getUserList(idList)`
- `getAppUserList()`
- `getUserByRoleList(roleList)`
- `getUserByDeptList(deptList)`
- `getSuperiorUsers(userId)`
- `getSubordinateUsers(userId)`
- `getLeaderOfDeptList(deptList)`
- `getUserRoleList()`
- `addUser(userId, roleList)`
- `updateUserRole(userId, roleList)`
- `deleteUser(userId)`

注意：

- `updateUserRole(...)` 的返回值在来源里存在冲突，生成代码时不要依赖其返回值

## 来源于类型定义的补充能力

在 `../../sources/informat.d.ts` 中可见一些补充接口定义，例如：

- `storage.*` 文件拷贝、删除、下载、转换、生成下载链接
- `survey.*` 问卷增删改查
- `FtpClient` FTP 文件传输
- 事务相关类型 `DefaultTransactionDefinition`、`TransactionStatus`

这些能力可以使用，但生成代码前要以原始类型定义中的方法签名为准。
